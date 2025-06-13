'use client';
import { useFeaturedProducts } from '@/hooks/useProducts';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

export default function ProductGrid() {
  const { featuredProducts, isLoading, error } = useFeaturedProducts(8);

  // Fallback static data
  const staticProducts = [
    {
      iconClass: 'carbon',
      title: 'Carbon Offsetting',
      description: "Helps your company on it's journey to Net Zero - while not the answer, offsetting IS part of the solution",
      link: '/carbon-offsetting'
    },
    {
      iconClass: 'chp',
      title: 'Combined Heat & Power',
      description: 'Generate your own electricity from gas at a lower cost than you can buy it!',
      link: '/combined-heat-and-power-chp'
    },
    {
      iconClass: 'energy',
      title: 'Business Energy Purchasing',
      description: "We are specialists in finding the best energy contracts for businesses, from fixed to more innovative 'flex' products - don't pay more than you need to.",
      link: '/404'
    },
    {
      iconClass: 'ev',
      title: 'EV Charging',
      description: 'An exciting growth market whether you are looking at local charging for your staff / customers or larger scale EV Charging parks - speak to us first!',
      link: '/electric-vehicle-charging-points-where-to-get-them-uk'
    }, {
      iconClass: 'money',
      title: 'Payment Services',
      description: 'We have access to the best rates going - speak to us to start saving',
      link: '/404'
    },
    {
      iconClass: 'led',
      title: 'LED Lighting',
      description: 'LED Lighting offers the best working light for your employees, typically saves 60-80% and the bulbs last significantly longer',
      link: '/led-lighting-solutions-uk'
    },
    {
      iconClass: 'heating',
      title: 'Heating Solutions',
      description: 'Everything from energy-efficient boilers, distribution systems and Zoned Heating, to biomass and ground-source heating systems',
      link: '/heating-solutions-energy-efficient-boilers'
    },
    {
      iconClass: 'cool',
      title: 'Heating & Cooling Efficiency',
      description: 'Air conditioning, Refrigeration, Heat pump systems - we can help you make the most of your existing systems to save',
      link: '/heating-refrigeration-and-cooling-solutions'
    },
    {
      iconClass: 'solar',
      title: 'Commercial Solar Panels',
      description: 'Solar Panels (PV) can bring significant long-term energy cost savings to your business',
      link: '/solar-panel-solutions-uk'
    },
    {
      iconClass: 'vo',
      title: 'Voltage Optimisation',
      description: 'Save up to 15% on your energy costs, a FREE simple test will reveal if you can make savings on your energy consumption',
      link: '/uk-voltage-optimisation'
    },
    {
      iconClass: 'water',
      title: 'Water Audit',
      description: 'A completely FREE audit which could recover £10,000\'s for your business if we find you are being overcharged.',
      link: '/water-rates-reviews-uk'
    }
  ];

  // Use API data if available, otherwise fallback to static
  const products = featuredProducts.length > 0 ? featuredProducts.map(product => ({
    iconClass: 'solar', // Default icon class
    title: product.title,
    description: product.description || product.excerpt || 'Sản phẩm chất lượng cao',
    link: `/products/${product.slug}`,
    image: product.featuredImage?.url,
    price: product.price
  })) : staticProducts;

  // Embla Carousel setup - each product is a separate slide
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': {
          slidesToScroll: 1,
          containScroll: 'trimSnaps'
        },
        '(min-width: 1024px)': {
          slidesToScroll: 1,
          containScroll: 'trimSnaps'
        }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <>
      {/* Products Header */}
      <section className="mt-12 pb-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl text-center">
              <h2 id="products" className="section-heading">
                Some of our <span className="green">Green</span> products...
              </h2>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </section>      {/* Products Grid */}
      <section className="mb-12 theme-products">
        <div className="container mx-auto px-4">
          <div className="slider slider-products relative">
            {/* Embla Carousel */}
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {products.map((product, index) => (
                  <div key={index} className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-3">
                    <div className="product-card bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 h-full flex flex-col">
                      <div className={`icon ${product.iconClass} mb-4`}>&nbsp;</div>

                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {product.title}
                      </h3>

                      <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                        {product.description}
                      </p>

                      <p className="mt-auto">
                        <Link
                          href={product.link}
                          className="btn btn-info btn-sm"
                        >
                          view details
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={scrollPrev}
              className="embla__prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-chevron-left text-gray-600"></i>
            </button>

            <button
              onClick={scrollNext}
              className="embla__next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-chevron-right text-gray-600"></i>
            </button>            {/* Dots indicator */}
            <div className="embla__dots flex justify-center mt-8 space-x-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`embla__dot ${selectedIndex === index ? 'is-selected' : ''
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
