import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md gradient-gold">
                <Shield className="h-5 w-5 text-navy" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl">IT<span className="text-gold">n</span>IS</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {company.tagline}. {company.short}
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                ["About Us", "/about-us"],
                ["Services", "/services"],
                ["Projects", "/our-projects"],
                ["Blog", "/our-blogs"],
                ["Contact", "/contact-us"],
              ].map(([label, to]) => (
                <li key={to}><Link to={to} className="hover:text-gold">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/services/$slug" params={{ slug: "ict-consultancy" }} className="hover:text-gold">ICT Consultancy</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "information-security-consultancy" }} className="hover:text-gold">Information Security</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "data-center-design" }} className="hover:text-gold">Data Center Design</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "iso-27000-compliance" }} className="hover:text-gold">ISO 27001 Compliance</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "smart-city-building" }} className="hover:text-gold">Smart City / Building</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" /> {company.address}</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /> <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a></li>
              {company.phones.map((p) => (
                <li key={p} className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
