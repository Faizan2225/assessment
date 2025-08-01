import Link from "next/link";
import { FileText, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">BOQ Generator</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/boq"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Generate BOQ
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Marketplace
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-3">
            <Link href="/marketplace">
              <Button variant="outline" size="sm">
                <Store className="h-4 w-4 mr-2" />
                Shop
              </Button>
            </Link>
            <Link href="/boq">
              <Button size="sm">Generate BOQ</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
