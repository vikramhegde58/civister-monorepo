"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutTemplate, Box, Palette, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
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
  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Our Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools to design, visualize, and plan your dream home. Start free, upgrade as you grow.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isActive = tool.status === "active";
            
            return (
              <FadeIn key={tool.id} delay={index * 0.1}>
                <Card className={`relative overflow-hidden border-2 transition-all hover:shadow-xl ${isActive ? 'border-primary' : 'border-gray-200 opacity-75'}`}>
                  {tool.status === "coming-soon" && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${tool.color}`} />
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} bg-opacity-10`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                      </div>
                      <CardTitle className={`text-xl ${isActive ? 'text-foreground' : 'text-gray-400'}`}>
                        {tool.name}
                      </CardTitle>
                    </div>
                    <CardDescription className={isActive ? 'text-gray-600' : 'text-gray-400'}>
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                          <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-gray-300'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {isActive ? (
                      <Link href={tool.href}>
                        <Button className="w-full bg-primary text-white hover:bg-primary/90">
                          Try Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="w-full" disabled variant="outline">
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* Pricing Info */}
        <FadeIn delay={0.4}>
          <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Freemium Model</h2>
              </div>
              <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
                All tools offer <strong>3 free generations per month</strong>. Need more? Upgrade to Pro or get unlimited access when you use our construction services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <Link href="/tools/floor-plan-generator">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/services/turnkey-construction">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Get Pro Access with Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
