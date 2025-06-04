"use server";

export async function submitCurrencyConversion(
  formData: FormData
): Promise<number> {
  const amountInEur = formData.get("amountInEur");

  if (!amountInEur || isNaN(Number(amountInEur))) {
    throw new Error("Please enter a valid amount");
  }

  const response = await fetch("http://localhost:8000/exchange", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amountInEur: Number(amountInEur) }),
  });

  if (!response.ok) {
    throw new Error("Failed to convert currency");
  }

  const newAmount = await response.json();
  return newAmount;
}
