export interface SeeDoItem {
  title: string;
  type: string;
  description: string[];
  notes?: string;
  rating?: number;
}

export const SEE_DO_ITEMS: SeeDoItem[] = [
  {
    title: "Ongwediva Trade Fair Centre",
    type: "Attraction",
    description: [
      "One of the biggest attractions in Ongwediva.",
      "Hosts the annual Ongwediva Annual Trade Fair, exhibitions, concerts, business expos, food stalls, and cultural events.",
      "Good location for events, networking, and nightlife during fair season."
    ]
  },
  {
    title: "Maroela Mall",
    type: "Shopping",
    description: [
      "Main shopping mall in Ongwediva.",
      "Restaurants, cafés, fashion stores, banks, grocery stores, and mobile shops.",
      "Popular social spot for locals and visitors."
    ]
  },
  {
    title: "Oshana Mall",
    type: "Shopping",
    description: [
      "Modern shopping center with retail stores and food outlets.",
      "Good for shopping, quick meals, and casual hangouts."
    ]
  },
  {
    title: "Ongwediva Open Market",
    type: "Market & Culture",
    description: [
      "Local market experience with traditional food, clothing, handmade products, and everyday trading.",
      "Great for photography, street culture, and authentic northern Namibia atmosphere."
    ]
  },
  {
    title: "Nightlife & Entertainment",
    type: "Entertainment",
    description: [
      "Visit local bars and lounges like: PRC Bar, Parliament Ongwediva, Wizy Man Lounge, Bush Bar, Tabs Pub & Grill.",
      "Best on weekends for music, DJs, social life, and local entertainment culture."
    ]
  },
  {
    title: "Local Kapana & Street Food",
    type: "Food Experience",
    description: [
      "One of the biggest experiences in northern Namibia.",
      "Fresh grilled meat served with chili, tomato, onions, and fat cakes.",
      "Usually found around open markets and busy streets in the evenings."
    ]
  },
  {
    title: "Cultural Experience",
    type: "Culture",
    description: [
      "Experience Oshiwambo culture, music, language, and food.",
      "Traditional events and local gatherings happen throughout the year.",
      "Northern hospitality and social atmosphere are a big part of the experience."
    ]
  },
  {
    title: "Church Street & Town Drive",
    type: "Explore",
    description: [
      "One of the active streets in town.",
      "Restaurants, bars, shops, and everyday town life.",
      "Good for casual drives and content shooting."
    ]
  },
  {
    title: "Nearby Oshakati",
    type: "Explore Region",
    description: [
      "Only a few minutes away from Ongwediva.",
      "More shopping centers, nightlife, local markets, and business activity.",
      "Many visitors move between Oshakati and Ongwediva daily."
    ]
  },
  {
    title: "Nearby Ondangwa",
    type: "Explore Region",
    description: [
      "Good stop for travelers.",
      "Airport access, lodges, shopping, and local cultural feel."
    ]
  },
  {
    title: "Ongula Village Homestead Lodge",
    type: "Cultural Tourism",
    description: [
      "Traditional village-style tourism experience.",
      "Clay huts, local food, cultural activities, and northern Namibian heritage experience.",
      "Popular with international tourists and documentary filmmakers."
    ]
  },
  {
    title: "Sports & Local Events",
    type: "Events",
    description: [
      "Football tournaments",
      "Car washes & lifestyle events",
      "Music performances",
      "Weekend braai sessions",
      "Local fashion and entertainment events"
    ]
  },
  {
    title: "Photography & Content Creation",
    type: "Activities",
    description: [
      "Open northern landscapes, Local street life, Sunset roads, Markets, Traditional architecture, Strong documentary-style visual culture",
      "Good for: Travel content, Music videos, Documentary filmmaking, Street photography, Lifestyle content"
    ]
  }
];
