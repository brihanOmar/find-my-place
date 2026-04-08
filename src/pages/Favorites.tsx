import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Grid3X3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Favorites() {
  // Mock: first 3 are "favorited"
  const [favIds] = useState(["1", "2", "4"]);
  const favs = properties.filter((p) => favIds.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-10 container mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Favorites</h1>
        <p className="text-muted-foreground text-sm mb-8">{favs.length} saved properties</p>

        {favs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favs.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">No favorites yet</h3>
            <p className="text-muted-foreground">Start exploring and save properties you love</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
