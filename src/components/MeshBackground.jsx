import { motion } from 'framer-motion';

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mesh Blobs */}
      <motion.div
        animate={{
          x: [0, 400, 0],
          y: [0, 200, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -300, 0],
          y: [0, 400, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]"
      />
      
      {/* Constant subtle overlay */}
      <div className="absolute inset-0 bg-slate-950/20" />
    </div>
  );
}
