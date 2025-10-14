export default function CounterDisplay({ count }) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="bg-green-600 border-4 border-green-800 text-white rounded-2xl shadow-xl px-8 py-10 text-center">
        <div className="text-sm uppercase tracking-wider text-green-100/90 mb-2">Counter</div>
        <div className="font-extrabold leading-none text-6xl md:text-7xl drop-shadow-sm">
          {count}
        </div>
      </div>
    </div>
  )
}
