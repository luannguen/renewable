'use client';

import React from 'react';
import GoodCausesBanner from '@/components/good-causes/GoodCausesBanner';
import CharitySection from '@/components/good-causes/CharitySection';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

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
    name: "World Wildlife Fund",
    description: "WWF work to sustain the natural world for the benefit of people and wildlife. They are at the forefront of environmental work and their campaigns to save endangered species. As a company working within renewables, we feel the work they do aligns with our core values.",
    fullDescription: "WWF is an international non-governmental organization founded in 1961 that works in the field of wilderness preservation and the reduction of human impact on the environment.",
    image: "/images/charities/world-wildlife-fund.svg",
    theme: "dark"
  },
  {
    id: 3,
    name: "Royal Society for the Protection of Birds",
    description: "The RSPB gives a voice to the UK's birds and wildlife. Not only that, their work protects threatened birds and the places they need to live and also encourage others to enjoy nature. They are instrumental in conservation and education.",
    fullDescription: "The Royal Society for the Protection of Birds (RSPB) is a charitable organisation registered in England and Wales and in Scotland. It was founded in 1889. It works to promote conservation and protection of birds and the wider environment through public awareness campaigns, petitions and through the operation of nature reserves throughout the United Kingdom.",
    image: "/images/charities/royal-society-for-the-protection-of-birds.svg",
    theme: "light"
  },
  {
    id: 4,
    name: "Woodland Trust",
    description: "The Woodland Trust plant trees and fight for forest. They are the UK's largest woodland conservation charity. We believe trees and woodlands are a vital part of a healthy environment which is why we are pleased to support them.",
    fullDescription: "The Woodland Trust is the United Kingdom's largest woodland conservation charity. The Trust has three aims: to protect ancient woodland which is irreplaceable, to restore damaged ancient woodland, restoring the biodiversity of native woodland; and to establish new native woodland with the aim of creating more natural forest.",
    image: "/images/charities/woodland-trust.svg",
    theme: "dark"
  },
  {
    id: 5,
    name: "Marine Conservation Society",
    description: "MCS are the UK charity dedicated to the protection of the marine environment and its wildlife. We are surrounded by seas and the life within them need our protection. From climate change to plastic pollution, the seas are under increased pressure.",
    fullDescription: "The Marine Conservation Society is a UK-based charitable organisation working with communities, governments, industry and schools to clean up seas, shores and wildlife. It was founded in 1983 and is a registered charity in England and Wales.",
    image: "/images/charities/marine-conservation-society.svg",
    theme: "blue"
  },
  {
    id: 6,
    name: "Greenpeace",
    description: "Greenpeace exists because this fragile earth deserves a voice. It needs solutions. It needs change. It needs action. We believe renewable energy can power the future and Greenpeace fight for a cleaner world, something we are also working towards.",
    fullDescription: "Greenpeace is a non-governmental environmental organization with offices in over 39 countries and with an international coordinating body in Amsterdam, the Netherlands. Greenpeace was founded by Irving Stowe and Dorothy Stowe, Jim Bohlen, and Ben and Dorothy Metcalfe.",
    image: "/images/charities/greenpeace.svg",
    theme: "light"
  },
  {
    id: 7,
    name: "Orangutan Appeal UK",
    description: "The devastation of the forest in Asia for palm oil to feed our ever growing hunger for cheap, long shelf-life products means animals such as orangutan are killed or left homeless. The work the appeal offer to support the animals is crucial to their survival.",
    fullDescription: "The Orangutan Appeal UK is a registered charity based in the south of England, dedicated to the rehabilitation and preservation of orangutans and the conservation of their habitat.",
    image: "/images/charities/orangutan-appeal-uk.svg",
    theme: "blue"
  }
];

export default function GoodCausesClient() {
  const breadcrumbItems = [
    { label: 'Good Causes' }
  ];

  // Use breadcrumb hook to update global breadcrumb
  useBreadcrumbItems(breadcrumbItems);
  
  return (
    <main className="content">
      <GoodCausesBanner />
      
      {charitiesData.map((charity) => (
        <CharitySection 
          key={charity.id}
          charity={charity}
        />
      ))}
    </main>
  );
}
