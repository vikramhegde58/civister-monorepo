"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building2, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function ConstructionManagementPage() {
  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">
            Construction Management
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert oversight and coordination of your construction project with our verified builder network.
          </p>
        </motion.div>

        <FadeIn>
          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Project oversight and quality control",
                  "Progress tracking and reporting",
                  "Budget management and cost control",
                  "Coordination with contractors and suppliers",
                  "Timeline management",
                  "Regular site visits and inspections"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <p className="text-sm text-gray-600 mb-4">
                  Perfect if you already have a builder but need expert management and oversight.
                </p>
                <Link href="/contact?service=construction-management">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
