export default function CTA() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="bg-blue-600 rounded-3xl py-10 px-6 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">Start Automating Your Support Today</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto relative">
          Join 500+ businesses saving hours every day with AI-powered customer service.
        </p>
        <button className="cursor-pointer bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all relative">
          Create Free Chatbot
        </button>
      </div>
    </section>
  );
}