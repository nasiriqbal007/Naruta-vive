import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { testimonials } from "../../data/testimonial_data";
import { getVisibleCards, getVisibleCount } from "./utils";
import TestimonialCard from "./TestimonialCard";
import { motion, useInView } from "framer-motion";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonials.length / 2)
  );
  const [visibleCount, setVisibleCount] = useState(
    getVisibleCount(window.innerWidth)
  );

  const updateVisibleCount = () => {
    setVisibleCount(getVisibleCount(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const { visibleCards, centerCardIndex } = getVisibleCards(
    testimonials,
    activeIndex,
    visibleCount
  );

  const prevCard = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const nextCard = () =>
    setActiveIndex((prev) => Math.min(prev + 1, testimonials.length - 1));

  const instagramImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop",
  ];

  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true });

  return (
    <section id="testimonials" className="py-8 relative">
      <div className="text-center">
        <h2>
          <span className="grey">Customer </span>Love Us
        </h2>

        <div className="relative mt-10">
          <button
            className="hidden sm:hidden md:block left-8 testimonial-arrow"
            onClick={prevCard}
          >
            <ChevronLeft />
          </button>
          <button
            className="hidden sm:hidden md:block absolute right-8 testimonial-arrow"
            onClick={nextCard}
          >
            <ChevronRight />
          </button>

          <motion.div
            ref={cardsRef}
            className="flex justify-center gap-4 overflow-x-auto no-scrollbar px-2 sm:px-0"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {visibleCards.map((t, idx) => (
              <TestimonialCard
                key={t.id}
                testimonial={t}
                isCenter={idx === centerCardIndex}
              />
            ))}
          </motion.div>
        </div>

        <div className="py-12 px-5 overflow-hidden mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={{ x: ["00", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              <div className="flex items-center gap-10 mb-10 whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="text-xl primary">✦</span>
                    <h2 className="inline-block">Join The Movement</h2>
                    <span className="text-xl primary">✦</span>
                    <h2
                      className="inline-block text-transparent"
                      style={{
                        WebkitTextStroke: "1px rgba(140, 255, 100, 0.3)",
                      }}
                    >
                      Join The Movement
                    </h2>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <div className="flex gap-5 justify-center flex-wrap">
              {instagramImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="movement-img"
                  animate={{ y: ["0%", "-10%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  <img
                    src={img}
                    alt={`Instagram ${i + 1}`}
                    className="move object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
