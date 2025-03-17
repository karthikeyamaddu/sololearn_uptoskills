
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBit } from '@/types/codeBits';
import CodeBitCard from './CodeBitCard';

interface CodeBitGridProps {
  filteredCodeBits: CodeBit[];
  explodeEffect: string | null;
  handleSelectBit: (bit: CodeBit) => void;
}

const CodeBitGrid: React.FC<CodeBitGridProps> = ({ 
  filteredCodeBits, 
  explodeEffect, 
  handleSelectBit 
}) => {
  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <AnimatePresence mode="popLayout">
        {filteredCodeBits.map((bit, index) => (
          <CodeBitCard 
            key={bit.id}
            bit={bit}
            explodeEffect={explodeEffect}
            handleSelectBit={handleSelectBit}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CodeBitGrid;
