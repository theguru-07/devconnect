"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="w-4 h-4 bg-blue-600 rounded-full mx-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-4 h-4 bg-blue-600 rounded-full mx-1"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="w-4 h-4 bg-blue-600 rounded-full mx-1"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
    </div>
  );
}
