"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, HardHat, Palette, Home as HomeIcon, ArrowRight, Phone, ArrowLeft } from "lucide-react";
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
    service: "Whole House Construction",
    icon: HardHat,
    description: "End-to-end construction from design to handover",
    pricing: "₹1,500 - ₹2,500",
    unit: "per sqft",
    note: "Pricing depends on specifications, location, and finishes",
    features: [
      "Complete project management",
      "Verified contractors",
      "Fixed pricing guarantee",
      "40% faster completion",
      "Free Pro subscription included",
      "Warranty on workmanship",
      "Quality materials",
      "Timeline guarantee"
    ],
    href: "/services/turnkey-construction",
    primary: true
  },
  {
    service: "Interior Execution",
    icon: Palette,
    description: "Professional interior design and execution",
    pricing: "₹800 - ₹1,500",
    unit: "per sqft",
    note: "Based on design complexity and material selection",
    features: [
      "Interior design consultation",
      "3D visualization",
      "Material selection",
      "Expert execution",
      "Quality finishing",
      "Project management",
      "Timeline guarantee",
      "Warranty included"
    ],
    href: "/services/interior-execution",
    primary: false
  },
  {
    service: "House Upgrade & Renovation",
    icon: HomeIcon,
    description: "Upgrade and renovate your existing home",
    pricing: "₹1,200 - ₹2,000",
    unit: "per sqft",
    note: "Varies based on scope and structural requirements",
    features: [
      "Home assessment",
      "Renovation planning",
      "Extension construction",
      "Modern upgrades",
      "Structural improvements",
      "Minimal disruption",
      "Quality materials",
      "Warranty included"
    ],
    href: "/services/house-upgrade",
    primary: false
  }
];

export default function ServicesPricingPage() {
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
          
          <Link href="/pricing" className="inline-flex items-center text-gray-600 hover:text-foreground transition-colors mb-4 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Pricing
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.95] sm:leading-[0.9] text-center md:text-start md:mt-1 mt-6">
            <span className="block">Service Pricing</span>
            <span className="block text-gray-500 md:mt-1 mt-2">Transparent.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              Transparent pricing for construction services. Get a detailed quote based on your specific requirements.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4 justify-center md:justify-start">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Fixed Pricing
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                No Hidden Costs
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Free Consultation
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

      {/* Service Pricing Cards */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Service Pricing</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Transparent pricing for all construction services</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.service} delay={index * 0.1}>
                  <Card className={`relative h-full flex flex-col border transition-all duration-500 ${
                    service.primary 
                      ? 'border-primary/40 bg-white shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1' 
                      : 'border-gray-200/60 bg-white hover:border-primary/20 hover:shadow-lg'
                  }`}>
                    {service.primary && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <CardHeader className="px-8 pt-8 pb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-primary/5">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold tracking-tight">{service.service}</CardTitle>
                      </div>
                      <CardDescription className="text-base text-gray-600 mb-4">{service.description}</CardDescription>
                      
                      <div className="pt-4 border-t border-gray-200/60">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-4xl font-bold text-foreground">{service.pricing}</span>
                          <span className="text-gray-500 text-sm">/{service.unit}</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{service.note}</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                      <ul className="space-y-3 mb-8 flex-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-0.5 shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href={service.href} className="block mt-auto">
                        <Button className={`w-full h-12 font-semibold rounded-lg transition-all duration-300 ${
                          service.primary 
                            ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20' 
                            : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-primary/30'
                        }`}>
                          Get Quote
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <Card className="border border-gray-200/60 bg-white">
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-2xl font-bold mb-6 text-center tracking-tighter">What's Included in Pricing?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "All labor costs",
                    "Material procurement",
                    "Project management",
                    "Quality inspections",
                    "Permits and approvals",
                    "Warranty coverage"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    <strong>Note:</strong> Final pricing is determined after a detailed site visit and consultation. 
                    All quotes are fixed-price with no hidden costs or surprise escalations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Everything you need to know about our service pricing</p>
          </FadeIn>
          
          <div className="space-y-6">
            {[
              {
                q: "How is the final price determined?",
                a: "After a free consultation and site visit, we provide a detailed quote based on your specific requirements, plot size, location, and chosen finishes. The quote is fixed-price with no hidden costs."
              },
              {
                q: "What's included in the pricing?",
                a: "Our pricing includes all labor, materials, project management, quality inspections, permits, and warranty coverage. Everything needed to complete your project."
              },
              {
                q: "Can I get a rough estimate before consultation?",
                a: "Yes, you can use our pricing ranges as a guide. For an accurate quote, we recommend scheduling a free consultation where we assess your specific needs."
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment plans tied to project milestones. Payments are made at key stages of construction, not upfront."
              }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="border border-gray-200/60 hover:border-primary/30 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-foreground">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tighter">Ready to Get Started?</h2>
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
              <Link href="/services/turnkey-construction">
                <Button variant="outline" className="h-16 sm:h-20 px-12 sm:px-16 border-2 bg-white/10 border-white/50 text-black hover:bg-white/20 text-lg sm:text-xl font-bold rounded-none hover:shadow-[0_0_40px_rgba(0, 0, 0, 0.4)]">
                  Learn More
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
