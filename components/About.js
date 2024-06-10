import React, { useRef, useEffect, useState } from 'react';
import { GridBackgroundDemo } from '@/components/ui/GridDemo';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-16 text-white overflow-hidden bg-gray-900"
      ref={aboutRef}
    >
      <GridBackgroundDemo />
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold mb-6 text-[#DFC03E]">About Us</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            We are passionate blockchain experts dedicated to securing smart contracts and blockchain transactions. Our mission: to safeguard your assets with thorough audits and ensure your blockchain projects&apos; integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center">
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <img src="/about1.jpg" alt="Vision Icon" className="w-32 h-32 rounded-full mb-6 shadow-xl" />
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-[#DFC03E]">Our Vision</h3>
            <p className="max-w-md">
              To be the go-to blockchain security provider, trusted globally by developers and users.
            </p>
          </div>
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <img src="/about2.jpg" alt="Mission Icon" className="w-32 h-32 rounded-full mb-6 shadow-xl" />
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-[#DFC03E]">Our Mission</h3>
            <p className="max-w-md">
              To enhance blockchain safety and reliability with rigorous audits and comprehensive analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
