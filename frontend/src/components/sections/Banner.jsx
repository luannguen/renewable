import { Button } from '@/components/ui/button';
import { useHomepageData } from '@/hooks/useHomepageData';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  const { homepageData, banners, isLoading, error } = useHomepageData();

  // Loading state
  if (isLoading) {
    return (
      <section className="banner banner-23 banner-fixed theme-dark flex relative">
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.warn('Banner API Error:', error);
    // Fallback to static content if API fails
  }

  // Get hero banner or fallback to first banner
  const heroBanner = banners?.find(banner => banner.position === 'hero') || banners?.[0];
  const heroData = homepageData?.heroSection; return (<section className="banner banner-23 banner-fixed theme-dark flex relative">
    <div className="container mx-auto px-4 py-8 relative z-10"><div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 px-4 order-0 md:order-0 self-center">
        <div className="leader">              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
          {heroData?.title || heroBanner?.title || 'Renewable Hub'}
        </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-heading">
            {heroData?.subtitle || heroBanner?.subtitle || 'Green Solutions for business'}
          </h2>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            {heroData?.description || heroBanner?.content || `We are passionate about protecting and sustaining the environment through ethical business practice and will work 
                with your business to build an energy strategy that will not only help you to 
                become 'Green', but will also save your business money`}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="light"
              size="lg"
              asChild
            >
              <Link href="/about-us-how-renewable-hub-operates">
                Ethics
              </Link>
            </Button>

            <Button
              variant="primary"
              size="lg"
              asChild
            >
              <Link href={heroData?.ctaUrl || heroBanner?.ctaUrl || "#what"}>
                {heroData?.ctaText || heroBanner?.ctaText || 'What we do'}
              </Link>
            </Button>
          </div>
        </div>
      </div>            <div className="w-full md:w-1/2 px-4 order-1 md:order-1 text-center self-center">
        <div className="mb-8">
          {heroData?.backgroundImage?.url || heroBanner?.image?.url ? (
            <Image
              src={heroData?.backgroundImage?.url || heroBanner?.image?.url}
              alt={heroData?.backgroundImage?.alt || heroBanner?.image?.alt || "Renewable Energy Solutions"}
              width={heroData?.backgroundImage?.width || heroBanner?.image?.width || 500}
              height={heroData?.backgroundImage?.height || heroBanner?.image?.height || 400}
              className="w-full h-auto max-w-lg mx-auto"
              priority
            />) : (
            <Image
              src="/images/v2/go-green.png"
              alt="Go Green with Renewable Hub solutions"
              width={400}
              height={300}
              className="w-full h-auto max-w-sm mx-auto"
              priority
            />
          )}
        </div>

        <div className="hand hand3">
          <Link
            href="#contact"
            className="pulse"
          >
            ACT NOW
          </Link>
        </div>
      </div>
    </div>
    </div>
  </section>
  );
}
