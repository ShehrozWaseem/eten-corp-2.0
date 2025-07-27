
import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  bgImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Eten Corporation",
    subtitle: "A leading distributor in the meat industry, emphasizing quality assurance and customer satisfaction.",
    bgImage: "/images/1.jpg"
  },
  {
    id: 2,
    title: "Quality Meats from Trusted Sources",
    subtitle: "Premium beef, chicken, and turkey sourced from reputable North American producers.",
    bgImage: "/images/2.jpg"
  },
  {
    id: 3,
    title: "Halal Certified Products",
    subtitle: "Our commitment to halal integrity, with fully certified sourcing and handling.",
    bgImage: "/images/3.png"
  }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 10-second transition

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-brand-dark">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
           <div
            className={`w-full h-full bg-cover bg-center ${index === currentSlide ? 'animate-kenburns' : ''}`}
            style={{ backgroundImage: `url(${slide.bgImage})`}}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-1000 ease-out absolute transform ${
              index === currentSlide ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>{slide.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-brand-light" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>{slide.subtitle}</p>
          </div>
        ))}
      </div>
       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
