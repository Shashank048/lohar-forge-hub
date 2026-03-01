import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { StatCounter } from "@/components/StatCounter";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Shield, Truck, Globe, Award, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-forging.jpg";
import { fadeUp } from "@/lib/animations";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Products" },
  { value: 5, suffix: "", label: "Export Countries" },
];

const whyUs = [
  { icon: Shield, title: "Premium Quality", desc: "Every product undergoes rigorous testing and quality assurance." },
  { icon: Truck, title: "Timely Delivery", desc: "We ensure on-time delivery to every corner of the globe." },
  { icon: Globe, title: "Global Exports", desc: "Trusted by industries across 5+ countries worldwide." },
  { icon: Award, title: "Certified Standards", desc: "Compliance with IS, DIN, ASME, and EN standards." },
];

const exportCountries = ["Nepal", "Saudi Arabia", "Bangladesh", "United States", "Qatar"];

const testimonials = [
  { name: "Rajesh Kumar", company: "Kumar Industries, Nepal", text: "Lohar Forging delivers exceptional quality eye bolts. Their consistency and reliability are unmatched.", rating: 5 },
  { name: "Ahmed Al-Rashid", company: "Gulf Construction, Saudi Arabia", text: "We've been sourcing lifting hooks from Lohar for 3 years. Outstanding product quality and service.", rating: 5 },
  { name: "David Mitchell", company: "Pacific Rigging, USA", text: "Their forged components meet all our stringent safety standards. Highly recommended supplier.", rating: 5 },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Industrial forging process" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Lohar Forging & Engg Works
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 font-display text-5xl font-bold uppercase leading-tight tracking-wide text-primary-foreground md:text-7xl">
              Strength Forged <br />
              <span className="text-gradient-gold">in Steel</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              Premium quality forged products — eye bolts, lashing chains, lifting hooks — trusted by industries in 5+ countries worldwide.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Explore Products <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Request Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Precision Forging Since 2014</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lohar Forging & Engg Works is a sole proprietorship firm engaged as Manufacturer, Wholesaler and Retailer of Eye Bolts, Lashing Chains, Lifting Hooks, and Forged Industrial Components. We combine traditional craftsmanship with modern engineering to deliver products that stand the test of time.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              Learn More <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Range</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Product Categories</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Link
                  to={`/products?category=${cat.id}`}
                  className="group block rounded-lg border border-border bg-card p-6 text-center shadow-card-steel transition-all duration-300 hover:-translate-y-1 hover:shadow-forge"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Shield className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{cat.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Industrial Grade</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Advantage</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Why Choose Lohar Forging</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Featured</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Top Products</h2>
            </div>
            <Link to="/products" className="hidden items-center gap-1 text-sm font-semibold text-accent hover:underline sm:inline-flex">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Export Countries */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Global Reach</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Exporting Worldwide</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {exportCountries.map((country) => (
              <div
                key={country}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground shadow-sm"
              >
                🌍 {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Trusted by Industry Leaders</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-lg border border-border bg-card p-6 shadow-card-steel"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Build Stronger?</h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Get in touch for custom quotes, bulk orders, or technical specifications. Our team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-accent px-8 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Contact Us Today
            </Link>
            <Link
              to="/products"
              className="rounded-md border border-primary-foreground/30 px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
