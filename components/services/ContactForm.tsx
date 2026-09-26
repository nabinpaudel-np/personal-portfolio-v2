"use client";

import { useState, useRef } from "react";
import Container from "../layout/Container";

const CHIPS = [
  "I need a Project Manager",
  "Help leading my existing team",
  "I want a project built",
  "I need development help",
  "Marketing / growth help",
  "I want to discuss a role",
];

export default function ContactForm({
  initialIntent = "",
}: {
  initialIntent?: string;
}) {
  const [selected, setSelected] = useState<string[]>(
    initialIntent ? [initialIntent] : []
  );
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const toggle = (intent: string) => {
    setSelected((prev) =>
      prev.includes(intent) ? prev.filter((i) => i !== intent) : [...prev, intent]
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setSelected([]);
      formRef.current?.reset();
    }, 700);
  };

  return (
    <section className="w-full bg-surface-container-high py-space-2xl scroll-mt-24" id="inquiry-station">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-space-sm">
                <span className="w-2.5 h-2.5 bg-primary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  03 — CONTACT & TRIAGE
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight uppercase leading-none mb-space-md">
                Don't write me a perfect brief.
              </h2>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-space-lg">
                Tell me what's broken, what you're trying to build, or where you're stuck. We'll
                figure out the rest together.
              </p>
              <div className="bg-surface p-6 mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
                  TYPICAL INTAKE DISPATCH
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-normal">
                  Submissions are reviewed directly by Nabin Paudel. Response window is typically
                  within 24 hours Monday through Friday.
                </p>
              </div>
            </div>

            <div className="pt-space-md bg-surface-container p-6">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
                CHANNELS & DIRECT PRESENCE
              </span>
              <div className="flex flex-wrap gap-4 font-label-md text-label-md uppercase">
                <a
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-on-surface underline underline-offset-4 hover:bg-tertiary-fixed hover:text-primary transition-none px-1"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-on-surface underline underline-offset-4 hover:bg-tertiary-fixed hover:text-primary transition-none px-1"
                >
                  GitHub
                </a>
                <a
                  href="mailto:nabin@example.com"
                  className="text-on-surface underline underline-offset-4 hover:bg-tertiary-fixed hover:text-primary transition-none px-1"
                >
                  Email Direct
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="bg-surface p-8 lg:p-12"
            >
              <div className="mb-space-lg">
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-3">
                  1. What are you looking for? (Select one or more)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CHIPS.map((chip) => {
                    const isSelected = selected.includes(chip);
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => toggle(chip)}
                        className={`text-left font-label-sm text-label-sm uppercase tracking-wider px-3.5 py-3 flex items-center gap-2 transition-none ${
                          isSelected
                            ? "bg-surface-container-highest"
                            : "bg-surface-container hover:bg-surface-container-high"
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 inline-block ${
                            isSelected ? "bg-tertiary-fixed" : "bg-surface-container-highest"
                          }`}
                        ></span>
                        <span className="text-on-surface">{chip}</span>
                      </button>
                    );
                  })}
                </div>
                <input
                  name="service_intent"
                  type="hidden"
                  value={selected.join("; ")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-space-md">
                <div>
                  <label
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2"
                    htmlFor="contact-name"
                  >
                    2. Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container"
                  />
                </div>
                <div>
                  <label
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2"
                    htmlFor="contact-email"
                  >
                    3. Direct Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="maya@organization.com"
                    className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container"
                  />
                </div>
              </div>

              <div className="mb-space-lg">
                <label
                  className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2"
                  htmlFor="project-description"
                >
                  4. What's broken, what are you building, or where are you stuck? *
                </label>
                <textarea
                  id="project-description"
                  name="details"
                  required
                  rows={5}
                  placeholder="Tell me about current timelines, team composition, software stack, or key bottlenecks..."
                  className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container resize-y"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  CONFIDENTIALITY GUARANTEED · NO SPAM
                </span>
                <button
                  disabled={submitting}
                  className={`inline-flex items-center justify-center gap-3 bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 hover:bg-tertiary-fixed hover:text-primary transition-none ${
                    submitting ? "opacity-50" : ""
                  }`}
                  type="submit"
                >
                  <span>{sent ? "Sent • Thank you" : submitting ? "Transmitting..." : "Send It"}</span>
                  {!sent && (
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  )}
                </button>
              </div>

              {sent && (
                <div className="mt-6 p-4 bg-tertiary-fixed text-primary">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    <p className="font-label-md text-label-md uppercase tracking-wider font-bold">
                      Inquiry logged. I will review and get back to you shortly.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}