"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home as HomeIcon, CheckCircle2, Shield, Clock, DollarSign, Users, Wrench, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Hero3D from "@/components/Hero3D";

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
    icon: HomeIcon
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
  { icon: HomeIcon, title: "Quality Materials", desc: "Premium materials for lasting improvements" },
  { icon: CheckCircle2, title: "Warranty Included", desc: "Comprehensive warranty on all work" }
];

export default function HouseUpgradePage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-[90vh] md:h-[95vh] min-h-[500px] md:min-h-[700px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 pt-20 md:pt-20 pb-12 md:pb-16 border-b border-gray-200 overflow-hidden">
        
        {/* Left Side: Content */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full md:w-1/2 text-left space-y-4 sm:space-y-6 md:space-y-8 mb-1 sm:mb-2 md:mb-0">
          
          <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-4 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.95] sm:leading-[0.9] text-center md:text-start md:mt-1 mt-6">
            <span className="block">House Upgrade</span>
            <span className="block text-gray-500 md:mt-1 mt-2">& Renovation.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              Upgrade and renovate your existing home. Modernize spaces, add extensions, or complete home makeovers.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
              <Link href="/contact?service=house-upgrade" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-primary text-white hover:bg-primary/90 text-sm sm:text-base md:text-lg font-medium rounded-none border-r border-gray-300">
                  Get Upgrade Quote
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 border-gray-400 text-foreground bg-white/20 hover:bg-white/50 text-sm sm:text-base md:text-lg font-medium rounded-none">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </motion.div>

        {/* 3D Element */}
        <div className="relative md:absolute right-0 top-auto md:top-0 bottom-0 w-full md:w-3/5 h-[300px] sm:h-[400px] md:h-full z-0 opacity-100 pointer-events-auto mt-1 sm:mt-0 md:mt-0">
           <Hero3D />
           <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none z-10" />
           <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none z-10" />
           <div className="absolute top-0 left-0 right-0 h-28 sm:h-24 bg-gradient-to-b from-background via-background/90 to-transparent pointer-events-none z-10" />
           <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* Upgrade Types */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Types of Upgrades</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive renovation solutions</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upgradeTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border-2 border-gray-200/60 hover:border-primary/40 transition-all">
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
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">What's Included</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Complete renovation services</p>
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
                <Card className="border border-gray-200/60 hover:border-primary/30 hover:shadow-lg transition-all">
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
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Our Process</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">A systematic approach to home upgrades</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all h-full">
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
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Why Choose Us</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Renovation done right</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border border-gray-200/60 hover:border-primary/30 hover:shadow-lg transition-all">
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
      <section className="relative py-32 sm:py-40 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=2000"
            alt="Home Renovation"
            fill
            className="object-cover opacity-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-black/10 to-background" />
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tighter">Ready to Upgrade Your Home?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your home upgrade or renovation project. No obligations, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?service=house-upgrade">
                <Button className="h-16 sm:h-20 px-12 sm:px-16 bg-primary hover:bg-primary/90 text-white text-lg sm:text-xl font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Upgrade Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-16 sm:h-20 px-12 sm:px-16 border-2 bg-white/10 border-white/50 text-black hover:bg-white/20 text-lg sm:text-xl font-bold rounded-none hover:shadow-[0_0_40px_rgba(0, 0, 0, 0.4)]">
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
