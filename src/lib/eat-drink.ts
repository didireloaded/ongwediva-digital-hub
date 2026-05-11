export interface EatDrinkPlace {
  name: string;
  rating?: number;
  type: string;
  address?: string;
  location?: string;
  phone?: string;
  website?: string;
  hours?: string;
  notes: string;
}

export const EAT_DRINK_PLACES: EatDrinkPlace[] = [
  {
    name: "Silver Wolf Spur Namibia",
    rating: 3.9,
    type: "Family Restaurant",
    address: "Shop 41, Maroela Mall, Mandume Ndemufayo Street, Ongwediva",
    phone: "+264 65 231 443",
    website: "Spur Namibia",
    notes: "Popular for burgers, steaks, ribs, and family dining.",
  },
  {
    name: "Tate Joe's",
    rating: 3.9,
    type: "Restaurant",
    address: "Ongwediva",
    phone: "+264 65 233 600",
    hours: "06:00–23:00 daily",
    notes: "Casual local restaurant with breakfast and grilled meals.",
  },
  {
    name: "Wizy Man Lounge & Restaurant Ongwediva",
    rating: 4.3,
    type: "Lounge Bar & Restaurant",
    phone: "+264 81 321 2693",
    hours: "Weekdays: 10:00–02:00, Weekends: Until 04:00",
    notes: "Lounge atmosphere with food, drinks, and nightlife.",
  },
  {
    name: "Eendya Restaurant",
    rating: 4.5,
    type: "Restaurant",
    address: "David Shikomba Complex, Ongwediva",
    phone: "+264 81 407 1540",
    notes: "Local dining spot with relaxed setup.",
  },
  {
    name: "Primas Garden",
    rating: 3.9,
    type: "Restaurant & Bar",
    address: "Church Street, Ongwediva",
    phone: "+264 81 343 2583",
    hours: "09:00–00:30 daily",
    notes: "Outdoor-style dining and social venue.",
  },
  {
    name: "Coral Reef Restaurant",
    rating: 3.8,
    type: "Restaurant",
    address: "Ongwediva",
    hours: "09:00–21:00 daily",
    notes: "Seafood and grill-style menu.",
  },
  {
    name: "Biazo kitchen",
    rating: 4.2,
    type: "Restaurant",
    address: "Mandume Ndemufayo Street, Ongwediva",
    phone: "+264 81 305 6952",
    notes: "Smaller local restaurant with takeaway options.",
  },
  {
    name: "Tabs Pub & Grill",
    rating: 4.8,
    type: "Pub & Grill",
    address: "C46, Ongwediva",
    phone: "+264 81 801 9699",
    hours: "09:00–02:00 daily",
    notes: "Grill spot with drinks and nightlife vibe.",
  },
  {
    name: "Tropicana Bar",
    rating: 3.9,
    type: "Bar",
    address: "Old Ongwediva",
    notes: "Popular casual local hangout.",
  },
  {
    name: "PRC Bar Ongwediva",
    rating: 3.8,
    type: "Bar",
    address: "3202 Maroela Street, Ongwediva",
    phone: "+264 81 278 5300",
    hours: "10:00–02:00 daily",
    notes: "Affordable drinks and nightlife spot.",
  },
  {
    name: "Parliament Ongwediva",
    rating: 3.5,
    type: "Bar & Lounge",
    address: "Shipindo Road, Ongwediva",
    phone: "+264 81 397 7991",
    website: "Parliament Ongwediva",
    notes: "Well-known nightlife venue in Ongwediva.",
  },
  {
    name: "Baywatch View",
    rating: 3.7,
    type: "Bar",
    location: "Ongwediva",
    hours: "11:00–00:00",
    notes: "Relaxed social drinking spot.",
  },
  {
    name: "Newton's Pub",
    type: "Pub",
    address: "Dr. Sam Nujoma Road, Ongwediva",
    hours: "08:00–01:00 daily",
    notes: "Local pub with long operating hours.",
  },
  {
    name: "Bush Bar",
    rating: 4.0,
    type: "Bar",
    address: "Ongwediva Main Road",
    phone: "+264 81 235 4544",
    notes: "Outdoor-style bar and social venue.",
  },
  {
    name: "FreshStop at Shell Ongwediva",
    rating: 4.5,
    type: "Convenience Café / Quick Meals",
    address: "Corner Main Road & Mandume Ndemufayo Street",
    phone: "+264 81 128 9950",
    website: "FreshStop Namibia",
    hours: "24 Hours",
    notes: "Coffee, snacks, takeaway meals, and fuel stop.",
  },
  {
    name: "Nicc",
    rating: 5.0,
    type: "Internet Café",
    address: "Ongwediva",
    notes: "Internet café with light refreshments.",
  },
];
