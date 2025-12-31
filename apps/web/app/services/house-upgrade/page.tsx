"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, CheckCircle2, Shield, Clock, DollarSign, Users, Wrench } from "lucide-react";
import { motion } from "framer-motion";

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
    title: "Assessment & Planning",
    description: "We assess your current home and create a detailed plan for upgrades and renovations."
  },
  {
    step: "02",
    title: "Design & Approval",
    description: "Create renovation designs, get necessary approvals, and finalize specifications."
  },
  {
    step: "03",
    title: "Execution",
    description: "Our verified contractors execute the upgrades with minimal disruption to your daily life."
  },
  {
    step: "04",
    title: "Completion",
    description: "Final inspection, quality check, and your upgraded home is ready."
  }
];

const upgradeTypes = [
  {
    title: "Home Extensions",
    description: "Add new rooms, floors, or expand existing spaces",
    icon: Home
  },
  {
    title: "Modern Upgrades",
    description: "Update electrical, plumbing, and modern amenities",
    icon: Wrench
  },
  {
    title: "Structural Improvements",
    description: "Strengthen foundations, repair structures, and improve safety",
    icon: Shield
  },
  {
    title: "Complete Makeovers",
    description: "Full home renovation and transformation",
    icon: CheckCircle2
  }
];

const benefits = [
  { icon: Shield, title: "Expert Assessment", desc: "Thorough evaluation of your home's condition and potential" },
  { icon: Clock, title: "Minimal Disruption", desc: "Organized execution to minimize impact on your daily life" },
  { icon: DollarSign, title: "Fixed Pricing", desc: "Transparent quotes with no surprise costs" },
  { icon: Users, title: "Verified Contractors", desc: "Skilled professionals with proven track records" },
  { icon: Home, title: "Quality Materials", desc: "Premium materials for lasting improvements" },
  { icon: CheckCircle2, title: "Warranty Included", desc: "Comprehensive warranty on all work" }
];

export default function HouseUpgradePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-background">
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
              <Home className="w-12 h-12 text-primary" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
                House Upgrade & Renovation
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Upgrade and renovate your existing home. Modernize spaces, add extensions, or complete home makeovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?service=house-upgrade">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-8">
                  Get Upgrade Quote
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

      {/* Upgrade Types */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Types of Upgrades</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upgradeTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border-2 border-gray-200 hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{type.description}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What's Included</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Home assessment and condition evaluation",
              "Renovation planning and design",
              "Structural improvements and repairs",
              "Extension construction",
              "Modern upgrades (electrical, plumbing, etc.)",
              "Material procurement and sourcing",
              "Expert execution by verified contractors",
              "Quality finishing and detailing",
              "Final inspection and handover"
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Process</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="border-2 border-primary/20 h-full">
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

      {/* Benefits */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm">{benefit.desc}</p>
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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Upgrade Your Home?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Get a free consultation and quote for your home upgrade or renovation project. No obligations, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?service=house-upgrade">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                  Get Upgrade Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
