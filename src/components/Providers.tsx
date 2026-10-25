"use client";

import { MotionConfig } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  // "user" respects the OS-level prefers-reduced-motion setting.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
