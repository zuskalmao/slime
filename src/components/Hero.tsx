import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, Droplet } from 'lucide-react';

const Hero = () => {
  const slimeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!slimeRef.current) return;
    
    const drops = Array.from({ length: 5 }).map((_, i) => {
      const drop = document.createElement('div');
      drop.className = 'absolute bg-slime-400 rounded-full';
      drop.style.width = `${Math.random() * 40 + 20}px`;
      drop.style.height = `${Math.random() * 40 + 20}px`;
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.top = '0';
      drop.style.opacity = '0.8';
      slimeRef.current?.appendChild(drop);
      return drop;
    });
    
    drops.forEach(drop => {
      gsap.to(drop, {
        y: `${Math.random() * 200 + 100}`,
        duration: 2 + Math.random() * 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
      });
    });
    
    return () => {
      drops.forEach(drop => drop.remove());
    };
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-slime-radial opacity-50 pointer-events-none"></div>
      
      <div ref={slimeRef} className="absolute inset-0 slime-drop pointer-events-none overflow-hidden"></div>
      
      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <motion.div 
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={childVariants} className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                className="w-24 h-24 bg-slime-400 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  borderRadius: ["50%", "40% 40% 60% 60%", "50%"] 
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Droplet size={40} className="text-black" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={childVariants}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            The Slimiest Token on <span className="text-slime-400">Solana</span>
          </motion.h1>
          
          <motion.p 
            variants={childVariants}
            className="text-xl md:text-2xl text-gray-300 mt-6"
          >
            Join the slimy revolution. Ooze your way to the moon.
          </motion.p>
          
          <motion.div 
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <motion.button 
              className="slime-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Buy $SLIME</span>
              <span className="slime-glow"></span>
            </motion.button>
            
            <motion.button 
              className="px-6 py-3 border-2 border-slime-400 text-slime-400 rounded-full font-bold hover:bg-slime-400/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Whitepaper
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#farm">
          <ArrowDown className="text-slime-400 w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
