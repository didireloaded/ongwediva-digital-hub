import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — OATF 2026" },
      { name: "description", content: "Register as a visitor or exhibitor for OATF 2026." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Register"
      title={
        <>
          Join <span className="text-gradient-brand">OATF 2026.</span>
        </>
      }
      intro="Free visitor registration. Personal QR. Instant access to the full digital experience."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "I'm a Visitor",
            text: "Get your free ticket, save exhibitors and earn QR rewards.",
            cta: "Register as Visitor",
          },
          {
            title: "I'm an Exhibitor",
            text: "Apply for a stand, list products and reach 200,000+ visitors.",
            cta: "Apply as Exhibitor",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="glass rounded-3xl p-10 hover:-translate-y-1 transition-transform"
          >
            <h2 className="font-display text-3xl font-bold">{c.title}</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">{c.text}</p>
            <button className="mt-8 px-6 py-3 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-transform">
              {c.cta}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground text-center">
        Already registered?{" "}
        <Link to="/login" className="text-primary font-semibold">
          Login here
        </Link>
      </p>
    </PageShell>
  ),
});
