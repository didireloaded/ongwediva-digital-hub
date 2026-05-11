export interface TransportItem {
  category: string;
  name: string;
  rating?: number;
  type?: string;
  location?: string;
  address?: string;
  phone?: string;
  website?: string;
  facebook?: string;
  hours?: string;
  notes: string | string[];
}

export const TRANSPORT_ITEMS: TransportItem[] = [
  // Airport
  {
    category: "Airports",
    name: "Andimba Toivo ya Toivo Airport",
    rating: 4.1,
    type: "Airport",
    location: "Located in Ondangwa (Around 30 km from Ongwediva)",
    phone: "+264 65 240 476",
    website: "Namibia Airports Company",
    notes: [
      "Main domestic airport serving northern Namibia",
      "Flights usually connect through Windhoek",
      "Main gateway for business travelers and visitors heading to Ongwediva."
    ],
  },

  // Shuttles & Transfers
  {
    category: "Shuttles & Transfers",
    name: "Cheetah shuttle service",
    rating: 5.0,
    type: "Shuttle / Tourist Transport",
    address: "Ongwediva",
    notes: "Local shuttle option for town and regional travel.",
  },
  {
    category: "Shuttles & Transfers",
    name: "Prosbravia Tours and Shuttle Services",
    type: "Transportation service",
    phone: "+264 81 147 4093",
    website: "Prosbravia Tours",
    notes: "Tours, airport pickups, and regional transport services.",
  },
  {
    category: "Shuttles & Transfers",
    name: "Shetweni Transport",
    rating: 4.0,
    type: "Transportation service",
    phone: "+264 81 242 0329",
    hours: "Open 24 hours",
    notes: "Transport services around Oshakati and Ongwediva area.",
  },
  {
    category: "Shuttles & Transfers",
    name: "Tot Wa Tours & Transfers",
    rating: 4.8,
    type: "Transportation service",
    phone: "+264 81 600 8766",
    website: "Tot Wa Tours & Transfers",
    hours: "Open 24 hours",
    notes: "Airport transfers, tours, and long-distance transport.",
  },
  {
    category: "Shuttles & Transfers",
    name: "LEFA Passenger Transportation Services",
    type: "Transportation service",
    website: "LEFA Namibia",
    notes: "Airport and business shuttle bookings across Namibia.",
  },

  // Car Rental
  {
    category: "Car Rentals",
    name: "Capital North Car Rental",
    rating: 5.0,
    type: "Car rental agency",
    address: "Etemo Complex Unit 2, Ongwediva Industrial Park",
    phone: "+264 81 843 2018",
    facebook: "Capital North Car Rental",
    notes: "Local car rental company for self-drive visitors.",
  },
  {
    category: "Car Rentals",
    name: "OSHANA CAR HIRE",
    rating: 4.4,
    type: "Car rental agency",
    phone: "+264 81 281 8037",
    notes: "Regional car hire service operating around Ongwediva and Oshakati.",
  },
  {
    category: "Car Rentals",
    name: "Hertz Rent a Car",
    rating: 4.6,
    type: "Car rental agency",
    location: "Ondangwa Airport (Andimba Toivo Ya Toivo)",
    phone: "+264 65 241 161",
    website: "Hertz Namibia",
    notes: "Airport-based vehicle rentals for travelers arriving in Ondangwa.",
  },
  {
    category: "Car Rentals",
    name: "Nancy & Brain Car Hire",
    rating: 5.0,
    type: "Car rental agency",
    phone: "+264 81 332 0874",
    notes: "Local car hire and accommodation option.",
  },

  // Taxis
  {
    category: "Taxis",
    name: "Local Taxis",
    type: "Transportation service",
    location: "Near Mandume Ndemufayo Street and across Ongwediva",
    notes: [
      "Local taxi transport around Ongwediva town area.",
      "Typical taxi movement: Ongwediva ↔ Oshakati, Ongwediva ↔ Ondangwa, Mall routes, Trade Fair routes during events"
    ],
  },

  // Buses
  {
    category: "Buses",
    name: "Long Distance Travel Operators",
    type: "Bus & Long Distance Travel",
    notes: [
      "Common operators: Intercape, Local shuttle buses, Minibus taxis",
      "Main routes: Windhoek ↔ Ongwediva, Ongwediva ↔ Oshakati, Ongwediva ↔ Ondangwa, Angola border routes via Oshikango"
    ],
  },
  
  // Trade Fair Grounds
  {
    category: "Trade Fair Info",
    name: "Getting to Ongwediva Trade Fair Centre",
    rating: 4.1,
    type: "Event Venue",
    address: "Ongwediva Trade Fair Centre, Ongwediva",
    website: "OATF Official Website",
    notes: [
      "Main event venue for exhibitions, concerts, expos, and annual trade fair events.",
      "How people usually get there: Local taxis, Private vehicles, Shuttle services during major events, Hotel transfers, Walking from nearby hotels.",
      "Trade fair info: Parking available, Security provided, Tickets available online and at the gate."
    ]
  }
];

export const TRAVEL_NOTES = [
  "Most visitors fly into Ondangwa Airport then transfer to Ongwediva.",
  "Oshakati, Ongwediva, and Ondangwa function almost like one connected urban area.",
  "During trade fair season in August, transport demand increases heavily.",
  "Rental cars are recommended for business travelers and content creators moving between towns."
];
