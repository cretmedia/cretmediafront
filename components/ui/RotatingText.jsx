"use client";

import { motion } from "framer-motion";

export default function RotatingText() {
  const words = ["Advertise", "Develop", "Produce"];

  return (
    <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        animate={{
          y: ["-120%", "0%", "-18%", "-33.33%", "-50.66%", "-70%"],
        }}
        transition={{
          duration: 7,
          times: [0, 0.2, 0.45, 0.7, 1],
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="flex flex-col"
      >
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="h-[1.2em] flex items-center text-primary"
          >
            {word}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
