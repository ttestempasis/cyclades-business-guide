
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import BusinessList from "@/components/BusinessList";
import MapView from "@/components/Map";
import Footer from "@/components/Footer";
import { MapPin, Store, Hotel, Utensils, ShoppingBag, Briefcase } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("listings");

  const categories = [
    { icon: <Utensils size={24} />, name: "Restaurants", count: 245 },
    { icon: <Hotel size={24} />, name: "Accommodation", count: 189 },
    { icon: <ShoppingBag size={24} />, name: "Retail", count: 167 },
    { icon: <Briefcase size={24} />, name: "Services", count: 132 },
    { icon: <Store size={24} />, name: "Food & Drinks", count: 98 },
  ];

  const islands = [
    { name: "Santorini", businesses: 324 },
    { name: "Mykonos", businesses: 289 },
    { name: "Paros", businesses: 187 },
    { name: "Naxos", businesses: 156 },
    { name: "Syros", businesses: 123 },
    { name: "Milos", businesses: 87 },
    { name: "Tinos", businesses: 65 },
    { name: "Ios", businesses: 54 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div
        className="bg-cover bg-center py-16 md:py-32 relative"
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
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/search?category=${encodeURIComponent(category.name)}`}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex justify-center mb-3 text-cyclades-blue-dark">
                {category.icon}
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} listings</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Islands Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore by Island</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {islands.map((island) => (
              <Link
                key={island.name}
                to={`/search?location=${encodeURIComponent(island.name)}`}
                className="bg-white rounded-lg p-4 flex items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <MapPin className="text-cyclades-blue-light mr-2" size={18} />
                <div>
                  <h3 className="font-semibold">{island.name}</h3>
                  <p className="text-sm text-gray-500">{island.businesses} businesses</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Businesses</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[240px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="listings">Listings</TabsTrigger>
              <TabsTrigger value="map">Map</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="rounded-lg overflow-hidden border border-gray-100">
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
