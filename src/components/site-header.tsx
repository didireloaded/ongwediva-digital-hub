import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore Fair" },
  { to: "/exhibitors", label: "Exhibitors" },
  { to: "/visitors", label: "Visitors" },
  { to: "/maps", label: "Maps" },
  { to: "/schedule", label: "Schedule" },
  { to: "/travel", label: "Travel & Stay" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-ember shadow-elegant">
              <div className="absolute inset-0.5 rounded-[7px] bg-background flex items-center justify-center text-xs font-bold text-gradient-ember">
                O
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold tracking-tight">OATF</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">2026</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-ember" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-ember text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
            >
              Register
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {n.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <Link
                  to="/login"
                  className="flex-1 px-4 py-2.5 text-sm text-center rounded-full border border-border"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 px-4 py-2.5 text-sm font-semibold text-center rounded-full bg-gradient-ember text-primary-foreground"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
