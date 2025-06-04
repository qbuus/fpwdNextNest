import CurrencyChecker from "./components/CurrencyChecker";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-[1280px]">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Euro to PLN Converter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get real-time exchange rates and convert your Euros to Polish Zloty
            instantly
          </p>
        </header>

        <main>
          <CurrencyChecker />
        </main>

        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; 2024 Currency Exchange App.</p>
        </footer>
      </div>
    </div>
  );
}
