"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Sparkles, HardHat, Phone, ArrowRight, LayoutTemplate } from "lucide-react";
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

export default function PricingPage() {
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
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.95] sm:leading-[0.9] text-center md:text-start md:mt-1 mt-6">
            <span className="block">Pricing</span>
            <span className="block text-gray-500 md:mt-1 mt-2">Transparent.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              Transparent pricing for tools and services. Start free, upgrade as you grow.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4 justify-center md:justify-start">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                No Hidden Costs
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Free Consultation
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Cancel Anytime
              </span>
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

      {/* Pricing Options */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Choose What You Need</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Explore our pricing for tools and services</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
            {/* Tools Pricing Card */}
            <FadeIn delay={0.1}>
              <Card className="relative h-full border border-gray-200/60 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <CardHeader className="px-8 pt-8 pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <LayoutTemplate className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">Tool Plans</CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-600 mb-4">
                    AI-powered design tools for planning your home
                  </CardDescription>
                  <div className="pt-4 border-t border-gray-200/60">
                    <div className="text-3xl font-bold text-foreground mb-1">Starting at ₹0</div>
                    <p className="text-sm text-gray-500">3 free generations per month</p>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {[
                      "Free plan available",
                      "Pro plan: ₹999/month",
                      "Enterprise: Custom pricing",
                      "Unlimited generations (Pro+)",
                      "Cancel anytime"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/pricing/tools" className="block">
                    <Button className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                      View Tool Pricing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
                
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>
              </Card>
            </FadeIn>

            {/* Services Pricing Card */}
            <FadeIn delay={0.2}>
              <Card className="relative h-full border border-gray-200/60 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <CardHeader className="px-8 pt-8 pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <HardHat className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">Service Pricing</CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-600 mb-4">
                    Complete construction services from design to handover
                  </CardDescription>
                  <div className="pt-4 border-t border-gray-200/60">
                    <div className="text-3xl font-bold text-foreground mb-1">Starting at ₹1,500/sqft</div>
                    <p className="text-sm text-gray-500">Fixed pricing, no surprises</p>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {[
                      "Free consultation",
                      "Fixed pricing guarantee",
                      "40% faster completion",
                      "Free Pro tools included",
                      "Warranty coverage"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/pricing/services" className="block">
                    <Button className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                      View Service Pricing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
                
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20 border-2">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter">Special Offer</h2>
                </div>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                  Get <strong className="text-primary">free Pro subscription</strong> to all tools when you use our Turnkey Construction service. 
                  Unlimited access included!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/services/turnkey-construction">
                    <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 font-semibold">
                      Learn About Services <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/pricing/services">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 h-12 px-8 font-semibold">
                      View Service Pricing
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 sm:py-40 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=2000"
            alt="Pricing"
            fill
            className="object-cover opacity-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-black/10 to-background" />
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tighter">Have Questions About Pricing?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed quote. No obligations, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="h-16 sm:h-20 px-12 sm:px-16 bg-primary hover:bg-primary/90 text-white text-lg sm:text-xl font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/tools/floor-plan-generator">
                <Button variant="outline" className="h-16 sm:h-20 px-12 sm:px-16 border-2 bg-white/10 border-white/50 text-black hover:bg-white/20 text-lg sm:text-xl font-bold rounded-none hover:shadow-[0_0_40px_rgba(0, 0, 0, 0.4)]">
                  Try Free Tools
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
