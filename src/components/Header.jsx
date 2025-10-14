import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center gap-3 mb-6">
      <div className="inline-flex items-center gap-2 text-gray-800">
        <Rocket className="h-6 w-6 text-red-600" aria-hidden="true" />
        <h1 className="text-2xl font-bold tracking-tight">Vibe Counter</h1>
      </div>
    </header>
  )
}
