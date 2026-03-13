import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          New: GPT-4o Integration
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Build AI Chatbots That Answer <span className="text-blue-500">Instantly.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg">
          Upload your business knowledge and let AI handle customer support 24/7. No coding, no headaches.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all">
            Start Free Trial <ArrowRight size={20} />
          </button>
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all">
            <PlayCircle size={20} /> See Demo
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-slate-800/50 p-3 flex gap-2 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="p-6 h-[400px] flex flex-col justify-end">
             <div className="space-y-4">
                <div className="bg-slate-800 p-3 rounded-lg w-2/3 text-sm">How do I reset my password?</div>
                <div className="bg-blue-600 p-3 rounded-lg w-3/4 ml-auto text-sm">To reset your password, navigate to Settings &gt; Security and click {"Reset Password"}. A link will be sent to your email!</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}