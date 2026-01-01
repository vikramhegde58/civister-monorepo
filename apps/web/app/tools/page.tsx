"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutTemplate, Box, Palette, ArrowRight, CheckCircle2, Sparkles, Phone } from "lucide-react";
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

const tools = [
  {
    id: "floor-plan-generator",
    name: "Floor Plan Generator",
    description: "Generate Vastu-compliant floor plans instantly based on your plot dimensions and requirements.",
    icon: LayoutTemplate,
    status: "active",
    features: ["3 Free generations/month", "Vastu compliant", "Instant results", "Customizable"],
    href: "/tools/floor-plan-generator",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "2d-to-3d-converter",
    name: "2D to 3D Converter",
    description: "Transform your 2D floor plans into stunning 3D visualizations and walkthroughs.",
    icon: Box,
    status: "coming-soon",
    features: ["3D visualization", "Virtual walkthrough", "Material preview", "Export options"],
    href: "/tools/2d-to-3d-converter",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "interior-generator",
    name: "Interior Generator",
    description: "AI-powered interior design suggestions tailored to your floor plan and style preferences.",
    icon: Palette,
    status: "coming-soon",
    features: ["Style matching", "Furniture placement", "Color schemes", "Budget estimates"],
    href: "/tools/interior-generator",
    color: "from-orange-500 to-red-500"
  }
];

export default function ToolsPage() {
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
            <span className="block">Our Tools</span>
            <span className="block text-gray-500 md:mt-1 mt-2">AI-Powered.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              Powerful AI tools to design, visualize, and plan your dream home. Start free, upgrade as you grow.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4 justify-center md:justify-start">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                3 Free/Month
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Vastu Compliant
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Instant Results
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
              <Link href="/tools/floor-plan-generator" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-primary text-white hover:bg-primary/90 text-sm sm:text-base md:text-lg font-medium rounded-none border-r border-gray-300">
                  Try Floor Plan Generator
                </Button>
              </Link>
              <Link href="/services/turnkey-construction" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 border-gray-400 text-foreground bg-white/20 hover:bg-white/50 text-sm sm:text-base md:text-lg font-medium rounded-none">
                  Get Pro Access
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

      {/* Tools Grid */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Available Tools</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">AI-powered design and visualization tools</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const isActive = tool.status === "active";
              
              return (
                <FadeIn key={tool.id} delay={index * 0.1}>
                  <div className="group relative h-full">
                    {/* Card Container */}
                    <Card className="relative overflow-hidden border border-gray-200/80 bg-white hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                      
                      {/* Coming Soon Badge */}
                      {tool.status === "coming-soon" && (
                        <div className="absolute top-6 right-6 z-20">
                          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-gray-200/60 px-3 py-1.5 rounded-full shadow-sm">
                            <Sparkles className="w-3 h-3 text-primary" />
                            <span className="text-xs font-medium text-gray-700 tracking-wide">Coming Soon</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Icon Section - More Prominent */}
                      <div className="relative px-8 pt-8 pb-4">
                        <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 bg-primary/5 group-hover:bg-primary/10 group-hover:scale-105">
                          <Icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary/90" />
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <CardHeader className="px-8 pt-0 pb-4">
                        <CardTitle className="text-2xl font-bold mb-3 tracking-tight text-foreground">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed text-gray-600">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      
                      {/* Features List */}
                      <CardContent className="px-8 pb-6 flex-grow flex flex-col">
                        <ul className="space-y-3 mb-8 flex-grow">
                          {tool.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                              <div className="mt-0.5 shrink-0 text-primary">
                                <CheckCircle2 className="w-4 h-4" />
                              </div>
                              <span className="flex-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Button */}
                        <div className="mt-auto">
                          {isActive ? (
                            <Link href={tool.href} className="block">
                              <Button className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group/btn">
                                <span>Try Now</span>
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                              </Button>
                            </Link>
                          ) : (
                            <Link href={tool.href} className="block">
                              <Button className="w-full h-12 border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-semibold rounded-lg transition-all duration-300">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                      
                      {/* Subtle Background Pattern */}
                      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                          backgroundSize: '24px 24px'
                        }} />
                      </div>
                    </Card>
                    
                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none -z-10" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20 border-2 max-w-4xl mx-auto">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter">Freemium Model</h2>
                </div>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
                  All tools offer <strong>3 free generations per month</strong>. Need more? Upgrade to Pro or get unlimited access when you use our construction services.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <Link href="/tools/floor-plan-generator">
                    <Button className="bg-primary text-white hover:bg-primary/90 h-14 px-8 text-base font-semibold">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/services/turnkey-construction">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 h-14 px-8 text-base font-semibold">
                      Get Pro Access with Services
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
            alt="Tools"
            fill
            className="object-cover opacity-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-black/10 to-background" />
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tighter">Ready to Design Your Home?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start with our free floor plan generator, or get unlimited access with our construction services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tools/floor-plan-generator">
                <Button className="h-16 sm:h-20 px-12 sm:px-16 bg-primary hover:bg-primary/90 text-white text-lg sm:text-xl font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                  Try Floor Plan Generator
                </Button>
              </Link>
              <Link href="/services/turnkey-construction">
                <Button variant="outline" className="h-16 sm:h-20 px-12 sm:px-16 border-2 bg-white/10 border-white/50 text-black hover:bg-white/20 text-lg sm:text-xl font-bold rounded-none hover:shadow-[0_0_40px_rgba(0, 0, 0, 0.4)]">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Construction Quote
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
