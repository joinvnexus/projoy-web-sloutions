// components/shared/RevealWrapper.tsx
"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/* ─── Single reveal ──────────────────────────────────────── */
interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function RevealWrapper({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
  distance = 24,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -80px 0px" });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/* ─── Staggered children reveal ─────────────────────────── */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  containerDelay = 0,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -80px 0px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: containerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger item ───────────────────────────────────────── */
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "none";
  distance?: number;
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 20,
}: StaggerItemProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? distance : 0,
    x: direction === "left" ? distance : 0,
  };

  const itemVariants: Variants = {
    hidden: initial,
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}

/* ─── Fade in only ───────────────────────────────────────── */
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.4,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
