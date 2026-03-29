'use client'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-gray-950 border-b border-gray-800">
      <span className="text-white font-bold text-xl">Analytica</span>
      <a href="/signin">
        <button className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-lg text-sm transition-colors">
          Sign In
        </button>
      </a>
    </nav>
  )
}