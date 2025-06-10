import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4">
          {/* Logo & Address */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 order-1 sm:order-0 mb-8 sm:mb-0">
            <Image
              src="/images/rhub-logo-light.svg"
              alt="Renewable Hub Logo"
              width={200}
              height={60}
              className="w-auto h-12 mb-6"
            />
            <address className="not-italic text-gray-300 leading-relaxed">
              33-34 High Street<br />
              Bridgnorth<br />
              Shropshire<br />
              WV14 4DB
            </address>
          </div>
          
          {/* Contact Details */}
          <div className="w-full sm:w-1/2 md:w-1/2 px-4 text-center order-0 sm:order-1 mb-8 sm:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-green-400">Contact</span> our team
            </h2>
            <hr className="border-green-400 w-24 mx-auto border-2 mb-6" />
            
            <div className="space-y-4">
              <p className="flex items-center justify-center text-lg">
                <i className="fas fa-phone mr-3 text-green-400" aria-hidden="true"></i>
                <Link 
                  href="tel:01905317005"
                  className="hover:text-green-400 transition-colors"
                >
                  Call us on 01905 317 005
                </Link>
              </p>
              
              <p className="flex items-center justify-center text-lg">
                <i className="far fa-envelope mr-3 text-green-400" aria-hidden="true"></i>
                <Link 
                  href="/contact-us"
                  className="hover:text-green-400 transition-colors"
                >
                  Send us an email
                </Link>
              </p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="w-full md:w-1/4 px-4 text-right order-2 text-center md:text-right">
            {/* This section can be used for additional links or social media */}
          </div>
        </div>
        
        {/* Credits */}
        <div className="credits text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            &copy;2016-2025 Renewable Hub Ltd, uk company no. 12899464 |{' '}
            <Link 
              href="/privacy-policy" 
              className="hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>
            {' '}
            <Link 
              href="https://www.ubiquitas.co.uk/" 
              className="ubiquitas hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              powered by <span className="font-semibold">ubiquitas</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
