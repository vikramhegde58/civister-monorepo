"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Sparkles, HardHat, Phone, ArrowRight } from "lucide-react";
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

const productPlans = [
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

const servicePricing = [
  {
    service: "Turnkey Construction",
    description: "End-to-end construction from design to handover",
    pricing: "₹1,500 - ₹2,500 per sqft",
    note: "Pricing depends on specifications, location, and finishes",
    features: [
      "Complete project management",
      "Verified contractors",
      "Fixed pricing guarantee",
      "40% faster completion",
      "Free Pro subscription included",
      "Warranty on workmanship"
    ]
  },
  {
    service: "Construction Management",
    description: "Expert oversight and coordination",
    pricing: "5-8% of project cost",
    note: "Based on project size and complexity",
    features: [
      "Project oversight",
      "Quality control",
      "Progress tracking",
      "Budget management",
      "Regular site visits"
    ]
  },
  {
    service: "Builder Network",
    description: "Access to verified contractors",
    pricing: "Free",
    note: "Connect directly with builders",
    features: [
      "Browse verified builders",
      "View portfolios",
      "Read reviews",
      "Direct contact",
      "No commission fees"
    ]
  }
];

export default function PricingPage() {
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
            Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for tools and services. Start free, upgrade as you grow.
          </p>
        </motion.div>

        {/* Tools Pricing */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Tool Plans</h2>
            <p className="text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {productPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.1}>
                <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-2 border-primary shadow-lg' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-500 text-sm">/{plan.period}</span>
                      )}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={plan.href}>
                      <Button className={`w-full ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : ''}`}>
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <Card className="mt-8 bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Special Offer</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Get <strong>free Pro subscription</strong> when you use our Turnkey Construction service. 
                  Unlimited access to all tools included!
                </p>
                <Link href="/services/turnkey-construction">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn About Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        </section>

        {/* Services Pricing */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Service Pricing</h2>
            <p className="text-gray-600">Transparent pricing for construction services</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicePricing.map((service, index) => (
              <FadeIn key={service.service} delay={index * 0.1}>
                <Card className="border-gray-200 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <HardHat className="w-8 h-8 text-primary" />
                      <CardTitle className="text-xl">{service.service}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">{service.pricing}</div>
                      <p className="text-xs text-gray-500">{service.note}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/services/${service.service.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button variant="outline" className="w-full">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <FadeIn delay={0.5}>
          <Card className="mt-16 bg-gradient-to-br from-primary to-orange-600 text-white border-0">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have Questions About Pricing?</h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Get a free consultation and detailed quote. No obligations, just expert advice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/services/turnkey-construction">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Services
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
