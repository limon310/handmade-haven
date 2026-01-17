import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold tracking-wider">
              HANDMADE <span className="text-accent">HAVEN</span>
            </h2>
            <p className="text-sm text-brand-accent/80 leading-relaxed">
              Preserving the golden heritage of Bangladesh by connecting rural 
              artisans with the global modern home. Every piece is a story of tradition.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Icons (Mockups) */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">f</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">in</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">ig</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Explore</h4>
            <ul className="space-y-3 text-sm text-brand-accent/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/items" className="hover:text-white transition-colors">All Collections</Link></li>
              <li><Link href="/add-item" className="hover:text-white transition-colors">Add Your Craft</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Artisan Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Categories</h4>
            <ul className="space-y-3 text-sm text-brand-accent/70">
              <li className="hover:text-white cursor-pointer transition-colors">Nakshi Kantha</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pottery Art</li>
              <li className="hover:text-white cursor-pointer transition-colors">Jute Products</li>
              <li className="hover:text-white cursor-pointer transition-colors">Traditional Clothing</li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Newsletter</h4>
            <p className="text-xs text-brand-accent/60 mb-4">Stay updated with our new collections and artisan stories.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered input-sm bg-white/5 border-white/20 text-white focus:outline-none focus:border-primary w-full" 
              />
              <button className="btn btn-primary btn-sm w-full">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-accent/50 italic">
            &copy; {new Date().getFullYear()} Handmade Haven. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-accent/50 font-medium">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
