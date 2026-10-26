function Button({ onReset }) {
  return (
    <button
      type="button"
      onClick={onReset}
      className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-red-500/10 active:scale-[0.99]"
    >
      Reset
    </button>
  );
}

export default Button;
