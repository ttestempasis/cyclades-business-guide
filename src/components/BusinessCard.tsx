
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export interface Business {
  id: number;
  name: string;
  category: string;
  description: string;
  address: string;
  island: string;
  phone: string;
  hours: string;
  tags: string[];
  image: string;
}

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/business/${business.id}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/business/${business.id}`} className="hover:text-cyclades-blue-dark">
              <h3 className="font-bold text-lg line-clamp-1">{business.name}</h3>
            </Link>
            <p className="text-sm text-gray-500 mb-1">{business.category}</p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <MapPin size={16} className="mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{business.address}, {business.island}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Clock size={16} className="mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{business.hours}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Phone size={16} className="mr-1 flex-shrink-0" />
          <span>{business.phone}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 flex flex-wrap gap-1">
        {business.tags.map((tag, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className={
              tag === "Aegean Cuisine" 
                ? "border-cyclades-blue-dark text-cyclades-blue-dark" 
                : tag === "Certified" 
                ? "border-green-600 text-green-600" 
                : "border-gray-300"
            }
          >
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;
