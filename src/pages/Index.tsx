
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, MapPin, Store, Hotel, Utensils, ShoppingBag, Briefcase, Search, SlidersHorizontal, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import BusinessList from "@/components/BusinessList";
import MapView from "@/components/Map";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("listings");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [priceRange, setPriceRange] = useState([50]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [afmNumber, setAfmNumber] = useState("");
  const [gemiNumber, setGemiNumber] = useState("");
  const [activityCodes, setActivityCodes] = useState("");
  const [legalEntityType, setLegalEntityType] = useState("");

  const categories = [
    { icon: <Utensils size={24} />, name: "Restaurants", count: 245 },
    { icon: <Hotel size={24} />, name: "Accommodation", count: 189 },
    { icon: <ShoppingBag size={24} />, name: "Retail", count: 167 },
    { icon: <Briefcase size={24} />, name: "Services", count: 132 },
    { icon: <Store size={24} />, name: "Food & Drinks", count: 98 },
  ];

  const legalEntityTypes = [
    "Ατομική Επιχείρηση",
    "Ο.Ε.",
    "Ε.Ε.",
    "Ε.Π.Ε.",
    "Α.Ε.",
    "Ι.Κ.Ε.",
    "Συνεταιρισμός",
    "Άλλο"
  ];

  const islands = [
    { name: "Santorini", businesses: 324, image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=600&auto=format&fit=crop" },
    { name: "Mykonos", businesses: 289, image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=600&auto=format&fit=crop" },
    { name: "Paros", businesses: 187, image: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?q=80&w=600&auto=format&fit=crop" },
    { name: "Naxos", businesses: 156, image: "https://images.unsplash.com/photo-1586861256632-3365b67fb271?q=80&w=600&auto=format&fit=crop" },
    { name: "Syros", businesses: 123, image: "https://images.unsplash.com/photo-1663083426757-108ae4ef9d24?q=80&w=600&auto=format&fit=crop" },
    { name: "Milos", businesses: 87, image: "https://images.unsplash.com/photo-1619779977264-a9a22d9efc41?q=80&w=600&auto=format&fit=crop" },
    { name: "Tinos", businesses: 65, image: "https://images.unsplash.com/photo-1688917169732-db576c8bf37e?q=80&w=600&auto=format&fit=crop" },
    { name: "Ios", businesses: 54, image: "https://images.unsplash.com/photo-1616351881166-937d96dba15a?q=80&w=600&auto=format&fit=crop" },
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleAdvancedSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct search parameters with new fields
    const searchParams = new URLSearchParams();
    if (afmNumber) searchParams.append("afm", afmNumber);
    if (gemiNumber) searchParams.append("gemi", gemiNumber);
    if (activityCodes) searchParams.append("codes", activityCodes);
    if (legalEntityType) searchParams.append("entityType", legalEntityType);
    if (selectedCategories.length > 0) searchParams.append("categories", selectedCategories.join(","));
    if (priceRange[0] !== 50) searchParams.append("priceRange", priceRange[0].toString());
    
    window.location.href = `/search?${searchParams.toString()}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Advanced Search */}
      <div
        className="bg-cover bg-center py-16 md:py-24 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Businesses in the Cyclades Islands
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find local businesses, services and experiences across the beautiful Cyclades archipelago
            </p>
            
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Find Businesses</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                >
                  <SlidersHorizontal size={16} />
                  {showAdvancedSearch ? "Simple Search" : "Advanced Search"}
                </Button>
              </div>
              
              <SearchBar />
              
              {showAdvancedSearch && (
                <form onSubmit={handleAdvancedSearch} className="mt-4 pt-4 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="afm">ΑΦΜ</Label>
                      <Input 
                        id="afm"
                        type="text"
                        placeholder="Αριθμός Φορολογικού Μητρώου" 
                        value={afmNumber}
                        onChange={(e) => setAfmNumber(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="gemi">ΓΕΜΗ</Label>
                      <Input 
                        id="gemi"
                        type="text"
                        placeholder="Αριθμός Γενικού Εμπορικού Μητρώου" 
                        value={gemiNumber}
                        onChange={(e) => setGemiNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="activityCodes">Κωδικοί Δραστηριότητας</Label>
                      <Input 
                        id="activityCodes"
                        type="text"
                        placeholder="π.χ. 55.10, 56.10" 
                        value={activityCodes}
                        onChange={(e) => setActivityCodes(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="legalEntityType">Νομική Μορφή</Label>
                      <Select value={legalEntityType} onValueChange={setLegalEntityType}>
                        <SelectTrigger id="legalEntityType">
                          <SelectValue placeholder="Επιλέξτε νομική μορφή" />
                        </SelectTrigger>
                        <SelectContent>
                          {legalEntityTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label className="block text-sm font-medium mb-1">Price Range</Label>
                      <div className="px-2">
                        <Slider
                          defaultValue={[50]}
                          max={100}
                          step={1}
                          onValueChange={(value) => setPriceRange(value)}
                          className="my-4"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>€</span>
                          <span>€€</span>
                          <span>€€€</span>
                          <span>€€€€</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="block text-sm font-medium mb-1">Rating</Label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Button 
                            key={rating} 
                            variant="outline" 
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <Star size={14} className="fill-cyclades-yellow text-cyclades-yellow" /> {rating}+
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label className="block text-sm font-medium mb-1">Categories</Label>
                    <ScrollArea className="h-20 rounded border p-2">
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button 
                            key={category.name}
                            variant="outline"
                            size="sm"
                            className={`flex items-center gap-1 ${
                              selectedCategories.includes(category.name) 
                                ? "bg-cyclades-blue/10 border-cyclades-blue" 
                                : ""
                            }`}
                            onClick={() => toggleCategory(category.name)}
                          >
                            {selectedCategories.includes(category.name) && (
                              <Check size={14} className="text-cyclades-blue" />
                            )}
                            {category.name}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-cyclades-yellow hover:bg-yellow-500 text-black font-medium">
                      Search with Filters
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cyclades Islands Slider Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Explore Cyclades Islands</h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {islands.map((island) => (
                <CarouselItem key={island.name} className="md:basis-1/3 lg:basis-1/4">
                  <Link
                    to={`/search?location=${encodeURIComponent(island.name)}`}
                    className="block h-48 relative rounded-lg overflow-hidden group"
                  >
                    <img 
                      src={island.image}
                      alt={island.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <div className="flex items-center">
                        <MapPin className="text-cyclades-yellow mr-1" size={16} />
                        <h3 className="font-semibold text-white">{island.name}</h3>
                      </div>
                      <p className="text-sm text-white/80">{island.businesses} businesses</p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-4 top-1/2 bg-white" />
              <CarouselNext className="absolute -right-4 top-1/2 bg-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Most Visited Businesses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Most Visited Businesses</h2>
          <div className="w-[240px]">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="listings">Listings</TabsTrigger>
                <TabsTrigger value="map">Map</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-100">
          <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue={activeTab}>
            <TabsContent value="listings" className="mt-0">
              <div className="p-4 md:p-6 bg-white">
                <BusinessList />
              </div>
            </TabsContent>
            
            <TabsContent value="map" className="mt-0">
              <div className="h-[600px]">
                <MapView className="h-full" />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-cyclades-blue hover:bg-cyclades-blue-dark">
            <Link to="/search">View All Businesses</Link>
          </Button>
        </div>
      </section>

      {/* Aegean Cuisine Program */}
      <section className="bg-cyclades-sand py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?q=80&w=2070&auto=format&fit=crop" 
                alt="Aegean Cuisine" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-block mb-4 px-3 py-1 bg-cyclades-yellow/20 text-cyclades-blue-dark rounded-full">
                <span className="text-sm font-medium">Special Program</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Aegean Cuisine</h2>
              <p className="text-gray-700 mb-6">
                Discover restaurants and producers that are part of the Aegean Cuisine initiative, 
                promoting authentic local dishes and products with a focus on traditional recipes 
                and high-quality local ingredients.
              </p>
              <Button asChild>
                <Link to="/aegean-cuisine">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-cyclades-blue-dark text-white rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Are you a business owner?</h2>
              <p className="text-white/90 text-lg">
                Join our directory to increase your online visibility and connect with locals and tourists. 
                Manage your online presence, showcase your products or services, and grow your business.
              </p>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <Button asChild className="bg-white text-cyclades-blue-dark hover:bg-gray-100">
                <Link to="/register">Register Your Business</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/business-login">Business Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
