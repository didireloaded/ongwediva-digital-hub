import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — OATF 2026" }] }),
  component: () => (
    <PageShell eyebrow="Login" title={<>Welcome <span className="text-gradient-ember">back.</span></>} intro="Sign in to access your visitor or exhibitor dashboard.">
      <div className="max-w-md mx-auto glass rounded-3xl p-10">
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-ember outline-none transition-colors" />
          <input type="password" placeholder="Password" className="w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-ember outline-none transition-colors" />
          <button className="w-full px-6 py-3.5 rounded-xl bg-gradient-ember text-primary-foreground font-semibold shadow-elegant hover:scale-[1.02] transition-transform">
            Sign in
          </button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground text-center">
          New here? <Link to="/register" className="text-ember font-semibold">Create an account</Link>
        </p>
      </div>
    </PageShell>
  ),
});
