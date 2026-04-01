"use client";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen pt-[calc(var(--announcement-h)+var(--nav-h))]">
      {children}
    </main>
  );
}
