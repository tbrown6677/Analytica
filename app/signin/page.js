'use client'

import { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  async function handleSubmit() {
    await fetch('/api/auth/[...nextauth]', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Welcome to Analytica</h1>
        <p className="text-gray-400 text-center mb-8">Sign in with your email — no password needed.</p>
        {sent ? (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <p className="text-2xl mb-4">📧</p>
            <p className="text-white font-medium mb-2">Check your email!</p>
            <p className="text-gray-400 text-sm">We sent a magic link to {email}</p>
          </div>
        ) : (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-600 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-violet-500"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Send Magic Link
            </button>
          </div>
        )}
      </div>
    </main>
  )
}