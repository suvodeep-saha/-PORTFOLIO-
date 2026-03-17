import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));
  const { isDark, toggle } = useTheme();

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent focus:outline-none"
        >
          {'<Dev />'}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded ${
                  activeSection === id
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isDark ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {isDark ? <HiSun size={17} /> : <HiMoon size={17} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu — animated slide */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden bg-slate-900 border-b border-slate-800 px-6 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 list-none m-0 py-4 p-0">
              {navLinks.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`text-sm font-medium transition-colors duration-200 w-full text-left focus:outline-none ${
                      activeSection === id
                        ? 'text-cyan-400'
                        : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
