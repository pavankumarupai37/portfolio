import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { Github, Linkedin, Mail, Smartphone, Code2, Cpu, Award } from "lucide-react";

function AnimatedPrism() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1.5} speed={2.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 2.2 : 1.8}
      >
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={hovered ? "#3b82f6" : "#6366f1"}
          distort={0.4}
          roughness={0.1}
          speed={3}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

function Hero3DScene() {
  return (
    <div className="h-[450px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 2, 1]} intensity={2} />
        <pointLight position={[-3, -2, -1]} color="#ec4899" intensity={2} />
        <AnimatedPrism />
        <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default function Portfolio3D() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Pavan U Pai
          </span>
          <nav className="flex space-x-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#insights" className="hover:text-indigo-400 transition">Insights</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="pt-28 pb-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center min-h-[90vh]">
        <div>
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 rounded-full uppercase">
            Senior Mobile Engineer • 6+ Years Experience
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Architecting <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              High-Performance
            </span> <br />
            Mobile Systems.
          </h1>
          <p className="mt-6 text-slate-400 leading-relaxed text-lg">
            Senior Mobile Engineer at Accenture specializing in React Native architecture, cross-platform performance optimization, native modules, and CI/CD reliability across iOS and Android.
          </p>

          <div className="mt-8 flex items-center space-x-4">
            <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow-lg shadow-indigo-600/30 transition">
              Get in Touch
            </a>
            <div className="flex space-x-3 text-slate-400">
              <a href="https://github.com/pavankumarupai37" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:text-white transition">
                <Github className="w-5 h-5"/>
              </a>
              <a href="https://linkedin.com/in/pavankumar-u-pai" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:text-white transition">
                <Linkedin className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full"></div>
          <Hero3DScene />
          <p className="text-center text-xs text-slate-500 mt-2 italic">Drag to rotate • Hover to distort 3D Prism</p>
        </div>
      </section>

      {/* METRICS STATS */}
      <section className="bg-slate-900/50 border-y border-slate-800/60 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4"><div className="text-3xl font-extrabold text-indigo-400">87%</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Faster Processing</div></div>
          <div className="p-4"><div className="text-3xl font-extrabold text-cyan-400">40%</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Fewer Crashes</div></div>
          <div className="p-4"><div className="text-3xl font-extrabold text-teal-400">40%</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Faster Releases</div></div>
          <div className="p-4"><div className="text-3xl font-extrabold text-purple-400">6+</div><div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Experience</div></div>
        </div>
      </section>

      {/* ENGINEERING INSIGHTS */}
      <section id="insights" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Engineering Insights & Notes</h2>
        <p className="text-slate-400 mb-10">My technical breakdowns on modern mobile engineering and testing workflows.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-indigo-400 mb-2">Claude & ADB Autonomous Testing</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Exploring AI agent tools like 'Ghost in the Droid' that let Claude control real Android devices over ADB. Accessibility trees have transformed into critical API contracts for AI validation.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-cyan-400 mb-2">React Native Performance Tuning</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Reducing JavaScript bridge overhead and optimizing `<Text>` and `<View>` components unlocks massive frame-rate boosts (up to 70% higher FPS) on heavy UI screens.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & AWARDS */}
      <section id="experience" className="py-20 bg-slate-900/30 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Professional Experience</h2>
          <div className="mt-8 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div><h3 className="text-xl font-bold text-white">Senior Analyst</h3><p className="text-indigo-400 text-sm">Accenture</p></div>
                <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full">2024 – Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
                <li>Reduced crash rates by 40% via Firebase Crashlytics monitoring and platform triage.</li>
                <li>Cut core processing time from 6s to under 1s (87% faster) by re-engineering logic.</li>
                <li>Improved release efficiency by 40% using Fastlane and GitHub Actions CI/CD workflows.</li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div><h3 className="text-xl font-bold text-white">Software Engineer</h3><p className="text-indigo-400 text-sm">CAE</p></div>
                <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full">2022 – 2024</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
                <li>Built native modules and published `rn-zendesk` as a public npm package averaging 20+ weekly downloads.</li>
                <li>Led release automation with Fastlane and Firebase App Distribution.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-800/80 py-12 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-lg font-bold text-white">Pavan U Pai</span>
            <p className="text-sm text-slate-400">Senior Mobile Engineer • Bengaluru, India</p>
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <a href="mailto:pavankumarumeshpai@gmail.com" className="hover:text-white flex items-center space-x-2">
              <Mail className="w-4 h-4"/> <span>pavankumarumeshpai@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
