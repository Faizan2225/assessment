"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useBOQ } from "@/hooks/useBOQ";
import { BOQForm, BOQResults, BOQLoading, BOQInfo } from "@/components/boq";

export default function BOQPage() {
  const {
    userInput,
    setUserInput,
    files,
    setFiles,
    isLoading,
    response,
    error,
    handleSubmit,
    resetForm,
  } = useBOQ();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Generate Bill of Quantities (BOQ)
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Upload your technical plans, CAD layouts, or architectural
            blueprints to automatically extract structured data for Bill of
            Quantities (BoQ) and Material Take-Off (MTO).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <BOQForm
              userInput={userInput}
              setUserInput={setUserInput}
              files={files}
              setFiles={setFiles}
              isLoading={isLoading}
              error={error}
              onSubmit={handleSubmit}
              onReset={resetForm}
              showReset={!!(response || error)}
            />
          </div>

          {/* Results Section */}
          <div>
            {response && <BOQResults response={response} />}
            {isLoading && <BOQLoading />}
            {!response && !isLoading && <BOQInfo />}
          </div>
        </div>
      </div>
    </div>
  );
}
