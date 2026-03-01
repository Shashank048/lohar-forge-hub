import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { products } from "@/data/products";
import { ArrowLeft, Download, Send } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground">Product Not Found</h1>
            <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-accent hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-lg border border-border bg-muted">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {product.category.replace("-", " ")}
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-md bg-muted px-4 py-2">
                  <p className="text-xs text-muted-foreground">Retail Price</p>
                  <p className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</p>
                </div>
                <div className="rounded-md bg-muted px-4 py-2">
                  <p className="text-xs text-muted-foreground">Wholesale</p>
                  <p className="text-lg font-bold text-foreground">₹{product.wholesalePrice.toLocaleString()}</p>
                </div>
                <div className="rounded-md bg-accent/10 px-4 py-2">
                  <p className="text-xs text-accent">Bulk Price</p>
                  <p className="text-lg font-bold text-accent">₹{product.bulkPrice.toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-sm"><span className="font-semibold text-foreground">Material:</span> <span className="text-muted-foreground">{product.material}</span></p>
                <p className="text-sm"><span className="font-semibold text-foreground">Load Capacity:</span> <span className="text-muted-foreground">{product.loadCapacity}</span></p>
                <p className="text-sm"><span className="font-semibold text-foreground">Dimensions:</span> <span className="text-muted-foreground">{product.dimensions}</span></p>
                <p className="text-sm"><span className="font-semibold text-foreground">Compliance:</span> <span className="text-muted-foreground">{product.compliance.join(", ")}</span></p>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                <Download className="h-4 w-4" /> Download Datasheet
              </button>
            </div>
          </div>

          {/* Specs Table */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-foreground">Technical Specifications</h2>
            <div className="mt-6 overflow-hidden rounded-lg border border-border">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specs).map(([key, val], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                      <td className="px-6 py-3 text-sm font-semibold text-foreground">{key}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-bold text-card-foreground">Send Inquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">Interested in this product? Send us your requirements.</p>
            {inquirySubmitted ? (
              <div className="mt-6 rounded-md bg-accent/10 p-4 text-sm text-accent font-medium">
                Thank you! Your inquiry has been submitted. We'll get back to you shortly.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setInquirySubmitted(true); }}
                className="mt-6 grid gap-4 md:grid-cols-2"
              >
                <input placeholder="Your Name" required className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Email" type="email" required className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Phone" className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Quantity Required" className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <textarea placeholder="Additional Requirements" rows={3} className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent md:col-span-2" />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-2.5 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 md:col-span-2 md:w-fit">
                  <Send className="h-4 w-4" /> Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
