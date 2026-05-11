import { Link } from "@tanstack/react-router";

const COLS = [
  {
    title: "Experience",
    links: [
      { to: "/explore", label: "Explore Fair" },
      { to: "/exhibitors", label: "Exhibitors" },
      { to: "/maps", label: "Hall Maps" },
      { to: "/schedule", label: "Schedule" },
    ],
  },
  {
    title: "Visit",
    links: [
      { to: "/visitors", label: "For Visitors" },
      { to: "/travel", label: "Travel & Stay" },
      { to: "/register", label: "Buy Ticket" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Business",
    links: [
      { to: "/exhibitors", label: "Become Exhibitor" },
      { to: "/sponsors", label: "Sponsorship" },
      { to: "/about", label: "About OATF" },
      { to: "/news", label: "News" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-ink mt-32">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-brand opacity-50" />
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://oatf.com.na/images/oatf-logo.png" 
                alt="OATF Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              The digital home of Namibian trade, innovation, entrepreneurship and culture.
              Ongwediva Annual Trade Fair, since 1999.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">OATF 2026 — Aug 28 → Sep 5</span>
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ongwediva Annual Trade Fair. Hosted by Ongwediva Town
            Council.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for Namibia. Designed for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
