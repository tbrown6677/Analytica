const features = [
  {
    title: "AI Agent Team",
    description: "A crew of specialized agents work together — one analyzes, one fetches data, one writes the report.",
  },
  {
    title: "Transparent Reasoning",
    description: "See exactly which agent did what and why. No black boxes — full visibility into every decision.",
  },
  {
    title: "Custom Agents",
    description: "Build your own agents tailored to your business. A restaurant owner thinks differently than a freelancer.",
  },
]

export default function Features() {
  return (
    <section className="bg-gray-900 py-24 px-8">
      <h2 className="text-3xl font-bold text-white text-center mb-16">
        Why Analytica?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-white font-semibold text-xl mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}