import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group overflow-hidden rounded-lg border border-border bg-card shadow-card-steel transition-all duration-300 hover:-translate-y-1 hover:shadow-forge"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {product.category.replace("-", " ")}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-card-foreground">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-card-foreground">₹{product.price.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground">Capacity: {product.loadCapacity}</span>
        </div>
      </div>
    </Link>
  );
}
