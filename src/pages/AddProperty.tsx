import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, MapPin, DollarSign, Home, FileText, ImagePlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapPlaceholder from "@/components/MapPlaceholder";

export default function AddProperty() {
  const [images, setImages] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-10 container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">List Your Property</h1>
          <p className="text-muted-foreground text-sm mb-8">Fill in the details below to publish your listing</p>

          <div className="space-y-8">
            {/* Images */}
            <div className="bg-card rounded-2xl p-6 card-shadow space-y-4">
              <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
                <ImagePlus className="h-5 w-5 text-primary" /> Property Images
              </h3>
              <div className="border-2 border-dashed border-border rounded-xl p-10 text-center cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Click or drag images here</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
              </div>
            </div>

            {/* Details */}
            <div className="bg-card rounded-2xl p-6 card-shadow space-y-4">
              <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Property Details
              </h3>
              <div>
                <Label>Title</Label>
                <Input placeholder="e.g. Modern 2BR Apartment in Downtown" className="mt-1.5" />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea placeholder="Describe your property..." className="mt-1.5 min-h-[120px]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Price</Label>
                  <Input type="number" placeholder="0" className="mt-1.5" />
                </div>
                <div>
                  <Label>Listing Type</Label>
                  <select className="w-full mt-1.5 border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground">
                    <option value="rent">For Rent</option>
                    <option value="sale">For Sale</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Property Type</Label>
                  <select className="w-full mt-1.5 border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground">
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Studio</option>
                    <option>Penthouse</option>
                    <option>House</option>
                    <option>Office</option>
                  </select>
                </div>
                <div>
                  <Label>Bedrooms</Label>
                  <Input type="number" placeholder="0" className="mt-1.5" />
                </div>
                <div>
                  <Label>Bathrooms</Label>
                  <Input type="number" placeholder="0" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label>Area (m²)</Label>
                <Input type="number" placeholder="0" className="mt-1.5" />
              </div>
            </div>

            {/* Location */}
            <div className="bg-card rounded-2xl p-6 card-shadow space-y-4">
              <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Location
              </h3>
              <div>
                <Label>Address</Label>
                <Input placeholder="Full address" className="mt-1.5" />
              </div>
              <MapPlaceholder className="h-64" />
              <p className="text-xs text-muted-foreground">Click on the map to set the exact location</p>
            </div>

            <Button size="lg" className="w-full rounded-xl">
              <Upload className="h-5 w-5 mr-2" /> Publish Listing
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
