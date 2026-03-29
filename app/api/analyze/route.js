'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import FileUpload from '../components/FileUpload'

export default function Analyze() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [csvData, setCsvData] = useState('')

  async function handleSubmit() {
    setLoading(true)
    setAnswer('')

    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, csvData })
    })

    const data = await response.json()
    setAnswer(data.answer)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">Ask your data</h1>
        <p className="text-gray-400 mb-8">Upload a CSV and ask your AI agent anything about it.</p>
        <FileUpload onDataLoaded={setCsvData} />
        {csvData && (
          <p className="text-green-400 text-sm mt-3 mb-6">✓ Data loaded — ready to analyze</p>
        )}
        <textarea
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 mt-6 mb-4 h-32 resize-none focus:outline-none focus:border-violet-500"
          placeholder="e.g. What was my best selling product?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
        {answer && (
          <div className="mt-8 bg-gray-800 border border-gray-700 rounded-xl p-6">
            <p className="text-violet-400 text-sm font-medium mb-3">Agent Response</p>
            <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{answer}</p>
          </div>
        )}
      </div>
    </main>
  )
}