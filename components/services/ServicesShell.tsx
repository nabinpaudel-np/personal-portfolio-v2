"use client";

import { useState } from "react";
import EngagementModels from "./EngagementModels";
import ContactForm from "./ContactForm";

export default function ServicesShell() {
  const [intent, setIntent] = useState("");

  return (
    <>
      <EngagementModels onTrackSelect={(v) => setIntent(v)} />
      <ContactForm initialIntent={intent} />
    </>
  );
}