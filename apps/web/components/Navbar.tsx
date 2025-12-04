"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HardHat, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-4 md:px-8",
          scrolled ? "py-2" : "py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-full border transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-3",
            scrolled
              ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-lg"
              : "bg-transparent border-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2 group">
             <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 overflow-hidden group-hover:bg-primary/20 transition-colors">
                <HardHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
             </div>
             <span className="font-bold text-base sm:text-lg tracking-tight text-white">Civister.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Expertise", "Process", "Projects"].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/questionnaire" className="hidden sm:block">
              <Button 
                  size="sm" 
                  className="rounded-full bg-white text-black hover:bg-white/90 font-medium px-4 sm:px-6 text-sm sm:text-base"
              >
                Start Project
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-20 right-4 left-4 bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {["Expertise", "Process", "Projects"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white/80 hover:text-white transition-colors py-2"
                >
                  {item}
                </Link>
              ))}
              <Link href="/questionnaire" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4 h-12 bg-primary text-white hover:bg-primary/90 font-medium">
                  Start Project
                </Button>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
