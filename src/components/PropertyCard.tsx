import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Bed, Bath, Maximize, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/data/properties";

interface Props {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link to={`/property/${property.id}`} className="block group">
        <div className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={property.images[0]}
              alt={property.title}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className="bg-primary text-primary-foreground font-semibold text-xs">
                {property.priceType === "rent" ? "For Rent" : "For Sale"}
              </Badge>
              {property.isFeatured && (
                <Badge variant="secondary" className="font-semibold text-xs">Featured</Badge>
              )}
            </div>
            <button
              onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
              className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                liked ? "bg-destructive/90 text-destructive-foreground" : "bg-card/70 text-foreground hover:bg-card"
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
            </button>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="h-3.5 w-3.5" />
              {property.location}
            </div>
            <h3 className="font-heading font-semibold text-card-foreground line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {property.bedrooms}</span>
              )}
              <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {property.bathrooms}</span>
              <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {property.area}m²</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <p className="font-heading font-bold text-lg text-primary">
                ${property.price.toLocaleString()}
                {property.priceType === "rent" && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
              </p>
              <span className="text-xs text-muted-foreground capitalize">{property.type}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
