
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapView from "@/components/Map";
import { mockBusinesses } from "@/components/BusinessList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Globe, 
  Clock, 
  Mail, 
  Share2, 
  Facebook, 
  Instagram, 
  Twitter, 
  Image,
  Check
} from "lucide-react";

const BusinessProfile = () => {
  const { id } = useParams<{ id: string }>();
  const businessId = parseInt(id || "1");
  
  // Find the business in our mock data
  const business = mockBusinesses.find(b => b.id === businessId) || mockBusinesses[0];
  
  // Additional mock data for the profile page
  const additionalInfo = {
    email: "info@example.com",
    website: "www.example.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel aliquam malesuada, nunc nisl ultricies nisi, nec tincidunt nisl nunc nec elit. Sed euismod, velit vel aliquam malesuada, nunc nisl ultricies nisi, nec tincidunt nisl nunc nec elit.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel aliquam malesuada, nunc nisl ultricies nisi, nec tincidunt nisl nunc nec elit. Sed euismod, velit vel aliquam malesuada, nunc nisl ultricies nisi, nec tincidunt nisl nunc nec elit. Sed euismod, velit vel aliquam malesuada, nunc nisl ultricies nisi, nec tincidunt nisl nunc nec elit. Sed euismod, velit vel aliquam malesuada, nunc nisl ultricies nisi, nec tincidunt nisl nunc nec elit.",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    },
    gallery: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1930&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop"
    ],
    services: [
      "Breakfast", "Lunch", "Dinner", "Takeaway", "Delivery", "Outdoor Seating"
    ],
    products: [
      "Fresh Seafood", "Local Wines", "Traditional Recipes", "Homemade Desserts"
    ],
    certifications: [
      { name: "Aegean Cuisine", year: "2023" },
      { name: "Quality Certification", year: "2022" }
    ]
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Cover Image Header */}
      <div 
        className="relative h-64 md:h-80 bg-cover bg-center" 
        style={{ backgroundImage: `url(${business.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="container mx-auto">
            <Badge className="mb-2 bg-white text-cyclades-blue-dark">
              {business.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {business.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={18} className="text-white/80" />
              <p className="text-white/80">
                {business.address}, {business.island}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs Navigation */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="products">Products & Services</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">About</h2>
                  <p className="mb-4">{additionalInfo.description}</p>
                  <p>{additionalInfo.longDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {business.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className={
                          tag === "Aegean Cuisine" 
                            ? "border-cyclades-blue-dark text-cyclades-blue-dark" 
                            : tag === "Certified" 
                            ? "border-green-600 text-green-600" 
                            : ""
                        }
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Certifications Section */}
                {additionalInfo.certifications.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                    <div className="space-y-4">
                      {additionalInfo.certifications.map((cert, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="p-1 rounded-full bg-green-100">
                              <Check size={16} className="text-green-600" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium">{cert.name}</h3>
                            <p className="text-sm text-gray-600">Certified since {cert.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              {/* Gallery Tab */}
              <TabsContent value="gallery">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[business.image, ...additionalInfo.gallery].map((img, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${business.name} gallery image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              {/* Products & Services Tab */}
              <TabsContent value="products">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Services Section */}
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Services</h2>
                      <ul className="space-y-2">
                        {additionalInfo.services.map((service, index) => (
                          <li key={index} className="flex items-center">
                            <Check size={18} className="text-cyclades-blue-dark mr-2" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Products Section */}
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Products</h2>
                      <ul className="space-y-2">
                        {additionalInfo.products.map((product, index) => (
                          <li key={index} className="flex items-center">
                            <Check size={18} className="text-cyclades-blue-dark mr-2" />
                            <span>{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Location Tab */}
              <TabsContent value="location">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <h2 className="text-2xl font-semibold mb-6">Location</h2>
                  <div className="h-[400px] mb-6 rounded-lg overflow-hidden">
                    <MapView className="h-full" />
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="text-cyclades-blue-dark mr-2 mt-1 flex-shrink-0" />
                    <p>
                      {business.address}, {business.island}, Cyclades, Greece
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={20} className="text-cyclades-blue-dark mr-3 flex-shrink-0" />
                  <a href={`tel:${business.phone}`} className="hover:text-cyclades-blue-dark">
                    {business.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail size={20} className="text-cyclades-blue-dark mr-3 flex-shrink-0" />
                  <a href={`mailto:${additionalInfo.email}`} className="hover:text-cyclades-blue-dark">
                    {additionalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Globe size={20} className="text-cyclades-blue-dark mr-3 flex-shrink-0" />
                  <a 
                    href={`https://${additionalInfo.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyclades-blue-dark"
                  >
                    {additionalInfo.website}
                  </a>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="text-cyclades-blue-dark mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-gray-600">{business.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-center pt-2">
                  <div className="flex space-x-3">
                    <a 
                      href={additionalInfo.social.facebook}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-100"
                    >
                      <Facebook size={20} className="text-cyclades-blue-dark" />
                    </a>
                    <a 
                      href={additionalInfo.social.instagram}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-100"
                    >
                      <Instagram size={20} className="text-cyclades-blue-dark" />
                    </a>
                    <a 
                      href={additionalInfo.social.twitter}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-100"
                    >
                      <Twitter size={20} className="text-cyclades-blue-dark" />
                    </a>
                    <Button variant="outline" className="ml-2 flex items-center" size="sm">
                      <Share2 size={16} className="mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Preview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <MapView className="h-full" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin size={18} className="text-cyclades-blue-dark mr-1" />
                  <p className="text-sm">{business.island}, Cyclades</p>
                </div>
                <Button variant="link" className="p-0 h-auto text-cyclades-blue-dark">
                  Get Directions
                </Button>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold mb-4">Business QR Code</h2>
              <div className="bg-white p-4 rounded-lg border border-gray-100 flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center">
                  <Image size={40} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Scan to visit this business profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessProfile;
