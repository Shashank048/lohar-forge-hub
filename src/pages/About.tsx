import { Layout } from "@/components/Layout";
import { Shield, Truck, Globe, Award, Users, Factory } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const values = [
  { icon: Shield, title: "Quality First", desc: "Every product passes multi-stage quality inspections before shipping." },
  { icon: Factory, title: "In-House Manufacturing", desc: "Complete manufacturing facility with forging, machining, and finishing." },
  { icon: Truck, title: "On-Time Delivery", desc: "Committed to meeting deadlines for domestic and international orders." },
  { icon: Globe, title: "Global Standards", desc: "Products comply with IS, DIN, ASME, EN, and BS standards." },
  { icon: Users, title: "Customer Focus", desc: "Dedicated support and custom solutions for every client." },
  { icon: Award, title: "10+ Years Experience", desc: "A decade of expertise in industrial forging manufacturing." },
];

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">About Us</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Building Trust Through <span className="text-gradient-gold">Strength</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
            A sole proprietorship firm dedicated to manufacturing world-class forged products since 2014.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-foreground">Our Story</h2>
            <p>
              Lohar Forging & Engg Works was founded with a simple mission: to manufacture premium quality forged products that industries can trust. What began as a small workshop has grown into a respected name in the forging industry.
            </p>
            <p>
              Today, we are proud to serve clients across India and export to Nepal, Saudi Arabia, Bangladesh, United States, and Qatar. Our product range includes Eye Bolts, Lashing Chains, Lifting Hooks, and a variety of Forged Industrial Components.
            </p>
            <p>
              As a Manufacturer, Wholesaler, and Retailer, we cater to businesses of all sizes — from single-piece orders to bulk industrial supply. Every product is manufactured in-house, ensuring complete control over quality and timely delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Values</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">What Drives Us</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-lg border border-border bg-card p-6 shadow-card-steel"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
