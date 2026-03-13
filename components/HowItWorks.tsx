const steps = [
  { id: "01", title: "Create your chatbot", desc: "Give your bot a name and define its personality in seconds." },
  { id: "02", title: "Upload knowledge", desc: "Sync your documentation, website, or PDFs to train the AI." },
  { id: "03", title: "Embed & Launch", desc: "Copy-paste one line of code to start chatting with customers." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Set up in minutes</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="text-4xl md:text-5xl font-black text-slate-800/50 mb-4">{step.id}</div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            {i < 2 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-[2px] bg-slate-800"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}