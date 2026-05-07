import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

const POSTS = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  date: "05 Feb 2026",
  title: i === 0 ? "OATF Launches New Digital Platform for a Paperless Trade Fair" : "More OATF 2026 announcements coming soon",
  excerpt: "The Ongwediva Annual Trade Fair has launched a new website and digital platform supporting its move toward a fully paperless event.",
}));

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News — OATF 2026" }, { name: "description", content: "Latest news, announcements and stories from OATF 2026." }] }),
  component: () => (
    <PageShell eyebrow="News" title={<>The latest from <span className="text-gradient-ember">OATF.</span></>} intro="Announcements, exhibitor stories and behind-the-scenes from the fair.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p) => (
          <article key={p.id} className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="aspect-[16/10] bg-gradient-to-br from-ember/30 via-sun/10 to-savanna/20" />
            <div className="p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.date}</div>
              <h3 className="font-display text-xl font-semibold mt-3 group-hover:text-ember transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  ),
});
