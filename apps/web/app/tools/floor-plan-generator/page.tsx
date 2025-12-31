"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepNavigation from "./components/StepNavigation";
import Step1PlotDetails from "./components/Step1PlotDetails";
import Step2Requirements from "./components/Step2Requirements";
import Step3Contact from "./components/Step3Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HardHat } from "lucide-react";

const steps = ["Plot Details", "Requirements", "Contact Info"];

export default function FloorPlanGeneratorPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      <div className="container max-w-5xl relative z-10 mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link href="/tools" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
        </Link>

        {/* Tool Header */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-8 sm:mb-12 text-center space-y-3 sm:space-y-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HardHat className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
               Floor Plan Generator
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto">
             Tell us about your plot, and we'll engineer the perfect Vastu-compliant floor plan.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-4">
            <span>✓ 3 Free Generations/Month</span>
            <span>•</span>
            <span>✓ Vastu Compliant</span>
            <span>•</span>
            <span>✓ Instant Results</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form - 70% */}
          <div className="lg:col-span-2">
            <StepNavigation currentStep={currentStep} steps={steps} />

            <motion.div
              layout
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card className="mt-6 sm:mt-8 border border-gray-200 bg-white backdrop-blur-xl shadow-2xl">
                <div className="h-1 bg-gradient-to-r from-primary to-orange-600 w-full" />
                <CardHeader className="border-b border-gray-200 pb-4 sm:pb-6 text-center md:text-left px-4 sm:px-6 pt-4 sm:pt-6">
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
            <Card className="sticky top-24 border border-gray-200 bg-gradient-to-br from-primary/5 to-orange-50 p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Ready to Build?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Love your floor plan? Let's turn it into reality. Our turnkey construction service handles everything from permits to final handover.
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Verified builders & contractors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Fixed pricing, no surprises</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>40% faster completion</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Free Pro subscription included</span>
                  </div>
                </div>
                <Link href="/services/turnkey-construction">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 font-medium">
                    Get Construction Quote
                  </Button>
                </Link>
                <Link href="/services" className="block text-center text-sm text-primary hover:underline">
                  Learn more about services
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
