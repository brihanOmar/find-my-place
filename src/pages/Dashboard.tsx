import { motion } from "framer-motion";
import { User, Heart, Clock, MessageCircle, MapPin, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import MapPlaceholder from "@/components/MapPlaceholder";
import { properties } from "@/data/properties";

const quickActions = [
  { icon: Heart, label: "Saved", count: 3, to: "/favorites" },
  { icon: MessageCircle, label: "Messages", count: 2, to: "/messages" },
  { icon: Clock, label: "Searches", count: 5, to: "/properties" },
  { icon: Settings, label: "Settings", count: 0, to: "#" },
];

export default function Dashboard() {
  const nearby = properties.slice(0, 3);
  const saved = properties.filter((p) => ["1", "2"].includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-10 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Welcome */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">Welcome back, User!</h1>
              <p className="text-muted-foreground text-sm">Here's what's happening with your properties</p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {quickActions.map((a) => (
              <Link key={a.label} to={a.to} className="bg-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  {a.count > 0 && (
                    <span className="text-xs font-semibold text-primary bg-accent px-2 py-1 rounded-full">{a.count}</span>
                  )}
                </div>
                <p className="font-heading font-semibold text-foreground">{a.label}</p>
              </Link>
            ))}
          </div>

          {/* Nearby map */}
          <div className="mb-10">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Properties Near You</h2>
            <MapPlaceholder className="h-64" markers={properties.map((p) => ({ lat: p.lat, lng: p.lng, label: p.title }))} />
          </div>

          {/* Saved */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-bold text-foreground">Saved Properties</h2>
              <Link to="/favorites" className="text-sm text-primary hover:underline">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saved.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
            </div>
          </div>

          {/* Recent */}
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Recently Viewed</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nearby.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
