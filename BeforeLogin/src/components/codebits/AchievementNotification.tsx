
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { achievementVariants } from './AnimationEffects';

interface AchievementNotificationProps {
  showAchievement: boolean;
}

const AchievementNotification: React.FC<AchievementNotificationProps> = ({ 
  showAchievement 
}) => {
  return (
    <AnimatePresence>
      {showAchievement && (
        <motion.div
          variants={achievementVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-10 right-10 z-50 bg-gradient-to-r from-green-600 to-cyan-600 p-1 rounded-xl"
        >
          <motion.div 
            className="bg-gray-900 rounded-lg p-4 flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 rgba(234, 179, 8, 0)',
                  '0 0 30px rgba(234, 179, 8, 0.8)',
                  '0 0 0 rgba(234, 179, 8, 0)'
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              <Sparkles className="h-6 w-6 text-white" />
            </motion.div>
            
            <div>
              <motion.h4 
                className="font-bold text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Achievement Unlocked!
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Completed 5 JavaScript Challenges
              </motion.p>
            </div>
            
            <motion.div 
              className="text-3xl font-bold text-yellow-500"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 1],
                opacity: 1,
                rotate: [0, 20, 0, -20, 0],
                textShadow: [
                  '0 0 0px rgba(234, 179, 8, 0)',
                  '0 0 20px rgba(234, 179, 8, 0.8)',
                  '0 0 0px rgba(234, 179, 8, 0)'
                ]
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                textShadow: {
                  repeat: 3,
                  duration: 2
                }
              }}
            >
              +100
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementNotification;
