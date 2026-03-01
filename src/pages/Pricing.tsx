import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const plans = [
  {
    name: "Retail",
    desc: "Single pieces for maintenance & repair",
    highlight: false,
    features: ["Per-piece pricing", "Standard packaging", "Delivery within 7 days", "Quality certificate", "Email support"],
  },
  {
    name: "Wholesale",
    desc: "Bulk orders for distributors & dealers",
    highlight: true,
    features: ["20% discount on MRP", "Custom packaging", "Priority delivery (3–5 days)", "Test certificates", "Dedicated account manager", "Credit terms available"],
  },
  {
    name: "Bulk / OEM",
    desc: "Large-scale manufacturing supply",
    highlight: false,
    features: ["Best pricing (35%+ off)", "Custom branding/markings", "Scheduled delivery", "Mill test certificates", "24/7 phone support", "Custom specifications"],
  },
];

const Pricing = () => {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  return (
    <Layout>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Pricing</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground md:text-5xl">Flexible Pricing Plans</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Competitive pricing for retail, wholesale, and bulk orders. Custom quotes available.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`rounded-lg border p-8 ${
                  plan.highlight
                    ? "border-accent bg-accent/5 shadow-forge"
                    : "border-border bg-card shadow-card-steel"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-card-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 block rounded-md px-6 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  Request Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Form */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Custom Quote Request</h2>
            <p className="mt-2 text-muted-foreground">Need specific quantities or custom specifications? Let us know.</p>
          </div>
          {quoteSubmitted ? (
            <div className="mt-8 rounded-md bg-accent/10 p-6 text-center text-accent font-medium">
              Thank you! We'll prepare your custom quote and reach out within 24 hours.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }}
              className="mt-8 space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input placeholder="Company Name" required className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Contact Person" required className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Email" type="email" required className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Phone" className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <textarea placeholder="Product requirements, quantities, specifications..." rows={4} required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 md:w-auto">
                Submit Quote Request
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
