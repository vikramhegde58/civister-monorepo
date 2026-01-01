"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-2 px-4 md:px-8",
          scrolled ? "py-2" : "py-2"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            "mx-auto md:max-w-8xl max-w-9xl rounded-full border transition-all duration-300 flex items-center justify-between px-4 sm:px-6",
            scrolled
              ? "bg-white/40 backdrop-blur-xl border-gray-100 shadow-lg"
              : "bg-transparent border-transparent"
          )}
        >
          <Logo />

          <nav className="hidden md:flex items-center gap-6">
            {/* Tools Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors flex items-center gap-1">
                Tools
                <ChevronDown className={cn("w-4 h-4 transition-transform", toolsOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    <Link href="/tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Overview
                    </Link>
                    <Link href="/tools/floor-plan-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Floor Plan Generator
                    </Link>
                    <Link href="/tools/2d-to-3d-converter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      2D to 3D Converter <span className="text-xs text-gray-400 ml-2">Coming Soon</span>
                    </Link>
                    <Link href="/tools/interior-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Interior Generator <span className="text-xs text-gray-400 ml-2">Coming Soon</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors flex items-center gap-1">
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Overview
                    </Link>
                    <Link href="/services/turnkey-construction" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Whole House Construction
                    </Link>
                    <Link href="/services/interior-execution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Interior Execution
                    </Link>
                    <Link href="/services/house-upgrade" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      House Upgrade & Renovation
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPricingOpen(true)}
              onMouseLeave={() => setPricingOpen(false)}
            >
              <button className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors flex items-center gap-1">
                Pricing
                <ChevronDown className={cn("w-4 h-4 transition-transform", pricingOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {pricingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    <Link href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Overview
                    </Link>
                    <Link href="/pricing/tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Tool Pricing
                    </Link>
                    <Link href="/pricing/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Service Pricing
                    </Link>
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <Link href="/contact" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-gray-50 transition-colors">
                        Get Free Quote
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/services/turnkey-construction" className="hidden sm:block">
              <Button 
                  size="sm" 
                  className="rounded-full bg-primary text-white hover:bg-primary/90 font-medium px-4 sm:px-6 text-sm sm:text-base"
              >
                Get Started
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-20 right-4 left-4 bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-6 space-y-4 shadow-lg max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tools Section */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tools</span>
                </div>
                <Link href="/tools" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Overview
                </Link>
                <Link href="/tools/floor-plan-generator" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Floor Plan Generator
                </Link>
                <Link href="/tools/2d-to-3d-converter" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-400 transition-colors py-2">
                  2D to 3D Converter <span className="text-xs ml-2">Coming Soon</span>
                </Link>
                <Link href="/tools/interior-generator" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-400 transition-colors py-2">
                  Interior Generator <span className="text-xs ml-2">Coming Soon</span>
                </Link>
              </div>

              {/* Services Section */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</span>
                </div>
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Overview
                </Link>
                <Link href="/services/turnkey-construction" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Whole House Construction
                </Link>
                <Link href="/services/interior-execution" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Interior Execution
                </Link>
                <Link href="/services/house-upgrade" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  House Upgrade & Renovation
                </Link>
              </div>

              {/* Pricing Section */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Pricing</span>
                </div>
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Overview
                </Link>
                <Link href="/pricing/tools" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Tool Pricing
                </Link>
                <Link href="/pricing/services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Service Pricing
                </Link>
              </div>

              {/* Other Links */}
              <div className="pt-4 border-t border-gray-200">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  About
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2">
                  Contact
                </Link>
              </div>

              <Link href="/services/turnkey-construction" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4 h-12 bg-primary text-white hover:bg-primary/90 font-medium">
                  Get Started
                </Button>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
