"use client";

import { useState } from "react";
import { Bot, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#3b82f6] bg-gradient-to-br from-[#6ee7b7] to-[#3b82f6] p-1.5 rounded-lg">
            <Bot size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#f1f5f9]">Smart<span className="text-[#3b82f6]">FlowAI</span></span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#c9d1d9] text-white "
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href='/login'><button className="cursor-pointer bg-blue-600 bg-gradient-to-br from-[#6ee7b7] to-[#3b82f6] hidden sm:block text-sm font-medium hover:text-blue-400 transition-colors px-3 py-2 rounded-xl">
            Log in
          </button>
          </Link>
          <Link href='/register'><button className="hidden xs:block bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">
            Get Started
          </button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 p-6 space-y-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 text-lg font-medium text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#c9d1d9] text-white"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-800" />
            <Link href='/login'><button className="text-left hover:text-white transition-colors">
              Log in
            </button>
            </Link>
            <Link href='/register'><button className="bg-blue-600 bg-gradient-to-br from-[#6ee7b7] to-[#3b82f6] hover:bg-blue-700 w-full py-4 rounded-xl text-white font-semibold transition-all">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}