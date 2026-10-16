import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Compass, 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: "Neural Interface OS",
      category: "Full Stack & AI",
      description: "Next-gen dashboard powered by real-time LLM inference and WebGL visualizations.",
      tech: ["React", "Three.js", "Python", "Tailwind"]
    },
    {
      title: "Quantum Cipher",
      category: "Security & Cloud",
      description: "Decentralized end-to-end encrypted messaging protocol with zero-knowledge proofs.",
      tech: ["TypeScript", "Rust", "WebSockets"]
    },
    {
      title: "Aura Spatial Audio",
      category: "Interactive 3D",
      description: "Immersive web-based 3D soundscape generator using spatial audio APIs.",
      tech: ["Next.js", "Web Audio API", "Three.js"]
    }
  ];

  const chips = [
    { label: "Systems Architecture", icon: Cpu },
    { label: "Immersive UI/UX", icon: Layers },
    { label: "AI & Neural Nets", icon: Sparkles },
    { label: "High Performance", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050508]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold tracking-wider text-lg bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              PORTFOLIO.SYS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#specs" className="hover:text-cyan-400 transition-colors">Capabilities</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2 group"
            >
              <span>Initialize</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#08080c] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 py-2">Overview</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 py-2">Projects</a>
            <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 py-2">Capabilities</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 py-2">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header id="overview" className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium uppercase tracking-widest mb-8 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Digital Experience</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-8">
          Building <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Immersive</span> & High-Performance Web Systems.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-light">
          Engineering futuristic interfaces, interactive 3D web environments, and scalable full-stack applications with extreme precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm tracking-wider uppercase transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-sm tracking-wider uppercase transition-all flex items-center justify-center"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* TECH CHIPS SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {chips.map((chip, idx) => {
            const IconComponent = chip.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all group flex flex-col items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm tracking-wide text-gray-200">{chip.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS SECTION (8 Minimal Cards Layout) */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Featured Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Selected Works & Case Studies</h2>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            {['all', 'full-stack', '3d'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {proj.category}
                  </span>
                  <Globe className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{proj.title}</h3>
                <p className="text-sm text-gray-400 font-light mb-6">{proj.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  <span>View Project</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Fill out to 8 minimalist cards */}
          {[1, 2, 3, 4].map((n) => (
            <div 
              key={`dummy-${n}`}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group opacity-70 hover:opacity-100"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    System Core 0{n}
                  </span>
                  <Compass className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Automated Node 0{n}</h3>
                <p className="text-sm text-gray-500 font-light mb-6">High throughput decentralized computing and modular pipeline infrastructure.</p>
              </div>

              <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-purple-500 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                <span>Access Node</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES / SPECS SECTION */}
      <section id="specs" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Engineering Standards</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-6">Optimized for Speed & Scale</h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
              Every system is built with rigorous attention to performance budgets, accessibility standards, and fluid motion design. We ensure sub-second load times and seamless interactions across all viewport sizes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Zero-latency 60+ FPS scroll animations & particle rendering</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Clean, modular component architecture & robust type safety</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="font-mono text-xs text-cyan-400 mb-4">// SYSTEM STATUS</div>
            <div className="space-y-3 font-mono text-sm text-gray-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-500">Core Status:</span>
                <span className="text-emerald-400">ONLINE [99.98%]</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-500">Latency:</span>
                <span className="text-cyan-400">14ms</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-500">Security Protocol:</span>
                <span>TLS 1.3 / Quantum-Ready</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Environment:</span>
                <span>Production / Global CDN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative z-10 border-t border-white/10 bg-[#030305] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-black font-bold">P</div>
              <span className="font-bold tracking-wider text-sm">PORTFOLIO.SYS</span>
            </div>
            <p className="text-xs text-gray-500">Designed for maximum immersion & high performance.</p>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  );
}
