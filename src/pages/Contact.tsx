import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Linkedin, CheckCircle2 } from "lucide-react";
import { SITE } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is too short").max(30),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  useSEO("Contact — PlotWise Global", "Get in touch with PlotWise Global for property inquiries, consulting, and management.");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    // Send form data via mailto fallback
    const body = `Name: ${parsed.data.name}%0D%0AEmail: ${parsed.data.email}%0D%0APhone: ${parsed.data.phone}%0D%0A%0D%0A${encodeURIComponent(parsed.data.message)}`;
    window.location.href = `mailto:${SITE.email}?subject=New%20inquiry%20from%20${encodeURIComponent(parsed.data.name)}&body=${body}`;
    toast.success("Message sent! We'll be in touch within 24 hours.");
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHero title="Get in Touch" subtitle="We'd love to hear about your real estate goals." />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-px mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <form onSubmit={submit} className="lg:col-span-2 bg-card border-2 border-gray-600 p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5">
            {sent && (
              <div className="flex items-start gap-3 bg-secondary border-2 border-gray-600 p-3 sm:p-4 text-sm">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                <p>Thank you! Your message has been sent. Our team will respond shortly.</p>
              </div>
            )}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto">
              Send Message
            </Button>
          </form>

          <aside className="bg-primary text-primary-foreground p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-2">Reach us directly</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Our advisors typically respond within 24 hours. For urgent inquiries, email us directly.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4 text-sm">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail size={16} className="text-gold" /> <span className="hidden sm:inline">{SITE.email}</span><span className="sm:hidden">Email</span>
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Linkedin size={16} className="text-gold" /> LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
