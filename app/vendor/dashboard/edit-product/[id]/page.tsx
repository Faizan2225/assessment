"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProductForm from "@/components/marketplace/ProductForm";
import {
  getCurrentUser,
  getProductById,
  type Product,
} from "@/lib/marketplace-utils";

export default function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser || currentUser.type !== "vendor") {
      router.push("/vendor/login");
      return;
    }

    // Load product
    const foundProduct = getProductById(params.id);

    if (!foundProduct) {
      setError("Product not found");
      setIsLoading(false);
      return;
    }

    // Check if user owns this product
    if (foundProduct.vendorId !== currentUser.id) {
      setError("You don't have permission to edit this product");
      setIsLoading(false);
      return;
    }

    setProduct(foundProduct);
    setIsLoading(false);
  }, [params.id, router]);

  const handleSuccess = () => {
    router.push("/vendor/dashboard");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/vendor/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-destructive">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/vendor/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <ProductForm product={product} onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}
