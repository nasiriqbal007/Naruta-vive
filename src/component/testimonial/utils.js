export const getVisibleCount = (width) => {
  if (width >= 1024) return 3;
  if (width >= 800) return 2;
  return 1;
};

export const getVisibleCards = (testimonials, activeIndex, visibleCount) => {
  const start = Math.max(0, activeIndex - Math.floor(visibleCount / 2));
  const end = Math.min(testimonials.length, start + visibleCount);
  const visibleCards = testimonials.slice(start, end);
  const centerCardIndex = activeIndex - start;
  return { visibleCards, centerCardIndex };
};
