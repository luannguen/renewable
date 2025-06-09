import React from 'react';
import Image from 'next/image';

export default function CompanyLogos() {
  const logos = [
    { src: '/images/logos/01aga-logo.png', alt: 'AGA' },
    { src: '/images/logos/01coop-logo.png', alt: 'Co-op' },
    { src: '/images/logos/02nhs-logo.png', alt: 'NHS' },
    { src: '/images/logos/03gullivers-logo.png', alt: 'Gullivers' },
    { src: '/images/logos/04-holidayinn-logo.png', alt: 'Holiday Inn' },
    { src: '/images/logos/05business-west-logo.png', alt: 'Business West' },
    { src: '/images/logos/06nisa-logo.png', alt: 'Nisa' },
    { src: '/images/logos/07reconomy-logo.png', alt: 'Reconomy' },
    { src: '/images/logos/hosizaki-logo.png', alt: 'Hoshizaki' },
    { src: '/images/logos/rnib-logo.png', alt: 'RNIB' },
    { src: '/images/logos/scc-logo.png', alt: 'SCC' },
    { src: '/images/logos/sever-hospice-logo.png', alt: 'Severn Hospice' },
    { src: '/images/logos/ymca-logo.png', alt: 'YMCA' },  ];  return (
    <section className="bg-white pt-4 pb-0">
      <div className="container mx-auto px-4">        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#1b695e'}}>
            Meet some of our clients...
          </h2>
          <hr className="border-gray-300 w-full max-w-4xl mx-auto border-t-1" />
        </div>
        <div className="slider slider-logo overflow-hidden">
          <div className="flex animate-scroll space-x-8 items-center">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-44 h-24 flex items-center justify-center relative">
                <Image
                  src={logo.src}
                  alt={`${logo.alt} - Companies we work with`}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 768px) 140px, 180px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
