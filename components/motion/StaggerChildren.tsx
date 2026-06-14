'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  /** gap between each child's entrance */
  stagger?: number;
  delayChildren?: number;
  amount?: number;
};

/**
 * Container that reveals its <StaggerItem> children in sequence on scroll.
 * Reduced motion turns the cascade into a single quiet fade.
 */
export function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  amount = 0.25,
}: StaggerChildrenProps) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function StaggerItem({ children, className, y = 18 }: StaggerItemProps) {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
