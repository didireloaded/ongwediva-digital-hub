import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Bed, UtensilsCrossed, Mountain, Car, Star, MapPin, Phone, Globe, ChevronLeft, Clock, Info } from "lucide-react";
import { useState } from "react";
import { ACCOMMODATIONS } from "@/lib/accommodations";
import { EAT_DRINK_PLACES } from "@/lib/eat-drink";
import { SEE_DO_ITEMS } from "@/lib/see-do";
import { TRANSPORT_ITEMS, TRAVEL_NOTES } from "@/lib/transport";

const TILES = [
  {
    id: "stay",
    icon: Bed,
    title: "Where to Stay",
    text: "Hotels, lodges, guesthouses and self-catering options near the fairgrounds.",
  },
  {
    id: "eat",
    icon: UtensilsCrossed,
    title: "Eat & Drink",
    text: "Restaurants, cafés and traditional Owambo cuisine across Ongwediva.",
  },
  {
    id: "do",
    icon: Mountain,
    title: "See & Do",
    text: "Cultural landmarks, markets, and unforgettable northern Namibia experiences.",
  },
  {
    id: "transport",
    icon: Car,
    title: "Getting Around",
    text: "Airport transfers, shuttle routes and getting to the fair grounds.",
  },
];

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel & Stay — OATF 2026" },
      {
        name: "description",
        content:
          "Plan your stay in Ongwediva — hotels, food, attractions and transport for OATF 2026.",
      },
    ],
  }),
  component: TravelPage,
});

function TravelPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <PageShell
      eyebrow="Travel & Stay"
      title={
        <>
          Welcome to <span className="text-gradient-brand">Ongwediva.</span>
        </>
      }
      intro="Everything you need to make your trip to northern Namibia unforgettable."
    >
      {!activeTab ? (
        <div className="grid md:grid-cols-2 gap-5">
          {TILES.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="text-left glass rounded-2xl p-7 hover:-translate-y-0.5 transition-transform"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-elegant">
                <t.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold mt-5">{t.title}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{t.text}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <button 
            onClick={() => setActiveTab(null)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to categories
          </button>
          
          {activeTab === "stay" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-brand flex items-center justify-center shadow-elegant">
                  <Bed className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-semibold">Where to Stay</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {ACCOMMODATIONS.map((acc, i) => (
                  <div key={i} className="glass rounded-2xl p-6 flex flex-col h-full hover:shadow-elegant transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-lg leading-tight mr-2">{acc.name}</h4>
                      <div className="flex items-center gap-1 bg-white/50 dark:bg-black/10 px-2 py-1 rounded-md text-sm font-medium">
                        <Star className="h-3.5 w-3.5 text-oatf-gold fill-oatf-gold" />
                        {acc.rating.toFixed(1)}
                      </div>
                    </div>
                    
                    <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
                      {acc.type}
                    </div>
                    
                    <div className="space-y-3 mt-auto text-sm text-muted-foreground">
                      {(acc.address || acc.location || acc.area) && (
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{acc.address || acc.location || acc.area}</span>
                        </div>
                      )}
                      
                      {acc.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 shrink-0" />
                          <a href={`tel:${acc.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{acc.phone}</a>
                        </div>
                      )}
                      
                      {(acc.website || acc.booking || acc.facebook) && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 shrink-0" />
                          <span className="text-primary hover:underline cursor-pointer">
                            {acc.website ? "Website" : acc.booking ? "Booking" : "Facebook"}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-border/50 text-sm italic">
                      "{acc.notes}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "eat" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-brand flex items-center justify-center shadow-elegant">
                  <UtensilsCrossed className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-semibold">Eat & Drink</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {EAT_DRINK_PLACES.map((place, i) => (
                  <div key={i} className="glass rounded-2xl p-6 flex flex-col h-full hover:shadow-elegant transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-lg leading-tight mr-2">{place.name}</h4>
                      {place.rating !== undefined && place.rating > 0 && (
                        <div className="flex items-center gap-1 bg-white/50 dark:bg-black/10 px-2 py-1 rounded-md text-sm font-medium">
                          <Star className="h-3.5 w-3.5 text-oatf-gold fill-oatf-gold" />
                          {place.rating.toFixed(1)}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
                      {place.type}
                    </div>
                    
                    <div className="space-y-3 mt-auto text-sm text-muted-foreground">
                      {(place.address || place.location) && (
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{place.address || place.location}</span>
                        </div>
                      )}
                      
                      {place.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 shrink-0" />
                          <a href={`tel:${place.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{place.phone}</a>
                        </div>
                      )}

                      {place.hours && (
                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{place.hours}</span>
                        </div>
                      )}
                      
                      {place.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 shrink-0" />
                          <span className="text-primary hover:underline cursor-pointer">
                            Website
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-border/50 text-sm italic">
                      "{place.notes}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "do" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-brand flex items-center justify-center shadow-elegant">
                  <Mountain className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-semibold">Things To See & Do in Ongwediva</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SEE_DO_ITEMS.map((item, i) => (
                  <div key={i} className="glass rounded-2xl p-6 flex flex-col h-full hover:shadow-elegant transition-shadow">
                    <div className="mb-4">
                      <h4 className="font-semibold text-xl leading-tight mb-2">{item.title}</h4>
                      <div className="text-xs uppercase tracking-widest text-primary font-bold">
                        {item.type}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mt-4 flex-grow">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "transport" && (
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-brand flex items-center justify-center shadow-elegant">
                  <Car className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-semibold">Getting Around</h3>
              </div>
              
              <div className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-oatf-gold/5 border border-primary/10">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-3">Travel Notes for Visitors</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {TRAVEL_NOTES.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TRANSPORT_ITEMS.map((item, i) => (
                  <div key={i} className="glass rounded-2xl p-6 flex flex-col h-full hover:shadow-elegant transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-lg leading-tight mr-2">{item.name}</h4>
                      {item.rating !== undefined && item.rating > 0 && (
                        <div className="flex items-center gap-1 bg-white/50 dark:bg-black/10 px-2 py-1 rounded-md text-sm font-medium">
                          <Star className="h-3.5 w-3.5 text-oatf-gold fill-oatf-gold" />
                          {item.rating.toFixed(1)}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
                      {item.type || item.category}
                    </div>
                    
                    <div className="space-y-3 mt-auto text-sm text-muted-foreground">
                      {(item.address || item.location) && (
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{item.address || item.location}</span>
                        </div>
                      )}
                      
                      {item.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 shrink-0" />
                          <a href={`tel:${item.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{item.phone}</a>
                        </div>
                      )}

                      {item.hours && (
                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{item.hours}</span>
                        </div>
                      )}
                      
                      {item.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 shrink-0" />
                          <span className="text-primary hover:underline cursor-pointer">
                            Website
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-border/50 text-sm italic">
                      {Array.isArray(item.notes) ? (
                        <ul className="space-y-2">
                          {item.notes.map((note, nIdx) => (
                            <li key={nIdx} className="text-muted-foreground">{note}</li>
                          ))}
                        </ul>
                      ) : (
                        `"${item.notes}"`
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </PageShell>
  );
}
