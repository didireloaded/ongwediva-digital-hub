export interface Accommodation {
  name: string;
  rating: number;
  type: string;
  location?: string;
  address?: string;
  area?: string;
  phone?: string;
  website?: string;
  facebook?: string;
  email?: string;
  booking?: string;
  notes: string;
}

export const ACCOMMODATIONS: Accommodation[] = [
  {
    name: "Hotel Destiny",
    rating: 4.0,
    type: "Hotel",
    location: "Ongwediva, Namibia",
    phone: "+264 65 231 534",
    website: "Hotel Destiny",
    notes: "Popular business and leisure hotel with restaurant and pool facilities.",
  },
  {
    name: "Hotel Prestige Ongwediva",
    rating: 3.9,
    type: "Hotel",
    location: "Ongwediva, Namibia",
    phone: "+264 65 233 600",
    booking: "Hotel Prestige Ongwediva",
    notes: "Central location with apartments and conference-friendly setup.",
  },
  {
    name: "Hotel Galaxy Ongwediva",
    rating: 3.8,
    type: "Hotel",
    address: "Mandume Ndemufayo Street, Ongwediva",
    phone: "+264 65 231 019",
    notes: "Budget-friendly hotel option near the town center.",
  },
  {
    name: "Villa Graf",
    rating: 4.3,
    type: "Guesthouse / B&B",
    area: "Omatando II, Ongwediva",
    phone: "+264 81 831 2332",
    website: "Villa Graf",
    notes: "Quiet guesthouse with modern rooms and pool area.",
  },
  {
    name: "Nakanyala B&B",
    rating: 4.0,
    type: "Bed & Breakfast",
    address: "Helao Nafidi Street, Ongwediva",
    phone: "+264 81 304 1470",
    website: "Nakanyala B&B",
    notes: "Affordable and commonly used by travelers and business visitors.",
  },
  {
    name: "Yoye Guesthouse Ongwediva",
    rating: 5.0,
    type: "Guesthouse",
    address: "Erf 3467 John Pandeni Street, Ongwediva",
    phone: "+264 81 458 8488",
    facebook: "Yoye Guesthouse Ongwediva",
    notes: "Budget-friendly guesthouse with dormitory and private room options.",
  },
  {
    name: "Ongwediva RDC Guesthouse",
    rating: 3.7,
    type: "Guesthouse",
    address: "Ondangwa-Oshakati Main Road, next to Hifikepunye Pohamba Campus",
    phone: "+264 65 230 282",
    email: "j.nghilokua@ongwedivardc.com",
    notes: "Convenient for business travelers and institutional visitors.",
  },
  {
    name: "The Seven Valleys Guesthouse",
    rating: 4.2,
    type: "Guesthouse",
    location: "Ongwediva",
    phone: "+264 65 231 049",
    website: "The Seven Valleys Guesthouse",
    notes: "Relaxed atmosphere with decent long-stay options.",
  },
  {
    name: "Bennies Entertainment Park & Lodge",
    rating: 3.7,
    type: "Lodge / Hotel",
    address: "Auguste Taanyanda Street, Ongwediva",
    phone: "+264 65 231 100",
    notes: "Entertainment-focused venue with accommodation and nightlife vibe.",
  },
  {
    name: "Mazizi Lodge",
    rating: 4.6,
    type: "Lodge",
    location: "Ongwediva",
    notes: "Smaller lodge setup with good guest ratings.",
  },
  {
    name: "La Villa Lodge",
    rating: 3.8,
    type: "Lodge / B&B",
    address: "Mandume Ndemufayo Street, Ongwediva",
    phone: "+264 81 710 5733",
    notes: "Basic but comfortable accommodation option.",
  },
  {
    name: "Traveller's Nest Guesthouse",
    rating: 4.0,
    type: "Guesthouse",
    address: "C46 Road, Ongwediva",
    phone: "+264 81 286 5654",
    notes: "Quiet guesthouse suitable for overnight stays.",
  },
  {
    name: "MR P Guesthouse",
    rating: 4.8,
    type: "Guesthouse",
    area: "Omatando, Ongwediva",
    phone: "+264 81 286 9646",
    notes: "Highly rated small guesthouse with modern feel.",
  },
  {
    name: "Rain shower Matalala guest house",
    rating: 5.0,
    type: "Guesthouse",
    area: "Extension 15 Old Ongwediva",
    phone: "+264 85 796 0469",
    notes: "Small local guesthouse option.",
  },
  {
    name: "SirWine @Ongwediva Town Lodge",
    rating: 5.0,
    type: "Lodge",
    address: "Erf 3172 Marula Street, Ongwediva",
    phone: "+264 81 782 7894",
    website: "SirWine Namibia",
    notes: "Boutique-style lodge accommodation.",
  },
  {
    name: "l&B guest house",
    rating: 3.3,
    type: "Guesthouse",
    location: "Ongwediva",
    phone: "+264 81 128 2398",
    notes: "Affordable accommodation option.",
  },
  {
    name: "Self Catering Accommodation",
    rating: 4.1,
    type: "Self Catering",
    phone: "+264 81 286 1952",
    website: "Self Catering Accommodation",
    notes: "Suitable for longer stays and independent travelers.",
  },
];
