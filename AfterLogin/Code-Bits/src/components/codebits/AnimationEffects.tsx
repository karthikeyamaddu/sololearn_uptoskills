
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

// Stars background animation
export const StarryBackground: React.FC = () => {
  const renderStars = () => {
    const starCount = 150;
    return Array.from({ length: starCount }).map((_, i) => {
      const size = Math.random() * 3;
      const animationDuration = 5 + Math.random() * 20;
      const opacity = Math.random() * 0.7 + 0.3;
      
      return (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: opacity,
          }}
          animate={{
            opacity: [opacity, opacity * 0.3, opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      );
    });
  };

  return <>{renderStars()}</>;
};

// Rocket animation
export const RocketEffects: React.FC = () => {
  const renderRockets = () => {
    const rocketCount = 5;
    return Array.from({ length: rocketCount }).map((_, i) => {
      const startX = Math.random() * 100;
      const startY = 100 + Math.random() * 50;
      const endX = startX + (Math.random() * 50 - 25);
      const endY = -20;
      const duration = 10 + Math.random() * 15;
      const delay = Math.random() * 20;
      const rotate = Math.random() * 20 - 10;
      
      return (
        <motion.div
          key={`rocket-${i}`}
          className="absolute z-0"
          style={{
            left: `${startX}%`,
            top: `${startY}%`,
          }}
          animate={{
            left: [`${startX}%`, `${endX}%`],
            top: [`${startY}%`, `${endY}%`],
            rotate: rotate,
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
          }}
        >
          <Rocket 
            size={Math.random() * 20 + 15} 
            className="text-purple-500"
            strokeWidth={1.5}
          />
          <motion.div 
            className="absolute w-1 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full"
            style={{ top: '100%', left: '45%', transformOrigin: 'top center' }}
            animate={{
              height: [8, 15, 8],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      );
    });
  };

  return <>{renderRockets()}</>;
};

// Shooting stars effect
export const ShootingStars: React.FC = () => {
  const renderShootingStars = () => {
    const starCount = 8;
    return Array.from({ length: starCount }).map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 50;
      const endX = startX + (Math.random() * 70 - 35);
      const endY = startY + (Math.random() * 70 - 35);
      const duration = 2 + Math.random() * 3;
      const delay = 5 + Math.random() * 20;
      
      return (
        <motion.div
          key={`shooting-star-${i}`}
          className="absolute h-0.5 w-12 bg-gradient-to-r from-transparent via-white to-transparent rounded-full z-0"
          style={{
            left: `${startX}%`,
            top: `${startY}%`,
            opacity: 0,
            rotate: Math.atan2(endY - startY, endX - startX) * (180 / Math.PI),
          }}
          animate={{
            left: [`${startX}%`, `${endX}%`],
            top: [`${startY}%`, `${endY}%`],
            opacity: [0, 1, 0],
            width: [0, 80, 0],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeOut",
            repeatDelay: 15 + Math.random() * 30,
          }}
        />
      );
    });
  };

  return <>{renderShootingStars()}</>;
};

// Nebula effects
export const NebulaEffects: React.FC = () => {
  return (
    <>
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-900/20 to-pink-900/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70"></div>
    </>
  );
};

// Combined space background
export const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <StarryBackground />
      <RocketEffects />
      <ShootingStars />
      <NebulaEffects />
    </div>
  );
};

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
};

export const achievementVariants = {
  hidden: { x: '100%', opacity: 0, scale: 0.6, rotate: -10 },
  visible: { 
    x: 0, 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 20 
    }
  },
  exit: { 
    x: '100%', 
    opacity: 0,
    scale: 0.6,
    transition: { duration: 0.3 }
  }
};

export const cardHoverVariants = {
  initial: { scale: 1, rotateY: 0, rotateX: 0 },
  hover: { 
    scale: 1.04, 
    rotateY: 5, 
    rotateX: 5,
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95, rotateY: 0, rotateX: 0 },
  explode: {
    scale: [1, 1.2, 0],
    opacity: [1, 1, 0],
    rotate: [0, 5, -5],
    filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
    transition: { duration: 0.7, ease: [0.36, 0.07, 0.19, 0.97] }
  }
};

export const modalVariants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0, 
    rotateX: 45,
    y: 50
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.5
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    rotateX: -45,
    y: 50,
    transition: { duration: 0.4 }
  }
};
