
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import BusinessList, { mockBusinesses } from "@/components/BusinessList";
import MapView from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Check, Filter, MapPin, List, Map } from "lucide-react";
import { Business } from "@/components/BusinessCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const locationParam = searchParams.get("location") || "";
  const categoryParam = searchParams.get("category") || "";
  
  const [activeTab, setActiveTab] = useState("list");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("relevance");
  
  // Filter businesses based on search parameters
  const filteredBusinesses = mockBusinesses.filter((business) => {
    const matchesQuery = query 
      ? business.name.toLowerCase().includes(query.toLowerCase()) || 
        business.description.toLowerCase().includes(query.toLowerCase()) ||
        business.category.toLowerCase().includes(query.toLowerCase())
      : true;
      
    const matchesLocation = locationParam
      ? business.island.toLowerCase().includes(locationParam.toLowerCase()) ||
        business.address.toLowerCase().includes(locationParam.toLowerCase())
      : true;
      
    const matchesCategory = categoryParam
      ? business.category.toLowerCase() === categoryParam.toLowerCase()
      : true;
      
    return matchesQuery && matchesLocation && matchesCategory;
  });
  
  // Available filters
  const categories = ["All Categories", "Restaurant", "Accommodation", "Retail", "Services", "Food & Drinks"];
  const islands = ["All Islands", "Paros", "Naxos", "Santorini", "Mykonos", "Syros", "Milos"];
  const certifications = ["Aegean Cuisine", "Certified Business", "Local Products"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-cyclades-blue py-6">
        <div className="container mx-auto px-4">
          <SearchBar compact className="max-w-5xl mx-auto" />
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input 
                          type="radio" 
                          name="category" 
                          className="mr-2"
                          defaultChecked={category === "All Categories"} 
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Location Filter */}
                <div>
                  <h3 className="font-medium mb-2">Island</h3>
                  <div className="space-y-2">
                    {islands.map((island) => (
                      <label key={island} className="flex items-center">
                        <input 
                          type="radio" 
                          name="island" 
                          className="mr-2" 
                          defaultChecked={island === "All Islands"}
                        />
                        <span className="text-sm">{island}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Certifications Filter */}
                <div>
                  <h3 className="font-medium mb-2">Certifications</h3>
                  <div className="space-y-2">
                    {certifications.map((cert) => (
                      <label key={cert} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Apply Filters Button */}
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">
                  {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'Business' : 'Businesses'} Found
                </h1>
                <p className="text-gray-600">
                  {query && `For "${query}"`} 
                  {locationParam && ` in ${locationParam}`}
                  {categoryParam && ` - ${categoryParam}`}
                </p>
              </div>
              
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                {/* Mobile Filter Button */}
                <Button 
                  variant="outline" 
                  className="md:hidden flex items-center" 
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
                
                {/* Sort Dropdown */}
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* View Toggle */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden md:block">
                  <TabsList>
                    <TabsTrigger value="list" className="flex items-center">
                      <List size={16} className="mr-1" />
                      List
                    </TabsTrigger>
                    <TabsTrigger value="map" className="flex items-center">
                      <Map size={16} className="mr-1" />
                      Map
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            {/* Mobile Filters (collapsible) */}
            {filterOpen && (
              <div className="md:hidden bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-medium mb-2">Category</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input 
                            type="radio" 
                            name="category-mobile" 
                            className="mr-2"
                            defaultChecked={category === "All Categories"} 
                          />
                          <span className="text-sm">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Location Filter */}
                  <div>
                    <h3 className="font-medium mb-2">Island</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {islands.map((island) => (
                        <label key={island} className="flex items-center">
                          <input 
                            type="radio" 
                            name="island-mobile" 
                            className="mr-2" 
                            defaultChecked={island === "All Islands"}
                          />
                          <span className="text-sm">{island}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Apply Filters Button */}
                  <div className="flex gap-2">
                    <Button className="flex-1">Apply Filters</Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setFilterOpen(false)}
                      className="flex-shrink"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile View Tabs */}
            <div className="md:hidden mb-4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="list" className="flex items-center justify-center">
                    <List size={16} className="mr-1" />
                    List
                  </TabsTrigger>
                  <TabsTrigger value="map" className="flex items-center justify-center">
                    <Map size={16} className="mr-1" />
                    Map
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Results Content */}
            <TabsContent value="list" className="mt-0">
              {filteredBusinesses.length > 0 ? (
                <BusinessList businesses={filteredBusinesses} showLoadMore={true} />
              ) : (
                <div className="text-center p-12 bg-white rounded-lg border border-gray-100">
                  <h2 className="text-xl font-semibold mb-2">No results found</h2>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button variant="outline" onClick={() => window.history.back()}>
                    Go Back
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="map" className="mt-0">
              <div className="h-[700px] bg-white rounded-lg border border-gray-100 overflow-hidden">
                <MapView className="h-full" />
              </div>
            </TabsContent>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
