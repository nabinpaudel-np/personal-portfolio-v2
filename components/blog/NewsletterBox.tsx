"use client";

import { useState } from "react";
import Container from "../layout/Container";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full">
      <Container className="py-16 lg:py-24">
        <div className="border-2 border-primary bg-surface p-8 md:p-14 lg:p-16 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-10 pointer-events-none select-none opacity-5 font-headline-lg text-[180px] text-primary uppercase font-black leading-none">
            DISPATCH
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 bg-tertiary-fixed border border-primary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                  MONTHLY SYNCHRONIZATION // DIRECT PROTOCOL
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight leading-none mb-4">
                The No-Bullshit Dispatch
              </h2>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-xl">
                Once a month. Practical frameworks on technical project management, builder
                operations, and tech execution. Zero marketing fluff. Unsubscribe anytime.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-3.5 bg-surface border border-border-frame focus:border-primary text-on-surface font-body-md text-body-md placeholder:text-secondary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary text-on-primary font-label-md text-label-md uppercase hover:bg-tertiary-fixed hover:text-primary transition-none"
                >
                  <span>SUBSCRIBE [→]</span>
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </button>
                <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm uppercase pt-1 px-1">
                  <span>CADENCE: 1× PER MONTH</span>
                  <span>DATA: STRICT PRIVACY</span>
                </div>
              </form>
              {sent && (
                <div className="p-4 mt-3 bg-tertiary-fixed border border-primary font-label-sm text-label-sm uppercase text-primary font-bold">
                  [ ACKNOWLEDGED: YOU ARE SIGNED UP FOR THE NEXT DISPATCH ]
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}