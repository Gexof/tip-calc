function SelectPercentage({ label, percentage, onSetPercentage }) {
  const handleOnChange = (e) => {
    onSetPercentage(Number(e.target.value));
  };

  return (
    <div className="space-y-3">
      <label
        htmlFor={label}
        className="block text-sm font-semibold leading-5 text-stone-700"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={label}
          value={percentage}
          onChange={handleOnChange}
          className="w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 pr-11 text-sm font-medium text-stone-700 outline-none transition hover:border-stone-300 focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-600/10"
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default SelectPercentage;
