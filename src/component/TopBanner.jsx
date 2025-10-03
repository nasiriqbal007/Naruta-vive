import React from "react";
import { motion } from "framer-motion";

const TopBanner = () => {
  return (
    <motion.section
      className="bg-primary h-padding py-4 md:py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 top-banner-text">
        <p className="text-center sm:text-left whitespace-nowrap">
          📞 (+123) 123 456 7890
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <p className="whitespace-nowrap">
            📦 Free gift when you spend over $150
          </p>
          <p className="whitespace-nowrap">💳 All payments accepted</p>
        </div>

        <div className="flex justify-center sm:justify-end gap-2 whitespace-nowrap">
          <select className="bg-transparent border-none outline-none cursor-pointer">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <select className="bg-transparent border-none outline-none cursor-pointer">
            <option>$ USD</option>
            <option>€ EUR</option>
          </select>
        </div>
      </div>
    </motion.section>
  );
};

export default TopBanner;
