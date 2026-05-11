import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Ongwediva Annual Trade Fair" },
      { name: "description", content: "Reach the OATF organising team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <PageShell
      eyebrow="Contact Us"
      title={
        <>
          Get in <span className="text-gradient-brand">Touch.</span>
        </>
      }
      intro="For enquiries, press, or partnership opportunities, we are here to help."
    >
      <div className="grid lg:grid-cols-2 gap-12 mt-8 mb-16 items-start">
        <div className="space-y-8 glass rounded-3xl p-8 border border-primary/10">
          <h3 className="font-display text-2xl font-semibold mb-6">Contact Details</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Telephone</h4>
                <p className="text-lg font-medium">+264 65 230 191</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Location</h4>
                <p className="text-lg font-medium">C46 Oshakati – Ongwediva Road</p>
                <p className="text-muted-foreground mt-1">Private Bag 5549, Ongwediva</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</h4>
                <p className="text-lg font-medium">info@oatf.com.na</p>
                <p className="text-sm text-muted-foreground mt-1">General enquiries</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 border border-primary/10">
          <h3 className="font-display text-2xl font-semibold mb-2">Send an Enquiry</h3>
          <p className="text-muted-foreground text-sm mb-6">Your details will be treated with the utmost confidentiality.</p>
          
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              alert("Message sent successfully!");
            }, 1000);
          }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First name *</label>
                <input required type="text" className="w-full bg-background/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last name *</label>
                <input required type="text" className="w-full bg-background/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address *</label>
                <input required type="email" className="w-full bg-background/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Telephone Number *</label>
                <input required type="tel" className="w-full bg-background/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject *</label>
              <select required className="w-full bg-background/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">- Select a Subject -</option>
                <option value="general">General Enquiries</option>
                <option value="exhibit">Exhibit Enquiries</option>
                <option value="sponsor">Sponsor Enquiries</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Message *</label>
              <textarea required rows={5} className="w-full bg-background/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="rounded-3xl overflow-hidden glass border border-primary/10 h-[300px] mb-20 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15252.091176288825!2d15.75114755!3d-17.77977465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bae36a2cdba2761%3A0x67efc6f3ff0dfaa2!2sOngwediva%20Trade%20Fair%20Centre!5e0!3m2!1sen!2sna!4v1715082103504!5m2!1sen!2sna"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="OATF Google Maps Location"
        />
      </div>
    </PageShell>
  );
}
