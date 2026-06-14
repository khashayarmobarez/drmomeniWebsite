'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

type FadeInOnScrollProps = {
  children: ReactNode;
  /** translate distance in px before settling */
  y?: number;
  delay?: number;
  className?: string;
  /** start animation once this fraction is visible */
  amount?: number;
};

/**
 * Reveals its children with a soft fade + lift the first time they scroll into
 * view. Collapses to a plain fade (no movement) when reduced motion is set.
 */
export function FadeInOnScroll({
  children,
  y = 20,
  delay = 0,
  className,
  amount = 0.3,
}: FadeInOnScrollProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
