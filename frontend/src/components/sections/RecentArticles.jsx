'use client';

import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "Green Energy Solutions for Business",
    image: "/images/responsive-images/blogs/1199-1-banner.jpg",
    href: "/blog/green-energy-solutions-business",
    large: true
  },
  {
    id: 2,
    title: "Solar Panel Solutions for UK Business",
    excerpt: "Commercial Solar Panels can bring significant long-term energy cost savings to your business",
    image: "/images/responsive-images/blogs/1199-2-banner.jpg",
    href: "/blog/solar-panel-solutions-uk-business"
  },
  {
    id: 3,
    title: "LED Lighting Solutions - Bright Ideas for Business",
    excerpt: "LED Lighting offers the best working light and typically saves 60-80% on energy costs",
    image: "/images/responsive-images/blogs/1199-3-banner.jpg",
    href: "/blog/led-lighting-solutions-bright-ideas"
  },
  {
    id: 4,
    title: "Combined Heat and Power Solutions",
    excerpt: "Generate your own electricity from gas at a lower cost than you can buy it with CHP systems",
    image: "/images/responsive-images/blogs/1199-6-banner.jpg",
    href: "/blog/combined-heat-and-power-solutions"
  }
];

// Các bài viết dự phòng có thể sử dụng:
/*
Additional articles available:
{
  id: 5,
  title: "EV Charging Solutions for Business",
  excerpt: "Electric Vehicle charging infrastructure for your staff and customers",
  image: "/images/v2/ev-charging.png",
  href: "/blog/ev-charging-solutions-business"
},
{
  id: 6,
  title: "Green Battery Storage Solutions", 
  excerpt: "Store renewable energy efficiently with modern battery storage systems",
  image: "/images/v2/green-battery-storage.png",
  href: "/blog/green-battery-storage-solutions"
},
{
  id: 7,
  title: "Heating and Cooling Efficiency",
  excerpt: "HVAC optimization for maximum energy efficiency and cost savings",
  image: "/images/v2/hvac.png",
  href: "/blog/heating-cooling-efficiency-hvac"
},
{
  id: 8,
  title: "Funding and Grants for Green Energy",
  excerpt: "Government incentives and grants available for renewable energy projects",
  image: "/images/v2/funding.png",
  href: "/blog/funding-grants-green-energy"
}
*/

// Hoặc sử dụng ảnh từ thư mục blogs gốc:
/*
Alternative blog images from responsive-images/blogs/:
- 575-61-banner.jpg (AST Plastic Containers)
- 575-54-banner.jpg (Wenlock Spring Water)  
- 575-55-banner.jpg (School testimonial)
- 575-60-banner.jpg (Voltage Optimisation)
- 575-1-banner.jpg
- 575-10-banner.jpg
- 575-11-banner.jpg
- 575-13-banner.jpg
- 575-14-banner.jpg
- 575-17-banner.jpg
- 575-18-banner.jpg
... và nhiều ảnh khác
*/

export default function RecentArticles() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#1b695e] mb-2">Recent Articles</h2>
          <p className="text-gray-600">Updates from our blog...</p>
        </div>        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Article - 8 columns, spans first row */}
          <div className="md:col-span-8">
            <div className="group h-[240px] overflow-hidden relative bg-gray-900">
              <Link href={articles[0].href} className="block h-full">                <div className="relative h-full w-full">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-[#30baa7] text-white px-4 py-3">
                      <h3 className="text-base font-normal uppercase leading-tight text-left">
                        {articles[0].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Small Article 1 - 4 columns, completes first row */}
          <div className="md:col-span-4">
            <div className="group h-[240px] overflow-hidden relative bg-gray-900">              <Link href={articles[1].href} className="block h-full">
                <div className="relative h-full w-full">
                  <img
                    src={articles[1].image}
                    alt={articles[1].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-[#30baa7] text-white px-4 py-3 text-left">
                      <h3 className="text-sm font-normal uppercase leading-tight mb-1">
                        {articles[1].title}
                      </h3>
                      {articles[1].excerpt && (
                        <>
                          <hr className="border-white border-opacity-50 my-2" />
                          <p className="text-xs leading-tight text-white text-shadow-sm">
                            {articles[1].excerpt}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Small Article 2 - 4 columns, starts second row */}
          <div className="md:col-span-4">
            <div className="group h-[240px] overflow-hidden relative bg-gray-900">              <Link href={articles[2].href} className="block h-full">
                <div className="relative h-full w-full">
                  <img
                    src={articles[2].image}
                    alt={articles[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-[#30baa7] text-white px-4 py-3 text-left">
                      <h3 className="text-sm font-normal uppercase leading-tight mb-1">
                        {articles[2].title}
                      </h3>
                      {articles[2].excerpt && (
                        <>
                          <hr className="border-white border-opacity-50 my-2" />
                          <p className="text-xs leading-tight text-white text-shadow-sm">
                            {articles[2].excerpt}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Small Article 3 - 4 columns, continues second row */}
          <div className="md:col-span-4">
            <div className="group h-[240px] overflow-hidden relative bg-gray-900">              <Link href={articles[3].href} className="block h-full">
                <div className="relative h-full w-full">
                  <img
                    src={articles[3].image}
                    alt={articles[3].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-[#30baa7] text-white px-4 py-3 text-left">
                      <h3 className="text-sm font-normal uppercase leading-tight mb-1">
                        {articles[3].title}
                      </h3>
                      {articles[3].excerpt && (
                        <>
                          <hr className="border-white border-opacity-50 my-2" />
                          <p className="text-xs leading-tight text-white text-shadow-sm">
                            {articles[3].excerpt}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* More Updates Button - 4 columns, completes second row */}
          <div className="md:col-span-4">
            <div className="h-[240px] bg-gray-100 border border-gray-200 flex items-center justify-center">
              <Link 
                href="/blog" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors duration-200 font-medium"
              >
                more updates »
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
