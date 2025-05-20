
import BusinessCard, { Business } from "./BusinessCard";
import { Button } from "@/components/ui/button";

// Mock data for businesses
export const mockBusinesses: Business[] = [
  {
    id: 1,
    name: "Sunset Taverna",
    category: "Restaurant",
    description: "Traditional Greek tavern with stunning sunset views.",
    address: "Naoussa Port",
    island: "Paros",
    phone: "+30 2284 051234",
    hours: "12:00 - 23:00",
    tags: ["Aegean Cuisine", "Seafood"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Blue Sea Hotel",
    category: "Accommodation",
    description: "Comfortable hotel with sea view rooms.",
    address: "Agios Georgios",
    island: "Naxos",
    phone: "+30 2285 023456",
    hours: "Reception 24h",
    tags: ["Certified", "Beachfront"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Cyclades Souvenirs",
    category: "Retail",
    description: "Authentic local products and souvenirs.",
    address: "Market Street 15",
    island: "Mykonos",
    phone: "+30 2289 078901",
    hours: "10:00 - 22:00",
    tags: ["Handcrafted", "Local Products"],
    image: "https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?q=80&w=2064&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Island Bakery",
    category: "Food & Drinks",
    description: "Fresh bread and pastries baked daily.",
    address: "Main Street 8",
    island: "Santorini",
    phone: "+30 2286 045678",
    hours: "07:00 - 20:00",
    tags: ["Traditional Recipes", "Certified"],
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=2022&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Aegean Tours",
    category: "Services",
    description: "Guided tours around the beautiful Cyclades islands.",
    address: "Harbor Avenue 22",
    island: "Paros",
    phone: "+30 2284 034567",
    hours: "09:00 - 17:00",
    tags: ["Boat Tours", "Licensed Guides"],
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Olive Grove Restaurant",
    category: "Restaurant",
    description: "Farm-to-table dining experience with organic ingredients.",
    address: "Countryside Road 5",
    island: "Naxos",
    phone: "+30 2285 067890",
    hours: "18:00 - 23:00",
    tags: ["Aegean Cuisine", "Organic"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop",
  },
];

interface BusinessListProps {
  businesses?: Business[];
  showLoadMore?: boolean;
}

const BusinessList = ({ 
  businesses = mockBusinesses, 
  showLoadMore = false 
}: BusinessListProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
      
      {showLoadMore && (
        <div className="mt-8 text-center">
          <Button variant="outline">Load More</Button>
        </div>
      )}
    </div>
  );
};

export default BusinessList;
