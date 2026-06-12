import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ links }) {
  const location = useLocation();

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#080B10]/70 border-b border-[#1A1D24]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="Zoldyck Logo" 
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-gaming font-black text-xl tracking-wider uppercase group-hover:text-[#EE1C25] transition-colors">
            Zoldyck<span className="text-[#EE1C25]">.</span>
          </span>
        </Link>

        {/* Liens Desktop */}
        <nav className="flex items-center gap-8">
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
      </div>
    </header>
  );
}