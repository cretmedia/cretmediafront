import { fetchAPI } from "../api";
import { getStrapiBaseUrl } from "@/lib/env";

const STRAPI_URL = getStrapiBaseUrl();

export interface ContactDetail {
  id: number;
  documentId: string;
  email?: string;
  phone?: string;
  location?: string;
  instagram?: string;
  LinkedIn?: string;
  Behance?: string;
  Youtube?: string;
  Dribble?: string;
}

export interface ContactSubject {
  id: number;
  documentId: string;
  Name: string;
}

export async function getContactDetail() {
  const data = await fetchAPI("/api/contact-detail");
  return data.data as ContactDetail;
}

export async function getContactSubjects() {
  const data = await fetchAPI("/api/contact-subjects");
  return data.data as ContactSubject[];
}

export async function createContactMessage(input: {
  name: string;
  email: string;
  subjectDocumentId?: string;
  message: string;
}) {
  const response = await fetch(`${STRAPI_URL.replace(/\/$/, "")}/api/contact-messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        name: input.name,
        email: input.email,
        Message: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: input.message,
              },
            ],
          },
        ],
        ...(input.subjectDocumentId
          ? { contact_subject: input.subjectDocumentId }
          : {}),
      },
    }),
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : {};

  if (!response.ok) {
    console.error("Contact message submit failed", {
      status: response.status,
      statusText: response.statusText,
      payload,
    });
    throw new Error(
      (payload as { error?: { message?: string } })?.error?.message ||
        "Failed to send message",
    );
  }

  return payload;
}
