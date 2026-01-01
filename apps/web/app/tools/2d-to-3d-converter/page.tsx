"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Box, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

export default function TwoDtoThreeDConverterPage() {
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
          
          <Link href="/tools" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-4 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>

          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 w-fit">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Coming Soon</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.95] sm:leading-[0.9] text-center md:text-start md:mt-1 mt-6">
            <span className="block">2D to 3D</span>
            <span className="block text-gray-500 md:mt-1 mt-2">Converter.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              Transform your 2D floor plans into stunning 3D visualizations and immersive walkthroughs.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
              <Link href="/tools/floor-plan-generator" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-primary text-white hover:bg-primary/90 text-sm sm:text-base md:text-lg font-medium rounded-none border-r border-gray-300">
                  Try Floor Plan Generator
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 border-gray-400 text-foreground bg-white/20 hover:bg-white/50 text-sm sm:text-base md:text-lg font-medium rounded-none">
                  Get Notified
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

      {/* What to Expect */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">What to Expect</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">This powerful tool is currently in development</p>
          </FadeIn>
          
          <Card className="border-2 border-dashed border-gray-300 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Features Coming Soon</CardTitle>
              <CardDescription>
                Here's what you'll be able to do with our 2D to 3D Converter:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Upload your 2D floor plan (PDF, PNG, or CAD format)",
                  "AI-powered 3D model generation",
                  "Interactive 3D walkthrough",
                  "Material and texture preview",
                  "Export in multiple formats (OBJ, FBX, GLTF)",
                  "Virtual reality compatibility"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <p className="text-sm text-gray-600 mb-4">
                  Want to be notified when this launches? Sign up for our newsletter or start with our Floor Plan Generator.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/tools/floor-plan-generator" className="flex-1">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Try Floor Plan Generator <ArrowRight className="w-4 h-4 ml-2" />
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
      </section>
    </div>
  );
}
