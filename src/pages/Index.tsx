import { motion } from "framer-motion";
import { Search, MapPin, MessageCircle, Shield, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import MapPlaceholder from "@/components/MapPlaceholder";
import heroBg from "@/assets/hero-bg.jpg";
import { properties } from "@/data/properties";

const steps = [
  { icon: Search, title: "Search Nearby", desc: "Find properties near your location using smart geolocation search." },
  { icon: MapPin, title: "Explore on Map", desc: "View properties on an interactive map and explore neighborhoods." },
  { icon: MessageCircle, title: "Contact Owner", desc: "Message property owners directly — no agents or intermediaries." },
  { icon: Shield, title: "Secure Deals", desc: "Complete transactions safely with verified property listings." },
];

const stats = [
  { value: "12K+", label: "Properties" },
  { value: "8K+", label: "Happy Users" },
  { value: "50+", label: "Cities" },
  { value: "99%", label: "Satisfaction" },
];

export default function Index() {
  const featured = properties.filter((p) => p.isFeatured);
  const mapMarkers = properties.map((p) => ({ lat: p.lat, lng: p.lng, label: p.title }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-16">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md px-4 py-2 rounded-full text-primary-foreground text-sm">
              <Building2 className="h-4 w-4" />
              Find your perfect place nearby
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight">
              Your Next Home
              <br />
              is Just Around
              <br />
              <span className="text-gradient">the Corner</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-lg">
              Discover properties near you. Connect directly with owners. No middlemen, no hidden fees.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading font-bold text-2xl text-primary-foreground">{s.value}</p>
                  <p className="text-xs text-primary-foreground/60">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 max-w-4xl"
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-primary mb-1">Featured</p>
            <h2 className="font-heading text-3xl font-bold text-foreground">Popular Properties</h2>
          </div>
          <Link to="/properties">
            <Button variant="ghost" className="gap-2 text-primary">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </section>

      {/* Map Preview */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-primary mb-1">Explore</p>
            <h2 className="font-heading text-3xl font-bold text-foreground">Properties Near You</h2>
          </div>
        </div>
        <MapPlaceholder className="h-80 md:h-96" markers={mapMarkers} />
      </section>

      {/* How it works */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary mb-1">Simple Process</p>
            <h2 className="font-heading text-3xl font-bold text-foreground">How Makanak Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 card-shadow text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-card-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Find Your Place?
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Join thousands of users who found their perfect property through Makanak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/properties">
              <Button size="lg" variant="secondary" className="rounded-xl px-8">
                Browse Properties
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="rounded-xl px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
