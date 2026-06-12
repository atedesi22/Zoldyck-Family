import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BottomNavbar({ links }) {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#080B10]/80 border-t border-[#1A1D24]/60 px-4 pb-safe-bottom">
      <div className="flex justify-around items-center h-16">
        {links.map((link) => {
          const isActive = location.pathname === link.href;

          return (
            <Link
              key={link.name}
              to={link.href}
              className="flex flex-col items-center justify-center flex-1 h-full relative group"
            >
              {/* Indicateur lumineux supérieur pour l'élément actif */}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute top-0 w-8 h-[3px] bg-[#EE1C25] shadow-[0_0_10px_#EE1C25]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              {/* Icône animée */}
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-[#EE1C25]' : 'text-[#A1A1AA] group-hover:text-[#EBEBEB]'
                }`}
              >
                {React.cloneElement(link.icon, { className: 'w-5 h-5' })}
              </motion.div>

              {/* Label de la page */}
              <span
                className={`text-[10px] font-gaming uppercase tracking-widest mt-1 transition-colors duration-200 ${
                  isActive ? 'text-[#EBEBEB] font-bold' : 'text-[#A1A1AA]'
                }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}