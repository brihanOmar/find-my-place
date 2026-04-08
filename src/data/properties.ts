import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceType: "sale" | "rent";
  type: "apartment" | "villa" | "studio" | "penthouse" | "house" | "office";
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  address: string;
  lat: number;
  lng: number;
  images: string[];
  features: string[];
  owner: {
    name: string;
    avatar: string;
    phone: string;
  };
  isFeatured: boolean;
  createdAt: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Minimalist Apartment",
    description: "A beautifully designed apartment with natural light, wooden floors, and contemporary furniture. Located in the heart of downtown with easy access to public transport and amenities.",
    price: 2500,
    priceType: "rent",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    location: "Downtown",
    address: "123 Main Street, Downtown",
    lat: 30.0444,
    lng: 31.2357,
    images: [property1, property1, property1],
    features: ["Parking", "Gym", "Pool", "Security", "Elevator"],
    owner: { name: "Ahmed Hassan", avatar: "", phone: "+20 123 456 789" },
    isFeatured: true,
    createdAt: "2024-03-15",
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    description: "Stunning luxury villa with private swimming pool, tropical gardens, and spacious living areas. Perfect for families looking for comfort and style.",
    price: 850000,
    priceType: "sale",
    type: "villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    location: "New Cairo",
    address: "45 Palm Avenue, New Cairo",
    lat: 30.0131,
    lng: 31.4089,
    images: [property2, property2, property2],
    features: ["Pool", "Garden", "Garage", "Security", "Smart Home"],
    owner: { name: "Sara Mohamed", avatar: "", phone: "+20 987 654 321" },
    isFeatured: true,
    createdAt: "2024-03-10",
  },
  {
    id: "3",
    title: "Cozy Studio Apartment",
    description: "A charming studio apartment with modern kitchen and bright natural lighting. Ideal for singles or couples looking for an affordable and stylish living space.",
    price: 1200,
    priceType: "rent",
    type: "studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    location: "Zamalek",
    address: "78 Nile Street, Zamalek",
    lat: 30.0626,
    lng: 31.2213,
    images: [property3, property3, property3],
    features: ["Furnished", "AC", "Internet", "Laundry"],
    owner: { name: "Omar Ali", avatar: "", phone: "+20 111 222 333" },
    isFeatured: false,
    createdAt: "2024-03-12",
  },
  {
    id: "4",
    title: "Panoramic City View Penthouse",
    description: "Breathtaking penthouse with floor-to-ceiling windows offering panoramic city views. Luxurious finishes and premium location.",
    price: 1200000,
    priceType: "sale",
    type: "penthouse",
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    location: "Sheikh Zayed",
    address: "12 Skyline Tower, Sheikh Zayed",
    lat: 30.0409,
    lng: 31.0122,
    images: [property4, property4, property4],
    features: ["Panoramic View", "Private Elevator", "Jacuzzi", "Smart Home", "Concierge"],
    owner: { name: "Layla Ibrahim", avatar: "", phone: "+20 444 555 666" },
    isFeatured: true,
    createdAt: "2024-03-08",
  },
  {
    id: "5",
    title: "Classic Family House",
    description: "Beautiful suburban family house with a large garden and classic architectural design. Perfect for families who love outdoor space.",
    price: 650000,
    priceType: "sale",
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    location: "Maadi",
    address: "56 Green Lane, Maadi",
    lat: 29.9602,
    lng: 31.2569,
    images: [property5, property5, property5],
    features: ["Garden", "Garage", "Fireplace", "Storage", "Balcony"],
    owner: { name: "Khaled Nasser", avatar: "", phone: "+20 777 888 999" },
    isFeatured: false,
    createdAt: "2024-03-05",
  },
  {
    id: "6",
    title: "Modern Office Space",
    description: "Open-plan commercial office space with modern design, large windows, and excellent natural lighting. Located in a prime business district.",
    price: 5000,
    priceType: "rent",
    type: "office",
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    location: "Smart Village",
    address: "Building 7, Smart Village",
    lat: 30.0711,
    lng: 31.0161,
    images: [property6, property6, property6],
    features: ["Open Plan", "Meeting Rooms", "Parking", "Reception", "24/7 Access"],
    owner: { name: "Mona Farid", avatar: "", phone: "+20 333 444 555" },
    isFeatured: true,
    createdAt: "2024-03-01",
  },
];
