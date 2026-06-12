import React from 'react';

export default function Button({ children, variant = '[#EE1C25]', className = '', ...props }) {
  // Styles de base pour tous les boutons
  const baseStyle = "px-6 py-3 font-gaming uppercase tracking-wider rounded font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080B10]";
  
  // Styles spécifiques à chaque variante
  const variants = {
    primary: "bg-[#EE1C25] text-[#EBEBEB] hover:bg-[#EE1C25]/80 focus:ring-[#EE1C25]/50",
    secondary: "bg-[#1A1D24] text-[#EBEBEB] border border-[#0E3BF0] hover:border-[#0E3BF0]/80 focus:ring-[#0E3BF0]/50",
    accent: "bg-[#FFD700] text-[#080B10] hover:bg-[#FFD700]/80 focus:ring-[#FFD700]/50",
    outline: "bg-transparent border border-[#EBEBEB] text-[#EBEBEB] hover:bg-[#EBEBEB]/10 focus:ring-[#EBEBEB]/50",
  };

  const finalStyle = `${baseStyle} ${variants[variant]} ${className}`;

  return (
    <button className={finalStyle} {...props}>
      {children}
    </button>
  );
}