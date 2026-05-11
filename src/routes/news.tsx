import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — OATF 2026" },
      { name: "description", content: "Latest news, announcements and stories from OATF 2026." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="News & Updates"
      title={
        <>
          Live Updates from <span className="text-gradient-brand">Social Media.</span>
        </>
      }
      intro="Follow our latest announcements, exhibitor stories, and behind-the-scenes content in real-time."
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            Our news feed is synced directly with our official Facebook page so you never miss an update.
          </p>
        </div>

        <div className="w-full bg-white rounded-2xl overflow-hidden glass flex justify-center p-4">
          {/* We use the Facebook Page Plugin iframe to show real-time posts directly from the OATF page. */}
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FOngwediva-Annual-Trade-Fair-OATF%2F100071613917216%2F&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="800"
            style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="OATF Facebook Feed"
          ></iframe>
        </div>
      </div>
    </PageShell>
  ),
});
