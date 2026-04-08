import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (maxPrice) params.set("maxPrice", maxPrice);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-card rounded-2xl card-shadow p-2 flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
        <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
        <Home className="h-5 w-5 text-muted-foreground shrink-0" />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-transparent outline-none w-full text-sm text-foreground"
        >
          <option value="">Property type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
          <option value="penthouse">Penthouse</option>
          <option value="house">House</option>
          <option value="office">Office</option>
        </select>
      </div>
      <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
        <DollarSign className="h-5 w-5 text-muted-foreground shrink-0" />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <Button onClick={handleSearch} size="lg" className="rounded-xl px-8">
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </div>
  );
}
