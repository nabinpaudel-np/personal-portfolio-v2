import Link from "next/link";
import Container from "./Container";

const indexLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blogs", label: "Content" },
];

const channels = [
  { href: "https://www.linkedin.com/in/innabinpaudel/", label: "LinkedIn" },
  { href: "#", label: "GitHub" },
  { href: "https://instagram.com/nabin.tech", label: "Instagram" },
  { href: "#", label: "YouTube" },
  { href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-border-frame mt-space-2xl">
      <Container className="py-space-2xl">
        <div className="border-b border-border-frame pb-space-xl mb-space-xl">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-space-sm">
            OPERATING ETHOS
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface max-w-5xl tracking-tight leading-none">
            I build things. I lead people. I figure shit out.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 pb-space-xl border-b border-border-frame">
          <div className="md:col-span-4">
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface block mb-space-xs">
              Nabin Paudel
            </span>
            <p className="font-body-md text-body-md text-secondary max-w-sm">
              Technical Project Manager, Systems Architect, and Builder crafting
              institutional-grade software solutions.
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-space-sm">
              INDEX
            </p>
            <ul className="grid grid-cols-2 gap-y-3 font-label-md text-label-md uppercase">
              {indexLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    className="text-on-surface hover:bg-tertiary-fixed transition-none inline-block px-1"
                    href={l.href}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-space-sm">
              CHANNELS
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-label-md text-label-md uppercase">
              {channels.map((c) => (
                <li key={c.label}>
                  <Link
                    className="text-on-surface underline underline-offset-4 hover:bg-tertiary-fixed hover:text-primary transition-none"
                    href={c.href}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-label-sm text-label-sm uppercase tracking-wider text-secondary">
          <span>© 2026 Nabin Paudel · Built by Nabin. With a little help from AI.</span>
          <span>KATHMANDU / REMOTE · SYSTEM V2.4</span>
        </div>
      </Container>
    </footer>
  );
}
