
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Bot } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-10 right-10 flex flex-col gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.button
        className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-green-900/30"
        whileHover={{ 
          scale: 1.1, 
          rotate: 360,
          boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Rocket size={20} className="text-white" />
      </motion.button>
      
      <motion.button
        className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-900/30"
        whileHover={{ 
          scale: 1.1, 
          y: -5,
          boxShadow: "0 0 25px rgba(6, 182, 212, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot size={20} className="text-white" />
      </motion.button>
    </motion.div>
  );
};

export default FloatingActions;
