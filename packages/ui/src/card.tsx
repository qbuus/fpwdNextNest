import { type JSX } from "react";

export function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="bg-white/70 backdrop-blur-sm border-0 shadow-xl flex flex-col gap-10 p-2">
      {children}
    </div>
  );
}
