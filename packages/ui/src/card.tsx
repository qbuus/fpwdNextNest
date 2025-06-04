import { type JSX } from "react";

export function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="p-2 flex flex-col gap-2 justify-center">{children}</div>
  );
}
