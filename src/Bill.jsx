function Bill({ billAmount, onSetBillAmount }) {
  const handleOnChange = (e) => {
    onSetBillAmount(Number(e.target.value));
  };

  return (
    <div className="space-y-3">
      <label
        htmlFor="bill-amount"
        className="block text-sm font-semibold text-stone-700"
      >
        How much was the bill?
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-lg font-semibold text-stone-400">
          $
        </span>

        <input
          id="bill-amount"
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          value={billAmount === 0 ? "" : billAmount}
          onChange={handleOnChange}
          className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full rounded-xl border border-stone-200 bg-stone-50 py-4 pl-10 pr-4 text-lg font-semibold text-stone-900 outline-none transition placeholder:font-normal placeholder:text-stone-300 hover:border-stone-300 focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-600/10"
        />
      </div>

      <p className="text-xs text-stone-400">
        Enter the total amount before tip.
      </p>
    </div>
  );
}

export default Bill;
