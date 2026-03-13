import { Bot, Database, MessageSquare, BarChart3, Code2, Zap } from "lucide-react";

const features = [
  { icon: <Bot />, title: "AI Responses", desc: "Powered by the latest LLMs for human-like interaction." },
  { icon: <Database />, title: "Custom Training", desc: "Train your bot on PDFs, URLs, or plain text data." },
  { icon: <MessageSquare />, title: "Chat Widget", desc: "Embed a beautiful bubble on any website with one line of code." },
  { icon: <BarChart3 />, title: "Analytics", desc: "Track satisfaction rates and common user questions." },
  { icon: <Zap />, title: "Instant Setup", desc: "Go live in under 5 minutes. No complex configuration." },
  { icon: <Code2 />, title: "No Coding", desc: "Designed for marketing and support teams, not just devs." },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6" id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Everything you need to automate support</h2>
        <p className="text-slate-400">Scale your communication without increasing your headcount.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}