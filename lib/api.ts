const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    cache: "no-store", // disable cache during development
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}

// export async function fetchAPI(endpoint: string) {
//   const res = await fetch(`${BASE_URL}${endpoint}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("API Error");
//   }

//   return res.json();
// }

// lib/api.ts


// lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

export async function getServiceTypes() {
  try {
    const response = await fetch(
      `${API_URL}/service-types?populate=image&populate=service&populate=categories_layout`,
      {
        next: { revalidate: 60 },
      }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch service types");
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching service types:", error);
    return [];
  }
}

export async function getServiceTypeByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      `${API_URL}/service-types/${documentId}?populate=image&populate=service&populate=categories_layout`,
      {
        next: { revalidate: 60 },
      }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch service type");
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching service type:", error);
    return null;
  }
}