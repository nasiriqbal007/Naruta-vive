import React from "react";
import about from "../assets/about.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const points = [
    "Blending the power of nature with clinically backed science",
    "100% organic, clean-label nutraceutical formulations.",
    "No fillers, no shortcuts—only results-driven ingredients.",
    "Designed to support cognitive, immune, gut, and anti-aging health.",
    "Committed to purity, innovation, and lifelong wellness.",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="bg-[#F5F5F5]">
      <div className="h-padding flex flex-col py-20 gap-12 md:flex-col lg:flex-row sm:flex-col justify-between">
        <motion.div
          className="flex flex-1 flex-col ml-4 md:flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>
            <span className="grey">About </span>Us
          </h2>
          <p className="mt-10">
            At the core of our brand is a belief: true wellness begins with
            nature, and thrives through science. We create premium organic
            nutraceutical supplements that are clean, clinically researched, and
            truly effective.
          </p>
          <ul className="mt-12">
            {points.map((point, index) => (
              <li key={index} className="flex flex-row mt-4">
                <ArrowRight className="heading mr-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <button className="btn-primary bg-primary hover:bg-[var(--secondaryColor)] self-start mt-12">
            Learn more
          </button>
        </motion.div>
        <motion.div
          className="rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={about}
            alt="about us img"
            className="bg-black rounded-2xl max-w-full w-full md:w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
