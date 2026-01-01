"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Sparkles, ArrowRight, Phone, ArrowLeft } from "lucide-react";
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

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for trying out our tools",
    features: [
      "3 floor plan generations per month",
      "Basic 2D floor plans",
      "Vastu compliance check",
      "Download PDF",
      "Community support"
    ],
    cta: "Start Free",
    href: "/tools/floor-plan-generator",
    popular: false
  },
  {
    name: "Pro",
    price: "₹999",
    period: "per month",
    description: "For serious home builders",
    features: [
      "Unlimited floor plan generations",
      "2D & 3D floor plans",
      "Interior design suggestions",
      "Material estimator",
      "Priority support",
      "Export in multiple formats",
      "Advanced customization"
    ],
    cta: "Upgrade to Pro",
    href: "/contact?plan=pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For architects and builders",
    features: [
      "Everything in Pro",
      "Bulk generation",
      "API access",
      "White-label options",
      "Dedicated account manager",
      "Custom integrations",
      "Training & support"
    ],
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
    popular: false
  }
];

export default function ToolsPricingPage() {
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
            <span className="block">Tool Pricing</span>
            <span className="block text-gray-500 md:mt-1 mt-2">Plans.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              Start free, upgrade as you grow. Choose the plan that fits your needs.
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
                No Credit Card
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Cancel Anytime
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

      {/* Pricing Plans */}
      <section className="py-16 sm:py-24 md:py-32 bg-background border-y border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter">Choose Your Plan</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Flexible pricing for every need</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.1}>
                <Card className={`relative h-full flex flex-col border transition-all duration-500 ${
                  plan.popular 
                    ? 'border-primary/40 bg-white shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1' 
                    : 'border-gray-200/60 bg-white hover:border-primary/20 hover:shadow-lg'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="px-8 pt-8 pb-6">
                    <CardTitle className="text-2xl font-bold mb-2 tracking-tight">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-500 text-base">/{plan.period}</span>
                      )}
                    </div>
                    <CardDescription className="text-base text-gray-600">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={plan.href} className="block mt-auto">
                      <Button className={`w-full h-12 font-semibold rounded-lg transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20' 
                          : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-primary/30'
                      }`}>
                        {plan.cta}
                        {plan.popular && <ArrowRight className="w-4 h-4 ml-2" />}
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
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20 border-2">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter">Special Offer</h2>
                </div>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                  Get <strong className="text-primary">free Pro subscription</strong> when you use our Turnkey Construction service. 
                  Unlimited access to all tools included!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/services/turnkey-construction">
                    <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 font-semibold">
                      Learn About Services <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/pricing/services">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 h-12 px-8 font-semibold">
                      View Service Pricing
                    </Button>
                  </Link>
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
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Everything you need to know about our pricing</p>
          </FadeIn>
          
          <div className="space-y-6">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "What happens to my free generations?",
                a: "Free plan users get 3 generations per month. Unused generations don't roll over to the next month."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee for Pro and Enterprise plans. No questions asked."
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. Cancel your subscription anytime from your account settings. No cancellation fees."
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
            alt="Tools"
            fill
            className="object-cover opacity-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-black/10 to-background" />
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tighter">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start with our free plan and upgrade when you're ready. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tools/floor-plan-generator">
                <Button className="h-16 sm:h-20 px-12 sm:px-16 bg-primary hover:bg-primary/90 text-white text-lg sm:text-xl font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-16 sm:h-20 px-12 sm:px-16 border-2 bg-white/10 border-white/50 text-black hover:bg-white/20 text-lg sm:text-xl font-bold rounded-none hover:shadow-[0_0_40px_rgba(0, 0, 0, 0.4)]">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
