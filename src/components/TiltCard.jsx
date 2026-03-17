import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

/**
 * Wraps children in a 3D-tilting card that responds to mouse position.
 * - rotateX / rotateY spring toward cursor
 * - Shine overlay follows cursor with radial gradient
 * - Lifts (scale + z) on hover
 */
export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  // Normalized mouse position (0–1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Raw rotation range: ±12 deg
  const rotateYRaw = useTransform(mouseX, [0, 1], [-12, 12]);
  const rotateXRaw = useTransform(mouseY, [0, 1], [12, -12]);

  // Spring-smooth the rotations
  const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 22 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 200, damping: 22 });

  // Shine gradient position (0–100%)
  const shineX = useTransform(mouseX, [0, 1], [0, 100]);
  const shineY = useTransform(mouseY, [0, 1], [0, 100]);
  const shine = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.09) 0%, transparent 52%)`;

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      className={`relative ${className}`}
    >
      {children}

      {/* Floating shine overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: shine }}
      />
    </motion.div>
  );
}
