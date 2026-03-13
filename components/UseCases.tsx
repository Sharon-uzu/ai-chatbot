import { ShoppingCart, Globe, Briefcase } from "lucide-react";

const cases = [
  { icon: <ShoppingCart />, title: "Ecommerce Stores", desc: "Automate product inquiries and shipping status updates 24/7." },
  { icon: <Globe />, title: "SaaS Companies", desc: "Reduce support tickets by answering technical questions instantly." },
  { icon: <Briefcase />, title: "Service Businesses", desc: "Handle booking inquiries and pricing questions while you sleep." },
];

export default function UseCases() {
  return (
    <section className="bg-slate-900/30 py-24 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Built for every industry</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
              <div className="text-blue-500 mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}