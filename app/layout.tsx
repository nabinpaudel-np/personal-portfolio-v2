import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "@fontsource/righteous/400.css";
import "@fontsource/righteous/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nabin Paudel — Technical PM & Builder",
  description:
    "Technical Project Manager, Systems Architect, and Builder crafting institutional-grade software solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-primary">
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
