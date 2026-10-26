import { useState } from "react";

import Bill from "./Bill";
import SelectPercentage from "./SelectPercentage";
import Total from "./Total";
import Button from "./Button";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = billAmount * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    setBillAmount(0);
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-4 py-10 text-stone-800 sm:px-6">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-xl shadow-stone-900/5">
        {/* Header */}
        <header className="border-b border-stone-100 px-6 py-7 sm:px-8">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
            $
          </div>

          <h1 className="text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            Tip Calculator
          </h1>

          <p className="mt-2 text-sm leading-6 text-stone-500">
            Calculate a fair tip based on your dining experience.
          </p>
        </header>

        {/* Calculator Form */}
        <div className="space-y-7 px-6 py-7 sm:px-8">
          <Bill billAmount={billAmount} onSetBillAmount={setBillAmount} />

          <div className="space-y-6">
            <SelectPercentage
              label="How did you like the service?"
              percentage={percentage1}
              onSetPercentage={setPercentage1}
            />

            <SelectPercentage
              label="How did your friend like the service?"
              percentage={percentage2}
              onSetPercentage={setPercentage2}
            />
          </div>

          <div className="border-t border-stone-100 pt-6">
            <Total billAmount={billAmount} tip={tip} />
          </div>

          <Button onReset={handleReset} />
        </div>
      </div>
    </main>
  );
}

export default App;
