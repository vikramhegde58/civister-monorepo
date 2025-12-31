"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Palette, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function InteriorGeneratorPage() {
  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <Link href="/tools" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-12 h-12 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
              Interior Generator
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Coming Soon</span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered interior design suggestions tailored to your floor plan, style preferences, and budget.
          </p>
        </motion.div>

        <Card className="border-2 border-dashed border-gray-300">
          <CardHeader>
            <CardTitle>What to Expect</CardTitle>
            <CardDescription>
              This intelligent design tool is currently in development. Here's what you'll be able to do:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                "Upload your floor plan or select from generated plans",
                "AI-powered style matching based on preferences",
                "Automatic furniture placement and layout suggestions",
                "Color scheme recommendations",
                "Budget-aware material and furniture suggestions",
                "Multiple design options to choose from",
                "Export shopping lists and material requirements"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200 mt-6">
              <p className="text-sm text-gray-600 mb-4">
                Want to be notified when this launches? Sign up for our newsletter or start designing your floor plan now.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/tools/floor-plan-generator" className="flex-1">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Try Floor Plan Generator
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Get Notified
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
