"use client";

import { Card } from "@repo/ui/card";
import { CardHeader } from "@repo/ui/cardHeader";
import ExchangeForm from "./ExchangeForm";
import { useTransition, useState } from "react";
import { submitCurrencyConversion } from "../actions";

export default function Exchange() {
  const [isPending, startTransition] = useTransition();
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const newAmount = await submitCurrencyConversion(formData);
        setConvertedAmount(newAmount);
      } catch (error) {
        console.error("Conversion failed:", error);
      }
    });
  }

  return (
    <Card>
      <CardHeader>Convert Your Currency</CardHeader>
      <div>
        <ExchangeForm onSubmit={handleSubmit} isPending={isPending} />
        {isPending && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
        )}
        {convertedAmount && (
          <div className="flex flex-row items-center mt-6 gap-2">
            <div className="text-xl">PLN</div>
            <div className="text-2xl">{convertedAmount.toFixed(2)}</div>
          </div>
        )}
      </div>
    </Card>
  );
}
