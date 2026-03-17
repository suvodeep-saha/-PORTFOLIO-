import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import TiltCard from '../components/TiltCard';
import handGestureImg from '../assets/hand_guesture.png';
import pujaImg from '../assets/puja.jpeg';
import bgRemoverImg from '../assets/proffes.jpg';

const projects = [
  {
    title: 'Volume Control using Hand Guesture',
    description:
      'Volume control using hand gestures allows users to adjust sound levels in real time by translating natural hand movements into intuitive system commands.',
    tags: ['Python', 'MediaPipe', 'OpenCV ', 'Numpy',],
    github: 'https://github.com/suvodeep-saha',
    live: 'https://www.linkedin.com/posts/suvodeep-saha-_artificialintelligence-machinelearning-deeplearning-activity-7383858246605881345-5YDv/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFDpDWwBgzgZ2-WKYNv8ixSuEzvsIetB2w0',
    gradient: 'from-cyan-500 to-blue-600',
    image: handGestureImg,
  },
  {
    title: 'Jagadhatri Puja',
    description:
      'Jagadhatri Puja celebrates Goddess Jagadhatri as the symbol of strength, compassion, and the power that protects the universe from chaos.',
    tags: ['HTML', 'CSS', 'JS', 'BOOTSTRAP CSS'],
    github: '',
    live: '#',
    gradient: 'from-indigo-500 to-purple-600',
    image: pujaImg,
  },
  {
    title: 'Background Remover using AI',
    description:
      'An AI-powered background removal tool that automatically detects the main subject of an image and removes the background in one click, delivering clean and professional results in seconds.',
    tags: ['Python', 'Numpy', 'Open-CV', 'MediaPipe'],
    github: '#',
    live: '#',
    gradient: 'from-orange-500 to-pink-600',
    image: bgRemoverImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            My Creative Work
          </span>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
            A selection of my recent projects. Each one represents a milestone in my engineering journey.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 48 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
            >
              <TiltCard>
                {/* Project banner */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden rounded-t-2xl`}
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20" />
                      {/* Shimmer line */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-1/3 bg-white/5 skew-x-12"
                        animate={{ x: ['-100%', '400%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                      />
                      <span className="relative text-white text-5xl font-black opacity-20 select-none">
                        {project.title[0]}
                      </span>
                    </>
                  )}
                </div>

                <div className="p-6 bg-slate-900 rounded-b-2xl border border-slate-800 border-t-0 group">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.08, y: -1 }}
                        className="text-xs px-2 py-1 bg-slate-800 text-cyan-400 rounded-md border border-slate-700 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-5">
                    <motion.a
                      href={project.github}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FiGithub size={15} /> Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                      aria-label={`${project.title} live demo`}
                    >
                      <FiExternalLink size={15} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
