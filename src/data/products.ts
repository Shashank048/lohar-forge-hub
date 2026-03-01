export interface Product {
  id: string;
  name: string;
  category: "eye-bolts" | "lashing-chain" | "lifting-hook" | "forged-components";
  description: string;
  image: string;
  price: number;
  wholesalePrice: number;
  bulkPrice: number;
  loadCapacity: string;
  material: string;
  dimensions: string;
  compliance: string[];
  specs: Record<string, string>;
}

export const categories = [
  { id: "eye-bolts", label: "Eye Bolts" },
  { id: "lashing-chain", label: "Lashing Chain" },
  { id: "lifting-hook", label: "Lifting Hook" },
  { id: "forged-components", label: "Forged Components" },
];

export const products: Product[] = [
  {
    id: "eb-001",
    name: "Heavy Duty Eye Bolt M16",
    category: "eye-bolts",
    description: "High-tensile forged eye bolt designed for heavy lifting and rigging applications. Precision machined threads ensure secure fastening.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    price: 850,
    wholesalePrice: 680,
    bulkPrice: 550,
    loadCapacity: "2.5 Tons",
    material: "Carbon Steel C45 / Alloy Steel",
    dimensions: "M16 x 120mm",
    compliance: ["IS 2076", "DIN 580", "ISO 3266"],
    specs: { "Thread Size": "M16", "Shank Length": "120mm", "Eye Inner Dia": "32mm", "Surface Finish": "Hot Dip Galvanized", "Proof Load": "5,000 kg", "Working Load Limit": "2,500 kg" },
  },
  {
    id: "eb-002",
    name: "Stainless Eye Bolt M20",
    category: "eye-bolts",
    description: "Corrosion-resistant stainless steel eye bolt for marine and chemical environments.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    price: 1200,
    wholesalePrice: 960,
    bulkPrice: 780,
    loadCapacity: "4 Tons",
    material: "Stainless Steel 316",
    dimensions: "M20 x 150mm",
    compliance: ["ASTM A489", "DIN 580"],
    specs: { "Thread Size": "M20", "Shank Length": "150mm", "Eye Inner Dia": "40mm", "Surface Finish": "Mirror Polished", "Proof Load": "8,000 kg", "Working Load Limit": "4,000 kg" },
  },
  {
    id: "lc-001",
    name: "Grade 80 Lashing Chain 10mm",
    category: "lashing-chain",
    description: "Premium alloy steel lashing chain for cargo securing and transport applications. Meets international safety standards.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=400&fit=crop",
    price: 2500,
    wholesalePrice: 2000,
    bulkPrice: 1650,
    loadCapacity: "6.3 Tons",
    material: "Alloy Steel Grade 80",
    dimensions: "10mm x 3m",
    compliance: ["EN 12195-3", "AS 4344"],
    specs: { "Chain Dia": "10mm", "Length": "3 meters", "Grade": "80", "Surface Finish": "Powder Coated", "Breaking Load": "25,000 kg", "Working Load Limit": "6,300 kg" },
  },
  {
    id: "lc-002",
    name: "Transport Lashing Chain 13mm",
    category: "lashing-chain",
    description: "Heavy-duty transport chain with integrated hooks for efficient load securing.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=400&fit=crop",
    price: 3800,
    wholesalePrice: 3040,
    bulkPrice: 2500,
    loadCapacity: "10 Tons",
    material: "Alloy Steel Grade 80",
    dimensions: "13mm x 4m",
    compliance: ["EN 12195-3", "AS 4344", "DOT Approved"],
    specs: { "Chain Dia": "13mm", "Length": "4 meters", "Grade": "80", "Surface Finish": "Yellow Zinc", "Breaking Load": "40,000 kg", "Working Load Limit": "10,000 kg" },
  },
  {
    id: "lh-001",
    name: "Forged Lifting Hook 5T",
    category: "lifting-hook",
    description: "Drop-forged alloy steel lifting hook with safety latch. Ideal for cranes and hoists.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    price: 3200,
    wholesalePrice: 2560,
    bulkPrice: 2100,
    loadCapacity: "5 Tons",
    material: "Alloy Steel 20MnCr5",
    dimensions: "Opening: 55mm",
    compliance: ["IS 15740", "DIN 15401", "ASME B30.10"],
    specs: { "Capacity": "5 Tons", "Hook Opening": "55mm", "Throat Depth": "75mm", "Surface Finish": "Painted + Safety Latch", "Safety Factor": "4:1", "Type": "Eye Hook with Latch" },
  },
  {
    id: "lh-002",
    name: "Swivel Lifting Hook 10T",
    category: "lifting-hook",
    description: "Heavy-duty swivel hook with 360° rotation for flexible lifting operations.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    price: 5500,
    wholesalePrice: 4400,
    bulkPrice: 3600,
    loadCapacity: "10 Tons",
    material: "Alloy Steel 34CrNiMo6",
    dimensions: "Opening: 80mm",
    compliance: ["ASME B30.10", "EN 1677-2"],
    specs: { "Capacity": "10 Tons", "Hook Opening": "80mm", "Rotation": "360° Swivel", "Surface Finish": "Shot Blasted + Painted", "Safety Factor": "4:1", "Type": "Swivel Hook with Latch" },
  },
  {
    id: "fc-001",
    name: "Forged Shackle D-Type 8.5T",
    category: "forged-components",
    description: "Precision forged D-type shackle for heavy rigging and marine applications.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop",
    price: 1800,
    wholesalePrice: 1440,
    bulkPrice: 1170,
    loadCapacity: "8.5 Tons",
    material: "Alloy Steel",
    dimensions: "Pin Dia: 25mm",
    compliance: ["IS 2415", "BS 3032", "ASME B30.26"],
    specs: { "Type": "Dee Shackle", "Pin Diameter": "25mm", "Jaw Width": "38mm", "Surface Finish": "Hot Dip Galvanized", "Working Load Limit": "8,500 kg", "Proof Load": "17,000 kg" },
  },
  {
    id: "fc-002",
    name: "Forged Turnbuckle M24",
    category: "forged-components",
    description: "Drop-forged jaw-jaw turnbuckle for tensioning cables and rigging assemblies.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop",
    price: 2200,
    wholesalePrice: 1760,
    bulkPrice: 1430,
    loadCapacity: "5 Tons",
    material: "Carbon Steel C45",
    dimensions: "M24 x 310mm",
    compliance: ["DIN 1480", "IS 2179"],
    specs: { "Thread Size": "M24", "Take-up Length": "310mm", "Type": "Jaw & Jaw", "Surface Finish": "Electro Galvanized", "Working Load Limit": "5,000 kg", "Proof Load": "10,000 kg" },
  },
];
