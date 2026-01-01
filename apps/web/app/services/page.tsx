"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Palette, Home as HomeIcon, ArrowRight, CheckCircle2, Shield, Clock, DollarSign, Phone } from "lucide-react";
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
    icon: HomeIcon,
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
            <span className="block">Our Services</span>
            <span className="block text-gray-500 md:mt-1 mt-2">Construction.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              From design to delivery, we make home construction simple, transparent, and stress-free.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
              <Link href="/services/turnkey-construction" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-primary text-white hover:bg-primary/90 text-sm sm:text-base md:text-lg font-medium rounded-none border-r border-gray-300">
                  Get Construction Quote
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

      {/* Services Grid */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">What We Offer</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Complete construction solutions for your dream home</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <FadeIn key={service.id} delay={index * 0.1}>
                  <Card className={`relative overflow-hidden border-2 transition-all hover:shadow-xl hover:-translate-y-1 h-full ${service.primary ? 'border-primary shadow-lg' : 'border-gray-200/60 hover:border-primary/40'}`}>
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
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link href={service.href}>
                        <Button className={`w-full ${service.primary ? 'bg-primary text-white hover:bg-primary/90' : 'border-gray-300'}`}>
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Why Choose Our Services?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Built on trust, transparency, and excellence</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border border-gray-200/60 hover:border-primary/30 hover:shadow-lg transition-all text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
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
            alt="Construction"
            fill
            className="object-cover opacity-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-black/10 to-background" />
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tighter">Ready to Build Your Dream Home?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote. No obligations, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services/turnkey-construction">
                <Button className="h-16 sm:h-20 px-12 sm:px-16 bg-primary hover:bg-primary/90 text-white text-lg sm:text-xl font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Construction Quote
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
