import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { StatCounter } from "@/components/stat-counter";
import { Globe, Users, Target, History, Trophy, TrendingUp, Handshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About OATF" },
      {
        name: "description",
        content:
          "Since 1999, the Ongwediva Annual Trade Fair has powered Namibian business, innovation and culture.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About OATF"
      title={
        <>
          Namibia's Premier <span className="text-gradient-brand">Exhibition Platform.</span>
        </>
      }
      intro="Hosted by the Ongwediva Town Council, OATF has grown from a regional showcase into the largest multi-sectoral trade and culture event in northern Namibia."
    >
      <div className="grid md:grid-cols-3 gap-6 mt-8 mb-20">
        <StatCounter value={1999} label="Founded" />
        <StatCounter value={100} suffix="K+" label="Annual Visitors" />
        <StatCounter value={450} suffix="+" label="Local & Int. Exhibitors" />
      </div>

      <div className="space-y-24">
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To facilitate a dynamic platform for business networking, innovation showcasing, and 
              cultural celebration, driving economic growth in northern Namibia and across the SADC region.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                { icon: TrendingUp, text: "Facilitate Business & Economic Growth" },
                { icon: Handshake, text: "Enable B2B & B2C Networking" },
                { icon: Globe, text: "Provide a world-class exhibition platform" },
                { icon: Users, text: "Promote local communities & entrepreneurship" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-muted-foreground">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden glass border border-primary/20 shadow-elegant">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
              alt="Conference Networking" 
              className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-8">
              <div className="p-6 glass rounded-2xl border border-white/10 w-full backdrop-blur-md">
                <Target className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display text-xl font-semibold text-white mb-2">Our Vision</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  To remain the most successful and preferred multi-sectoral trade, business, and exhibition platform in Namibia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-oatf-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="mx-auto h-16 w-16 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-elegant mb-8">
              <History className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Our History</h2>
            <div className="space-y-6 text-left text-muted-foreground text-lg leading-relaxed">
              <p>
                The Ongwediva Annual Trade Fair (OATF) was conceptualized in the late 1990s as a platform to stimulate economic development and business activity in northern Namibia. 
              </p>
              <p>
                Since its inaugural event in 2000, inaugurated by the Founding President Dr. Sam Nujoma, OATF has grown exponentially. From a modest regional showcase operating from temporary tents, the trade fair now boasts a state-of-the-art Trade Fair Centre with permanent exhibition halls, modern facilities, and dedicated outdoor spaces.
              </p>
              <p>
                Today, OATF is a major highlight on the Namibian business calendar, attracting hundreds of exhibitors from diverse economic sectors locally and internationally. It serves as a vital bridge between small and medium enterprises (SMEs) and corporate giants.
              </p>
            </div>
          </div>
        </section>

        {/* Why this platform */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-semibold mb-4">A Modern Digital Platform</h2>
            <p className="text-muted-foreground">
              OATF 2026 marks our 26th edition and a bold step into the future with our fully digital, paperless platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Seamless Registration",
                description: "Both exhibitors and visitors can register, purchase tickets, and manage their profiles entirely online."
              },
              {
                title: "Real-time Updates",
                description: "Get the latest news, schedules, and exhibitor lists directly on your phone, synced with our live social media feeds."
              },
              {
                title: "Eco-Friendly",
                description: "By going document-free, we are reducing our carbon footprint while making information more accessible and organized."
              }
            ].map((feature, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors">
                <Trophy className="h-8 w-8 text-oatf-gold mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preparatory Committee Note */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
          <h2 className="font-display text-2xl font-semibold mb-4">The Preparatory Committee</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Behind every successful trade fair is a dedicated team of professionals working tirelessly year-round. The OATF Preparatory Committee, comprising sub-committees for logistics, marketing, security, and administration, ensures that every aspect of the fair runs seamlessly.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
            <Users className="h-4 w-4 text-primary" />
            <span>Over 25 dedicated committee members</span>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
