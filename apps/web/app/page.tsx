"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LayoutTemplate, Ruler, ShieldCheck, Play, ChevronRight, Globe, Box, CheckCircle2, TrendingUp, Users, Quote, HardHat, Palette, Sparkles, Phone, Home as HomeIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* Technical Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* --- HERO SECTION --- */}
      <section ref={targetRef} className="relative min-h-[90vh] md:h-[95vh] min-h-[500px] md:min-h-[700px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 pt-20 md:pt-20 pb-12 md:pb-16 border-b border-gray-200 overflow-hidden">
        
        {/* Left Side: Content */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full md:w-1/2 text-left space-y-4 sm:space-y-6 md:space-y-8 mb-1 sm:mb-2 md:mb-0">
          

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.95] sm:leading-[0.9] text-center md:text-start md:mt-1 mt-6">
            <span className="block">Dream Home</span>
            <span className="block text-gray-500 md:mt-1 mt-2">Construction.</span>
          </h1>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mt-3 sm:mt-4 md:mt-8 text-center md:text-start">
              From design to delivery, we handle everything. Verified builders, fixed pricing, and 40% faster completion. Your dream home, built right.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
              <Link href="/services/turnkey-construction" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-primary text-white hover:bg-primary/90 text-sm sm:text-base md:text-lg font-medium rounded-none border-r border-gray-300">
                  Get Construction Quote
                </Button>
              </Link>
              <Link href="#tools" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 border-gray-400 text-foreground bg-white/20 hover:bg-white/50 text-sm sm:text-base md:text-lg font-medium rounded-none">
                  Explore Tools
                </Button>
              </Link>
            </div>
          </FadeIn>
        </motion.div>

        {/* 3D Element - Responsive positioning */}
        <div className="relative md:absolute right-0 top-auto md:top-0 bottom-0 w-full md:w-3/5 h-[300px] sm:h-[400px] md:h-full z-0 opacity-100 pointer-events-auto mt-1 sm:mt-0 md:mt-0">
           <Hero3D />
           {/* Gradient Fade Overlay for Left Blending - Hidden on mobile */}
           <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none z-10" />
           {/* Gradient Fade Overlay for Right Blending */}
           <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none z-10" />
           {/* Top Fade for smooth transition to navbar/next section */}
           <div className="absolute top-0 left-0 right-0 h-28 sm:h-24 bg-gradient-to-b from-background via-background/90 to-transparent pointer-events-none z-10" />
           {/* Bottom Fade for smooth transition to footer/next section */}
           <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </div>
        
      </section>


      {/* --- TOOLS SHOWCASE (30%) --- */}
      <section id="tools" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-2">Our Tools</h2>
              <p className="text-gray-600 text-sm sm:text-base">AI-powered tools to design and visualize your home</p>
            </div>
            <Link href="/tools">
              <Button variant="link" className="text-primary p-0">
                View All Tools <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <FadeIn>
              <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <LayoutTemplate className="w-8 h-8 text-primary" />
                    <CardTitle>Floor Plan Generator</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">Generate Vastu-compliant floor plans instantly</p>
                </CardHeader>
                <CardContent>
                  <Link href="/tools/floor-plan-generator">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Try Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="border-2 border-gray-200 opacity-75">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Box className="w-8 h-8 text-gray-400" />
                    <CardTitle className="text-gray-400">2D to 3D Converter</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400 font-semibold">Coming Soon</span>
                  </div>
                  <p className="text-sm text-gray-400">Transform 2D plans into 3D visualizations</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled variant="outline">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-2 border-gray-200 opacity-75">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="w-8 h-8 text-gray-400" />
                    <CardTitle className="text-gray-400">Interior Generator</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400 font-semibold">Coming Soon</span>
                  </div>
                  <p className="text-sm text-gray-400">AI-powered interior design suggestions</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled variant="outline">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SHOWCASE SECTION --- */}
      <section id="showcase" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-20 gap-4 sm:gap-6 md:gap-8">
               <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter mb-3 sm:mb-4">Designs that Work.</h2>
                  <div className="h-1 w-16 sm:w-20 bg-primary" />
               </div>
               <p className="max-w-sm text-gray-600 text-left md:text-right leading-relaxed text-xs sm:text-sm md:text-base">
                  Explore our library of practical, Vastu-compliant home designs optimized for standard plot sizes (30x40, 40x60).
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 h-auto md:h-[600px] lg:h-[800px]">
               
               {/* Main Feature */}
               <FadeIn className="col-span-1 md:col-span-8 relative group bg-white border border-gray-200 overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-0">
                  <Image 
                     src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600"
                     alt="Luxury Villa"
                     fill
                     className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-10">
                     <div className="text-primary font-mono text-[10px] sm:text-xs mb-2 uppercase tracking-widest">Most Popular • 3BHK</div>
                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Modern Urban Villa (30x40)</h3>
                     <p className="text-gray-700 max-w-md text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8">Perfect for city plots. Maximizes space with a duplex layout while ensuring 100% Vastu compliance.</p>
                     <Link href="/tools/floor-plan-generator" className="inline-flex items-center text-foreground text-xs sm:text-sm border-b border-primary pb-1 hover:text-primary transition-colors">
                        View Floor Plan <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                     </Link>
                  </div>
               </FadeIn>

               {/* Secondary Column */}
               <div className="col-span-1 md:col-span-4 grid grid-rows-2 gap-3 sm:gap-4">
                  <FadeIn delay={0.2} className="relative group bg-white border border-gray-200 overflow-hidden min-h-[200px] sm:min-h-[250px] md:min-h-0">
                     <Image 
                        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800"
                        alt="Kitchen"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-90 transition-all duration-700"
                     />
                     <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Premium Interiors</h3>
                     </div>
                  </FadeIn>
                  <FadeIn delay={0.4} className="relative group bg-white border border-gray-200 overflow-hidden flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-0">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-50" />
                      <div className="relative z-10 text-center px-4">
                         <div className="w-16 h-16 sm:w-20 sm:h-20 border border-gray-400 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:border-primary transition-all cursor-pointer mx-auto">
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-foreground fill-current" />
                         </div>
                         <span className="font-mono text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest">See How We Build</span>
                      </div>
                  </FadeIn>
               </div>

            </div>
        </div>
      </section>

      {/* --- SERVICES SHOWCASE (70%) --- */}
      <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From design to delivery, we make home construction simple, transparent, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <FadeIn>
              <Card className="border-2 border-primary shadow-lg h-full">
                <div className="h-2 bg-gradient-to-r from-primary to-orange-600" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <HardHat className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">Whole House Construction</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">Complete construction from foundation to finishing</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Complete project management
                    </li>
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
                  </ul>
                  <Link href="/services/turnkey-construction">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="border-2 border-gray-200 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">Interior Execution</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">Professional interior design and execution</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Design consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Material selection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Expert execution
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Quality finishing
                    </li>
                  </ul>
                  <Link href="/services/interior-execution">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-2 border-gray-200 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <HomeIcon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">House Upgrade</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">Renovation, extensions, and modern upgrades</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Home extensions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Modern upgrades
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Structural improvements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Complete makeovers
                    </li>
                  </ul>
                  <Link href="/services/house-upgrade">
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="link" className="text-primary text-lg">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- STATS / IMPACT --- */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center md:text-left">
                  <FadeIn delay={0.1} className="space-y-2">
                      <div className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">40%</div>
                      <div className="text-xs sm:text-sm text-gray-500 font-mono uppercase tracking-widest">Faster Completion</div>
                      <p className="text-gray-600 text-xs sm:text-sm pt-2">Our organized supply chain prevents delays common in local construction.</p>
                  </FadeIn>
                  <FadeIn delay={0.2} className="space-y-2">
                      <div className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">100+</div>
                      <div className="text-xs sm:text-sm text-gray-500 font-mono uppercase tracking-widest">Verified Builders</div>
                      <p className="text-gray-600 text-xs sm:text-sm pt-2">We vet every contractor for quality, financial stability, and past performance.</p>
                  </FadeIn>
                  <FadeIn delay={0.3} className="space-y-2">
                      <div className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">Zero</div>
                      <div className="text-xs sm:text-sm text-gray-500 font-mono uppercase tracking-widest">Hidden Costs</div>
                      <p className="text-gray-600 text-xs sm:text-sm pt-2">The quote you sign is the price you pay. No surprise escalations later.</p>
                  </FadeIn>
              </div>
          </div>
      </section>

      {/* --- INFINITE SCROLL REVIEWS --- */}
      <section className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center">
             <FadeIn>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4">Trusted by Families.</h2>
                <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                   See why homeowners in Bangalore and Mysore choose Civister.
                </p>
             </FadeIn>
         </div>
         
         {/* Infinite Scroll Container */}
         <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
             <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
             
             <div className="flex gap-3 sm:gap-4 md:gap-6 animate-scroll w-max px-4 sm:px-6 hover:[animation-play-state:paused]">
                {[...reviews, ...reviews].map((review, i) => ( // Duplicate for seamless loop
                   <div key={i} className="w-[260px] sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0 bg-white border border-gray-200 p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-colors duration-300 group rounded-none shadow-sm">
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary/30 mb-4 sm:mb-6 group-hover:text-primary transition-colors" />
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px]">"{review.text}"</p>
                      <div className="flex items-center gap-3 sm:gap-4">
                         <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-gray-300 grayscale group-hover:grayscale-0 transition-all shrink-0">
                            <Image src={review.image} alt={review.author} fill className="object-cover" />
                         </div>
                         <div className="min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">{review.author}</h4>
                            <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-wider truncate">{review.role}</p>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
         </div>
      </section>
      
      {/* --- CAPABILITIES (Minimalist) --- */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50 border-y border-gray-200">
         <div className="container mx-auto px-4 sm:px-6">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                 <FadeIn className="lg:col-span-1">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4 sm:mb-6">Why Choose <br/> Civister?</h2>
                    <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                       Traditional construction is messy and opaque. We've simplified it into a transparent, step-by-step process.
                    </p>
                    <Button variant="link" className="text-primary p-0 hover:text-primary/80 text-sm sm:text-base">
                       Learn about our process <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                 </FadeIn>
                 
                 <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {[
                       { icon: Box, title: "3D Walkthroughs", desc: "Visualize your future home in detail before spending a rupee on construction." },
                       { icon: Ruler, title: "Material Estimator", desc: "Know exactly how much cement, steel, and brick you need. No wastage." },
                       { icon: ShieldCheck, title: "Vastu Compliant", desc: "All our designs are verified by experts to bring peace and prosperity." },
                       { icon: Globe, title: "Track Online", desc: "Get daily photo updates of your construction site on your phone." }
                    ].map((item, i) => (
                       <FadeIn key={i} delay={i * 0.1} className="p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-primary/50 transition-colors bg-white">
                          <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-4 sm:mb-6" />
                          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                       </FadeIn>
                    ))}
                 </div>
             </div>
         </div>
      </section>

       {/* --- NEW SECTION: FAQ / TRUST --- */}
       <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background relative z-10">
           <div className="max-w-4xl mx-auto">
               <FadeIn>
                   <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>
               </FadeIn>
               
               <div className="space-y-3 sm:space-y-4">
                   {[
                       { q: "Is the Vastu compliance accurate?", a: "Yes. We follow strict Vedic principles. Every plan is designed to ensure the correct placement of the entrance, kitchen, and master bedroom." },
                       { q: "Can I use my own architect?", a: "Absolutely. You can download our floor plans and give them to your architect, or hire our partner architects for customization." },
                       { q: "Where do you provide construction services?", a: "We currently offer full construction services in Bangalore and Mysore. For other cities, we provide design-only services." }
                   ].map((faq, i) => (
                       <FadeIn key={i} delay={i * 0.1} className="border border-gray-200 bg-white p-4 sm:p-5 md:p-6 hover:bg-gray-50 transition-colors cursor-default">
                           <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 flex items-start sm:items-center gap-2">
                               <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" /> <span>{faq.q}</span>
                           </h3>
                           <p className="text-gray-600 text-sm sm:text-base pl-6 sm:pl-6 mt-2">{faq.a}</p>
                       </FadeIn>
                   ))}
               </div>
           </div>
       </section>

      {/* --- LARGE CTA --- */}
      <section className="relative py-24 sm:py-36 md:py-48 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <Image 
               src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000"
               alt="Architecture"
               fill
               className="object-cover opacity-[0.45]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-black/10 to-background" />
         </div>
         
         <div className="container relative z-10 mx-auto text-center px-4 sm:px-6">
             <FadeIn>
               <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 sm:mb-12">
                  Ready to Build?
               </h2>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Link href="/services/turnkey-construction">
                    <Button className="h-16 sm:h-20 px-12 sm:px-16 bg-primary hover:bg-primary/90 text-white text-lg sm:text-xl font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Construction Quote
                    </Button>
                 </Link>
                 <Link href="/tools/floor-plan-generator">
                    <Button variant="outline" className="h-16 sm:h-20 px-12 sm:px-16 border-2 bg-white/10 border-white/50 text-black hover:bg-white/20 text-lg sm:text-xl font-bold rounded-none hover:shadow-[0_0_40px_rgba(0, 0, 0, 0.4)]">
                      Design Floor Plan
                    </Button>
                 </Link>
               </div>
             </FadeIn>
         </div>
      </section>

    </div>
  );
}

const reviews = [
  { 
     text: "The 3D preview was a game changer. We could see exactly how our duplex house would look before paying anything.",
     author: "Arjun Mehta",
     role: "Homeowner, Bangalore",
     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  { 
     text: "I was worried about Vastu, but Civister's plan got approved by my family priest immediately. Very happy.",
     author: "Sarah Jenkins",
     role: "Homeowner, Mysore",
     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  { 
     text: "Transparent pricing is real. The BOQ they gave me matched the final cost almost perfectly.",
     author: "David Chen",
     role: "Investor",
     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
      text: "Simple, fast, and professional. The contractors they connected us with were polite and finished on time.",
      author: "Vikram Singh",
      role: "Homeowner, Bangalore",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
  },
  {
      text: "Using Civister was easier than hiring an architect manually. Highly recommend for anyone building a new house.",
      author: "Elena Rodriguez",
      role: "Architect, Remote",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  }
];
