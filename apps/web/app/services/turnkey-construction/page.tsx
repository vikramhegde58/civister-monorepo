"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, HardHat, CheckCircle2, Shield, Clock, DollarSign, Users, Home, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const processSteps = [
  {
    step: "01",
    title: "Design & Planning",
    description: "We create detailed floor plans, get approvals, and finalize all specifications."
  },
  {
    step: "02",
    title: "Material Procurement",
    description: "We source quality materials at best prices through our supplier network."
  },
  {
    step: "03",
    title: "Construction",
    description: "Our verified contractors execute the build with regular quality checks."
  },
  {
    step: "04",
    title: "Handover",
    description: "Final inspection, documentation, and keys handed over to you."
  }
];

const benefits = [
  { icon: Shield, title: "Verified Contractors", desc: "All builders are background-checked and portfolio-reviewed" },
  { icon: Clock, title: "40% Faster", desc: "Organized supply chain prevents delays" },
  { icon: DollarSign, title: "Fixed Pricing", desc: "The quote you sign is what you pay. No surprises." },
  { icon: Users, title: "Expert Management", desc: "Dedicated project manager for your peace of mind" },
  { icon: Home, title: "Quality Materials", desc: "Premium materials sourced directly from suppliers" },
  { icon: CheckCircle2, title: "Warranty Included", desc: "Comprehensive warranty on workmanship and materials" }
];

export default function TurnkeyConstructionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-br from-primary/10 via-orange-50 to-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <HardHat className="w-12 h-12 text-primary" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
                Whole House Construction
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Complete construction of your home from foundation to finishing. From design to delivery, we handle everything. Your dream home, built on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?service=turnkey-construction">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-8">
                  Get Construction Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What's Included</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border-gray-200 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-sm text-gray-600">{benefit.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Our Process</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A streamlined process designed to save you time and ensure quality at every step.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="border-gray-200 h-full">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">{step.step}</div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">Transparent Pricing</CardTitle>
                <CardDescription className="text-lg">
                  Project-based pricing with no hidden costs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700">Quote based on your exact requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700">Fixed pricing - no surprise escalations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700">Payment milestones tied to progress</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700">Free Pro subscription to all tools included</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Pricing typically ranges from ₹1,500-2,500 per sqft depending on specifications, location, and finishes.
                  </p>
                  <Link href="/contact?service=turnkey-construction">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 font-bold">
                      Get Your Free Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free consultation and detailed quote. No obligations, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?service=turnkey-construction">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Construction Quote
                </Button>
              </Link>
              <Link href="/tools/floor-plan-generator">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Design Your Floor Plan First
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
