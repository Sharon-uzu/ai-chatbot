import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <div className="space-y-24 pb-24">
        <Features />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}