"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepNavigation from "./components/StepNavigation";
import Step1PlotDetails from "./components/Step1PlotDetails";
import Step2Requirements from "./components/Step2Requirements";
import Step3Contact from "./components/Step3Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = ["Plot Details", "Requirements", "Contact Info"];

export default function QuestionnairePage() {
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
      
      <div className="container max-w-3xl relative z-10 mx-auto px-4 sm:px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-8 sm:mb-12 text-center space-y-3 sm:space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white">
             Design Your Future.
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto">
             Tell us about your plot, and we'll engineer the perfect plan.
          </p>
        </motion.div>

        <StepNavigation currentStep={currentStep} steps={steps} />

        <motion.div
          layout
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card className="mt-6 sm:mt-8 border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-2xl mx-auto">
            <div className="h-1 bg-gradient-to-r from-primary to-orange-600 w-full" />
            <CardHeader className="border-b border-white/5 pb-4 sm:pb-6 text-center md:text-left px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl text-white font-light tracking-wide">
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
    </div>
  );
}
