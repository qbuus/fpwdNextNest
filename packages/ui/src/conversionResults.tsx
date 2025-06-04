export function ConversionResults({ PLNAmount }: { PLNAmount: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-lg font-medium mb-2">PLN</div>
      <div className="text-2xl font-bold">{PLNAmount.toFixed(2)}</div>
    </div>
  );
}
