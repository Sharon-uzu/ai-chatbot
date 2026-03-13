export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center gap-1 mb-6 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <blockquote className="text-2xl font-medium mb-8 italic">
          “ChatFlow reduced our support email volume by 70% in the first month. Our customers love the instant responses, and my team can finally focus on building features.”
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700"></div>
          <div className="text-left">
            <p className="font-bold">Alex Rivera</p>
            <p className="text-slate-500 text-sm">Founder @ TechStream</p>
          </div>
        </div>
      </div>
    </section>
  );
}