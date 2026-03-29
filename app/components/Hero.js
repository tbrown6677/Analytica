export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-center px-4">
      <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
        AI-Powered Business Intelligence
      </p>
      <h1 className="text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
        Turn your data into decisions
      </h1>
      <p className="text-gray-400 text-xl max-w-xl mb-10">
        Analytica uses a team of AI agents to analyze your business data and generate clear, actionable reports — automatically.
      </p>
      <div className="flex gap-4">
        <a href="/signin">
          <button className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Get Started Free
          </button>
        </a>
        <a href="/analyze">
          <button className="border border-gray-700 hover:border-gray-500 text-gray-300 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            See How It Works
          </button>
        </a>
      </div>
    </section>
  )
}