import { MapPin } from "lucide-react";

interface Props {
  className?: string;
  markers?: { lat: number; lng: number; label: string }[];
}

export default function MapPlaceholder({ className = "", markers = [] }: Props) {
  return (
    <div className={`relative bg-muted rounded-2xl overflow-hidden flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20" />
      <div className="relative text-center p-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <MapPin className="h-8 w-8 text-primary" />
        </div>
        <p className="font-heading font-semibold text-foreground">Interactive Map</p>
        <p className="text-sm text-muted-foreground mt-1">
          {markers.length > 0 ? `${markers.length} properties nearby` : "Connect Google Maps API to enable"}
        </p>
      </div>
      {markers.slice(0, 5).map((m, i) => (
        <div
          key={i}
          className="absolute animate-pulse-soft"
          style={{
            left: `${20 + (i * 15) % 60}%`,
            top: `${15 + (i * 20) % 60}%`,
          }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <MapPin className="h-4 w-4 text-primary" />
          </div>
        </div>
      ))}
    </div>
  );
}
