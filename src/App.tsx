import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SlimeFarm from './components/SlimeFarm';
import SlimeGame from './components/SlimeGame';
import Community from './components/Community';
import Footer from './components/Footer';
import SlimeFilter from './components/SlimeFilter';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SlimeFilter />
      <AnimatePresence>
        {loading ? (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-24 h-24 bg-slime-400 rounded-full slime-blob"
              animate={{ 
                scale: [1, 1.2, 1],
                borderRadius: ["50%", "40% 40% 60% 60%", "50%"]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5 
              }}
            />
            <motion.p 
              className="absolute mt-32 text-2xl font-bold"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5 
              }}
            >
              $SLIME
            </motion.p>
          </motion.div>
        ) : (
          <div className="min-h-screen font-space">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Navbar />
              <main>
                <Hero />
                <SlimeFarm />
                <SlimeGame />
                <Community />
              </main>
              <Footer />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
