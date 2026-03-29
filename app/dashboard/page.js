import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Navbar from '../components/Navbar'

export default async function Dashboard() {
  const cookieStore = await cookies()
  const email = cookieStore.get('user-email')

  if (!email) {
    redirect('/signin')
  }

  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
        <p className="text-gray-400 mb-12">Signed in as {email.value}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/analyze" className="bg-gray-800 border border-gray-700 hover:border-violet-500 rounded-xl p-8 transition-colors">
            <h2 className="text-white font-semibold text-xl mb-2">Analyze Data</h2>
            <p className="text-gray-400">Upload a CSV and ask your AI agent questions about your business.</p>
          </a>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 opacity-50">
            <h2 className="text-white font-semibold text-xl mb-2">Reports</h2>
            <p className="text-gray-400">Coming soon — export your insights as PDF reports.</p>
          </div>
        </div>
      </div>
    </main>
  )
}