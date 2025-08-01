"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProductForm from "@/components/marketplace/ProductForm";
import { getCurrentUser } from "@/lib/marketplace-utils";

export default function AddProductPage() {
  const router = useRouter();

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser || currentUser.type !== "vendor") {
      router.push("/vendor/login");
      return;
    }
  }, [router]);

  const handleSuccess = () => {
    router.push("/vendor/dashboard");
  };

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
          <ProductForm onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}
