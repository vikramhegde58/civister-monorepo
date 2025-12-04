"use client";

import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Plan2D from "./components/Plan2D";
import Plan3D from "./components/Plan3D";
import GeneratedPlan2D from "./components/GeneratedPlan2D";
import { FloorPlan } from "@/lib/generator/types";
import { Download, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const TabsRoot = TabsPrimitive.Root;
const TabsListImpl = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center rounded-none border border-white/10 bg-white/5 p-1 text-muted-foreground backdrop-blur-sm",
      className
    )}
    {...props}
  />
));
TabsListImpl.displayName = TabsPrimitive.List.displayName;

const TabsTriggerImpl = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-6 py-2.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm hover:text-white",
      className
    )}
    {...props}
  />
));
TabsTriggerImpl.displayName = TabsPrimitive.Trigger.displayName;

const TabsContentImpl = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-6 ring-offset-background focus-visible:outline-none",
      className
    )}
    {...props}
  />
));
TabsContentImpl.displayName = TabsPrimitive.Content.displayName;

function Plan2DWrapper({ plan }: { plan: FloorPlan }) {
  return <GeneratedPlan2D plan={plan} />;
}

export default function FloorPlanPage() {
  const { matchedTemplate, generatedPlan } = useStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [matchedTemplate, router]);

  if (!isMounted) return null;

  // Use generated plan if available, otherwise template
  const activePlan = generatedPlan ? {
      title: `Custom Generated Plan`,
      description: "AI-optimized layout based on your exact plot dimensions.",
      plotSize: `${generatedPlan.plotWidth}x${generatedPlan.plotDepth}`,
      facing: ["Custom"],
      floors: 1, // Engine currently does 1 floor
      bedrooms: 2, // Engine default
      vastu: true,
      id: "gen-1",
      image2D: "", 
  } : matchedTemplate;

  if (!activePlan && !generatedPlan) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white p-6">
              <h1 className="text-3xl font-bold mb-4 tracking-tight">No plan generated yet.</h1>
              <Link href="/questionnaire">
                <Button className="h-14 px-8 bg-primary hover:bg-primary/90 text-lg">
                    Start Questionnaire
                </Button>
              </Link>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 md:py-24 text-foreground flex flex-col justify-center">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
        />

      <div className="container max-w-7xl relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
            <Link href="/questionnaire" className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-3 sm:mb-4 text-sm sm:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to requirements
            </Link>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white"
            >
                Your Recommended Plan
            </motion.h1>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-3">
          {/* Main Viewer */}
          <div className="lg:col-span-2 order-2 lg:order-1">
             <TabsRoot defaultValue="2d" className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                   <div>
                       <h2 className="text-xl sm:text-2xl font-bold text-white">{activePlan?.title}</h2>
                       <p className="text-white/50 text-sm sm:text-base">{activePlan?.description}</p>
                   </div>
                   <TabsListImpl className="w-full sm:w-auto">
                      <TabsTriggerImpl value="2d" className="flex-1 sm:flex-none px-4 sm:px-6 text-xs sm:text-sm">2D Blueprint</TabsTriggerImpl>
                      <TabsTriggerImpl value="3d" className="flex-1 sm:flex-none px-4 sm:px-6 text-xs sm:text-sm">3D Walkthrough</TabsTriggerImpl>
                   </TabsListImpl>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="border border-white/10 bg-neutral-900/50 p-1 backdrop-blur-xl shadow-2xl h-[400px] sm:h-[500px] md:h-[600px]"
              >
                  <TabsContentImpl value="2d" className="mt-0 h-full">
                      {generatedPlan ? (
                          <div className="w-full h-full">
                             <Plan2DWrapper plan={generatedPlan} />
                          </div>
                      ) : (
                          <Plan2D imageUrl={activePlan?.image2D || ""} alt={activePlan?.title || ""} />
                      )}
                  </TabsContentImpl>
                  <TabsContentImpl value="3d" className="mt-0 h-full">
                      <Plan3D />
                  </TabsContentImpl>
              </motion.div>
             </TabsRoot>
          </div>

          {/* Sidebar Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <Card className="border border-white/10 bg-white/5 backdrop-blur-md">
              <CardHeader className="border-b border-white/5">
                <CardTitle className="text-white">Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                  <div className="flex justify-between items-center">
                      <span className="text-white/50">Plot Dimensions</span>
                      <span className="font-mono text-white font-bold">{activePlan?.plotSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-white/50">Orientation</span>
                      <span className="font-mono text-white font-bold">{Array.isArray(activePlan?.facing) ? activePlan?.facing.join(", ") : activePlan?.facing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-white/50">Structure</span>
                      <span className="font-mono text-white font-bold">{activePlan?.floors} Floors</span>
                  </div>
                   <div className="flex justify-between items-center">
                      <span className="text-white/50">Configuration</span>
                      <span className="font-mono text-white font-bold">{activePlan?.bedrooms} BHK</span>
                  </div>
                   <div className="flex justify-between items-center">
                      <span className="text-white/50">Vastu Score</span>
                      <span className="inline-flex items-center text-green-400 font-bold bg-green-400/10 px-2 py-1 text-xs rounded">
                          {activePlan?.vastu ? "100% Compliant" : "Standard"}
                      </span>
                  </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
               <Link href={`/contact?templateId=${activePlan?.id}`} className="block">
                  <Button className="w-full h-16 text-lg font-bold bg-primary hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,77,0,0.3)] rounded-none">
                      <Phone className="mr-2 h-5 w-5" /> Start Construction
                  </Button>
               </Link>
               <Button variant="outline" className="w-full h-14 border-white/10 text-white hover:bg-white/10 rounded-none">
                   <Download className="mr-2 h-5 w-5" /> Download BOQ & Plan
               </Button>
            </div>
            
            <p className="text-xs text-center text-white/30">
                By proceeding, you agree to our construction terms and protocols.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
