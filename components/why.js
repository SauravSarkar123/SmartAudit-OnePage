import React from 'react';
import { GridBackgroundDemo } from '@/components/ui/GridDemo';

const Why = () => {
  return (
    <div className="relative py-12 bg-gray-900 text-white overflow-hidden">
      <GridBackgroundDemo />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold mb-6">Why Choose Us?</h3>
          <p className="text-lg leading-relaxed mx-auto max-w-2xl mb-10">
            Our team consists of experienced professionals with deep knowledge in blockchain technology and cybersecurity. We use the latest tools and methodologies to provide thorough audits and actionable insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="relative p-2 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div
              className="relative bg-cover bg-center bg-no-repeat h-64 rounded-lg"
              style={{ backgroundImage: 'url(/icon1.jpg)' }}
            >
              <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-sm leading-relaxed opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 ">
                Our rigorous pre-deployment and ongoing smart contract audits identify and fix vulnerabilities, ensuring user trust and transaction security.
              </p>
            </div>
            <h4 className="text-xl font-bold mt-4 relative text-gradient">Comprehensive Security Audits</h4>
          </div>
          <div className="relative p-2 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div
              className="relative bg-cover bg-center bg-no-repeat h-64 rounded-lg"
              style={{ backgroundImage: 'url(/icon2.jpg)' }}
            >
              <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-sm leading-relaxed opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                Spydar360&apos;s Cyber Defense Center offers 24/7 blockchain monitoring, detecting and mitigating threats instantly to prevent hacks and financial losses, guaranteeing uninterrupted service.
              </p>
            </div>
            <h4 className="text-xl font-bold mt-4 relative text-gradient">Real-Time Monitoring and Incident Response</h4>
          </div>
          <div className="relative p-2 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div
              className="relative bg-cover bg-center bg-no-repeat h-64 rounded-lg"
              style={{ backgroundImage: 'url(/icon3.jpg)' }}
            >
              <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-sm leading-relaxed opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                Utilizing global intelligence feeds and advanced AI, Spydar360 detects unusual transaction patterns and emerging threats, providing top-notch protection against sophisticated attacks.
              </p>
            </div>
            <h4 className="text-xl font-bold mt-4 relative text-gradient">Advanced Threat Intelligence</h4>
          </div>
          <div className="relative p-2 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div
              className="relative bg-cover bg-center bg-no-repeat h-64 rounded-lg"
              style={{ backgroundImage: 'url(/icon4.jpg)' }}
            >
              <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-sm leading-relaxed opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                Spydar360 harnesses blockchain&apos;s power for a decentralized, transparent, and high-performance security infrastructure, ensuring your Dapp is reliable and resilient against failures and censorship.
              </p>
            </div>
            <h4 className="text-xl font-bold mt-4 relative text-gradient">Decentralized and Resilient Security Infrastructure</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
