import { useState } from 'react'
import Header from './components/Header'
import CounterDisplay from './components/CounterDisplay'
import CounterControls from './components/CounterControls'
import Footer from './components/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount((c) => c + 1)
  const handleDecrement = () => setCount((c) => c - 1)
  const handleReset = () => setCount(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur rounded-3xl shadow-2xl p-8">
        <Header />
        <CounterDisplay count={count} />
        <CounterControls
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
        <Footer />
      </div>
    </div>
  )
}
