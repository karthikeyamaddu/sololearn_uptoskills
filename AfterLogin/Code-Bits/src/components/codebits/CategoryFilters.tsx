
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './AnimationEffects';
import { getLanguageIcon } from '@/utils/codeBitsUtils';
import { CodeLanguage } from '@/types/codeBits';

interface CategoryFiltersProps {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  headerControls: any;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ 
  currentCategory, 
  setCurrentCategory,
  headerControls 
}) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 md:grid-cols-7 gap-3 mb-10"
    >
      {['all', 'javascript', 'typescript', 'python', 'html', 'css', 'react'].map((category, index) => (
        <motion.button
          key={category}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1, 
            y: -8, 
            rotate: [0, -2, 2, 0],
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.9, rotate: 0 }}
          className={`p-3 rounded-xl transition-all duration-300 text-center ${
            currentCategory === category 
              ? 'bg-gradient-to-br from-green-600 to-cyan-600 text-white' 
              : 'bg-gray-800 bg-opacity-60 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => {
            setCurrentCategory(category);
            
            // Add extra effect when changing category
            headerControls.start({
              scale: [1, 1.03, 1],
              transition: { duration: 0.5 }
            });
          }}
        >
          <motion.div 
            className="font-medium text-sm"
            animate={currentCategory === category ? {
              rotateY: [0, 360],
              transition: { duration: 0.8 }
            } : {}}
          >
            {category === 'all' ? 'All' : getLanguageIcon(category as CodeLanguage)}
          </motion.div>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilters;
