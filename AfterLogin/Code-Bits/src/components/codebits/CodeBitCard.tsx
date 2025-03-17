
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Lock, Command, ArrowRight } from 'lucide-react';
import { CodeBit } from '@/types/codeBits';
import { getLanguageColor, getLanguageIcon } from '@/utils/codeBitsUtils';
import { cardHoverVariants } from './AnimationEffects';

interface CodeBitCardProps {
  bit: CodeBit;
  explodeEffect: string | null;
  handleSelectBit: (bit: CodeBit) => void;
  index: number;
}

const CodeBitCard: React.FC<CodeBitCardProps> = ({ 
  bit, 
  explodeEffect, 
  handleSelectBit,
  index
}) => {
  return (
    <motion.div
      key={bit.id}
      layout
      initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
      animate={explodeEffect === bit.id ? "explode" : { 
        scale: 1, 
        opacity: 1, 
        rotateX: 0,
        y: [20, 0]
      }}
      exit={{ scale: 0.8, opacity: 0, y: 20 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25, 
        delay: index * 0.1
      }}
      variants={cardHoverVariants}
      whileHover="hover"
      whileTap="tap"
      className={`${getLanguageColor(bit.language)} bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer`}
      onClick={() => handleSelectBit(bit)}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div 
        className="p-6"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="flex justify-between items-start mb-4">
          <motion.div 
            className={`h-10 w-10 ${getLanguageColor(bit.language)} rounded-lg flex items-center justify-center font-bold text-white`}
            whileHover={{ 
              rotate: 360, 
              scale: 1.2,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
            }}
            transition={{ duration: 0.5 }}
          >
            {getLanguageIcon(bit.language)}
          </motion.div>
          
          <div className="flex items-center space-x-2">
            <motion.div 
              className="flex items-center space-x-1 text-yellow-500"
              whileHover={{ scale: 1.2 }}
            >
              <Star size={16} className="fill-current" />
              <motion.span 
                className="text-sm"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {bit.likes}
              </motion.span>
            </motion.div>
            
            {bit.isLocked && (
              <motion.div 
                className="p-1.5 rounded-full bg-gray-800"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 0 rgba(255, 0, 0, 0)',
                    '0 0 8px rgba(255, 0, 0, 0.6)',
                    '0 0 0 rgba(255, 0, 0, 0)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <Lock size={14} className="text-gray-400" />
              </motion.div>
            )}
          </div>
        </div>
        
        <motion.h3 
          className="text-xl font-bold mb-2 text-white group-hover:text-green-300 transition-colors duration-200"
          whileHover={{ x: 4 }}
        >
          {bit.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 text-sm mb-4"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {bit.description}
        </motion.p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {bit.tags.slice(0, 2).map((tag, i) => (
              <motion.span 
                key={i} 
                className="px-2 py-1 bg-white/10 rounded-full text-gray-300 text-xs"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                #{tag}
              </motion.span>
            ))}
            {bit.tags.length > 2 && (
              <motion.span 
                className="px-2 py-1 bg-white/10 rounded-full text-gray-300 text-xs"
                whileHover={{ scale: 1.1 }}
              >
                +{bit.tags.length - 2}
              </motion.span>
            )}
          </div>
          
          <motion.div 
            className={`px-2 py-1 rounded-full text-xs ${
              bit.difficulty === 'beginner' 
                ? 'bg-green-500/20 text-green-300' 
                : bit.difficulty === 'intermediate'
                ? 'bg-yellow-500/20 text-yellow-300'
                : 'bg-red-500/20 text-red-300'
            }`}
            whileHover={{ 
              scale: 1.1,
              y: -2
            }}
          >
            {bit.difficulty}
          </motion.div>
        </div>
        
        {bit.progress > 0 && (
          <div className="mt-4">
            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${bit.progress}%`,
                  background: ['#10b981', '#0ea5e9', '#10b981']
                }}
                transition={{ 
                  width: { duration: 1.5, ease: "easeOut" },
                  background: { duration: 3, repeat: Infinity }
                }}
              />
            </div>
            <div className="mt-1 text-right text-xs text-gray-400">{bit.progress}% completed</div>
          </div>
        )}
      </motion.div>
      
      <motion.div 
        className="p-4 bg-black bg-opacity-30 border-t border-gray-800 flex justify-between items-center"
        whileHover={{ 
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderColor: "#10b981"
        }}
      >
        <div className="flex items-center text-sm text-gray-400">
          <Command size={14} className="mr-1" />
          <span>Press to view</span>
        </div>
        
        <motion.div 
          className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          whileHover={{ 
            scale: 1.2, 
            rotate: 90,
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CodeBitCard;
