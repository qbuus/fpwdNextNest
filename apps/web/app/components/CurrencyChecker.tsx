import { Suspense } from "react";
import { CardHeader } from "@repo/ui/cardHeader";
import { Card } from "@repo/ui/card";
import CurrencyRate from "./CurrencyRate";

export default function CurrencyChecker() {
  return (
    <Card>
      <CardHeader>Exchange Rate</CardHeader>
      <div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              <span className="ml-2 text-gray-600">
                Checking exchange status...
              </span>
            </div>
          }
        >
          <CurrencyRate />
        </Suspense>
      </div>
    </Card>
  );
}
