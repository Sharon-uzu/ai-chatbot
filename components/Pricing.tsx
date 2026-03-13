const tiers = [
  { name: "Starter", price: "$19", features: ["1 Chatbot", "1,000 Messages/mo", "Basic Analytics", "Email Support"] },
  { name: "Growth", price: "$49", features: ["5 Chatbots", "5,000 Messages/mo", "Custom Branding", "Priority Support"], popular: true },
  { name: "Pro", price: "$99", features: ["Unlimited Chatbots", "Unlimited Messages", "API Access", "Account Manager"] },
];

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-400">Choose the plan that fits your business stage.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div key={i} className={`p-10 rounded-3xl border ${tier.popular ? 'border-blue-500 bg-slate-900 shadow-blue-500/10 shadow-xl' : 'border-slate-800 bg-slate-900/30'} flex flex-col`}>
            <h3 className="text-lg font-medium text-slate-400 mb-4">{tier.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl md:text-5xl font-bold">{tier.price}</span>
              <span className="text-slate-400">/month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-slate-300">
              {tier.features.map((feat, j) => (
                <li key={j} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {feat}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}