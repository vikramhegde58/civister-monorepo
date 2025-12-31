import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-background py-12 sm:py-16 text-gray-600">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <Logo />
             <p className="text-sm leading-relaxed max-w-xs">
               The modern platform for turnkey home construction. We combine generative design with elite execution to build homes faster, better, and within budget.
             </p>
          </div>

          {/* Tools Column */}
          <div className="space-y-4">
             <h4 className="font-bold text-foreground tracking-wide">Tools</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="/tools/floor-plan-generator" className="hover:text-primary transition-colors">Floor Plan Generator</Link></li>
                <li><Link href="/tools/2d-to-3d-converter" className="hover:text-primary transition-colors">2D to 3D Converter</Link></li>
                <li><Link href="/tools/interior-generator" className="hover:text-primary transition-colors">Interior Generator</Link></li>
                <li><Link href="/tools" className="hover:text-primary transition-colors">View All Tools</Link></li>
             </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
             <h4 className="font-bold text-foreground tracking-wide">Services</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="/services/turnkey-construction" className="hover:text-primary transition-colors">Whole House Construction</Link></li>
                <li><Link href="/services/interior-execution" className="hover:text-primary transition-colors">Interior Execution</Link></li>
                <li><Link href="/services/house-upgrade" className="hover:text-primary transition-colors">House Upgrade & Renovation</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">View All Services</Link></li>
             </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-bold text-foreground tracking-wide">Company</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
                <li><Link href="/partners" className="hover:text-primary transition-colors">For Contractors</Link></li>
             </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-bold text-foreground tracking-wide">Legal</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
             </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-gray-500">
            <p>© 2024 Civister Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
                <span>Bangalore</span>
                <span>•</span>
                <span>Mysore</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
