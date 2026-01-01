"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StepNavigation from "./components/StepNavigation";
import Step1PlotDetails from "./components/Step1PlotDetails";
import Step2Requirements from "./components/Step2Requirements";
import Step3Contact from "./components/Step3Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LayoutTemplate, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
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

const steps = ["Plot Details", "Requirements", "Contact Info"];

export default function FloorPlanGeneratorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-[90vh] md:h-[95vh] min-h-[500px] md:min-h-[700px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 pt-20 md:pt-20 pb-12 md:pb-16 border-b border-gray-200 overflow-hidden">
        
        {/* Left Side: Content */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full md:w-1/2 text-left space-y-4 sm:space-y-6 md:space-y-8 mb-1 sm:mb-2 md:mb-0">
          
          <Link href="/tools" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-4 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.95] sm:leading-[0.9] text-center md:text-start md:mt-1 mt-6">
            <span className="block">Floor Plan</span>
            <span className="block text-gray-500 md:mt-1 mt-2">Generator.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              Tell us about your plot, and we'll engineer the perfect Vastu-compliant floor plan.
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

      {/* Form Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form - 70% */}
            <div className="lg:col-span-2">
              <StepNavigation currentStep={currentStep} steps={steps} />

              <motion.div
                layout
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="mt-6 sm:mt-8 border border-gray-200/60 bg-white backdrop-blur-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="h-1 bg-gradient-to-r from-primary to-orange-600 w-full" />
                  <CardHeader className="border-b border-gray-200/60 pb-4 sm:pb-6 text-center md:text-left px-4 sm:px-6 pt-4 sm:pt-6">
                    <CardTitle className="text-xl sm:text-2xl text-foreground font-light tracking-wide">
                      <span className="text-primary mr-2">0{currentStep}.</span> 
                      {steps[currentStep - 1]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 md:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {currentStep === 1 && <Step1PlotDetails onNext={nextStep} />}
                        {currentStep === 2 && <Step2Requirements onNext={nextStep} onBack={prevStep} />}
                        {currentStep === 3 && <Step3Contact onBack={prevStep} />}
                      </motion.div>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Service Promotion Sidebar - 30% */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border border-gray-200/60 bg-gradient-to-br from-primary/5 to-orange-50 p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg">Ready to Build?</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Get a complete construction quote for your floor plan. Our turnkey service includes everything from design to handover.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Verified contractors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Fixed pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    40% faster completion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Free Pro subscription to all tools included
                  </li>
                </ul>
                <Link href="/services/turnkey-construction" className="block">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Get Construction Quote
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Why Use Our Generator?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">AI-powered floor plan generation with Vastu compliance</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Vastu Compliant", desc: "All plans follow traditional Vastu principles for positive energy flow" },
              { title: "Instant Results", desc: "Get your floor plan in seconds, not days or weeks" },
              { title: "Customizable", desc: "Adjust rooms, dimensions, and layouts to match your needs" },
              { title: "3 Free Per Month", desc: "Start with 3 free generations, upgrade for unlimited access" },
              { title: "Export Options", desc: "Download plans in multiple formats for architects and builders" },
              { title: "Expert Support", desc: "Get help from our team throughout the process" }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="border border-gray-200/60 hover:border-primary/30 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
