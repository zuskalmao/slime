import React from 'react';
import { Droplet, Twitter, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Droplet className="w-8 h-8 text-slime-400 mr-2" />
            <span className="text-2xl font-bold text-white">$<span className="text-slime-400">SLIME</span></span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-slime-400 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-slime-400 transition-colors duration-300">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-slime-400 transition-colors duration-300">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-slime-400 transition-colors duration-300">Home</a></li>
              <li><a href="#farm" className="hover:text-slime-400 transition-colors duration-300">Slime Farm</a></li>
              <li><a href="#game" className="hover:text-slime-400 transition-colors duration-300">Slime Dodge</a></li>
              <li><a href="#community" className="hover:text-slime-400 transition-colors duration-300">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-slime-400 transition-colors duration-300">Whitepaper</a></li>
              <li><a href="#" className="hover:text-slime-400 transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-slime-400 transition-colors duration-300">GitHub</a></li>
              <li><a href="#" className="hover:text-slime-400 transition-colors duration-300">Brand Assets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-slime-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slime-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slime-400 transition-colors duration-300">Risk Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <p>$SLIME is a memecoin with utility and game features, created for entertainment purposes.</p>
          <p className="mt-2">© {new Date().getFullYear()} $SLIME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
