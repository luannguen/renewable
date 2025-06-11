'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ServiceDetailBanner from '@/components/services/ServiceDetailBanner';
import ServiceDetailContent from '@/components/services/ServiceDetailContent';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

// Service data với slug
const servicesData = [
  {
    id: 1,
    slug: "solar-panel-solutions",
    name: "Solar PV",
    fullName: "Solar Panel Solutions",
    subtitle: "Solar Power for Business",
    description: "Solar Photovoltaics (PV) panels are a great investment for commercial organisations. By harnessing the power of the sun they convert solar energy into usable electricity for free, immediately reducing your energy costs.",
    shortDescription: "Harness the power of the sun to reduce electricity costs and carbon footprint",
    heroTitle: "Interested in Solar but concerned about the costs?",
    heroDescription: "Our comprehensive FREE Solar Review will highlight the best options available to you, including funding and grants",
    heroButton: "Get Your FREE Review",
    image: "/images/services/solar-panels.svg",
    icon: "fas fa-solar-panel",
    category: "Renewable Energy",
    benefits: [
      "Reduce your electricity costs by up to 40% with no Capex",
      "Optimum sized PV system - where you use as much of the energy produced as possible", 
      "Market Leading Products from our approved suppliers",
      "Improve sustainability of supply with reduced grid reliance",
      "Reduce your Carbon Footprint",
      "Improve Corporate Social Responsibility (CSR)"
    ],
    features: [
      "Analysis of your energy usage to calculate your optimum PV system",
      "Cost / benefit analysis",
      "Carbon savings calculation", 
      "Payback periods estimation",
      "ROI including details of any grants which may be available"
    ],
    fundingOptions: [
      {
        title: "CAPEX Project",
        description: "The most obvious is treating it as a pure CAPEX project, spending cash that exists within your organisation. This is likely to produce the highest returns in the long run however it will likely take in the region of 7 years to achieve payback."
      },
      {
        title: "Finance Funding",
        description: "A second funding option is to obtain financing for the project which is something we can assist with and can put you in positive cash flow from month one (the savings you're making on your reduced energy costs more than offset the cost of the finance repayments)."
      },
      {
        title: "Power Purchase Agreement",
        description: "A third, and increasingly popular option, is to fund the project through a Power Purchase Agreement. This requires no CAPEX on your part and essentially is where you agree to purchase the energy your PV produces at a rate significantly below current market prices, thus giving you instant payback with cost and carbon savings from Month 1."
      }
    ],
    grants: {
      title: "50% Grant Funding for Solar Panels",
      description: "For the first time in the UK, there is now 50% Grant Funding available for the installation of Solar Panels and other renewable energy generation technologies.",
      additional: "Along with our other offerings, including Solar Power Purchase Agreements with instant paybacks, this Grant now makes CAPEX Solar an incredibly attractive option for those organisations with available funds to invest."
    },
    contactTitle: "Get your FREE Solar Review",
    contactSubtitle: "Help your business become a shining example...",
    theme: "green"
  },
  {
    id: 2,
    slug: "led-lighting-solutions",
    name: "LED Lighting",
    fullName: "LED Lighting Solutions",
    subtitle: "Energy Efficient LED Lighting for Business",
    description: "LED lighting technology offers significant energy savings and improved lighting quality for commercial spaces. Our LED solutions can reduce your lighting energy consumption by up to 80% while providing better illumination.",
    shortDescription: "Reduce lighting costs by up to 80% with energy-efficient LED solutions",
    heroTitle: "Ready to switch to LED lighting?",
    heroDescription: "Our FREE LED Assessment will show you exactly how much you can save on your lighting costs",
    heroButton: "Get Your FREE Assessment",
    image: "/images/services/led-lighting.svg",
    icon: "fas fa-lightbulb",
    category: "Energy Efficiency",
    benefits: [
      "Reduce lighting energy costs by up to 80%",
      "Longer lifespan - LED lights last 25 times longer than traditional bulbs",
      "Better light quality and consistency",
      "Reduced maintenance costs",
      "Instant on/off with no warm-up time",
      "Environmentally friendly with no toxic materials"
    ],
    features: [
      "Comprehensive lighting audit of your premises",
      "Custom LED lighting design",
      "Energy savings calculations",
      "ROI and payback analysis",
      "Professional installation service"
    ],
    fundingOptions: [
      {
        title: "Direct Purchase",
        description: "Purchase your LED lighting system outright for maximum long-term savings. With typical payback periods of 2-3 years, this option provides the best return on investment."
      },
      {
        title: "Lease Purchase",
        description: "Spread the cost of your LED upgrade over manageable monthly payments. This option allows you to start saving immediately while preserving your working capital."
      },
      {
        title: "Energy Service Agreement",
        description: "We install and maintain your LED lighting at no upfront cost. You simply pay a fixed monthly fee that's less than your current lighting costs, providing immediate savings."
      }
    ],
    grants: {
      title: "Energy Efficiency Grants Available",
      description: "Various grants and incentives are available for businesses investing in energy-efficient lighting solutions.",
      additional: "Our team will help you identify and apply for any relevant grants to maximize your savings and reduce payback periods."
    },
    contactTitle: "Get your FREE LED Assessment",
    contactSubtitle: "Brighten your future with LED lighting...",
    theme: "blue"
  },
  {
    id: 3,
    slug: "electric-vehicle-charging-points",
    name: "EV Charging Points",
    fullName: "Electric Vehicle Charging Points",
    subtitle: "EV Charging Solutions for Business",
    description: "As the UK moves towards electric vehicles, businesses need reliable charging infrastructure. Our EV charging solutions provide convenient, fast charging for employees and customers while positioning your business as environmentally responsible.",
    shortDescription: "Future-proof your business with professional EV charging infrastructure",
    heroTitle: "Ready for the electric vehicle revolution?",
    heroDescription: "Our FREE EV Charging Assessment will help you plan the perfect charging solution for your business",
    heroButton: "Get Your FREE Assessment",
    image: "/images/services/ev-charging.svg",
    icon: "fas fa-charging-station",
    category: "Electric Mobility",
    benefits: [
      "Attract and retain environmentally conscious employees",
      "Provide valuable amenity for customers and visitors",
      "Future-proof your business for the EV transition",
      "Potential revenue generation from public charging",
      "Enhanced corporate sustainability credentials",
      "Government grants and incentives available"
    ],
    features: [
      "Site survey and electrical assessment",
      "Custom charging solution design",
      "Fast and rapid charging options",
      "Smart charging capabilities with load management",
      "Professional installation and commissioning"
    ],
    fundingOptions: [
      {
        title: "Capital Purchase",
        description: "Purchase your EV charging infrastructure outright. With various government grants available, this can be a very cost-effective option for businesses."
      },
      {
        title: "Lease Agreement",
        description: "Spread the cost over manageable monthly payments while taking advantage of immediate tax benefits and cash flow management."
      },
      {
        title: "Charge Point Partnership",
        description: "We install and operate charging points at your location with no upfront cost. You receive a share of charging revenues while providing a valuable service."
      }
    ],
    grants: {
      title: "Workplace Charging Scheme",
      description: "The government's Workplace Charging Scheme provides vouchers worth up to 75% of the purchase and installation costs of EV charge points.",
      additional: "Additional local authority grants may also be available. Our team will help you maximize your grant funding opportunities."
    },
    contactTitle: "Get your FREE EV Charging Assessment",
    contactSubtitle: "Power up your business for the electric future...",
    theme: "green"
  },
  {
    id: 4,
    slug: "heating-solutions",
    name: "Heating Solutions",
    fullName: "Energy Efficient Heating Solutions",
    subtitle: "Modern Heating Systems for Business",
    description: "Our energy-efficient heating solutions help businesses reduce heating costs while maintaining optimal comfort. From heat pumps to biomass boilers, we provide sustainable heating technologies that deliver long-term savings.",
    shortDescription: "Reduce heating costs with modern, efficient heating technologies",
    heroTitle: "Tired of high heating bills?",
    heroDescription: "Our FREE Heating Assessment will identify the most efficient heating solution for your business",
    heroButton: "Get Your FREE Assessment",
    image: "/images/services/heating-solutions.svg",
    icon: "fas fa-thermometer-half",
    category: "Heating & Cooling",
    benefits: [
      "Reduce heating costs by up to 50%",
      "Lower carbon emissions and environmental impact",
      "Improved reliability and performance",
      "Reduced maintenance requirements",
      "Better temperature control and comfort",
      "Increased property value"
    ],
    features: [
      "Comprehensive heating system assessment",
      "Energy efficiency calculations",
      "Custom system design and specification",
      "Professional installation service",
      "Ongoing maintenance and support"
    ],
    fundingOptions: [
      {
        title: "Capital Investment",
        description: "Invest in your heating infrastructure for maximum long-term savings. Modern efficient systems typically pay for themselves within 5-7 years through reduced energy costs."
      },
      {
        title: "Finance Package",
        description: "Spread the cost of your heating upgrade with flexible finance options. Start saving immediately while managing cash flow effectively."
      },
      {
        title: "Energy Service Contract",
        description: "We design, install, and maintain your heating system with guaranteed performance. You pay a fixed monthly fee and we ensure optimal efficiency."
      }
    ],
    grants: {
      title: "Renewable Heat Incentive",
      description: "The Renewable Heat Incentive provides ongoing payments for businesses that install eligible renewable heating technologies.",
      additional: "Various other grants and incentives may be available depending on your location and business type. We'll help you access all available funding."
    },    contactTitle: "Get your FREE Heating Assessment",
    contactSubtitle: "Warm up to better heating efficiency...",
    theme: "blue"
  },
  {
    id: 5,
    slug: "carbon-offsetting",
    name: "Carbon Offsetting",
    fullName: "Carbon Offsetting Solutions",
    subtitle: "Your Journey to Net Zero",
    description: "Carbon offsetting helps your company on its journey to Net Zero. While not the complete answer, offsetting IS part of the solution. Our verified carbon offset programs help businesses reduce their environmental impact while supporting sustainable projects worldwide.",
    shortDescription: "Support your Net Zero journey with verified carbon offset programs",
    heroTitle: "Ready to offset your carbon footprint?",
    heroDescription: "Our FREE Carbon Assessment will calculate your emissions and recommend the best offsetting strategy",
    heroButton: "Get Your FREE Assessment",
    image: "/images/services/carbon-offset.svg",
    icon: "fas fa-seedling",
    category: "Sustainability",
    benefits: [
      "Immediate reduction in your carbon footprint",
      "Support for verified environmental projects",
      "Enhanced corporate sustainability credentials",
      "Progress towards Net Zero targets",
      "Positive environmental impact",
      "Improved stakeholder confidence"
    ],
    features: [
      "Carbon footprint calculation and assessment",
      "Verified offset project selection",
      "Regular monitoring and reporting",
      "Certificate of offset completion",
      "Annual sustainability reporting"
    ],
    fundingOptions: [
      {
        title: "Per-Tonne Offsetting",
        description: "Pay for each tonne of CO2 you need to offset. This flexible approach allows you to scale your offsetting efforts based on your actual emissions."
      },
      {
        title: "Annual Offset Package",
        description: "Commit to an annual offsetting program with predictable costs and comprehensive reporting throughout the year."
      },
      {
        title: "Project Partnership",
        description: "Partner directly with offset projects for maximum impact and transparency. This option provides the greatest engagement with your offsetting efforts."
      }
    ],
    grants: {
      title: "Sustainability Grants Available",
      description: "Various grants and incentives are available for businesses investing in carbon reduction and offsetting programs.",
      additional: "Our team will help you identify funding opportunities that can support your sustainability initiatives and reduce the cost of offsetting."
    },
    contactTitle: "Get your FREE Carbon Assessment",
    contactSubtitle: "Take the first step towards Net Zero...",
    theme: "green"
  },
  {
    id: 6,
    slug: "voltage-optimisation",
    name: "Voltage Optimisation",
    fullName: "Voltage Optimisation Solutions",
    subtitle: "Reduce Energy Consumption by up to 15%",
    description: "Voltage optimisation can save up to 15% on your energy costs. A FREE simple test will reveal if you can make savings on your energy consumption. Our voltage optimisation systems reduce the voltage supplied to your equipment to the optimal level, reducing energy waste.",
    shortDescription: "Reduce energy consumption by up to 15% with voltage optimisation technology",
    heroTitle: "Want to cut energy costs without changing anything?",
    heroDescription: "Our FREE Voltage Test will show you exactly how much you can save with voltage optimisation",
    heroButton: "Get Your FREE Test",
    image: "/images/services/voltage-optimisation.svg",
    icon: "fas fa-bolt",
    category: "Energy Efficiency",
    benefits: [
      "Reduce energy consumption by up to 15%",
      "Lower electricity bills with no behavior change",
      "Extend equipment lifespan",
      "Reduce maintenance costs",
      "Improve power quality",
      "Reduce carbon emissions"
    ],
    features: [
      "FREE voltage assessment and testing",
      "Custom voltage optimisation design",
      "Professional installation service",
      "Energy savings monitoring",
      "Ongoing maintenance support"
    ],
    fundingOptions: [
      {
        title: "Capital Purchase",
        description: "Purchase your voltage optimisation system outright for maximum long-term savings. Typical payback periods are 2-4 years."
      },
      {
        title: "Finance Package",
        description: "Spread the cost over manageable monthly payments while immediately benefiting from reduced energy costs."
      },
      {
        title: "Performance Contract",
        description: "We guarantee your energy savings. If the system doesn't perform as promised, we'll make up the difference."
      }
    ],
    grants: {
      title: "Energy Efficiency Incentives",
      description: "Various business energy efficiency grants and incentives may be available for voltage optimisation projects.",
      additional: "Our team will help you identify any available funding opportunities to maximize your return on investment."
    },
    contactTitle: "Get your FREE Voltage Test",
    contactSubtitle: "Optimize your energy efficiency...",
    theme: "blue"
  },
  {
    id: 7,
    slug: "combined-heat-and-power-chp",
    name: "Combined Heat & Power",
    fullName: "Combined Heat & Power (CHP)",
    subtitle: "Generate Your Own Electricity",
    description: "Generate your own electricity from gas at a lower cost than you can buy it! Combined Heat and Power systems simultaneously produce electricity and useful heat from a single fuel source, providing exceptional efficiency and cost savings.",
    shortDescription: "Generate electricity and heat simultaneously for maximum efficiency",
    heroTitle: "Ready to generate your own power?",
    heroDescription: "Our FREE CHP Assessment will determine if you can benefit from combined heat and power",
    heroButton: "Get Your FREE Assessment",
    image: "/images/services/chp-system.svg",
    icon: "fas fa-cogs",
    category: "Energy Generation",
    benefits: [
      "Generate electricity at lower cost than grid supply",
      "Utilize waste heat for space heating or hot water",
      "Reduce energy costs by up to 40%",
      "Improve energy security and reliability",
      "Reduce carbon emissions",
      "Enhanced energy efficiency up to 90%"
    ],
    features: [
      "Comprehensive energy demand analysis",
      "Custom CHP system design",
      "Financial modeling and payback analysis",
      "Professional installation and commissioning",
      "Ongoing maintenance and support"
    ],
    fundingOptions: [
      {
        title: "Capital Investment",
        description: "Purchase your CHP system for maximum long-term returns. With significant energy savings, payback periods are typically 4-6 years."
      },
      {
        title: "Finance Agreement",
        description: "Spread the cost over several years while immediately benefiting from reduced energy costs and improved efficiency."
      },
      {
        title: "Energy Service Contract",
        description: "We install, operate, and maintain your CHP system. You simply pay for the energy produced at rates below your current costs."
      }
    ],
    grants: {
      title: "CHP Investment Incentives",
      description: "Government incentives and grants may be available for qualifying Combined Heat and Power installations.",
      additional: "Our experienced team will help you navigate available funding options and maximize your investment returns."
    },
    contactTitle: "Get your FREE CHP Assessment",
    contactSubtitle: "Power up your energy independence...",
    theme: "green"
  }
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  
  const service = servicesData.find(s => s.slug === slug);
    if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <a href="/our-services" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
            Back to Our Services
          </a>
        </main>
        <Footer />
      </div>
    );
  }  const breadcrumbItems = [
    { label: 'Our Services', href: '/our-services' },
    { label: service.fullName || service.name }
  ];

  // Use breadcrumb hook to update global breadcrumb
  useBreadcrumbItems(breadcrumbItems);
  return (
    <main className="content">
      <ServiceDetailBanner service={service} />
      <ServiceDetailContent service={service} />
      <ContactFormAdvanced />
      <ServiceTestimonials />
    </main>
  );
}
