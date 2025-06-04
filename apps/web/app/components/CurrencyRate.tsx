export default async function CurrencyRate() {
  const rate = await fetch(`http://localhost:8000/exchange/check`, {
    method: "GET",
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="flex flex-col text-center gap-1">
      <div className="text-2xl text-emerald-900">{rate} PLN</div>
      <div className="text-gray-600">Current rate per 1 EUR</div>
    </div>
  );
}
