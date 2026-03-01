import { categories } from "@/data/products";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: string;
  onSortChange: (s: string) => void;
}

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: FilterSidebarProps) {
  return (
    <aside className="space-y-6">
      <div>
        <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Search</label>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Category</label>
        <div className="mt-2 space-y-1">
          <button
            onClick={() => onCategoryChange("")}
            className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
              selectedCategory === "" ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            All Products
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onCategoryChange(c.id)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                selectedCategory === c.id ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </aside>
  );
}
