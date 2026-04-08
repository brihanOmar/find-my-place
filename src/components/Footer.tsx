import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading text-xl font-bold">
              <MapPin className="h-6 w-6" />
              Makanak
            </div>
            <p className="text-sm opacity-70">
              Find properties near you. Connect directly with owners. No intermediaries.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm opacity-70">
              <Link to="/properties" className="block hover:opacity-100 transition-opacity">Browse Properties</Link>
              <Link to="/add-property" className="block hover:opacity-100 transition-opacity">List Your Property</Link>
              <Link to="/favorites" className="block hover:opacity-100 transition-opacity">Favorites</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Property Types</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>Apartments</p>
              <p>Villas</p>
              <p>Studios</p>
              <p>Penthouses</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@makanak.com</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +20 100 000 0000</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Cairo, Egypt</div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          © 2024 Makanak. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
