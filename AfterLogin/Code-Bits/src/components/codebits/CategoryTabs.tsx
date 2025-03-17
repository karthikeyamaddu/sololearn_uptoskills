
import React from 'react';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  activeTab: 'explore' | 'challenges' | 'bookmarks';
  setActiveTab: (tab: 'explore' | 'challenges' | 'bookmarks') => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide"
    >
      {['explore', 'challenges', 'bookmarks'].map((tab) => (
        <motion.button
          key={tab}
          whileHover={{ scale: 1.05, y: -5, rotateZ: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: ['explore', 'challenges', 'bookmarks'].indexOf(tab) * 0.1 + 0.5
          }}
          className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
            activeTab === tab as any
              ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg shadow-green-900/30' 
              : 'bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setActiveTab(tab as any)}
        >
          <motion.span
            animate={activeTab === tab as any ? {
              textShadow: ['0 0 0px #fff', '0 0 10px #10b981', '0 0 0px #fff'],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryTabs;
