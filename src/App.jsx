import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { Github, Linkedin, Mail, Smartphone, Code2, Cpu, Award, ExternalLink, Terminal, ShieldCheck, Zap } from "lucide-react";

function FloatingOrbs() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[2, 1, -1]} scale={0.8}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial color="#f97316" distort={0.3} speed={4} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={4} rotationIntensity={1.5} floatIntensity={3}>
        <mesh position={[-2.2, -1, 0]} scale={0.6}>
          <torusGeometry args={[0.8, 0.3, 16, 100]} />
          <meshStandardMaterial color="#0ea5e9" roughness={0.3} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

function Hero3DScene() {
  return (
    <div className="h-[420px] w-full cursor-grab active:cursor-grabbing relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 2]} intensity={2.5} />
        <pointLight position={[-3, -3, -2]} color="#f97316" intensity={3} />
        <FloatingOrbs />
        <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default function Portfolio3D() {
  const [activeTab, setActiveTab] = useState("all");

  const repositories = [
    {
      name: "rn-zendesk",
      desc: "Native module wrapper for Zendesk SDK in React Native. Published publicly on npm, averaging 20+ weekly downloads.",
      tags: ["React Native", "Native Modules", "npm"],
      link: "https://github.com/pavankumarupai37"
    },
    {
      name: "Autonomous ADB Testing Agent",
      desc: "AI-driven mobile test runner utilizing Claude and ADB accessibility trees to execute autonomous UI integration tests on real Android hardware.",
      tags: ["Python", "ADB", "Claude API", "Automation"],
      link: "https://github.com/pavankumarupai37"
    },
    {
      name: "CI/CD Pipeline Optimizer",
      desc: "Automated GitHub Actions and Fastlane workflows reducing deployment overhead, provisioning builds, and cutting release cycles by 40%.",
      tags: ["CI/CD", "Fastlane", "GitHub Actions", "DevOps"],
      link: "https://github.com/pavankumarupai37"
    }
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#090a0f]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-xl font-black tracking-tight text-white">
              Pavan U Pai
            </span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#insights" className="hover:text-orange-400 transition">LinkedIn Insights</a>
            <a href="#projects" className="hover:text-orange-400 transition">Repositories</a>
            <a href="#experience" className="hover:text-orange-400 transition">Experience</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[90vh]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-semibold tracking-wider text-orange-400 bg-orange-950/40 border border-orange-800/50 rounded-full uppercase mb-4">
            <Smartphone className="w-3.5 h-3.5"/> Senior Mobile Engineer
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
            Hey, I am Pavan. <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Mobile Architect
            </span>
          </h1>
          <p className="mt-6 text-slate-400 leading-relaxed text-lg">
            With over 6+ years of engineering excellence, I specialize in high-performance React Native architecture, cross-platform optimization, and bulletproof CI/CD automation at Accenture.
          </p>

          <div className="mt-8 flex items-center space-x-4">
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition">
              Let's Connect
            </a>
            <div className="flex space-x-3 text-slate-400">
              <a href="https://github.com/pavankumarupai37" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:text-white hover:border-slate-700 transition">
                <Github className="w-5 h-5"/>
              </a>
              <a href="https://linkedin.com/in/pavankumar-u-pai" target="_blank" rel="noreferrer" className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:text-white hover:border-slate-700 transition">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 to-transparent blur-3xl rounded-full"></div>
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-4 backdrop-blur-md shadow-2xl relative">
            <Hero3DScene />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-xs text-orange-400 font-bold uppercase tracking-wider">Current Focus</div>
                <div className="text-sm font-semibold text-slate-200">React Native & Autonomous Testing</div>
              </div>
              <Zap className="w-6 h-6 text-orange-400"/>
            </div>
          </div>
        </div>
      </section>

      {/* STATS METRICS BAR */}
      <section className="bg-gradient-to-r from-slate-900/40 via-orange-950/20 to-slate-900/40 border-y border-slate-800/80 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4"><div className="text-3xl font-black text-orange-400">87%</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Faster Core Processing</div></div>
          <div className="p-4"><div className="text-3xl font-black text-amber-400">40%</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Crash Rate Reduction</div></div>
          <div className="p-4"><div className="text-3xl font-black text-yellow-400">40%</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Faster Release Cycles</div></div>
          <div className="p-4"><div className="text-3xl font-black text-orange-500">6+</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Experience</div></div>
        </div>
      </section>

      {/* LINKEDIN POSTS / THOUGHT LEADERSHIP SECTION */}
      <section id="insights" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-2">
          <Linkedin className="w-6 h-6 text-orange-400"/>
          <h2 className="text-3xl font-extrabold tracking-tight">LinkedIn Thoughts & Engineering Notes</h2>
        </div>
        <p className="text-slate-400 mb-10">Direct perspectives from my professional technical posts on mobile scale and AI testing.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-orange-500/50 transition">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition"></div>
            <div className="text-xs font-semibold text-orange-400 mb-3">AUTOMATED TESTING • ANDROID & ADB</div>
            <h3 className="text-xl font-bold text-white mb-4">Controlling Real Android Devices with Claude and ADB</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "As mobile engineers, we often rely on flaky UI testing scripts. By leveraging accessibility trees as explicit API contracts, I have been experimenting with autonomous agents like 'Ghost in the Droid' where Claude controls real devices over ADB to execute complex user journeys natively."
            </p>
            <a href="https://linkedin.com/in/pavankumar-u-pai" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition">
              <span>Read on LinkedIn</span> <ExternalLink className="w-3.5 h-3.5"/>
            </a>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-orange-500/50 transition">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition"></div>
            <div className="text-xs font-semibold text-amber-400 mb-3">REACT NATIVE • PERFORMANCE OPTIMIZATION</div>
            <h3 className="text-xl font-bold text-white mb-4">Unlocking 70%+ FPS Boosts on Heavy Mobile Screens</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "Performance isn't an afterthought—it's an architectural choice. By minimizing JavaScript bridge overhead, strategically memoizing re-renders, and optimizing native view recycling, we cut heavy list stutter and brought frame rates consistently to 60+ FPS on resource-constrained devices."
            </p>
            <a href="https://linkedin.com/in/pavankumar-u-pai" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition">
              <span>Read on LinkedIn</span> <ExternalLink className="w-3.5 h-3.5"/>
            </a>
          </div>
        </div>
      </section>

      {/* REPOSITORIES SECTION */}
      <section id="projects" className="py-20 bg-slate-900/20 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-2">
            <Code2 className="w-6 h-6 text-orange-400"/>
            <h2 className="text-3xl font-extrabold tracking-tight">Featured Repositories</h2>
          </div>
          <p className="text-slate-400 mb-10">Open source modules, tooling, and systems I've built and maintained.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {repositories.map((repo, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white">{repo.name}</h3>
                    <Github className="w-5 h-5 text-slate-400"/>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{repo.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-slate-800 text-orange-300 px-2.5 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <a href={repo.link} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition">
                    <span>View Repository</span> <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Professional Experience</h2>
        <p className="text-slate-400 mb-12">My career progression in enterprise mobile systems engineering.</p>

        <div className="space-y-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Senior Analyst / Senior Mobile Engineer</h3>
                <p className="text-orange-400 font-medium">Accenture</p>
              </div>
              <span className="text-xs font-bold text-orange-400 bg-orange-950/50 border border-orange-800/50 px-3.5 py-1.5 rounded-full">2024 – Present</span>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm list-disc list-inside leading-relaxed">
              <li>Spearheaded React Native architecture and performance tuning across cross-platform mobile apps, lowering crash rates by 40% via Firebase Crashlytics triage.</li>
              <li>Re-engineered core data processing workflows, dropping execution latency from 6 seconds down to under 1 second (87% performance boost).</li>
              <li>Automated CI/CD pipelines utilizing Fastlane and GitHub Actions, boosting release efficiency by 40% across iOS and Android builds.</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                <p className="text-orange-400 font-medium">CAE</p>
              </div>
              <span className="text-xs font-bold text-slate-400 bg-slate-800 px-3.5 py-1.5 rounded-full">2022 – 2024</span>
            </div>
            <ul className="space-y-3 text-slate-300 text-sm list-disc list-inside leading-relaxed">
              <li>Engineered custom native modules and published `rn-zendesk` as an open-source npm package used by active developers.</li>
              <li>Directed mobile release automation and distribution pipelines with Fastlane and Firebase App Distribution.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-800/80 py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-bold text-white">Pavan U Pai</span>
            <p className="text-sm text-slate-400 mt-1">Senior Mobile Engineer • Bengaluru, India</p>
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-300">
            <a href="mailto:pavankumarumeshpai@gmail.com" className="hover:text-orange-400 flex items-center space-x-2 transition">
              <Mail className="w-4 h-4 text-orange-400"/> <span>pavankumarumeshpai@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
