
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Bookmark, Trophy, Play } from 'lucide-react';
import { CodeBit } from '@/types/codeBits';
import { getLanguageColor, getLanguageIcon } from '@/utils/codeBitsUtils';
import { modalVariants } from './AnimationEffects';

interface CodeBitModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  selectedBit: CodeBit | null;
  isRotating: boolean;
  handleCompleteBit: () => void;
  codeEditorVisible: boolean;
  setCodeEditorVisible: (visible: boolean) => void;
  toast: any;
}

const CodeBitModal: React.FC<CodeBitModalProps> = ({
  showModal,
  setShowModal,
  selectedBit,
  isRotating,
  handleCompleteBit,
  codeEditorVisible,
  setCodeEditorVisible,
  toast
}) => {
  if (!selectedBit) return null;

  return (
    <AnimatePresence>
      {showModal && selectedBit && (
        <motion.div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <motion.div 
            className={`bg-gray-900 rounded-2xl border ${isRotating ? 'border-green-500' : 'border-gray-800'} w-full max-w-4xl max-h-[90vh] overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="flex items-center justify-between p-6 border-b border-gray-800"
              animate={isRotating ? { 
                backgroundColor: ['rgba(17, 24, 39, 1)', 'rgba(16, 185, 129, 0.1)', 'rgba(17, 24, 39, 1)'],
              } : {}}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center">
                <motion.div 
                  className={`h-10 w-10 ${getLanguageColor(selectedBit.language)} rounded-lg flex items-center justify-center font-bold text-white mr-4`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  animate={isRotating ? { 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ duration: 1 }}
                >
                  {getLanguageIcon(selectedBit.language)}
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-white"
                    animate={isRotating ? {
                      textShadow: ['0 0 0px #fff', '0 0 10px #10b981', '0 0 0px #fff'],
                    } : {}}
                    transition={{ duration: 1 }}
                  >
                    {selectedBit.title}
                  </motion.h3>
                  <div className="text-sm text-gray-400">{selectedBit.description}</div>
                </div>
              </div>
              
              <motion.button 
                className="h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setShowModal(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
            
            <div className="flex flex-col md:flex-row h-[calc(90vh-7rem)]">
              {/* Code display */}
              <div className={`flex-1 ${codeEditorVisible ? 'hidden md:block' : ''} overflow-auto p-6`}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className={`px-3 py-1 rounded-full text-xs ${
                        selectedBit.difficulty === 'beginner' 
                          ? 'bg-green-500/20 text-green-300' 
                          : selectedBit.difficulty === 'intermediate'
                          ? 'bg-yellow-500/20 text-yellow-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {selectedBit.difficulty}
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center space-x-1 text-yellow-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Star size={16} className="fill-current" />
                      <span className="text-sm">{selectedBit.likes}</span>
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white"
                      onClick={() => {
                        toast({
                          title: "Bit bookmarked!",
                          description: "You can find it in your bookmarks tab",
                        });
                      }}
                    >
                      <Bookmark size={18} />
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white"
                      onClick={() => {
                        navigator.clipboard.writeText(selectedBit.code);
                        toast({
                          title: "Code copied!",
                          description: "Code snippet copied to clipboard",
                        });
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </motion.button>
                  </div>
                </div>
                
                <motion.div 
                  className="mb-4 flex-wrap flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedBit.tags.map((tag, i) => (
                    <motion.span 
                      key={i} 
                      className="px-2 py-1 bg-white/10 rounded-full text-gray-300 text-xs"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      whileHover={{ scale: 1.1, x: 3 }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.5,
                    type: "spring"
                  }}
                >
                  <motion.pre 
                    className="language-javascript rounded-xl p-5 overflow-auto bg-gray-950"
                    whileHover={{ 
                      boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)",
                    }}
                  >
                    <motion.code
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.5 }
                      }}
                    >
                      {selectedBit.code}
                    </motion.code>
                  </motion.pre>
                  
                  <motion.div 
                    className="absolute top-4 right-4 flex space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500"
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500"
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500"
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mt-6 flex justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-sm"
                    onClick={() => setCodeEditorVisible(true)}
                  >
                    <Play size={16} />
                    <span>Try it out</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      x: 5,
                      boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-sm"
                    onClick={handleCompleteBit}
                  >
                    <Trophy size={16} />
                    <span>Mark as completed</span>
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Code editor for "Try it out" */}
              {codeEditorVisible && (
                <motion.div 
                  className="flex-1 border-t md:border-t-0 md:border-l border-gray-800 flex flex-col"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gray-950 p-4 border-b border-gray-800 flex justify-between items-center">
                    <motion.div 
                      className="text-sm font-medium"
                      animate={{
                        color: ['#d1d5db', '#10b981', '#d1d5db'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    >
                      Code Editor
                    </motion.div>
                    <motion.button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => setCodeEditorVisible(false)}
                      whileHover={{ rotate: 90, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </motion.button>
                  </div>
                  
                  <div className="flex-1 p-4 bg-gray-950 overflow-auto">
                    <motion.pre 
                      className="h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <motion.textarea 
                        className="w-full h-full bg-transparent text-white focus:outline-none font-mono text-sm resize-none"
                        defaultValue={selectedBit.code}
                        whileFocus={{ 
                          boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)"
                        }}
                      />
                    </motion.pre>
                  </div>
                  
                  <motion.div 
                    className="bg-gray-950 p-4 border-t border-gray-800 flex justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <motion.button 
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm"
                      whileHover={{ scale: 1.05, x: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reset
                    </motion.button>
                    
                    <motion.button 
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm flex items-center space-x-2"
                      whileHover={{ 
                        scale: 1.05, 
                        x: 3,
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={16} />
                      <span>Run</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodeBitModal;
