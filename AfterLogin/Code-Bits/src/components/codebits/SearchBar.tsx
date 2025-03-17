
import React from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mb-8"
    >
      <motion.input
        type="text"
        placeholder="Search for code bits, challenges, or topics..."
        className="w-full p-4 pl-12 bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-700 focus:border-green-500 focus:ring-green-500 text-white transition-all duration-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        whileFocus={{ 
          scale: 1.02,
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"
        whileHover={{ scale: 1.2, rotate: 15 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xs text-gray-500"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        Press <kbd className="px-2 py-1 bg-gray-800 rounded font-mono">LB</kbd> + <kbd className="px-2 py-1 bg-gray-800 rounded font-mono">X</kbd>
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
