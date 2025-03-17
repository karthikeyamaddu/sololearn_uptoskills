
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion, useAnimation } from 'framer-motion';
import { CodeBit } from '@/types/codeBits';
import { mockCodeBits } from '@/utils/codeBitsUtils';

// Import components
import { SpaceBackground } from '@/components/codebits/AnimationEffects';
import Header from '@/components/codebits/Header';
import SearchBar from '@/components/codebits/SearchBar';
import CategoryTabs from '@/components/codebits/CategoryTabs';
import CategoryFilters from '@/components/codebits/CategoryFilters';
import CodeBitGrid from '@/components/codebits/CodeBitGrid';
import Pagination from '@/components/codebits/Pagination';
import FloatingActions from '@/components/codebits/FloatingActions';
import CodeBitModal from '@/components/codebits/CodeBitModal';
import AchievementNotification from '@/components/codebits/AchievementNotification';

// Main CodeBits component
const CodeBits: React.FC = () => {
  const { toast } = useToast();
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedBit, setSelectedBit] = useState<CodeBit | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'explore' | 'challenges' | 'bookmarks'>('explore');
  const [codeEditorVisible, setCodeEditorVisible] = useState<boolean>(false);
  const [showAchievement, setShowAchievement] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [pulsateEffect, setPulsateEffect] = useState<boolean>(false);
  const [explodeEffect, setExplodeEffect] = useState<string | null>(null);
  
  // Motion values and animations
  const pageControls = useAnimation();
  const headerControls = useAnimation();

  useEffect(() => {
    // Animate in the page with a staggered effect
    pageControls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    });

    headerControls.start({
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotate: [0, 5, 0, -5, 0],
      transition: { 
        duration: 1.5, 
        ease: "easeOut",
        rotate: { repeat: 0, duration: 0.8 }
      }
    });
  }, [pageControls, headerControls]);
  
  // Filtered code bits based on search and category
  const filteredCodeBits = mockCodeBits.filter((bit) => {
    const matchesSearch = bit.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          bit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bit.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = currentCategory === 'all' || bit.language === currentCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Show toast notifications
  useEffect(() => {
    // Welcome toast with fly-in animation
    setTimeout(() => {
      toast({
        title: "Welcome to CodeBits Pro!",
        description: "New immersive coding experience unlocked",
      });
    }, 1000);
    
    // Simulated achievement after 5 seconds
    const timer = setTimeout(() => {
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 5000);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [toast]);
  
  // Handle code bit selection
  const handleSelectBit = (bit: CodeBit) => {
    // Apply explosion effect
    setExplodeEffect(bit.id);
    setTimeout(() => setExplodeEffect(null), 700);
    
    if (bit.isLocked) {
      toast({
        title: "Premium Content",
        description: "Subscribe to access this code bit",
        variant: "destructive"
      });
      return;
    }
    
    // Start a pulsating effect
    setPulsateEffect(true);
    setTimeout(() => setPulsateEffect(false), 800);
    
    // Show modal with delay for animation effect
    setTimeout(() => {
      setSelectedBit(bit);
      setShowModal(true);
      
      // Update progress if first time viewing
      if (bit.progress === 0) {
        toast({
          title: "New Bit Unlocked!",
          description: "+25 points added to your score",
        });
      }
    }, 400);
  };
  
  // Handle completing a code bit
  const handleCompleteBit = () => {
    if (!selectedBit) return;
    
    // Trigger rotation animation
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
    
    toast({
      title: "Challenge Completed!",
      description: "+50 points added to your score",
    });
    
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };
  
  return (
    <motion.div 
      className="min-h-screen bg-black text-white overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      animate={pageControls}
    >
      {/* Stars, Rockets, and Space effects */}
      <SpaceBackground />
      
      {/* Main content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <Header headerControls={headerControls} />
        
        {/* Search bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {/* Tabs */}
        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Categories */}
        <CategoryFilters 
          currentCategory={currentCategory} 
          setCurrentCategory={setCurrentCategory}
          headerControls={headerControls} 
        />
        
        {/* Code Bits Grid */}
        <CodeBitGrid 
          filteredCodeBits={filteredCodeBits} 
          explodeEffect={explodeEffect} 
          handleSelectBit={handleSelectBit} 
        />
        
        {/* Pagination */}
        <Pagination 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          pageControls={pageControls} 
        />

        {/* Floating action buttons */}
        <FloatingActions />
      </div>
      
      {/* Code Editor Modal */}
      <CodeBitModal 
        showModal={showModal}
        setShowModal={setShowModal}
        selectedBit={selectedBit}
        isRotating={isRotating}
        handleCompleteBit={handleCompleteBit}
        codeEditorVisible={codeEditorVisible}
        setCodeEditorVisible={setCodeEditorVisible}
        toast={toast}
      />
      
      {/* Achievement notification */}
      <AchievementNotification showAchievement={showAchievement} />
    </motion.div>
  );
};

export default CodeBits;
