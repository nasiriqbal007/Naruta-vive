import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero_bg.png";
import hero2 from "../assets/hero2.png";

const Hero = () => {
  return (
    <section id="home" className="h-padding">
      <div
        className="relative bg-cover bg-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* content */}
        <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Animated Text */}
          <motion.div
            className="text-white text-center md:text-left max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="secondary">Nourish</span> Your Body, Fuel Your
              Potential
            </h1>
            <p className="mt-6 text-sm light md:text-base opacity-90 leading-relaxed">
              Premium supplements designed to optimize your health and
              performance. Science-backed formulas for real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>

          {/* Animated Foreground Image */}
          <motion.div
            className="mt-6 md:mt-0 flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={hero2}
              alt="Premium Supplements"
              className="w-64 md:w-80 lg:w-96 xl:w-[450px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
