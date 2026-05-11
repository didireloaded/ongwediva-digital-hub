import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { HALLS, EXHIBITORS, CATEGORIES } from "@/lib/oatf-data";
import { ArrowRight, Building2, Sparkles, Map as MapIcon, ChevronRight } from "lucide-react";
import exploreImg from "@/assets/explore-hall.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore the Fair — OATF 2026" },
      {
        name: "description",
        content: "Tour the halls, exhibitors and live activations of OATF 2026.",
      },
    ],
  }),
  component: ExplorePage,
});

const FEATURED = EXHIBITORS.filter((e) => e.featured);

function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredHall, setHoveredHall] = useState<string | null>(null);

  const filteredFeatured = FEATURED.filter(
    (e) => activeCategory === "All" || e.category === activeCategory
  );

  return (
    <PageShell
      eyebrow="Explore Fair"
      title={
        <>
          Tour every <span className="text-gradient-brand">corner</span> of OATF.
        </>
      }
      intro="Six halls, six worlds. From finance to culture, from agribusiness to innovation — start your journey here."
    >
      {/* Hero card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl shadow-elegant mb-16 min-h-[360px] md:min-h-[420px]"
      >
        <img
          src={exploreImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-50"
          loading="lazy"
          width={1280}
          height={960}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative p-10 md:p-16 max-w-2xl h-full flex flex-col justify-center">
          <Sparkles className="h-8 w-8 text-primary mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-sm">
            450+ exhibitors. <span className="text-gradient-brand">One unforgettable journey.</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/maps"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              Open interactive map <MapIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Interactive Mini Map Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-12 gap-8 mb-24 items-center"
      >
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold">The Layout</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            OATF 2026 is designed for discovery. Hover over the regions on the map to see what's happening where. We have specialized halls catering to every industry.
          </p>
          <div className="space-y-4 pt-4">
            {hoveredHall ? (
              <motion.div
                key={hoveredHall}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-6 rounded-2xl border border-primary/20 bg-primary/5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center font-display text-xl font-bold text-white shadow-sm">
                    {hoveredHall}
                  </div>
                  <h3 className="font-display text-xl font-semibold">{HALLS.find(h => h.id === hoveredHall)?.name}</h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Home to {HALLS.find(h => h.id === hoveredHall)?.count}+ exhibitors.
                </p>
                <Link to="/maps" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                  View full map <ChevronRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ) : (
              <div className="glass p-6 rounded-2xl border border-border/50 bg-background/50 text-muted-foreground italic text-sm">
                Hover over a hall block to see details...
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-7 glass rounded-3xl p-8 border border-primary/10 shadow-elegant relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
          <div className="grid grid-cols-3 gap-4 aspect-video">
            {HALLS.map((hall, idx) => (
              <motion.div
                key={hall.id}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onHoverStart={() => setHoveredHall(hall.id)}
                onHoverEnd={() => setHoveredHall(null)}
                className={`relative flex flex-col items-center justify-center rounded-2xl border-2 transition-colors cursor-pointer
                  ${hoveredHall === hall.id ? 'border-primary bg-primary/10 shadow-lg' : 'border-primary/20 bg-background'}
                  ${idx === 0 ? 'col-span-2 row-span-2' : ''}
                  ${idx === 3 ? 'col-span-2' : ''}
                `}
              >
                <div className={`font-display font-bold text-gradient-brand drop-shadow-sm ${idx === 0 ? 'text-6xl mb-2' : 'text-3xl mb-1'}`}>
                  {hall.id}
                </div>
                <div className={`font-medium text-center px-2 ${idx === 0 ? 'text-sm md:text-base' : 'text-[10px] md:text-xs'} text-muted-foreground uppercase tracking-widest`}>
                  {hall.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Halls Grid Overview */}
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">All Halls</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {HALLS.map((h, i) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to="/maps"
              className="group glass block rounded-2xl p-7 hover:-translate-y-1 transition-all hover:shadow-elegant border border-transparent hover:border-primary/20"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center font-display text-2xl font-bold text-primary-foreground shadow-elegant">
                  {h.id}
                </div>
                <Building2 className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{h.name}</h3>
              <div className="text-sm text-muted-foreground mt-2">{h.count}+ exhibitors</div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore hall{" "}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Interactive Featured Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Exhibitors</h2>
            <p className="text-muted-foreground max-w-xl">
              Discover top brands and organizations setting the standard at OATF this year.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.slice(0, 5).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-primary-foreground shadow-elegant scale-105' 
                    : 'glass hover:bg-secondary text-muted-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFeatured.length > 0 ? (
              filteredFeatured.map((e) => (
                <motion.div
                  key={e.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/exhibitors/$id"
                    params={{ id: e.id }}
                    className="group glass block rounded-2xl p-6 h-full hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20"
                  >
                    <div className="flex justify-between items-start mb-5">
                      <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center font-display text-xl font-bold text-primary-foreground shadow-elegant">
                        {e.name.charAt(0)}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                        Hall {e.hall}
                      </div>
                    </div>
                    
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      {e.category}
                    </div>
                    <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                      {e.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.tagline}</p>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center glass rounded-2xl"
              >
                <p className="text-muted-foreground">No featured exhibitors found for this category.</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  View all featured
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </PageShell>
  );
}
