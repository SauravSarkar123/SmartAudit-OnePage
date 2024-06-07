import React from 'react';
import { GridBackgroundDemo } from '@/components/ui/GridDemo';

const About = () => {
  return (
    <section id="about" className="relative py-16 text-white overflow-hidden bg-gray-900">
      <GridBackgroundDemo />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            We are passionate blockchain experts dedicated to securing smart contracts and blockchain transactions. Our mission: to safeguard your assets with thorough audits and ensure your blockchain projects&apos; integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center">
          <div className="flex flex-col items-center text-center">
            <img src="/about1.jpg" alt="Vision Icon" className="w-32 h-32 rounded-full mb-6 shadow-xl" />
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent text-gradient">Our Vision</h3>
            <p className="max-w-md">
              To be the go-to blockchain security provider, trusted globally by developers and users.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/about2.jpg" alt="Mission Icon" className="w-32 h-32 rounded-full mb-6 shadow-xl" />
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent text-gradient">Our Mission</h3>
            <p className="max-w-md">
              To enhance blockchain safety and reliability with rigorous audits and comprehensive analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
