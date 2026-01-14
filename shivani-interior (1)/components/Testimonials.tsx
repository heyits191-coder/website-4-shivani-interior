
import React, { useState, useEffect } from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase, AnimatePresence } from 'framer-motion';
const motion = motionBase as any;
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating: number;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    text: "Interior by Shivani transformed our home beautifully. The design quality and execution were truly impressive. Every detail was handled with extreme precision.",
    author: "Rahul Sharma",
    role: "Residential Interior Client",
    rating: 5,
  },
  {
    id: 2,
    text: "Professional team, transparent pricing, and timely delivery. Highly recommended for commercial interior work in Lucknow. They know exactly how to manage large-scale office projects.",
    author: "Vikram Malhotra",
    role: "Commercial Project Client",
    rating: 5,
  },
  {
    id: 3,
    text: "Excellent exterior design and finishing. The final result exceeded our expectations. Our building now stands out as a landmark in the neighborhood.",
    author: "Anita Verma",
    role: "Exterior Design Client",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <section className="relative py-24 md:py-40 bg-[#EEE9DF] overflow-hidden border-t border-[#C9C1B1]/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB162]/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-6"
          >
            <span className="w-12 h-[2px] bg-[#FFB162]" />
            <span className="text-xs uppercase tracking-[0.5em] text-[#FFB162] font-bold">Success Stories</span>
            <span className="w-12 h-[2px] bg-[#FFB162]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-[#1B2632] mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative h-[480px] md:h-[380px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.5 } }}
              className="absolute w-full"
            >
              <div className="bg-[#F4F1EA] p-10 md:p-16 relative border border-[#C9C1B1]/30 shadow-2xl">
                <div className="absolute -top-6 left-10 md:left-16 text-[#1B2632]">
                  <div className="bg-[#FFB162] p-4 text-[#1B2632] shadow-lg">
                    <Quote size={28} />
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-8">
                  <div className="flex space-x-1">
                    {[...Array(testimonialData[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FFB162] text-[#FFB162]" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-display text-[#1B2632] leading-relaxed font-medium italic">
                    "{testimonialData[currentIndex].text}"
                  </p>

                  <div className="space-y-1">
                    <h4 className="text-[#1B2632] font-bold tracking-widest uppercase text-sm">{testimonialData[currentIndex].author}</h4>
                    <p className="text-[#A35139] text-[10px] uppercase tracking-[0.3em] font-bold">{testimonialData[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4 md:-mx-12 lg:-mx-24">
            <button onClick={prevTestimonial} className="pointer-events-auto w-12 h-12 rounded-full border border-[#C9C1B1] hover:border-[#FFB162] hover:text-[#FFB162] transition-all flex items-center justify-center bg-[#EEE9DF]/80 backdrop-blur-sm shadow-md">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextTestimonial} className="pointer-events-auto w-12 h-12 rounded-full border border-[#C9C1B1] hover:border-[#FFB162] hover:text-[#FFB162] transition-all flex items-center justify-center bg-[#EEE9DF]/80 backdrop-blur-sm shadow-md">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-12 md:mt-16">
          {testimonialData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
              className={`h-[2.5px] transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-[#FFB162]' : 'w-6 bg-[#C9C1B1]/50 hover:bg-[#A35139]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
