import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3X3, Map, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import MapPlaceholder from "@/components/MapPlaceholder";
import { properties } from "@/data/properties";

const propertyTypes = ["apartment", "villa", "studio", "penthouse", "house", "office"];
const locations = ["Downtown", "New Cairo", "Zamalek", "Sheikh Zayed", "Maadi", "Smart Village"];
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "area", label: "Largest" },
];

export default function Properties() {
  const [searchParams] = useSearchParams();
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "",
    location: searchParams.get("location") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedrooms: "",
    priceType: "",
  });
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let result = [...properties];
    if (filters.type) result = result.filter((p) => p.type === filters.type);
    if (filters.location) result = result.filter((p) => p.location === filters.location);
    if (filters.maxPrice) result = result.filter((p) => p.price <= Number(filters.maxPrice));
    if (filters.bedrooms) result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms));
    if (filters.priceType) result = result.filter((p) => p.priceType === filters.priceType);

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "area") result.sort((a, b) => b.area - a.area);

    return result;
  }, [filters, sort]);

  const activeFilters = Object.entries(filters).filter(([_, v]) => v);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Browse Properties</h1>
            <p className="text-muted-foreground text-sm mt-1">{filtered.length} properties found</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
            <Button variant={showMap ? "default" : "outline"} size="sm" onClick={() => setShowMap(!showMap)} className="gap-2">
              {showMap ? <Grid3X3 className="h-4 w-4" /> : <Map className="h-4 w-4" />}
              {showMap ? "Grid" : "Map"}
            </Button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-border rounded-lg px-3 py-2 text-sm bg-card text-foreground"
            >
              {sortOptions.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
        </div>

        {showFilters && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-6 p-5 bg-card rounded-2xl card-shadow overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })} className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground">
                <option value="">All Types</option>
                {propertyTypes.map((t) => <option key={t} value={t} className="capitalize">{t}</option>)}
              </select>
              <select value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })} className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground">
                <option value="">All Locations</option>
                {locations.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
              <input type="number" placeholder="Max Price" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground" />
              <select value={filters.bedrooms} onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })} className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground">
                <option value="">Bedrooms</option>
                {[1, 2, 3, 4, 5].map((b) => <option key={b} value={b}>{b}+ beds</option>)}
              </select>
              <select value={filters.priceType} onChange={(e) => setFilters({ ...filters, priceType: e.target.value })} className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground">
                <option value="">Buy & Rent</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
          </motion.div>
        )}

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeFilters.map(([key, value]) => (
              <Badge key={key} variant="secondary" className="gap-1 cursor-pointer" onClick={() => setFilters({ ...filters, [key]: "" })}>
                {value} <X className="h-3 w-3" />
              </Badge>
            ))}
            <Button variant="ghost" size="sm" className="text-xs" onClick={() => setFilters({ type: "", location: "", maxPrice: "", bedrooms: "", priceType: "" })}>
              Clear all
            </Button>
          </div>
        )}

        {showMap ? (
          <MapPlaceholder className="h-[60vh]" markers={filtered.map((p) => ({ lat: p.lat, lng: p.lng, label: p.title }))} />
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Grid3X3 className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">No properties found</h3>
            <p className="text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
