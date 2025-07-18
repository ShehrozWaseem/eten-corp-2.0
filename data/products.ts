export type ProductCategory = 'Beef' | 'Chicken' | 'Turkey';
export type ProductType = 'White Meat' | 'Dark Meat' | 'Trim' | 'By Weight' | '';
export type ProductTag = 'lean' | 'rich' | 'top-seller' | 'halal';


export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  type: ProductType;
  description: string;
  image: string;
  tags: ProductTag[];
  usage: string;
  storageNotes: string;
}

const defaultStorageNotes = 'Keep refrigerated below 40°F (4°C) or frozen at 0°F (-18°C).';

export const productsData: Product[] = [
  // --- BEEF ---
  {
    id: 1, name: 'Trim', category: 'Beef', type: 'Trim',
    description: 'Lean beef cuts, perfect for health-conscious recipes and lean grinds.',
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f67b?q=80&w=800&auto=format&fit=crop',
    tags: ['lean'], usage: 'Grinding, Stews, Lean Burgers', storageNotes: defaultStorageNotes
  },
  {
    id: 2, name: '50s Beef', category: 'Beef', type: 'By Weight',
    description: 'A coarse ground beef with a 50/50 lean-to-fat ratio, ideal for flavorful burgers and sausages.',
    image: 'https://images.unsplash.com/photo-1541592106381-b586a63d4157?q=80&w=800&auto=format&fit=crop',
    tags: ['rich'], usage: 'Burgers, Sausages, Meatballs', storageNotes: defaultStorageNotes
  },
  {
    id: 3, name: '60s Beef', category: 'Beef', type: 'By Weight',
    description: 'Ground beef with a 60/40 lean-to-fat ratio, great for adding richness to dishes.',
    image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=800&auto=format&fit=crop',
    tags: ['rich'], usage: 'Meat sauces, Chili, Tacos', storageNotes: defaultStorageNotes
  },
  {
    id: 4, name: '65s Beef', category: 'Beef', type: 'By Weight',
    description: 'A versatile ground beef with a 65/35 ratio, balancing flavor and leanness.',
    image: 'https://images.unsplash.com/photo-1594041684494-1b2d3524324f?q=80&w=800&auto=format&fit=crop',
    tags: [], usage: 'Shepherd\'s pie, Casseroles', storageNotes: defaultStorageNotes
  },
  {
    id: 5, name: '80s Beef', category: 'Beef', type: 'By Weight',
    description: 'A popular choice with an 80/20 ratio, perfect for juicy burgers and everyday cooking.',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop',
    tags: ['top-seller'], usage: 'Grilling, Pan-frying', storageNotes: defaultStorageNotes
  },
  {
    id: 6, name: '85s Beef', category: 'Beef', type: 'By Weight',
    description: 'A leaner option (85/15) that\'s still packed with flavor for healthier meals.',
    image: 'https://images.unsplash.com/photo-1627888749420-a3964f434311?q=80&w=800&auto=format&fit=crop',
    tags: ['lean'], usage: 'Healthy Burgers, Meatloaf', storageNotes: defaultStorageNotes
  },
  {
    id: 7, name: '95s Beef', category: 'Beef', type: 'By Weight',
    description: 'Our leanest ground beef (95/5), ideal for low-fat diets and delicate dishes.',
    image: 'https://images.unsplash.com/photo-1612422209761-76f50882e882?q=80&w=800&auto=format&fit=crop',
    tags: ['lean'], usage: 'Lettuce wraps, Stuffed Peppers', storageNotes: defaultStorageNotes
  },

  // --- TURKEY ---
  // White Meat
  {
    id: 8, name: 'Turkey Breast', category: 'Turkey', type: 'White Meat',
    description: 'A lean and tender cut, perfect for roasting whole or slicing for sandwiches.',
    image: 'https://images.unsplash.com/photo-1604043141873-4318737374d6?q=80&w=800&auto=format&fit=crop',
    tags: ['lean', 'top-seller'], usage: 'Roast, Grill, Slice', storageNotes: defaultStorageNotes
  },
  {
    id: 9, name: 'Ground Turkey', category: 'Turkey', type: 'White Meat',
    description: 'Versatile ground white meat for creating lighter versions of your favorite dishes.',
    image: 'https://images.unsplash.com/photo-1588612043642-49c922af755a?q=80&w=800&auto=format&fit=crop',
    tags: ['lean', 'halal'], usage: 'Burgers, Tacos, Casseroles', storageNotes: defaultStorageNotes
  },
  {
    id: 10, name: 'Turkey Tenders', category: 'Turkey', type: 'White Meat',
    description: 'Tender and juicy strips of turkey breast, great for quick and easy meals.',
    image: 'https://images.unsplash.com/photo-1644704170914-b844f8072213?q=80&w=800&auto=format&fit=crop',
    tags: ['lean'], usage: 'Sauté, Fry, Bake', storageNotes: defaultStorageNotes
  },
  {
    id: 11, name: 'Bone-in Tom/Hen/Breeder', category: 'Turkey', type: 'White Meat',
    description: 'Large, whole turkey options perfect for roasting for holidays and large gatherings.',
    image: 'https://images.unsplash.com/photo-1517093952554-4195a624734a?q=80&w=800&auto=format&fit=crop',
    tags: ['rich'], usage: 'Roasting, Carving', storageNotes: defaultStorageNotes
  },
  // Dark Meat
  {
    id: 12, name: 'Ground Turkey (Dark)', category: 'Turkey', type: 'Dark Meat',
    description: 'Richer and more flavorful ground turkey, ideal for hearty dishes.',
    image: 'https://images.unsplash.com/photo-1645564474798-f8d95155556a?q=80&w=800&auto=format&fit=crop',
    tags: ['rich'], usage: 'Chili, Meatloaf, Sausages', storageNotes: defaultStorageNotes
  },
  {
    id: 13, name: 'Turkey Drumsticks', category: 'Turkey', type: 'Dark Meat',
    description: 'Full of flavor and perfect for a satisfying, rustic meal. Excellent for roasting or grilling.',
    image: 'https://images.unsplash.com/photo-1628139398869-4a41c9676743?q=80&w=800&auto=format&fit=crop',
    tags: ['rich', 'halal'], usage: 'Roast, Grill, Smoke', storageNotes: defaultStorageNotes
  },
  {
    id: 14, name: 'Bone-in Turkey Thighs', category: 'Turkey', type: 'Dark Meat',
    description: 'Known for their exceptional richness and tenderness, perfect for slow cooking.',
    image: 'https://images.unsplash.com/photo-1628139398637-21782291a135?q=80&w=800&auto=format&fit=crop',
    tags: ['rich'], usage: 'Braise, Roast, Stew', storageNotes: defaultStorageNotes
  },
  {
    id: 15, name: 'Boneless, Skinless Thighs', category: 'Turkey', type: 'Dark Meat',
    description: 'Easy to cook and versatile, these thighs bring rich flavor to any dish.',
    image: 'https://images.unsplash.com/photo-1610447387224-562a7a44a6f2?q=80&w=800&auto=format&fit=crop',
    tags: ['rich'], usage: 'Grill, Pan-fry, Stir-fry', storageNotes: defaultStorageNotes
  },

  // --- CHICKEN ---
  // White Meat
  {
    id: 16, name: 'Ground Chicken', category: 'Chicken', type: 'White Meat',
    description: 'Lean ground chicken breast, ideal for a variety of healthy and flavorful dishes.',
    image: 'https://images.unsplash.com/photo-1631393169098-a6f99142b78d?q=80&w=800&auto=format&fit=crop',
    tags: ['lean'], usage: 'Meatballs, Burgers, Lettuce Wraps', storageNotes: defaultStorageNotes
  },
  {
    id: 17, name: 'MDM (Chicken)', category: 'Chicken', type: 'White Meat',
    description: 'Mechanically Deboned Meat, a cost-effective option for processed food products.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    tags: [], usage: 'Processed foods, Sausages', storageNotes: defaultStorageNotes
  },
  {
    id: 18, name: 'Bone-in Chicken Breast', category: 'Chicken', type: 'White Meat',
    description: 'The classic cut with bone and skin, delivering maximum flavor and juiciness.',
    image: 'https://images.unsplash.com/photo-1606728035253-b52758d72132?q=80&w=800&auto=format&fit=crop',
    tags: [], usage: 'Roast, Grill', storageNotes: defaultStorageNotes
  },
  {
    id: 19, name: 'Boneless, Skinless Breast', category: 'Chicken', type: 'White Meat',
    description: 'A lean and versatile favorite, perfect for quick meals and healthy eating.',
    image: 'https://images.unsplash.com/photo-1628795188294-81216cde5a8a?q=80&w=800&auto=format&fit=crop',
    tags: ['lean', 'top-seller', 'halal'], usage: 'Grill, Bake, Sauté', storageNotes: defaultStorageNotes
  },
  {
    id: 20, name: 'Chicken Tenders', category: 'Chicken', type: 'White Meat',
    description: 'Tender strips of breast meat, ideal for frying, baking, or grilling.',
    image: 'https://images.unsplash.com/photo-1629228735532-615038af1578?q=80&w=800&auto=format&fit=crop',
    tags: ['lean'], usage: 'Fry, Bake, Grill', storageNotes: defaultStorageNotes
  },
  // Dark Meat
  {
    id: 21, name: 'Ground Chicken (Dark)', category: 'Chicken', type: 'Dark Meat',
    description: 'Flavorful ground dark meat, perfect for juicy chicken patties, tacos, and stews.',
    image: 'https://images.unsplash.com/photo-1644704170914-b844f8072213?q=80&w=800&auto=format&fit=crop',
    tags: ['rich'], usage: 'Patties, Tacos, Stews', storageNotes: defaultStorageNotes
  },
  {
    id: 22, name: 'MDM (Dark Chicken)', category: 'Chicken', type: 'Dark Meat',
    description: 'A cost-effective option using dark meat for processed chicken products.',
    image: 'https://images.unsplash.com/photo-1623961919833-2c13745f3a09?q=80&w=800&auto=format=fit=crop',
    tags: [], usage: 'Processed foods', storageNotes: defaultStorageNotes
  },
  {
    id: 23, name: 'Bone-in Chicken Thigh', category: 'Chicken', type: 'Dark Meat',
    description: 'Rich in flavor and incredibly juicy, perfect for slow cooking, roasting, or grilling.',
    image: 'https://images.unsplash.com/photo-1611919284749-8c5e4a5c6f37?q=80&w=800&auto=format&fit=crop',
    tags: ['rich', 'halal'], usage: 'Slow-cook, Grill, Roast', storageNotes: defaultStorageNotes
  },
  {
    id: 24, name: 'Leg Meat', category: 'Chicken', type: 'Dark Meat',
    description: 'The whole leg, combining thigh and drumstick, ideal for flavorful recipes and roasting.',
    image: 'https://images.unsplash.com/photo-1562967915-92ae0c320a01?q=80&w=800&auto=format=fit=crop',
    tags: ['rich', 'top-seller'], usage: 'Roast, Braise', storageNotes: defaultStorageNotes
  },
  {
    id: 25, name: 'Chicken Drumsticks', category: 'Chicken', type: 'Dark Meat',
    description: 'A family favorite, perfect for grilling, baking, or frying to achieve a crispy skin.',
    image: 'https://images.unsplash.com/photo-1628139398869-4a41c9676743?q=80&w=800&auto=format&fit=crop',
    tags: ['rich', 'top-seller'], usage: 'Grill, Roast, Fry', storageNotes: defaultStorageNotes
  }
];