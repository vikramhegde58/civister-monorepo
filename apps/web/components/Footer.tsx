import Link from "next/link";
import { HardHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 sm:py-16 text-white/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex items-center gap-2 text-white">
                <HardHat className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl tracking-tight">Civister.</span>
             </div>
             <p className="text-sm leading-relaxed max-w-xs">
               The modern platform for turnkey home construction. We combine generative design with elite execution to build homes faster, better, and within budget.
             </p>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
             <h4 className="font-bold text-white tracking-wide">Platform</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="/questionnaire" className="hover:text-primary transition-colors">Start Project</Link></li>
                <li><Link href="/floor-plan" className="hover:text-primary transition-colors">Browse Designs</Link></li>
                <li><Link href="#process" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link href="/login" className="hover:text-primary transition-colors">Client Login</Link></li>
             </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-bold text-white tracking-wide">Company</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
                <li><Link href="/partners" className="hover:text-primary transition-colors">For Contractors</Link></li>
             </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-bold text-white tracking-wide">Legal</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
             </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider opacity-50">
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
