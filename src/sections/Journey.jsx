import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiCode, FiZap, FiActivity } from 'react-icons/fi';
import FirecrackerParticles from '../components/FirecrackerParticles';
import { useState } from 'react';

const journeyItems = [
  {
    type: 'education',
    title: 'BCA Student',
    organization: 'Bachelor of Computer Applications',
    period: '2024 – Present',
    description:
      'Currently pursuing BCA while building a strong foundation in computer science, programming, and modern software development.',
    icon: FiBook,
  },
  {
    type: 'work',
    title: 'Web Development Learner',
    organization: 'Self Learning',
    period: '2025 – Present',
    description:
      'Learning and building responsive web applications using HTML, CSS, JavaScript, and React. Focused on creating clean and user friendly interfaces.',
    icon: FiCode,
  },
  {
    type: 'work',
    title: 'Data Structures & Problem Solving',
    organization: 'Programming Practice',
    period: '2025 – Present',
    description:
      'Practicing Data Structures and Algorithms to improve logical thinking and coding skills. Solving programming challenges regularly.',
    icon: FiActivity,
  },
  {
    type: 'work',
    title: 'AI Project Builder',
    organization: 'Personal Projects',
    period: '2026 – Present',
    description:
      'Building practical projects like an AI powered background remover that can remove image backgrounds instantly using modern APIs and web technologies.',
    icon: FiZap,
  },
];

export default function Journey() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="journey" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            My Path
          </span>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            A timeline of my professional experience and academic background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative overflow-hidden">
          {/* Animated vertical line — draws down as section enters */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-indigo-400/30 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="flex flex-col gap-12">
            {journeyItems.map((item, index) => (
              <div key={index} className="relative flex gap-6">

                {/* Icon circle with spring entrance + pulse glow */}
                <div className="relative flex-shrink-0 z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 14,
                      delay: index * 0.12,
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                      item.type === 'work'
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400'
                        : 'bg-indigo-500/10 border-indigo-500/40 text-indigo-400'
                    }`}
                  >
                    <item.icon size={22} />
                  </motion.div>

                  {/* Pulsing outer glow ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${
                      item.type === 'work' ? 'bg-cyan-400/15' : 'bg-indigo-400/15'
                    }`}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.45,
                    }}
                  />
                </div>

                {/* Card slides in from right with Interactive Glow */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 16,
                    delay: index * 0.12 + 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="relative group flex-1"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800 group-hover:border-slate-700/50 rounded-2xl p-6 transition-all duration-300 overflow-hidden">
                    {/* Interactive Light-Follow Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.06), transparent 40%)`
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                      }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    />

                    {/* Experimental Firecracker Effect for BCA Student */}
                    {item.title === 'BCA Student' && (
                      <FirecrackerParticles isTriggered={hoveredCard === index} />
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1 relative z-10">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${item.type === 'education' ? 'group-hover:text-indigo-400' : 'group-hover:text-cyan-400'}`}>
                        {item.title}
                      </h3>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap transition-colors duration-300 ${
                          item.type === 'work' 
                            ? 'text-cyan-400 bg-cyan-400/5 border-cyan-400/20 group-hover:bg-cyan-400/10' 
                            : 'text-indigo-400 bg-indigo-400/5 border-indigo-400/20 group-hover:bg-indigo-400/10'
                        }`}
                      >
                        {item.period}
                      </motion.span>
                    </div>
                    <p className={`text-sm font-medium mb-2 transition-colors duration-300 ${item.type === 'education' ? 'text-indigo-400/80 group-hover:text-indigo-400' : 'text-cyan-400/80 group-hover:text-cyan-400'}`}>
                      {item.organization}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
