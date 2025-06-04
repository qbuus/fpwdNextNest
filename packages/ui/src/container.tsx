export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl flex flex-col gap-6 justify-center mx-auto">
      {children}
    </div>
  );
}
