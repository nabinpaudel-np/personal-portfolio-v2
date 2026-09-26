import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      {...props}
      className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface uppercase tracking-tight leading-none mb-space-md mt-space-xl"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="font-headline-md text-headline-sm md:text-headline-md text-on-surface uppercase tracking-tight leading-tight mb-space-sm mt-space-lg pt-space-sm border-t border-border-frame"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold mb-space-sm mt-space-md"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-md"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="font-body-md text-body-md text-on-surface list-disc pl-6 mb-space-md space-y-2 marker:text-primary"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="font-body-md text-body-md text-on-surface list-decimal pl-6 mb-space-md space-y-2 marker:text-primary marker:font-bold"
    />
  ),
  li: (props) => <li {...props} className="pl-1" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-primary bg-surface-container-low p-6 my-space-md font-body-lg text-body-lg text-on-surface italic"
    />
  ),
  hr: () => <hr className="border-border-frame my-space-xl" />,
  code: (props) => (
    <code
      {...props}
      className="font-mono text-sm bg-surface-container-low px-1.5 py-0.5 text-on-surface border border-border-frame"
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="bg-primary text-surface font-mono text-sm p-6 my-space-md overflow-x-auto border border-border-frame"
    />
  ),
  a: ({ href, children, ...rest }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    if (isInternal && href) {
      return (
        <Link
          href={href}
          className="text-primary underline underline-offset-4 hover:bg-tertiary-fixed hover:text-primary transition-none"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:bg-tertiary-fixed transition-none"
        {...rest}
      >
        {children}
      </a>
    );
  },
  table: (props) => (
    <div className="overflow-x-auto my-space-md border border-border-frame">
      <table
        {...props}
        className="w-full font-body-md text-body-md text-on-surface border-collapse"
      />
    </div>
  ),
  thead: (props) => (
    <thead {...props} className="bg-primary text-surface" />
  ),
  th: (props) => (
    <th
      {...props}
      className="font-label-md text-label-md uppercase tracking-wider text-left p-4 border-b border-border-frame"
    />
  ),
  td: (props) => (
    <td {...props} className="p-4 border-b border-border-frame align-top" />
  ),
  strong: (props) => <strong {...props} className="font-bold text-primary" />,
  em: (props) => <em {...props} className="italic" />,
};