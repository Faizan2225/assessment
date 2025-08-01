// Marketplace utility functions and types

export interface Vendor {
  id: string;
  name: string;
  email: string;
  password: string; // In a real app, this would be hashed
  storeName: string;
  description: string;
  createdAt: string;
}

export interface Product {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[]; // Base64 encoded images
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: "vendor" | "customer";
}

// LocalStorage keys
const VENDORS_KEY = "marketplace_vendors";
const PRODUCTS_KEY = "marketplace_products";
const CURRENT_USER_KEY = "marketplace_current_user";

// Helper functions for localStorage
export const saveToStorage = (key: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getFromStorage = <T>(key: string): T[] => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

// Vendor management
export const saveVendor = (vendor: Vendor) => {
  const vendors = getVendors();
  const existingIndex = vendors.findIndex((v) => v.id === vendor.id);

  if (existingIndex >= 0) {
    vendors[existingIndex] = vendor;
  } else {
    vendors.push(vendor);
  }

  saveToStorage(VENDORS_KEY, vendors);
};

export const getVendors = (): Vendor[] => {
  return getFromStorage<Vendor>(VENDORS_KEY);
};

export const getVendorById = (id: string): Vendor | null => {
  const vendors = getVendors();
  return vendors.find((v) => v.id === id) || null;
};

export const getVendorByEmail = (email: string): Vendor | null => {
  const vendors = getVendors();
  return vendors.find((v) => v.email === email) || null;
};

// Product management
export const saveProduct = (product: Product) => {
  const products = getProducts();
  const existingIndex = products.findIndex((p) => p.id === product.id);

  if (existingIndex >= 0) {
    products[existingIndex] = {
      ...product,
      updatedAt: new Date().toISOString(),
    };
  } else {
    products.push(product);
  }

  saveToStorage(PRODUCTS_KEY, products);
};

export const getProducts = (): Product[] => {
  return getFromStorage<Product>(PRODUCTS_KEY);
};

export const getProductById = (id: string): Product | null => {
  const products = getProducts();
  return products.find((p) => p.id === id) || null;
};

export const getProductsByVendor = (vendorId: string): Product[] => {
  const products = getProducts();
  return products.filter((p) => p.vendorId === vendorId);
};

export const deleteProduct = (id: string) => {
  const products = getProducts();
  const filteredProducts = products.filter((p) => p.id !== id);
  saveToStorage(PRODUCTS_KEY, filteredProducts);
};

// User session management
export const setCurrentUser = (user: User) => {
  saveToStorage(CURRENT_USER_KEY, user);
};

export const getCurrentUser = (): User | null => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

// Utility functions
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getProductCategories = (): string[] => {
  return [
    "Electronics",
    "Clothing & Fashion",
    "Home & Garden",
    "Sports & Outdoors",
    "Books & Media",
    "Health & Beauty",
    "Toys & Games",
    "Automotive",
    "Food & Beverages",
    "Other",
  ];
};
