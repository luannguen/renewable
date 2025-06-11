'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CharityDetailBanner from '@/components/good-causes/CharityDetailBanner';
import CharityDetailContent from '@/components/good-causes/CharityDetailContent';

// Charity data với slug
const charitiesData = [
  {
    id: 1,
    slug: "young-peoples-trust-for-the-environment",
    name: "Young Peoples Trust For The Environment",
    shortDescription: "Educating the next generation on sustainability and environmental issues.",
    description: "The YPTE educates the next generation on sustainability and the environment which will be instrumental in our fight against climate control. They are the next leaders so education on the planet is crucial.",
    fullDescription: "The Young Peoples Trust for the Environment is a charity set up to encourage young peoples understanding of the environment. Founded back in 1982, it aims to give young people a real awareness of environmental issues such as climate change, pollution, deforestation and endangered flora fauna.",
    mission: "To encourage young people's understanding of the environment and to enable them to take part in environmental protection and improvement.",
    founded: "1982",
    website: "https://ypte.org.uk",
    image: "/images/charities/young-peoples-trust-for-the-environment.svg",
    theme: "green",
    keyAreas: [
      "Climate Change Education",
      "Environmental Awareness",
      "Youth Engagement",
      "Educational Resources",
      "Conservation Programs"
    ],
    impact: [
      "Over 1 million young people reached annually",
      "Educational materials distributed to 15,000+ schools",
      "Environmental education programs in 50+ countries",
      "Award-winning environmental education resources"
    ]
  },
  {
    id: 2,
    slug: "surfers-against-sewage",
    name: "Surfers Against Sewage",
    shortDescription: "Fighting to save our oceans from pollution and sewage.",
    description: "Surfers against Sewage have been fighting to save our oceans and the pollution that goes into them for many years. Having travelled a lot we have witnessed the damaging effects of coral reef die off, plastic pollution and wildlife suffering.",
    fullDescription: "SAS were borne out of people's visceral connection with the sea and their response to the pollution ruining our coastlines, whether that is sewage pollution or throwaway plastics. This direct connection with the ocean is what makes them unique and drives SAS's mission for cleaner seas.",
    mission: "To protect oceans, waves, beaches and marine life from sewage pollution, plastics and threats to surfing.",
    founded: "1990",
    website: "https://www.sas.org.uk",
    image: "/images/charities/surfers-against-sewage.svg",
    theme: "blue",
    keyAreas: [
      "Ocean Conservation",
      "Plastic Pollution Prevention",
      "Marine Protection",
      "Water Quality Monitoring",
      "Community Activism"
    ],
    impact: [
      "Prevented thousands of sewage discharges",
      "100,000+ beach clean volunteers mobilized",
      "Influenced government policy on marine protection",
      "Removed over 50 tonnes of plastic from coastlines"
    ]
  },
  {
    id: 3,
    slug: "pesticide-action-network-uk",
    name: "Pesticide Action Network UK",
    shortDescription: "Campaigning against harmful pesticides and promoting sustainable farming.",
    description: "We believe that the introduction of chemicals to our food chain has seen un-natural food production through mono crops. We have depleted our soil of macro and micro nutrients, made our plants weak so they need chemicals for the farmers to achieve profits.",
    fullDescription: "PAN UK raise awareness and actively campaign against the use of pesticides while highlighting the damaging effects it has for our environment, animals, insects and human health.",
    mission: "To eliminate the hazards of pesticides and to support the adoption of ecologically sound alternatives.",
    founded: "1982",
    website: "https://www.pan-uk.org",
    image: "/images/charities/pesticide-action-network-uk.svg",
    theme: "green",
    keyAreas: [
      "Pesticide Reduction",
      "Sustainable Agriculture",
      "Environmental Protection",
      "Health Advocacy",
      "Policy Reform"
    ],
    impact: [
      "Banned 20+ harmful pesticides in the UK",
      "Trained 500+ farmers in sustainable practices",
      "Influenced EU pesticide regulations",
      "Protected 1000+ species from pesticide harm"
    ]
  },
  {
    id: 4,
    slug: "shropshire-wildlife-trust",
    name: "Shropshire Wildlife Trust",
    shortDescription: "Protecting wildlife and habitats across Shropshire.",
    description: "Shropshire Wildlife are the only voluntary organisation in the region concerned with all aspects of nature conservation. Shropshire has suffered from years of habitat destruction.",
    fullDescription: "Shropshire Wildlife Trust is one of forty six Wildlife Trusts working across the UK. For more than 50 years they have worked with local people to make Shropshire rich in wildlife and protect special places for generations to come.",
    mission: "To create a county rich in wildlife and valued by all.",
    founded: "1962",
    website: "https://www.shropshirewildlifetrust.org.uk",
    image: "/images/charities/shropshire-wildlife-trust.svg",
    theme: "blue",
    keyAreas: [
      "Habitat Conservation",
      "Wildlife Protection",
      "Environmental Education",
      "Nature Reserves Management",
      "Community Engagement"
    ],
    impact: [
      "Protected 6,000+ acres of wildlife habitat",
      "Managed 40+ nature reserves",
      "Engaged 10,000+ volunteers annually",
      "Educated 20,000+ children about nature"
    ]
  },
  {
    id: 5,
    slug: "cuan-wildlife-centre",
    name: "Cuan Wildlife Centre",
    shortDescription: "Rescuing, nurturing and releasing British wildlife.",
    description: "Cuan are a local charity that rescue, nurture and release British wildlife as a rescue centre. We have such a diverse habitat in our countryside and hedgerows.",
    fullDescription: "Cuan Wildlife Rescue is a registered charity dedicated to the care and rehabilitation of sick, injured and orphaned wild animals and birds. We are the only wildlife rescue centre in Shropshire to offer a round-the-clock service.",
    mission: "To rescue, rehabilitate and release wildlife back to their natural habitat.",
    founded: "1990",
    website: "https://www.cuanwildliferescue.org.uk",
    image: "/images/charities/cuan-wildlife-centre.svg",
    theme: "green",
    keyAreas: [
      "Wildlife Rescue",
      "Animal Rehabilitation",
      "Emergency Care",
      "Wildlife Education",
      "Conservation Efforts"
    ],
    impact: [
      "Rescued 3,000+ animals annually",
      "95% successful release rate",
      "24/7 emergency wildlife service",
      "Educated 5,000+ people about wildlife"
    ]
  },
  {
    id: 6,
    slug: "world-land-trust",
    name: "World Land Trust",
    shortDescription: "Protecting the world's most biologically important and threatened habitats.",
    description: "The trees are the lungs of our planet and so protecting and reforesting our land has to be taken seriously. Say no more.",
    fullDescription: "Through a network of partner organisations around the world, WLT funds the creation of reserves and provides permanent protection for habitats and wildlife. Partnerships are developed with established and highly respected local organisations who engage support and commitment among the local community.",
    mission: "To protect the world's most biologically important and threatened habitats acre by acre.",
    founded: "1989",
    website: "https://www.worldlandtrust.org",
    image: "/images/charities/world-land-trust.svg",
    theme: "blue",
    keyAreas: [
      "Habitat Protection",
      "Rainforest Conservation",
      "Carbon Sequestration",
      "Biodiversity Preservation",
      "Land Purchase"
    ],
    impact: [
      "Protected 2+ million acres of habitat",
      "Saved 500+ endangered species",
      "Sequestered 50+ million tonnes of carbon",
      "Established 100+ nature reserves"
    ]
  },
  {
    id: 7,
    slug: "trees-for-cities",
    name: "Trees For Cities",
    shortDescription: "Creating greener cities through urban tree planting.",
    description: "We seem to think it normal to live in a concrete jungle, trees and plants are known to help relieve stress and calm people down. Connecting with nature and grounding our self in this ever busy world are paramount.",
    fullDescription: "Trees for Cities is the only UK charity working on an international scale to plant urban trees and create greener cities. Since 1993, the organisation has engaged over 80,000 volunteers to plant over 1,000,000 urban trees in parks, streets, woodlands, schools, hospitals and housing estates.",
    mission: "To plant urban trees and create greener cities.",
    founded: "1993",
    website: "https://www.treesforcities.org",
    image: "/images/charities/trees-for-cities.svg",
    theme: "green",
    keyAreas: [
      "Urban Forestry",
      "Tree Planting",
      "Air Quality Improvement",
      "Community Engagement",
      "Climate Action"
    ],
    impact: [
      "Planted 1+ million urban trees",
      "Engaged 80,000+ volunteers",
      "Improved air quality in 100+ cities",
      "Created 500+ community gardens"
    ]
  },
  {
    id: 8,
    slug: "orangutan-appeal-uk",
    name: "Orangutan Appeal UK",
    shortDescription: "Dedicated to the rehabilitation and preservation of orangutans.",
    description: "The devastation of the forest in Asia for palm oil to feed our ever growing hunger for cheap, long shelf-life products means animals such as orangutan are killed or left homeless.",
    fullDescription: "The Orangutan Appeal UK is a registered charity based in the south of England, dedicated to the rehabilitation and preservation of orangutans and the conservation of their habitat.",
    mission: "To support the rehabilitation and preservation of orangutans and the conservation of their habitat.",
    founded: "1997",
    website: "https://www.orangutan-appeal.org.uk",
    image: "/images/charities/orangutan-appeal-uk.svg",
    theme: "blue",
    keyAreas: [
      "Orangutan Rescue",
      "Habitat Conservation",
      "Anti-Poaching Efforts",
      "Forest Protection",
      "Wildlife Rehabilitation"
    ],
    impact: [
      "Rescued 200+ orangutans",
      "Protected 50,000+ acres of forest",
      "Supported 10+ rehabilitation centers",
      "Educated 100,000+ people about conservation"
    ]
  }
];

export default function CharityDetailPage() {
  const params = useParams();
  const slug = params.slug;
  
  const charity = charitiesData.find(c => c.slug === slug);
  
  if (!charity) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Charity Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The charity you're looking for doesn't exist.</p>
          <a href="/good-causes" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
            Back to Good Causes
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="content">
        <CharityDetailBanner charity={charity} />
        <CharityDetailContent charity={charity} />
      </main>
      
      <Footer />
    </div>
  );
}
