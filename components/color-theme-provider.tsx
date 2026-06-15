"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ThemeMode = "present" | "api";

type ThemeVariableMap = Record<string, string>;

interface ApiThemePayload {
  Color_code1?: string;
  color_code2?: string;
  background_code?: string;
  Default?: boolean;
}

interface ColorThemeContextValue {
  apiThemeAvailable: boolean;
  isLoading: boolean;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ColorThemeContext = createContext<ColorThemeContextValue | null>(null);

const STORAGE_KEY = "creative-agency-theme-mode";
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";

const THEME_VARS = [
  "--bg-color",
  "--primary-color",
  "--secondary-color",
  "--background",
  "--foreground",
  "--card",
  "--card-foreground",
  "--popover",
  "--popover-foreground",
  "--primary",
  "--primary-foreground",
  "--secondary",
  "--secondary-foreground",
  "--muted",
  "--muted-foreground",
  "--accent",
  "--accent-foreground",
  "--border",
  "--input",
  "--ring",
  "--selection-bg",
  "--selection-foreground",
];

function normalizeHex(input?: string): string | null {
  if (!input) {
    return null;
  }

  const cleaned = input.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return null;
  }

  return `#${cleaned.toLowerCase()}`;
}

function hexToRgb(hex: string) {
  const normalized = normalizeHex(hex);

  if (!normalized) {
    return null;
  }

  const raw = normalized.slice(1);

  return {
    r: parseInt(raw.slice(0, 2), 16),
    g: parseInt(raw.slice(2, 4), 16),
    b: parseInt(raw.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b]
    .map((channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function hexToHslTriplet(hex: string): string {
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return "0 0% 0%";
  }

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));

    switch (max) {
      case r:
        h = ((g - b) / delta) % 6;
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      default:
        h = (r - g) / delta + 4;
        break;
    }

    h *= 60;

    if (h < 0) {
      h += 360;
    }
  }

  return `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function getReadableForeground(hex: string): string {
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return "#000000";
  }

  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.6 ? "#111111" : "#ffffff";
}

function mixHex(colorA: string, colorB: string, weight: number): string {
  const a = hexToRgb(colorA);
  const b = hexToRgb(colorB);

  if (!a || !b) {
    return colorA;
  }

  return rgbToHex(
    a.r + (b.r - a.r) * weight,
    a.g + (b.g - a.g) * weight,
    a.b + (b.b - a.b) * weight,
  );
}

function readThemeVariables(element: HTMLElement): ThemeVariableMap {
  const computed = getComputedStyle(element);

  return THEME_VARS.reduce<ThemeVariableMap>((accumulator, variableName) => {
    accumulator[variableName] = computed.getPropertyValue(variableName).trim();
    return accumulator;
  }, {});
}

function applyThemeVariables(element: HTMLElement, variables: ThemeVariableMap) {
  Object.entries(variables).forEach(([name, value]) => {
    element.style.setProperty(name, value);
  });
}

function buildApiThemeVariables(payload: ApiThemePayload, fallback: ThemeVariableMap): ThemeVariableMap | null {
  const backgroundHex = normalizeHex(payload.background_code);
  const primaryHex = normalizeHex(payload.Color_code1);
  const secondaryHex = normalizeHex(payload.color_code2);

  if (!backgroundHex || !primaryHex || !secondaryHex) {
    return null;
  }

  const foregroundHex = getReadableForeground(backgroundHex);
  const cardHex = mixHex(backgroundHex, secondaryHex, 0.08);
  const mutedHex = mixHex(backgroundHex, secondaryHex, 0.16);
  const borderHex = mixHex(backgroundHex, secondaryHex, 0.28);
  const mutedForegroundHex = mixHex(foregroundHex, backgroundHex, 0.35);

  return {
    ...fallback,
    "--bg-color": backgroundHex,
    "--primary-color": primaryHex,
    "--secondary-color": secondaryHex,
    "--background": hexToHslTriplet(backgroundHex),
    "--foreground": hexToHslTriplet(foregroundHex),
    "--card": hexToHslTriplet(cardHex),
    "--card-foreground": hexToHslTriplet(foregroundHex),
    "--popover": hexToHslTriplet(cardHex),
    "--popover-foreground": hexToHslTriplet(foregroundHex),
    "--primary": hexToHslTriplet(primaryHex),
    "--primary-foreground": hexToHslTriplet(getReadableForeground(primaryHex)),
    "--secondary": hexToHslTriplet(secondaryHex),
    "--secondary-foreground": hexToHslTriplet(getReadableForeground(secondaryHex)),
    "--muted": hexToHslTriplet(mutedHex),
    "--muted-foreground": hexToHslTriplet(mutedForegroundHex),
    "--accent": hexToHslTriplet(primaryHex),
    "--accent-foreground": hexToHslTriplet(getReadableForeground(primaryHex)),
    "--border": hexToHslTriplet(borderHex),
    "--input": hexToHslTriplet(borderHex),
    "--ring": hexToHslTriplet(primaryHex),
    "--selection-bg": primaryHex,
    "--selection-foreground": getReadableForeground(primaryHex),
  };
}

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const presentThemeRef = useRef<ThemeVariableMap | null>(null);
  const apiThemeRef = useRef<ThemeVariableMap | null>(null);
  const [mode, setModeState] = useState<ThemeMode>("present");
  const [apiThemeAvailable, setApiThemeAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const root = document.documentElement;

    async function initializeTheme() {
      presentThemeRef.current = readThemeVariables(root);
      root.classList.add("theme-ready");

      try {
        const response = await fetch(`${STRAPI_URL.replace(/\/$/, "")}/api/color-website`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Theme API failed with ${response.status}`);
        }

        const json = (await response.json()) as { data?: ApiThemePayload };
        const apiTheme = buildApiThemeVariables(json.data ?? {}, presentThemeRef.current);

        if (apiTheme) {
          apiThemeRef.current = apiTheme;
          setApiThemeAvailable(true);

          const storedMode = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
          const nextMode: ThemeMode =
            storedMode === "api" || storedMode === "present"
              ? storedMode
              : json.data?.Default
                ? "api"
                : "present";

          if (!mounted) {
            return;
          }

          applyThemeVariables(
            root,
            nextMode === "api" ? apiTheme : presentThemeRef.current,
          );
          setModeState(nextMode);
        } else if (presentThemeRef.current) {
          applyThemeVariables(root, presentThemeRef.current);
          setModeState("present");
        }
      } catch (error) {
        console.error("Error loading website theme:", error);

        if (presentThemeRef.current) {
          applyThemeVariables(root, presentThemeRef.current);
        }

        setModeState("present");
        setApiThemeAvailable(false);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    initializeTheme();

    return () => {
      mounted = false;
    };
  }, []);

  const setMode = (nextMode: ThemeMode) => {
    const root = document.documentElement;

    if (nextMode === "api" && !apiThemeRef.current) {
      return;
    }

    const themeVariables =
      nextMode === "api" ? apiThemeRef.current : presentThemeRef.current;

    if (!themeVariables) {
      return;
    }

    applyThemeVariables(root, themeVariables);
    setModeState(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);
  };

  const value = useMemo<ColorThemeContextValue>(
    () => ({
      apiThemeAvailable,
      isLoading,
      mode,
      setMode,
      toggleMode: () => setMode(mode === "api" ? "present" : "api"),
    }),
    [apiThemeAvailable, isLoading, mode],
  );

  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);

  if (!context) {
    throw new Error("useColorTheme must be used within ColorThemeProvider");
  }

  return context;
}
