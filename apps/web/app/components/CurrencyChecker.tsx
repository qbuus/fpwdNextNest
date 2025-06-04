import { Suspense } from "react";
import { CardHeader } from "@repo/ui/cardHeader";
import { Card } from "@repo/ui/card";

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
    <Card>
      <CardHeader>Exchange Rate</CardHeader>
      <div>
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
          <div className="flex flex-col text-center gap-2">
            <div className="text-2xl font-semibold text-emerald-600">
              {exchangeRate} PLN
            </div>
            <div className="text-gray-600">Current rate per 1 EUR</div>
          </div>
        </Suspense>
      </div>
    </Card>
  );
}
