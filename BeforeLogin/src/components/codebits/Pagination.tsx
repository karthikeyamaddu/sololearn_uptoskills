
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageControls: any;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  setCurrentPage, 
  pageControls 
}) => {
  return (
    <motion.div 
      className="flex justify-center space-x-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <motion.button
        whileHover={{ scale: 1.2, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-lg bg-gray-800 text-gray-400 disabled:opacity-50"
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
      >
        <ArrowLeft size={20} />
      </motion.button>
      
      {[0, 1, 2].map((page) => (
        <motion.button
          key={page}
          whileHover={{ 
            scale: 1.2,
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
          }}
          whileTap={{ scale: 0.9, y: 0 }}
          className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium ${
            currentPage === page 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
          onClick={() => {
            setCurrentPage(page);
            
            // Add page change animation
            pageControls.start({
              opacity: [1, 0.5, 1],
              scale: [1, 0.98, 1],
              transition: { duration: 0.3 }
            });
          }}
        >
          {page + 1}
        </motion.button>
      ))}
      
      <motion.button
        whileHover={{ scale: 1.2, x: 5 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-lg bg-gray-800 text-gray-400 disabled:opacity-50"
        disabled={currentPage === 2}
        onClick={() => setCurrentPage(Math.min(2, currentPage + 1))}
      >
        <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
};

export default Pagination;
