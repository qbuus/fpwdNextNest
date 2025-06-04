import { FormInput } from "@repo/ui/formInput";

export default function ExchangeForm({
  onSubmit,
  isPending,
}: {
  onSubmit: (data: FormData) => void;
  isPending: boolean;
}) {
  return (
    <form action={onSubmit} className="flex flex-col gap-2">
      <label htmlFor="amountInEur" className="text-lg font-semibold">
        Amount in EUR
      </label>

      <FormInput
        id="amountInEur"
        name="amountInEur"
        type="number"
        min={1}
        max={1000000}
        required
        placeholder="€"
        step={0.01}
      />
      <p className="text-sm text-gray-500">
        Enter the amount you want to convert (max: €1,000,000)
      </p>
      <button
        disabled={isPending}
        type="submit"
        className="text-white cursor-pointer w-full h-12 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 rounded-md"
      >
        Convert To PLN
      </button>
    </form>
  );
}
