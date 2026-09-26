"use client";

import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "[ All Notes (24) ]" },
  { id: "pm", label: "Project Management (8)" },
  { id: "ventures", label: "Building & Ventures (6)" },
  { id: "ai", label: "AI & Modern Tech (5)" },
  { id: "career", label: "Career & Education (5)" },
];

export default function CategoryFilter({
  onChange,
}: {
  onChange?: (category: string) => void;
}) {
  const [active, setActive] = useState("all");

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="flex flex-wrap gap-2 pt-4">
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          onClick={() => handleClick(c.id)}
          className={`px-4 py-2 font-label-md text-label-md uppercase border transition-none ${
            active === c.id
              ? "bg-primary text-on-primary border-primary"
              : "bg-surface text-on-surface border-border-frame hover:bg-surface-container-high"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}