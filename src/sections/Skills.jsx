import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiTailwindcss, SiMongodb,
  SiPostgresql, SiRedis, SiNextdotjs, SiExpress, SiGraphql, SiVite,
} from 'react-icons/si';



/* ── Animation variants ─────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 18, delay: i * 0.05 },
  }),
};

/* Featured skills shown large at the top */
const featuredSkills = [


  { name: 'HTML',       icon: FaHtml5,       color: '#e34c26', glow: 'rgba(227,76,38,0.35)' },
  { name: 'CSS',        icon: FaCss3Alt,     color: '#2563eb', glow: 'rgba(37,99,235,0.35)' },
  { name: 'JavaScript', icon: SiJavascript,  color: '#facc15', glow: 'rgba(250,204,21,0.35)' },
  { name: 'TypeScript', icon: SiTypescript,  color: '#3b82f6', glow: 'rgba(59,130,246,0.35)' },
  { name: 'Node.js',    icon: FaNodeJs,      color: '#22c55e', glow: 'rgba(34,197,94,0.35)'  },
  { name: 'React',      icon: FaReact,       color: '#06b6d4', glow: 'rgba(6,182,212,0.35)' },
  { name: 'Python',     icon: FaPython,      color: '#eab308', glow: 'rgba(234,179,8,0.35)'  },
  { name: 'Next.js',    icon: SiNextdotjs,   color: '#e2e8f0', glow: 'rgba(226,232,240,0.25)' },
];

const skillCategories = [
  {
    title: 'Frontend',
    gradient: 'from-cyan-400 to-blue-400',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#e34c26', glow: 'rgba(227,76,38,0.35)'},
      { name: 'CSS', icon: FaCss3Alt, color: '#2563eb', glow: 'rgba(37,99,235,0.35)' },
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-100' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
      { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
    ],
  },
  {
    title: 'Backend',
    gradient: 'from-indigo-400 to-purple-400',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
      { name: 'Express', icon: SiExpress, color: 'text-slate-100' },
      { name: 'Python', icon: FaPython, color: 'text-yellow-300' },
      { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-400' },
    ],
  },
  {
    title: 'Database & Cloud',
    gradient: 'from-emerald-400 to-cyan-400',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-400' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
    ],
  },
  {
    title: 'Tools & DevOps',
    gradient: 'from-orange-400 to-red-400',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Technical Arsenal
          </span>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Technologies and tools I use to build modern, performant, and scalable applications.
          </p>
        </motion.div>

        {/* ── Featured skills row ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {featuredSkills.map(({ name, icon: Icon, color, glow }, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 16 } },
              }}
              animate={{ y: [0, -9, 0] }}
              transition={{
                y: {
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.55,
                },
              }}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center gap-2 cursor-default"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center"
                style={{ boxShadow: `0 0 20px ${glow}` }}
              >
                <Icon size={32} color={color} />
              </div>
              <span className="text-xs text-slate-400 font-medium">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Category cards grid ── */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              custom={catIndex}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                y: {
                  duration: 4 + catIndex * 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: catIndex * 0.8,
                },
              }}
              whileHover={{ borderColor: 'rgba(148,163,184,0.35)' }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 transition-colors"
            >
              <h3
                className={`text-lg font-semibold mb-4 bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}
              >
                {cat.title}
              </h3>

              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {cat.skills.map(({ name, icon: Icon, color }, skillIdx) => (
                  <motion.div
                    key={name}
                    custom={skillIdx}
                    variants={badgeVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      boxShadow: '0 0 12px rgba(34,211,238,0.28)',
                    }}
                    className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg cursor-default"
                  >
                    <Icon size={19} className={color} />
                    <span className="text-sm text-slate-300">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
