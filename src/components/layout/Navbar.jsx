import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HelpCircleIcon } from 'lucide-react';

export default function Navbar({ links }) {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#080B10]/70 border-b border-[#1A1D24]/40">
      {/* h-16 sur mobile, h-20 sur PC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* LOGO (Visible partout) */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="Zoldyck Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-gaming font-black text-lg md:text-xl tracking-wider uppercase group-hover:text-[#EE1C25] transition-colors">
            Zoldyck<span className="text-[#EE1C25]">.</span>
          </span>
        </Link>

        {/* NAVIGATION DESKTOP (Masquée sur mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`font-gaming text-sm uppercase tracking-widest flex items-center gap-2 transition-colors relative py-2 group ${
                  isActive ? 'text-[#EBEBEB]' : 'text-[#A1A1AA] hover:text-[#EBEBEB]'
                }`}
              >
                {link.icon}
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#EE1C25] transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
        </nav>

        {/* BOUTON FAQ MOBILE (Visible uniquement sur mobile) */}
        <div className="md:hidden">
          <Link 
            to="/faq" 
            className="p-2 text-[#A1A1AA] hover:text-[#EE1C25] active:scale-95 transition-all flex items-center justify-center"
            aria-label="Foire aux questions"
          >
            <HelpCircleIcon className="w-6 h-6" />
          </Link>
        </div>

      </div>
    </header>
  );
}