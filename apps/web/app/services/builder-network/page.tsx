"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, CheckCircle2, Phone } from "lucide-react";
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

export default function BuilderNetworkPage() {
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
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">
            Builder Network
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access to our curated network of verified, quality contractors and builders.
          </p>
        </motion.div>

        <FadeIn>
          <Card>
            <CardHeader>
              <CardTitle>Verified Builders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Thorough background checks and verification",
                  "Portfolio reviews and past project analysis",
                  "Financial stability assessment",
                  "Quality ratings and customer reviews",
                  "Direct connections with verified builders",
                  "Ongoing support and dispute resolution"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <p className="text-sm text-gray-600 mb-4">
                  Connect directly with pre-verified builders in your area. Free to browse, contact builders directly.
                </p>
                <Link href="/contact?service=builder-network">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Access Builder Network
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
