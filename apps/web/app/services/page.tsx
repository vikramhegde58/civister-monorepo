"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Palette, Home, ArrowRight, CheckCircle2, Shield, Clock, DollarSign } from "lucide-react";
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

const services = [
  {
    id: "turnkey-construction",
    name: "Whole House Construction",
    description: "Complete construction of your home from foundation to finishing. End-to-end service from design to handover.",
    icon: HardHat,
    features: ["Complete project management", "Verified contractors", "Fixed pricing", "40% faster completion", "Design to handover"],
    href: "/services/turnkey-construction",
    primary: true,
    color: "from-primary to-orange-600"
  },
  {
    id: "interior-execution",
    name: "Interior Execution",
    description: "Professional interior design and execution. Transform your space with expert planning and flawless execution.",
    icon: Palette,
    features: ["Interior design consultation", "Material selection", "Expert execution", "Quality finishing", "Timeline guarantee"],
    href: "/services/interior-execution",
    primary: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "house-upgrade",
    name: "House Upgrade & Renovation",
    description: "Upgrade and renovate your existing home. Modernize spaces, add extensions, or complete home makeovers.",
    icon: Home,
    features: ["Renovation planning", "Extension construction", "Modern upgrades", "Structural improvements", "Complete makeovers"],
    href: "/services/house-upgrade",
    primary: false,
    color: "from-purple-500 to-pink-500"
  }
];

const benefits = [
  { icon: Shield, title: "Verified Partners", desc: "All contractors are thoroughly vetted" },
  { icon: Clock, title: "Faster Delivery", desc: "40% faster than traditional construction" },
  { icon: DollarSign, title: "Fixed Pricing", desc: "No hidden costs or surprise escalations" },
  { icon: CheckCircle2, title: "Quality Guaranteed", desc: "Built to last with premium materials" }
];

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From design to delivery, we make home construction simple, transparent, and stress-free.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Card className={`relative overflow-hidden border-2 transition-all hover:shadow-xl ${service.primary ? 'border-primary shadow-lg' : 'border-gray-200'}`}>
                  {service.primary && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-10`}>
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {service.name}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={service.href}>
                      <Button className={`w-full ${service.primary ? 'bg-primary text-white hover:bg-primary/90' : ''}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* Benefits Section */}
        <FadeIn delay={0.4}>
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={0.5}>
          <Card className="bg-gradient-to-br from-primary to-orange-600 text-white border-0">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Get a free consultation and quote. No obligations, just expert advice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/services/turnkey-construction">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                    Get Construction Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule Consultation
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
