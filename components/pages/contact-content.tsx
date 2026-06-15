"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/section-header";
import { FadeUp, HoverLift, motion } from "@/components/motion";
import {
  createContactMessage,
  getContactDetail,
  getContactSubjects,
  type ContactDetail,
  type ContactSubject,
} from "@/lib/services/contact";

const socialLabelMap = [
  { label: "Instagram", key: "instagram" },
  { label: "LinkedIn", key: "LinkedIn" },
  { label: "Behance", key: "Behance" },
  { label: "Dribbble", key: "Dribble" },
  { label: "YouTube", key: "Youtube" },
] as const;

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isHuman, setIsHuman] = useState(false);
  const [contactDetail, setContactDetail] = useState<ContactDetail | null>(null);
  const [subjects, setSubjects] = useState<ContactSubject[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    async function loadContactData() {
      try {
        const [detailData, subjectData] = await Promise.all([
          getContactDetail(),
          getContactSubjects(),
        ]);

        setContactDetail(detailData);
        setSubjects(subjectData);
      } catch (error) {
        console.error("Contact page fetch error:", error);
      }
    }

    loadContactData();
  }, []);

  const socialLinks = useMemo(
    () =>
      socialLabelMap
        .map(({ label, key }) => ({
          label,
          href: contactDetail?.[key],
        }))
        .filter(
          (item): item is { label: (typeof socialLabelMap)[number]["label"]; href: string } =>
            typeof item.href === "string" && item.href.length > 0,
        ),
    [contactDetail],
  );

  const messageWordCount = useMemo(() => {
    return formData.message.trim()
      ? formData.message.trim().split(/\s+/).length
      : 0;
  }, [formData.message]);

  const isMessageTooLong = messageWordCount > 1500;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isMessageTooLong) {
      setSubmitStatus({
        type: "error",
        message: "Message must be 1500 words or fewer.",
      });
      return;
    }

    if (!isHuman) {
      setSubmitStatus({
        type: "error",
        message: 'Please confirm "I am not a robot" before sending.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await createContactMessage({
        name: formData.name,
        email: formData.email,
        subjectDocumentId: formData.subject || undefined,
        message: formData.message,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsHuman(false);
      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Let's"
        highlight="Connect"
        subtitle="Ready to elevate your brand? Get in touch and let's create something amazing together."
      />

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <FadeUp className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      {subjects.map((subject) => (
                        <option key={subject.documentId} value={subject.documentId}>
                          {subject.Name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-colors resize-none ${
                        isMessageTooLong
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-border focus:border-primary focus:ring-primary"
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                      <span
                        className={
                          isMessageTooLong
                            ? "text-destructive"
                            : "text-muted-foreground"
                        }
                      >
                        Maximum 1500 words
                      </span>
                      <span
                        className={
                          isMessageTooLong
                            ? "font-medium text-destructive"
                            : "text-muted-foreground"
                        }
                      >
                        {messageWordCount}/1500 words
                      </span>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground">
                    <input
                      type="checkbox"
                      checked={isHuman}
                      onChange={(e) => {
                        setIsHuman(e.target.checked);
                        if (submitStatus) {
                          setSubmitStatus(null);
                        }
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-border accent-[hsl(var(--primary))]"
                    />
                    <span>I am not a robot</span>
                  </label>

                  {submitStatus && (
                    <p
                      className={`text-sm ${
                        submitStatus.type === "success"
                          ? "text-primary"
                          : "text-destructive"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={isSubmitting || isMessageTooLong || !isHuman}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 self-start disabled:opacity-70"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </FadeUp>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                    Get in touch
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-2.5 text-primary flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Email
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contactDetail?.email || "Not available"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-2.5 text-primary flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Phone
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contactDetail?.phone || "Not available"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-2.5 text-primary flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Location
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contactDetail?.location || "Not available"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <HoverLift>
                  <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
                    <p className="font-heading text-lg font-semibold text-foreground mb-2">
                      Prefer a quick call?
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Reach us directly on the number above
                    </p>
                    <motion.a
                      href={contactDetail?.phone ? `tel:${contactDetail.phone}` : "#"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      {contactDetail?.phone ? "Call Now" : "Schedule Call"}
                    </motion.a>
                  </div>
                </HoverLift>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
