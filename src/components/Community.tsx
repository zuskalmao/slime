import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Github } from 'lucide-react';

const Community = () => {
  const socialLinks = [
    {
      name: "Twitter",
      description: "Follow us for the latest updates and announcements",
      icon: <Twitter size={40} className="text-slime-400" />,
      buttonText: "Follow @SlimeCoin",
      url: "#"
    },
    {
      name: "Discord",
      description: "Join our community and chat with fellow slimers",
      icon: <MessageCircle size={40} className="text-slime-400" />,
      buttonText: "Join Discord",
      url: "#"
    },
    {
      name: "GitHub",
      description: "Check out our open source code and contribute",
      icon: <Github size={40} className="text-slime-400" />,
      buttonText: "View Code",
      url: "#"
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with slimers from around the world and stay up to date with the latest $SLIME news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              className="bg-slime-400/5 border border-slime-400/20 rounded-xl p-6 backdrop-blur-sm hover:bg-slime-400/10 transition-all duration-300"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                {link.icon}
                <h3 className="text-2xl font-bold ml-3">{link.name}</h3>
              </div>
              <p className="text-gray-300 mb-6">{link.description}</p>
              <a 
                href={link.url}
                className="block w-full py-3 px-4 bg-black/50 hover:bg-slime-400 hover:text-black border border-slime-400 rounded-lg text-slime-400 hover:text-black transition-colors duration-300 text-center font-semibold"
              >
                {link.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 bg-slime-400/5 border border-slime-400/20 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest $SLIME updates directly to your inbox. No spam, just important announcements.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:rounded-l-lg mb-2 sm:mb-0 bg-black/70 border border-slime-400/30 focus:outline-none focus:border-slime-400 text-white"
            />
            <button className="slime-button rounded-l-lg sm:rounded-l-none rounded-r-lg sm:rounded-r-lg">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
