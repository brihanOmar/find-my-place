import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Bed, Bath, Maximize, Phone, MessageCircle, ArrowLeft, Share2, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapPlaceholder from "@/components/MapPlaceholder";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [liked, setLiked] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Property not found</h2>
          <Link to="/properties"><Button>Back to listings</Button></Link>
        </div>
      </div>
    );
  }

  const similar = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 container mx-auto px-4 pb-10">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to listings
        </Link>

        {/* Image Gallery */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/7] mb-8">
          <img src={property.images[imgIndex]} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <Badge className="bg-primary text-primary-foreground">{property.priceType === "rent" ? "For Rent" : "For Sale"}</Badge>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button onClick={() => setLiked(!liked)} className={`p-2.5 rounded-full backdrop-blur-md ${liked ? "bg-destructive/90 text-destructive-foreground" : "bg-card/70 text-foreground"}`}>
              <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
            </button>
            <button className="p-2.5 rounded-full backdrop-blur-md bg-card/70 text-foreground">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
          {property.images.length > 1 && (
            <>
              <button onClick={() => setImgIndex((i) => (i - 1 + property.images.length) % property.images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/70 backdrop-blur-md">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => setImgIndex((i) => (i + 1) % property.images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/70 backdrop-blur-md">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <MapPin className="h-4 w-4" /> {property.address}
              </div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-2">{property.title}</h1>
              <p className="font-heading text-3xl font-bold text-primary">
                ${property.price.toLocaleString()}
                {property.priceType === "rent" && <span className="text-lg font-normal text-muted-foreground">/month</span>}
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {property.bedrooms > 0 && (
                <div className="bg-card rounded-xl p-4 card-shadow text-center">
                  <Bed className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-heading font-semibold text-foreground">{property.bedrooms}</p>
                  <p className="text-xs text-muted-foreground">Bedrooms</p>
                </div>
              )}
              <div className="bg-card rounded-xl p-4 card-shadow text-center">
                <Bath className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-heading font-semibold text-foreground">{property.bathrooms}</p>
                <p className="text-xs text-muted-foreground">Bathrooms</p>
              </div>
              <div className="bg-card rounded-xl p-4 card-shadow text-center">
                <Maximize className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-heading font-semibold text-foreground">{property.area}m²</p>
                <p className="text-xs text-muted-foreground">Area</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Location</h3>
              <MapPlaceholder className="h-64" markers={[{ lat: property.lat, lng: property.lng, label: property.title }]} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 card-shadow sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-lg">{property.owner.name[0]}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{property.owner.name}</p>
                  <p className="text-sm text-muted-foreground">Property Owner</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full gap-2 rounded-xl" size="lg">
                  <MessageCircle className="h-5 w-5" /> Send Message
                </Button>
                <Button variant="outline" className="w-full gap-2 rounded-xl" size="lg">
                  <Phone className="h-5 w-5" /> Call Owner
                </Button>
              </div>
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Similar Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
