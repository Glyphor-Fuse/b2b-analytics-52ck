import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress' | 'hover' | 'reveal' | string;
  children: React.ReactNode;
  className?: string;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ type, children, className = '' }) => {
  
  if (type === 'hover') {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    );
  }

  // Default wrapper for other types to ensure they render
  return (
    <div className={className} data-signature-interaction={type}>
      {children}
    </div>
  );
};
