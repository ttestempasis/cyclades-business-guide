
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

interface SearchBarProps {
  className?: string;
  compact?: boolean;
}

const SearchBar = ({ className = "", compact = false }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full ${className}`}
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder={compact ? "Search businesses..." : "Search for businesses, products, services..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 bg-white"
        />
      </div>
      
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder={compact ? "Location..." : "Island, region or location..."}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="pl-10 bg-white"
        />
      </div>
      
      <Button 
        type="submit" 
        className={`bg-cyclades-yellow hover:bg-yellow-500 text-black font-medium ${compact ? 'px-6' : 'px-8 py-6'}`}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
