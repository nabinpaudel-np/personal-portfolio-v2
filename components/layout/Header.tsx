"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blogs", label: "Content" },
];

export default function Header() {
  const pathname = usePathname() ?? "";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 border-b border-border-frame">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-label-md text-label-md tracking-widest uppercase text-on-surface hover:text-secondary transition-colors"
            >
              NABIN.
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-md text-label-md uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-on-surface font-semibold underline decoration-2 underline-offset-8"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4 lg:gap-6">
            <Link
              href="/services#inquiry-station"
              className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase px-5 py-2.5 border border-primary hover:bg-tertiary-fixed hover:text-primary hover:border-primary transition-none"
            >
              Let&apos;s Talk
            </Link>
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-border-frame bg-surface-container-low text-on-surface"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 z-40 bg-surface border-t border-border-frame overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <Container>
            <div className="flex items-center justify-between py-4 border-b border-border-frame">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                NAV · INDEX
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                {navLinks.length} SECTIONS
              </span>
            </div>
            <nav className="flex flex-col">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-5 border-b border-border-frame font-headline-sm text-headline-sm uppercase tracking-tight ${
                      isActive ? "text-primary" : "text-on-surface"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      arrow_forward
                    </span>
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/services#inquiry-station"
              onClick={() => setIsOpen(false)}
              className="mt-6 mb-8 inline-flex w-full items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase px-5 py-4 border border-primary"
            >
              Let&apos;s Talk
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
