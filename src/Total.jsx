function Total({ billAmount, tip }) {
  const total = billAmount + tip;

  return (
    <div className="rounded-2xl bg-emerald-50 p-5 sm:p-6">
      <p className="text-sm font-medium text-emerald-800">Total amount</p>

      <p className="mt-2 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
        ${total.toFixed(2)}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-emerald-200/70 pt-4 text-sm">
        <span className="text-stone-600">Bill amount</span>
        <span className="font-semibold text-stone-800">
          ${billAmount.toFixed(2)}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-stone-600">Tip amount</span>
        <span className="font-semibold text-emerald-700">
          ${tip.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default Total;
