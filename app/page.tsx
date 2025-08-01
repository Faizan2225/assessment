import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  Calculator,
  Upload,
  Download,
  Store,
  ShoppingBag,
  Users,
  Package,
} from "lucide-react";
import Link from "next/link";

const boqFeatures = [
  {
    icon: Upload,
    title: "Upload Documents",
    description: "Upload your technical plans and CAD layouts",
  },
  {
    icon: Calculator,
    title: "AI Analysis",
    description: "Automated extraction and quantity calculation",
  },
  {
    icon: FileText,
    title: "Generate BOQ",
    description: "Structured Bill of Quantities output",
  },
  {
    icon: Download,
    title: "Export Results",
    description: "Download in multiple formats",
  },
];

const marketplaceFeatures = [
  {
    icon: Store,
    title: "Vendor Stores",
    description: "Multiple vendors with their own product catalogs",
  },
  {
    icon: Package,
    title: "Product Management",
    description: "Easy product listing with image uploads",
  },
  {
    icon: ShoppingBag,
    title: "Browse Products",
    description: "Search and filter products by category",
  },
  {
    icon: Users,
    title: "Vendor Dashboard",
    description: "Complete vendor management system",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-black">
              BOQ Generator & Marketplace Platform
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Generate professional Bill of Quantities from technical plans with
              AI, and discover products from verified vendors in our integrated
              marketplace.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/boq">
                <Button size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate BOQ
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button size="lg" variant="outline">
                  <Store className="mr-2 h-4 w-4" />
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOQ Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">BOQ Generation</h2>
            <p className="text-muted-foreground">
              AI-powered Bill of Quantities from your technical plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boqFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marketplace</h2>
            <p className="text-muted-foreground">
              Multi-vendor e-commerce platform with vendor management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketplaceFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Generate professional BOQs from your technical plans or start
              selling products in our marketplace. Choose your path and get
              started today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/boq">
                <Button size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate BOQ
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button size="lg" variant="outline">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Browse Products
                </Button>
              </Link>
              <Link href="/vendor/register">
                <Button size="lg" variant="secondary">
                  <Store className="mr-2 h-4 w-4" />
                  Become a Vendor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BOQ Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
