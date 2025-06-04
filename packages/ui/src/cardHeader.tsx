export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-emerald-600 text-center text-2xl font-normal">
      {children}
    </h2>
  );
}
