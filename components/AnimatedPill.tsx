'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPillProps {
  label: string;
  icon?: React.ReactNode;
}

const AnimatedPill: React.FC<AnimatedPillProps> = ({ label, icon }) => {
  return (
    <motion.div
      className="flex items-center bg-gray-800 text-white rounded-2xl px-4 py-2 shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </motion.div>
  );
};

export default AnimatedPill;