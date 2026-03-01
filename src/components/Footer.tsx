import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-display text-xl font-bold tracking-wide">LOHAR</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60">Forging & Engg Works</p>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Premium quality forged products trusted by industries worldwide. Strength forged in steel since 2014.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[["Home", "/"], ["About", "/about"], ["Products", "/products"], ["Pricing", "/pricing"], ["Contact", "/contact"]].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-primary-foreground/60 transition-colors hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Products</h4>
            <ul className="mt-4 space-y-2">
              {["Eye Bolts", "Lashing Chain", "Lifting Hook", "Forged Components"].map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-sm text-primary-foreground/60 transition-colors hover:text-accent">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Industrial Area, Ludhiana, Punjab, India
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +91-XXXXX-XXXXX
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                info@loharforging.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Lohar Forging & Engg Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
