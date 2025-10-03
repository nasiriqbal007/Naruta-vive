import React from "react";

const TestimonialCard = ({ testimonial, isCenter }) => {
  return (
    <div
      className={`relative flex-shrink-0 flex py-20 flex-col items-center transition-transform duration-300 ${
        isCenter ? "-mt-8" : ""
      } w-[260px] sm:w-[380px] lg:w-[460px]`}
    >
      <article
        className={`flex flex-col shadow-xl rounded-xl p-4 relative w-full h-[280px] ${
          isCenter ? "bg-[var(--secondaryColor)]" : "bg-white"
        }`}
      >
        <blockquote className="flex-1 relative">
          <div
            className={`text-center text-3xl sm:text-4xl font-bold ${
              isCenter ? "light" : "secondary"
            }`}
          >
            ❝
          </div>
          <p className={`text-center ${isCenter ? "light" : ""}`}>
            {testimonial.text}
          </p>
        </blockquote>

        <div className="secondary pb-7">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className={`${isCenter ? "light" : ""}`}>
              ★
            </span>
          ))}
        </div>

        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="testimonial-avatar"
        />
      </article>

      <figure className="mt-10 flex flex-col items-center">
        <h2>{testimonial.name}</h2>
        <p className="text-sm">{testimonial.role}</p>
      </figure>
    </div>
  );
};

export default TestimonialCard;
