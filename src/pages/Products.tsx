import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { products } from "@/data/products";
import { SlidersHorizontal, X } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  let filtered = products.filter((p) => {
    if (category && p.category !== category) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);

  return (
    <Layout>
      <section className="bg-navy-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Products</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground md:text-5xl">Industrial Forged Products</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Browse our comprehensive range of premium quality forged components.
          </p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground lg:hidden"
          >
            {showFilters ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
            {showFilters ? "Close Filters" : "Filters"}
          </button>

          <div className="flex gap-8">
            {/* Sidebar */}
            <div className={`w-64 shrink-0 ${showFilters ? "block" : "hidden"} lg:block`}>
              <FilterSidebar
                selectedCategory={category}
                onCategoryChange={setCategory}
                searchQuery={search}
                onSearchChange={setSearch}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {/* Grid */}
            <div className="flex-1">
              <p className="mb-6 text-sm text-muted-foreground">{filtered.length} products found</p>
              {filtered.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center text-muted-foreground">No products match your filters.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
