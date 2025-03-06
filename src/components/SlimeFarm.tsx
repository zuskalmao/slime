import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, ChevronRight } from 'lucide-react';

const SlimeFarm = () => {
  const farmCardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="farm" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Slime Farm</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stake your $SLIME tokens and earn slimy rewards. The longer you stake, the more you earn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Basic Pool", apy: "5%", duration: "7 days", color: "bg-slime-400/20" },
            { title: "Advanced Pool", apy: "12%", duration: "30 days", color: "bg-slime-400/40" },
            { title: "Elite Pool", apy: "25%", duration: "90 days", color: "bg-slime-400/60" }
          ].map((pool, index) => (
            <motion.div
              key={index}
              className={`${pool.color} border border-slime-400/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-slime-400/20 transition-all duration-300`}
              variants={farmCardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                <Droplet className="w-8 h-8 text-slime-400 mr-2" />
                <h3 className="text-2xl font-bold">{pool.title}</h3>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-slime-400 mb-1">{pool.apy}</p>
                <p className="text-gray-400">Estimated APY</p>
              </div>
              <div className="mb-6">
                <p className="text-lg font-semibold">{pool.duration}</p>
                <p className="text-gray-400">Lock period</p>
              </div>
              <motion.button
                className="w-full py-3 px-4 bg-black/50 hover:bg-slime-400 hover:text-black border border-slime-400 rounded-lg text-slime-400 hover:text-black transition-colors duration-300 flex items-center justify-center font-semibold"
                whileTap={{ scale: 0.98 }}
              >
                Stake Now <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Staking rewards are calculated daily and distributed automatically to your wallet. Withdrawals before the lock period ends will incur a 10% fee.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SlimeFarm;
