import { motion } from 'framer-motion';
import { FiDownload, FiZap, FiBookOpen, FiPackage, FiCode } from 'react-icons/fi';
import { SiJavascript, SiReact } from 'react-icons/si';
import meImg from '../assets/mee.jpeg';

// ── Animation variants ──────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 20 },
  },
};

// ── Data ────────────────────────────────────────────────
const strengths = [
  {
    icon: FiZap,
    title: 'Problem Solving',
    desc: 'Breaking down complex challenges into clean, elegant solutions one step at a time.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/50',
    iconBg: 'bg-cyan-500/20',
  },
  {
    icon: FiBookOpen,
    title: 'Continuous Learning',
    desc: 'Always exploring new tools, patterns, and ideas to stay sharp in a fast-moving field.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'group-hover:border-indigo-500/50',
    iconBg: 'bg-indigo-500/20',
  },
  {
    icon: FiPackage,
    title: 'Practical Projects',
    desc: 'Building real-world applications that are fast, accessible, and enjoyable to use.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'group-hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/20',
  },
];

const floatingBadges = [
  {
    icon: SiReact,
    label: 'React',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/30',
    pos: '-top-6 right-8',
  },
  {
    icon: SiJavascript,
    label: 'JavaScript',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10 border-yellow-400/30',
    pos: '-bottom-6 left-10',
  },
  {
    icon: FiCode,
    label: 'Web Dev',
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10 border-indigo-400/30',
    pos: 'top-1/2 -right-12 -translate-y-1/2',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Background Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 120, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"
          />
        </div>

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Who I Am
          </span>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Slow-rotating gradient halo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500 via-indigo-500 to-transparent opacity-15 blur-md"
              />

              {/* Avatar card with gentle float */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-80 h-[28rem] rounded-[2.5rem] overflow-hidden border border-slate-700/60 shadow-2xl shadow-cyan-500/10"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />

                {/* Subtle grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                  }}
                />

                {/* Avatar content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                  {/* Profile Image */}
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-cyan-400/50 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <img 
                      src={meImg} 
                      alt="Suvodeep Saha" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-slate-200 font-semibold text-lg leading-tight">Suvodeep Saha</p>
                    <p className="text-cyan-400 text-sm mt-0.5">Full Stack Developer</p>
                  </div>

                  {/* Animated status dots */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full border border-slate-600/50">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    <span className="text-slate-400 text-xs">Open to Work</span>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-400 to-transparent" />
              </motion.div>

              {/* Floating tech badges */}
              {floatingBadges.map(({ icon: Icon, label, color, bg, pos }, i) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm text-xs font-semibold ${color} ${bg}`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + i * 0.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.7,
                  }}
                >
                  <Icon size={12} />
                  {label}
                </motion.div>
              ))}

              {/* Ambient glow */}
              <div className="absolute -inset-10 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* ── Right: Bio & Strengths ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Greeting */}
            <motion.div variants={item} className="mb-5">
              <h3 className="text-3xl font-bold text-slate-100 leading-snug">
                Hi, I'm{' '}
                <span className="text-cyan-400">Suvodeep Saha </span>
              </h3>
              <p className="text-indigo-400 font-medium mt-1 text-sm">
                Full Stack Developer &amp; Problem Solver
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="text-slate-400 leading-relaxed mb-4">
              My journey into programming started with simple curiosity — a desire to understand
              how websites actually work. What began as tinkering with HTML and CSS quickly grew
              into a deep passion for building meaningful things on the web.
            </motion.p>
            <motion.p variants={item} className="text-slate-400 leading-relaxed mb-8">
              Today I focus on crafting modern web applications using{' '}
              <span className="text-slate-300 font-medium">JavaScript</span> and{' '}
              <span className="text-cyan-400 font-medium">React</span>, writing clean and
              performant code that creates interfaces people genuinely enjoy using.
            </motion.p>

            {/* Key Strengths */}
            <motion.div variants={item} className="mb-8">
              <p className="text-xs text-slate-500 uppercase tracking-[0.15em] font-semibold mb-4">
                Key Strengths
              </p>
              <div className="flex flex-col gap-3">
                {strengths.map(({ icon: Icon, title, desc, color, bg, border, iconBg }) => (
                  <motion.div
                    key={title}
                    variants={item}
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`flex items-start gap-4 p-5 rounded-2xl ${bg} border border-slate-700/50 ${border} backdrop-blur-md transition-all cursor-default group`}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${iconBg} border border-white/5 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className={`font-bold text-base ${color}`}>{title}</p>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <FiDownload size={17} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-semibold transition-all duration-300 hover:bg-cyan-500/5"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
