import React, { useEffect, useRef, useState } from 'react';
import { GridBackgroundDemo } from '@/components/ui/GridDemo';

const Why = () => {
  const [isInView, setIsInView] = useState(false);
  const whyRef = useRef(null);

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

    if (whyRef.current) {
      observer.observe(whyRef.current);
    }

    return () => {
      if (whyRef.current) {
        observer.unobserve(whyRef.current);
      }
    };
  }, []);

  return (
    <div id="why" className="relative py-12 bg-gray-900 text-white overflow-hidden" ref={whyRef}>
      <GridBackgroundDemo />
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 transition-opacity duration-1000 ease-in-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <h3 className="text-3xl font-extrabold mb-6 text-[#DFC03E]">Why Choose Us?</h3>
          <p className="text-lg leading-relaxed mx-auto max-w-2xl mb-10">
            Our team consists of experienced professionals with deep knowledge in blockchain technology and cybersecurity. We use the latest tools and methodologies to provide thorough audits and actionable insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {[
            {
              image: '/icon1.jpg',
              title: 'Comprehensive Security Audits',
              description: 'Our rigorous pre-deployment and ongoing smart contract audits identify and fix vulnerabilities, ensuring user trust and transaction security.'
            },
            {
              image: '/icon2.jpg',
              title: 'Real-Time Monitoring and Incident Response',
              description: 'Spydar360&apos;s Cyber Defense Center offers 24/7 blockchain monitoring, detecting and mitigating threats instantly to prevent hacks and financial losses, guaranteeing uninterrupted service.'
            },
            {
              image: '/icon3.jpg',
              title: 'Advanced Threat Intelligence',
              description: 'Utilizing global intelligence feeds and advanced AI, Spydar360 detects unusual transaction patterns and emerging threats, providing top-notch protection against sophisticated attacks.'
            },
            {
              image: '/icon4.jpg',
              title: 'Decentralized and Resilient Security Infrastructure',
              description: 'Spydar360 harnesses blockchain&apos;s power for a decentralized, transparent, and high-performance security infrastructure, ensuring your Dapp is reliable and resilient against failures and censorship.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`relative p-2 rounded-lg text-center hover:shadow-xl transition-all duration-1000 ease-in-out delay-${index * 150}ms ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              <div
                className="relative bg-cover bg-center bg-no-repeat h-64 rounded-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-sm leading-relaxed opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                  {item.description}
                </p>
              </div>
              <h4 className="text-xl font-bold mt-4 relative text-[#DFC03E]">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
