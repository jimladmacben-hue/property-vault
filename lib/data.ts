export interface Property {
  id: number;
  badge: string;
  price: string;
  priceValue: number;
  image: string;
  title: string;
  location: string;
  city: string;
  beds: number;
  baths: number;
  sqm: number;
  agent: string;
  type: "Buy" | "Sell" | "Land" | "Commercial" | "Shortlet";
  isVerified: boolean;
}

export type VerificationStatus = "unverified" | "pending" | "verified" | "rejected";

export interface Agent {
  id: string;
  name: string;
  email: string;
  companyName?: string;
  verificationStatus: VerificationStatus;
  role: "agent";
  rcNumber?: string;
  ninNumber?: string;
  cacDocument?: string;
  identityDocument?: string;
  directorName?: string;
  directorIdDocument?: string;
}


export const properties: Property[] = [
  {
    id: 1,
    badge: "TITLE VERIFIED",
    price: "₦45,000,000",
    priceValue: 45000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    title: "4 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    city: "Lagos",
    beds: 4,
    baths: 3,
    sqm: 320,
    agent: "Adewale Realty",
    type: "Buy",
    isVerified: true,
  },
  {
    id: 2,
    badge: "TITLE VERIFIED",
    price: "₦655,000,000",
    priceValue: 655000000,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80",
    title: "6 Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    city: "Lagos",
    beds: 6,
    baths: 6,
    sqm: 4320,
    agent: "Lagos Prime",
    type: "Buy",
    isVerified: true,
  },
  {
    id: 3,
    badge: "TITLE VERIFIED",
    price: "₦90,000,000",
    priceValue: 90000000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    title: "7 Bedroom Detached Duplex",
    location: "Lekki Phase 11, Lagos",
    city: "Lagos",
    beds: 7,
    baths: 7,
    sqm: 900,
    agent: "Capital Homes",
    type: "Buy",
    isVerified: true,
  },
  {
    id: 4,
    badge: "TITLE VERIFIED",
    price: "₦655,000,000",
    priceValue: 655000000,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
    title: "Commercial Office Space",
    location: "Victoria Island, Lagos",
    city: "Lagos",
    beds: 0,
    baths: 4,
    sqm: 1200,
    agent: "Lagos Prime",
    type: "Commercial",
    isVerified: true,
  },
  {
    id: 5,
    badge: "TITLE VERIFIED",
    price: "₦15,000,000",
    priceValue: 15000000,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
    title: "600sqm Land in Ajah",
    location: "Ajah, Lagos",
    city: "Lagos",
    beds: 0,
    baths: 0,
    sqm: 600,
    agent: "Ajah Properties",
    type: "Land",
    isVerified: true,
  },
  {
    id: 6,
    badge: "TITLE VERIFIED",
    price: "₦2,500,000 /yr",
    priceValue: 2500000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80",
    title: "3 Bedroom Apartment",
    location: "Maitama, Abuja",
    city: "Abuja",
    beds: 3,
    baths: 3,
    sqm: 250,
    agent: "Abuja Rentals",
    type: "Sell",
    isVerified: true,
  },
];
