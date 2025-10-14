export default function CounterControls({ onIncrement, onDecrement, onReset }) {
  const baseBtn =
    "inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600 hover:bg-blue-700";

  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <button aria-label="Decrease" onClick={onDecrement} className={baseBtn}>
        −
      </button>
      <button aria-label="Increase" onClick={onIncrement} className={baseBtn}>
        +
      </button>
      <button aria-label="Reset" onClick={onReset} className={baseBtn}>
        Reset
      </button>
    </div>
  )
}
