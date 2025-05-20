
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Mock data for business markers
const mockBusinesses = [
  { id: 1, name: "Sunset Taverna", lat: 37.0742, lng: 25.1442, category: "Restaurant", island: "Paros" },
  { id: 2, name: "Blue Sea Hotel", lat: 37.0942, lng: 25.1342, category: "Accommodation", island: "Paros" },
  { id: 3, name: "Island Crafts", lat: 37.1042, lng: 25.1242, category: "Retail", island: "Paros" },
  { id: 4, name: "Naxos Bakery", lat: 37.1042, lng: 25.3742, category: "Food & Drinks", island: "Naxos" },
  { id: 5, name: "Cyclades Tours", lat: 37.0542, lng: 25.3642, category: "Services", island: "Naxos" },
];

interface MapProps {
  className?: string;
}

const MapView = ({ className = "" }: MapProps) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Cyclades center position
  const position: [number, number] = [37.0742, 25.1442]; 

  if (!loaded) {
    return <div className={`bg-gray-100 rounded-lg ${className}`}>Loading map...</div>;
  }

  return (
    <div className={`${className}`}>
      <MapContainer 
        center={position} 
        zoom={10} 
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockBusinesses.map((business) => (
          <Marker 
            key={business.id} 
            position={[business.lat, business.lng]}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold">{business.name}</h3>
                <p className="text-sm text-gray-600">{business.category}</p>
                <p className="text-xs text-gray-500">{business.island}</p>
                <a href={`/business/${business.id}`} className="text-sm text-cyclades-blue hover:underline">
                  View Details
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
