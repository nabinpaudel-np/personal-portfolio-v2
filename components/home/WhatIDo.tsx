"use client";

import { useEffect, useRef } from "react";
import Container from "../layout/Container";
import Kicker from "../ui/Kicker";

const BLOCKS = [
  {
    id: "01 — LEAD",
    sub: "CORE SPECIALIZATION",
    title: "Technical Project & Product Management",
    body: "I can step into a messy, opaque project, diagnose blockers, establish structural clarity, align stakeholders, and get engineers shipping on cadence.",
    deliverables: "DELIVERABLES / RUNTIME",
    tags: ["Scope & Roadmap", "Agile Cadence", "Stakeholder Comms", "QA & Delivery"],
  },
  {
    id: "02 — BUILD",
    sub: "ENGINEERING LITERACY",
    title: "Technology & AI Acceleration",
    body: "I code. I understand how modern software is architected. I don't pretend to be a full-time senior engineer, but I speak the technical syntax, build with AI multipliers, and audit PRs.",
    deliverables: "TECHNICAL STACK",
    tags: ["Fullstack Architecture", "AI Toolchains", "Rapid Prototyping", "API Integrations"],
  },
  {
    id: "03 — GROW",
    sub: "BUSINESS LOGIC",
    title: "Business & Growth Operations",
    body: "I've worked on the other side of the screen too — managing customer acquisition, CAC/LTV math, paid marketing channels, and commercial go-to-market operations.",
    deliverables: "OPERATION FOCUS",
    tags: ["Paid Media (Meta/Google)", "GTM Funnels", "Unit Economics", "Process Engineering"],
  },
  {
    id: "04 — TEACH",
    sub: "TALENT PIPELINE",
    title: "People & Education",
    body: "I've designed and run internship programs, taught Project Management cohorts, and bridged the gap between raw student potential and day-one production readiness.",
    deliverables: "PROGRAM SCOPE",
    tags: ["Cohort Instruction", "Mentorship", "Curriculum Design", "SOP Playbooks"],
  },
];

export default function WhatIDo() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stickyOffset = 80;
      const fadeDistance = 400;

      cardRefs.current.forEach((el, i) => {
        if (!el || i >= cardRefs.current.length - 1) return;
        const nextCard = cardRefs.current[i + 1];
        if (!nextCard) return;
        const nextCardTop = nextCard.getBoundingClientRect().top + scrollY;
        const fadeStart = nextCardTop - stickyOffset - fadeDistance;
        const progress = Math.max(0, Math.min(1, (scrollY - fadeStart) / fadeDistance));
        el.style.opacity = String(1 - progress);
        const overlay = overlayRefs.current[i];
        if (overlay) {
          overlay.style.opacity = String(progress * 0.35);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="w-full border-b border-border-frame">
      <Container className="py-space-2xl">
        <div className="max-w-3xl mb-space-2xl">
          <Kicker className="block mb-space-xs">CAPABILITIES & SCOPE</Kicker>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface uppercase tracking-tight leading-none mb-space-sm">
            I&apos;m not just a project manager.
          </h2>
          <p className="font-body-lg text-body-lg text-secondary">
            Project management is the core engine. But years inside software architectures,
            business building, growth funnels, and team operations have made me useful far
            beyond a status updater.
          </p>
        </div>

        <div className="relative">
          {BLOCKS.map((b, i) => (
            <div
              key={b.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="sticky top-20 transition-opacity duration-300 ease-out"
              style={{ zIndex: i + 1 }}
            >
              <div className="relative border border-border-frame p-8 lg:p-10 bg-surface flex flex-col justify-between mb-space-lg overflow-hidden">
                <div
                  ref={(el) => {
                    overlayRefs.current[i] = el;
                  }}
                  className="absolute inset-0 bg-on-surface pointer-events-none transition-opacity duration-300 ease-out"
                  style={{ opacity: 0 }}
                />
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border-frame mb-6">
                    <span className="font-label-md text-label-md uppercase tracking-widest bg-primary text-surface px-2 py-0.5">
                      {b.id}
                    </span>
                    <span className="font-label-sm text-label-sm uppercase text-secondary">{b.sub}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface uppercase mb-4 tracking-tight">
                    {b.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">{b.body}</p>
                </div>
                <div className="pt-6 border-t border-border-frame">
                  <div className="font-label-sm text-label-sm uppercase text-secondary mb-2 tracking-widest">
                    {b.deliverables}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {b.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-border-frame bg-surface-container-low px-2.5 py-1 font-label-sm text-label-sm uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}