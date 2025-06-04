import { Suspense } from "react";

function getExchangeRate() {
  const response = fetch(`http://localhost:8000/exchange/check`, {
    method: "GET",
    cache: "no-store",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(`HTTP error!: ${error}`);
    });

  return response;
}

export default function CurrencyChecker() {
  const exchangeRate = getExchangeRate();

  console.log(`Exchange rate: ${exchangeRate}`);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
        <h2 className="text-emerald-600 text-center text-2xl font-semibold mb-2">
          Exchange Rate
        </h2>
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              <span className="ml-2 text-gray-600">
                Checking exchange status...
              </span>
            </div>
          }
        >
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              {exchangeRate} PLN
            </div>
            <div className="text-gray-600">Current rate per 1 EUR</div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
