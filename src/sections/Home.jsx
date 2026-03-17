import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const HeroScene = lazy(() => import('../components/HeroScene'));

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Two-column grid */}
      <div className="relative w-full max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">

        {/* ── Left: text content ── */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-400 font-mono text-lg"
            >
              Hello, World! I'm
            </motion.p>
            
            {/* HR-Focused Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 group cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                Open for Opportunities
              </span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Suvodeep Saha
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-300 font-light mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg"
          >
            I'm a <span className="text-slate-200 font-semibold">BCA Student & Full Stack Developer</span> dedicated to building high-performance web applications. I turn complex problems into elegant, user-centric digital experiences.
          </motion.p>

          {/* HR Key Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 mb-10"
          >
            {[
              { label: 'Year', val: '2nd', sub: 'BCA', color: 'text-cyan-400' },
              { label: 'Projects', val: '4+', sub: 'Completed', color: 'text-indigo-400' },
              { label: 'Skills', val: '8+', sub: 'Tools Mastered', color: 'text-emerald-400' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                <div className="text-[11px] text-slate-400 font-medium">{stat.sub}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 justify-center md:justify-start"
          >
            <a
              href="https://github.com/suvodeep-saha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/suvodeep-saha-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
          </motion.div>
        </div>

        {/* ── Right: 3D scene ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          className="relative h-72 md:h-[520px]"
        >
          {/* Soft glow halos behind the canvas */}
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl scale-90 pointer-events-none" />
          <div className="absolute inset-0 bg-indigo-600/10 rounded-full blur-2xl scale-75 pointer-events-none" />

          {/* Loading spinner while Three.js chunk loads */}
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <img src="src/assets/mee.jpeg" alt="myself " />
                <div className="w-14 h-14 rounded-full border-2 border-slate-700 border-t-cyan-400 animate-spin" />
              </div>
            }
          >
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <HiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
