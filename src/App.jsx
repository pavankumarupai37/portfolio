import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Terminal, 
  ArrowRight, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Globe, 
  ChevronRight, 
  Sparkles, 
  Code2, 
  Smartphone,
  CheckCircle2,
  Share2,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('insights');

  // Posts written in first-person ("I", "My") based on your LinkedIn topics
  const techPosts = [
    {
      id: "rn-workers",
      title: "Multithreading in React Native with Web Workers",
      tag: "Mobile Architecture & Performance",
      summary: "How I offload heavy computational tasks off the JavaScript thread to achieve a silky smooth 60 FPS user experience.",
      content: `When building high-performance React Native applications, the single-threaded JavaScript bridge often becomes a major bottleneck for heavy computations like image processing, complex JSON parsing, or cryptography.

In my recent engineering deep dive, I implemented and benchmarked React Native Workers. By moving heavy data manipulation to a background thread, I prevented UI frame drops and ensured that gestures, animations, and user interactions remain completely fluid. 

Key Takeaways from My Benchmark:
• Kept the JS Main Thread completely free for UI interactions.
• Reduced frame drops by over 80% during background data processing.
• Created a clean postMessage interface for asynchronous communication between threads.`
    },
    {
      id: "code-splitting",
      title: "Mastering Lazy Loading & Code Splitting for Frontend Scale",
      tag: "Web Performance & Optimization",
      summary: "My strategic approach to reducing initial bundle sizes by up to 60% using dynamic imports and smart suspense fallbacks.",
      content: `Huge JavaScript bundles are the silent killers of user retention and Lighthouse performance scores. 

I wrote about my methodology for breaking down monolithic React/Next.js dynamic routes into demand-driven chunks. Instead of serving an all-in-one heavy bundle to the client, I leverage React.lazy(), Dynamic Imports, and route-level code splitting.

My Architecture Blueprint:
1. Critical Path First: Rendering core viewport components immediately.
2. Route-Based Chunking: Loading heavy pages (like analytics or dashboards) only when requested.
3. Micro-Interaction Loading: Deferring modal dialogs and heavy libraries (like Chart.js or Three.js) until user hover or scroll trigger.`
    },
    {
      id: "mobile-optimization",
      title: "Optimizing Mobile Memory Footprints & Re-render Cycles",
      tag: "React Native Deep Dive",
      summary: "Practical techniques I use to debug memory leaks, optimize FlatLists, and eliminate unnecessary re-renders.",
      content: `Performance isn't an afterthought; it's a core architectural requirement. In my work with React Native apps, I frequently audit component lifecycle behaviors to eliminate wasted renders.

By leveraging memoization (useMemo, useCallback) with surgical precision, profiling with React DevTools, and configuring FlatList windowSize & getItemLayout props, I transformed laggy scrollviews into native-speed experiences.`
    }
  ];

  const githubProjects = [
    {
      name: "React Native Performance Suite",
      description: "Custom hooks and web worker wrappers designed to offload computational tasks off the main JS thread.",
      tech: ["React Native", "TypeScript", "Web Workers"],
      stars: 12
    },
    {
      name: "Code-Splitting Architecture Starter",
      description: "A production-ready React boilerplate optimized for sub-second page loads, Lighthouse 95+ scores, and lazy routes.",
      tech: ["React", "Vite", "Tailwind CSS"],
      stars: 8
    },
    {
      name: "Mobile State Profiler",
      description: "A developer utility for tracking component re-renders and memory allocations in real-time.",
      tech: ["JavaScript", "React Native", "DevTools"],
      stars: 15
    }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* GLOWING BACKGROUND ORBS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050508]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-bold tracking-wider text-base bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent block">
                PAVAN KUMAR
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest block uppercase">
                @pavankumarupai37
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/pavankumarupai37" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all flex items-center gap-2 text-xs font-semibold"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub Profile</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Software Engineer & Mobile Architect</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.15] mb-6">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Pavan Kumar</span>. <br />
          I Build Scalable Apps & Optimations.
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 font-light leading-relaxed">
          I specialize in <strong className="text-gray-200 font-medium">React Native Workers</strong>, <strong className="text-gray-200 font-medium">Lazy Loading</strong>, <strong className="text-gray-200 font-medium">Code Splitting</strong>, and crafting high-performance mobile and web solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#insights" 
            className="px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read My Insights</span>
          </a>
          <a 
            href="https://github.com/pavankumarupai37" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <Code2 className="w-4 h-4" />
            <span>View Repositories</span>
          </a>
        </div>
      </header>

      {/* FEATURED STATS / CHIPS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">React Native</div>
              <div className="text-xs text-gray-400">Workers & Thread Offloading</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">Web Performance</div>
              <div className="text-xs text-gray-400">Lazy Loading & Splitting</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">Open Source</div>
              <div className="text-xs text-gray-400">@pavankumarupai37</div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS / LINKEDIN POSTS SECTION (1st Person Explanations) */}
      <section id="insights" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="mb-12">
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest block mb-2">Technical Publications</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How I Think & Build Solutions</h2>
          <p className="text-gray-400 text-sm mt-2">Here are my detailed architectural thoughts and breakdown of key topics I've shared with the community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techPosts.map((post) => (
            <article 
              key={post.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {post.tag}
                  </span>
                  <Share2 className="w-4 h-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>
                <p className="text-xs text-gray-300 font-light mb-4 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                  "{post.summary}"
                </p>
                <div className="text-xs text-gray-400 space-y-2 whitespace-pre-line font-sans mb-6">
                  {post.content}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-mono">By Pavan Kumar</span>
                <span className="text-xs text-cyan-400 flex items-center gap-1 font-semibold hover:underline cursor-pointer">
                  <span>Read full thought</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GITHUB REPOSITORIES SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest block mb-2">GitHub Repositories</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Code & Architectural Work</h2>
          </div>
          <a 
            href="https://github.com/pavankumarupai37" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-2 hover:underline"
          >
            <span>Explore Github (@pavankumarupai37)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubProjects.map((repo, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-light mb-6 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://github.com/pavankumarupai37" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-2 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>View Code</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#030305] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-sm text-white">PAVAN KUMAR</div>
            <p className="text-xs text-gray-500 mt-1">Specializing in React Native, Web Workers, & Performance Optimization.</p>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <a href="https://github.com/pavankumarupai37" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
