"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Palette, CheckCircle2, Shield, Clock, DollarSign, Users, Sparkles } from "lucide-react";
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
    title: "Design Consultation",
    description: "We understand your style, preferences, and requirements to create a personalized design plan."
  },
  {
    step: "02",
    title: "Material Selection",
    description: "Choose from our curated selection of premium materials, finishes, and fixtures."
  },
  {
    step: "03",
    title: "Execution",
    description: "Our expert team executes the design with precision, ensuring quality at every step."
  },
  {
    step: "04",
    title: "Handover",
    description: "Final walkthrough, quality check, and your beautifully designed space is ready."
  }
];

const benefits = [
  { icon: Sparkles, title: "Expert Design", desc: "Professional interior designers with years of experience" },
  { icon: Clock, title: "Timeline Guarantee", desc: "On-time completion with clear project timelines" },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Fixed quotes with no hidden costs" },
  { icon: Shield, title: "Quality Materials", desc: "Premium materials sourced directly from suppliers" },
  { icon: Users, title: "Skilled Craftsmen", desc: "Verified interior contractors and skilled workers" },
  { icon: CheckCircle2, title: "Warranty Included", desc: "Comprehensive warranty on workmanship and materials" }
];

export default function InteriorExecutionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-background">
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
              <Palette className="w-12 h-12 text-primary" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
                Interior Execution
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Professional interior design and execution. Transform your space with expert planning and flawless execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?service=interior-execution">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-8">
                  Get Interior Quote
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
            {[
              "Interior design consultation and planning",
              "3D visualization and design mockups",
              "Material selection and sourcing",
              "Furniture and fixture procurement",
              "Expert execution by skilled craftsmen",
              "Quality finishing and detailing",
              "Project management and coordination",
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
      <section className="py-16 sm:py-24 bg-gray-50">
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
      <section className="py-16 sm:py-24 bg-background">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Get a free consultation and quote for your interior execution project. No obligations, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?service=interior-execution">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                  Get Interior Quote
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
