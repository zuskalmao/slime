import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg py-2' : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center" 
            whileHover={{ scale: 1.05 }}
          >
            <Droplet className="w-8 h-8 text-slime-400 mr-2" />
            <span className="text-2xl font-bold text-white">$<span className="text-slime-400">SLIME</span></span>
          </motion.div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#farm" className="nav-link">Slime Farm</a>
            <a href="#game" className="nav-link">Play</a>
            <a href="#community" className="nav-link">Community</a>
            <motion.button 
              className="slime-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect Wallet
            </motion.button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-5 space-y-4">
              <a 
                href="#home" 
                className="block nav-link text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#farm" 
                className="block nav-link text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Slime Farm
              </a>
              <a 
                href="#game" 
                className="block nav-link text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Play
              </a>
              <a 
                href="#community" 
                className="block nav-link text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </a>
              <motion.button 
                className="slime-button w-full"
                whileTap={{ scale: 0.95 }}
              >
                Connect Wallet
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
