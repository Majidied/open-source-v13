import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <motion.h1 
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}  // Initial state
        animate={{ opacity: 1, y: 0 }}    // Animate to
        transition={{ duration: 1 }}      // Animation duration
      >
        Open Source v13
      </motion.h1>
      <motion.p 
        className="text-2xl mt-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        Join us in exploring the next evolution of Open Source!
      </motion.p>
      <motion.button 
        className="mt-6 bg-white text-indigo-600 py-2 px-6 rounded-full font-semibold"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ delay: 1, duration: 0.5 }}
      >
        Learn More
      </motion.button>
    </section>
  );
}

export default Hero;
