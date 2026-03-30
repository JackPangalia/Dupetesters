"use client";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen pt-[calc(var(--announcement-h)+7.25rem)] md:pt-[calc(var(--announcement-h)+3.5rem)]">
      {children}
    </main>
  );
}
