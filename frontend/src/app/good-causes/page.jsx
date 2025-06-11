import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoodCausesBanner from '@/components/sections/GoodCausesBanner';
import CharitySection from '@/components/sections/CharitySection';

export const metadata = {
  title: 'Good Causes - Charities We Support | RenewWeb',
  description: 'Discover the charities and environmental good causes that RenewWeb supports. We are passionate about protecting and sustaining the environment through ethical business practice.',
  keywords: 'charities, environmental causes, sustainability, green energy, wildlife conservation, environmental protection',
};

const charitiesData = [
  {
    id: 1,
    name: "Young Peoples Trust For The Environment",
    description: "The YPTE educates the next generation on sustainability and the environment which will be instrumental in our fight against climate control. They are the next leaders so education on the planet is crucial.",
    fullDescription: "The Young Peoples Trust for the Environment is a charity set up to encourage young peoples understanding of the environment. Founded back in 1982, it aims to give young people a real awareness of environmental issues such as climate change, pollution, deforestation and endangered flora fauna.",
    image: "/images/charities/young-peoples-trust-for-the-environment.svg",
    theme: "light"
  },
  {
    id: 2,
    name: "Surfers Against Sewage",
    description: "Surfers against Sewage have been fighting to save our oceans and the pollution that goes into them for many years. Having travelled a lot we have witnessed the damaging effects of coral reef die off, plastic pollution and wildlife suffering. It is therefore an easy decision to support such a worth cause.",
    fullDescription: "SAS were borne out of people's visceral connection with the sea and their response to the pollution ruining our coastlines, whether that is sewage pollution or throwaway plastics. This direct connection with the ocean is what makes them unique and drives SAS's mission for cleaner seas.",
    image: "/images/charities/surfers-against-sewage.svg",
    theme: "blue"
  },
  {
    id: 3,
    name: "Pesticide Action Network UK",
    description: "Pesticides Against Network UK (PAN UK); We believe that the introduction of chemicals to our food chain has seen un-natural food production through mono crops. We have depleted our soil of macro and micro nutrients, made our plants weak so they need chemicals for the farmers to achieve profits. The knock on effect in the body of chemicals is linked to carcinogens and other health issues. We support organic farming and planet friendly farming methods.",
    fullDescription: "PAN UK raise awareness and actively campaign against the use of pesticides while highlighting the damaging effects it has for our environment, animals, insects and human health.",
    image: "/images/charities/pesticide-action-network-uk.svg",
    theme: "light"
  },
  {
    id: 4,
    name: "Shropshire Wildlife Trust",
    description: "Shropshire Wildlife are the only voluntary organisation in the region concerned with all aspects of nature conservation. Shropshire has suffered from years of habitat destruction. They help nature recover, but rely on the support of their members to create an environment rich in wildlife, valued by all.",
    fullDescription: "Shropshire Wildlife Trust is one of forty six Wildlife Trusts working across the UK. For more than 50 years they have worked with local people to make Shropshire rich in wildlife and protect special places for generations to come.",
    image: "/images/charities/shropshire-wildlife-trust.svg",
    theme: "blue"
  },
  {
    id: 5,
    name: "Cuan Wildlife Centre",
    description: "Cuan are a local charity for Renewable Hub that rescue, nurture and release British wildlife as a rescue centre. We have such a diverse habitat in our countryside and hedgerows. We support Cuan and their clients as we believe the wildlife are worth fighting for.",
    fullDescription: "Cuan Wildlife Rescue is a registered charity dedicated to the care and rehabilitation of sick, injured and orphaned wild animals and birds. We are the only wildlife rescue centre in Shropshire to offer a round-the-clock service.",
    image: "/images/charities/cuan-wildlife-centre.svg",
    theme: "light"
  },
  {
    id: 6,
    name: "World Land Trust",
    description: "The trees are the lungs of our planet and so protecting and reforesting our land has to be taken seriously. Say no more.",
    fullDescription: "Through a network of partner organisations around the world, WLT funds the creation of reserves and provides permanent protection for habitats and wildlife. Partnerships are developed with established and highly respected local organisations who engage support and commitment among the local community.",
    image: "/images/charities/world-land-trust.svg",
    theme: "blue"
  },
  {
    id: 7,
    name: "Trees For Cities",
    description: "We seem to think it normal to live in a concrete jungle, trees and plants are known to help relieve stress and calm people down. Connecting with nature and grounding our self in this ever busy world are paramount if we are to keep in touch with mother nature.",
    fullDescription: "Trees for Cities is the only UK charity working on an international scale to plant urban trees and create greener cities. Since 1993, the organisation has engaged over 80,000 volunteers to plant over 1,000,000 urban trees in parks, streets, woodlands, schools, hospitals and housing estates.",
    image: "/images/charities/trees-for-cities.svg",
    theme: "light"
  },
  {
    id: 8,
    name: "Orangutan Appeal UK",
    description: "The devastation of the forest in Asia for palm oil to feed our ever growing hunger for cheap, long shelf-life products means animals such as orangutan are killed or left homeless. The work the appeal offer to support the animals is crucial to their survival.",
    fullDescription: "The Orangutan Appeal UK is a registered charity based in the south of England, dedicated to the rehabilitation and preservation of orangutans and the conservation of their habitat.",
    image: "/images/charities/orangutan-appeal-uk.svg",
    theme: "blue"
  }
];

export default function GoodCausesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="content">
        <GoodCausesBanner />
        
        {charitiesData.map((charity) => (
          <CharitySection 
            key={charity.id}
            charity={charity}
          />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}
