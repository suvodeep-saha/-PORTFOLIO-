import { MotionConfig } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import MeshBackground from './components/MeshBackground';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';

function App() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30">
      <ParticleBackground />
      <MeshBackground />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      {/* ── Footer ── */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-3">
              {'<Dev />'}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about building beautiful, performant web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-slate-200 font-semibold text-sm mb-4 uppercase tracking-widest">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {['home','about','skills','projects','journey','contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-slate-400 hover:text-cyan-400 text-sm capitalize transition-colors"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-slate-200 font-semibold text-sm mb-4 uppercase tracking-widest">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: FiGithub,   label: 'GitHub',   href: 'https://github.com/suvodeep-saha' },
                { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/suvodeep-saha-/' },
                { icon: FiTwitter,  label: 'Twitter',  href: '#' },
                { icon: FiMail,     label: 'Email',    href: 'mailto:suvodeepsaha2005@gmail.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors group"
                >
                  <Icon size={15} className="group-hover:scale-110 transition-transform" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-5">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Suvodeep Saha. All rights reserved.</p>
            <p>Built with React &amp; Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
    </MotionConfig>
  );
}

export default App;
