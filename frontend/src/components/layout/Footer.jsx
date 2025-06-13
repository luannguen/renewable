'use client';

import { useCompanyInfo } from '@/hooks/useCompanyInfo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const { companyInfo, isLoading, error } = useCompanyInfo();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4">
          {/* Logo & Address */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 order-1 sm:order-0 mb-8 sm:mb-0">
            {companyInfo?.logo?.url ? (
              <Image
                src={companyInfo.logo.url.startsWith('http') ? companyInfo.logo.url : `${process.env.NEXT_PUBLIC_API_URL}${companyInfo.logo.url}`}
                alt={companyInfo.logo.alt || `${companyInfo.companyName} Logo`}
                width={companyInfo.logo.width || 200}
                height={companyInfo.logo.height || 60}
                className="w-auto h-12 mb-6"
              />
            ) : (
              <Image
                src="/images/rhub-logo-light.svg"
                alt={companyInfo?.companyName ? `${companyInfo.companyName} Logo` : "Renewable Hub Logo"}
                width={200}
                height={60}
                className="w-auto h-12 mb-6"
              />
            )}
            <address className="not-italic text-gray-300 leading-relaxed">
              {companyInfo?.contactSection?.address ? (
                <>
                  {companyInfo.contactSection.address.split(',').map((line, index) => (
                    <React.Fragment key={index}>
                      {line.trim()}
                      {index < companyInfo.contactSection.address.split(',').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <>
                  33-34 High Street<br />
                  Bridgnorth<br />
                  Shropshire<br />
                  WV14 4DB
                </>
              )}
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
                  href={`tel:${companyInfo?.contactSection?.phone || '01905317005'}`}
                  className="hover:text-green-400 transition-colors"
                >
                  Call us on {companyInfo?.contactSection?.phone || '01905 317 005'}
                </Link>
              </p>

              <p className="flex items-center justify-center text-lg">
                <i className="far fa-envelope mr-3 text-green-400" aria-hidden="true"></i>
                <Link
                  href={companyInfo?.contactSection?.email ? `mailto:${companyInfo.contactSection.email}` : "/contact-us"}
                  className="hover:text-green-400 transition-colors"
                >
                  {companyInfo?.contactSection?.email ? `Email: ${companyInfo.contactSection.email}` : 'Send us an email'}
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
            &copy;2016-2025 {companyInfo?.companyName || 'Renewable Hub Ltd'}, uk company no. 12899464 |{' '}
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