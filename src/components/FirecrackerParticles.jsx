import { motion } from 'framer-motion';
import { FaPython, FaReact, FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiCplusplus } from 'react-icons/si';

const icons = [
  { Icon: SiJavascript, color: '#f7df1e' },
  { Icon: FaPython, color: '#3776ab' },
  { Icon: FaReact, color: '#61dafb' },
  { Icon: FaHtml5, color: '#e34c26' },
  { Icon: SiCplusplus, color: '#00599c' },
];

export default function FirecrackerParticles({ isTriggered }) {
  if (!isTriggered) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
      {icons.map((item, i) => {
        const angle = (i / icons.length) * 360;
        const distance = 80 + Math.random() * 60;
        const x = Math.cos(angle * (Math.PI / 180)) * distance;
        const y = Math.sin(angle * (Math.PI / 180)) * distance;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5, rotate: 0 }}
            animate={{
              x: x,
              y: y,
              opacity: 0,
              scale: 1,
              rotate: 180 + Math.random() * 180,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.3
            }}
            className="absolute"
          >
            <item.Icon size={20} style={{ color: item.color }} />
          </motion.div>
        );
      })}
    </div>
  );
}
