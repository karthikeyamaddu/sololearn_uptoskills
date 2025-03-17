
import React from 'react';
import { motion } from 'framer-motion';
import { LucideCode } from 'lucide-react';

interface HeaderProps {
  headerControls: any;
}

const Header: React.FC<HeaderProps> = ({ headerControls }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={headerControls}
      className="flex justify-center items-center mb-12"
    >
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05, rotateZ: 2 }}
      >
        <motion.div 
          className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mr-4 shadow-lg shadow-green-600/20"
          whileHover={{ 
            rotate: 360, 
            scale: 1.2,
            boxShadow: "0 0 35px rgba(16, 185, 129, 0.6)"
          }}
          transition={{ duration: 0.7 }}
        >
          <LucideCode className="h-6 w-6" />
        </motion.div>
        <div>
          <motion.h1 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-1"
            whileHover={{
              textShadow: "0 0 15px rgba(16, 185, 129, 0.8)",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500">
              Code<span className="text-white">Bits</span>
            </span>
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
