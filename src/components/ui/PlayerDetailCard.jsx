import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ShieldAlert, Crosshair, Award, Zap, Calendar, Smartphone} from 'lucide-react';

const roleIcons = {
  Slayer: <Zap className="w-5 h-5 text-[#EE1C25]" />,
  Anchor: <ShieldAlert className="w-5 h-5 text-[#0E3BF0]" />,
  Objective: <Award className="w-5 h-5 text-[#FFD700]" />,
  Sniper: <Crosshair className="w-5 h-5 text-white" />,
};

export default function PlayerDetailCard({ player, onClose }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shineX, setShineX] = useState(50);
  const [shineY, setShineY] = useState(50);

  const handleMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = clientX - box.left;
    const y = clientY - box.top;
    
    const xc = box.width / 2;
    const yc = box.height / 2;
    
    // Augmentation de l'intensité de l'effet à /6 au lieu de /10
    setRotateX((yc - y) / 6);
    setRotateY((x - xc) / 6);
    
    setShineX((x / box.width) * 100);
    setShineY((y / box.height) * 100);
  };

  const handleLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#080B10]/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-[#1A1D24]/80 border border-[#1A1D24] text-[#A1A1AA] hover:text-[#EE1C25] transition-colors z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* --- CORRECTION ICI : Utilisation de animate pour forcer la réactivité --- */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchEnd={handleLeave}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ 
          scale: 1, 
          y: 0,
          rotateX: rotateX,
          rotateY: rotateY
        }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }} // Rendu ultra-réactif au pixel près
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        className="relative w-full max-w-4xl rounded-3xl bg-[#1A1D24]/40 border border-[#1A1D24]/60 p-1 md:p-[2px] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        
        {/* BORDURE NÉON ANIMÉE */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EE1C25] via-[#0E3BF0] to-[#FFD700] opacity-40 group-hover:opacity-100 animate-spin-slow rounded-3xl blur-[2px] pointer-events-none" style={{ animationDuration: '6s' }} />

        {/* CONTENU INTERNE */}
        <div 
          className="relative rounded-[22px] bg-[#080B10]/95 p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 overflow-hidden"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          {/* Reflet lumineux */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-40"
            style={{
              background: `radial-gradient(circle 250px at ${shineX}% ${shineY}%, white, transparent)`,
            }}
          />

          {/* COLONNE GAUCHE */}
          <div className="md:col-span-5 flex flex-col items-center justify-center relative min-h-[280px] md:min-h-[380px]" style={{ transform: "translateZ(40px)" }}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#1A1D24] bg-[#1A1D24]/20 flex items-center justify-center">
              <img 
                src={player.photo || "/assets/img/logo-zoldyck.webp"} 
                alt={player.pseudo} 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "/assets/img/logo-zoldyck.webp"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-[#EE1C25] text-[#080B10] font-gaming font-black text-xs uppercase tracking-widest rounded shadow-lg">
                  {player.division}
                </span>
                <span className="px-3 py-1 bg-[#080B10]/80 backdrop-blur-md text-[#EBEBEB] border border-[#1A1D24] font-gaming text-xs uppercase tracking-widest rounded">
                  {player.type}
                </span>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="md:col-span-7 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="flex items-center gap-2 px-3 py-1 bg-[#1A1D24]/60 border border-[#1A1D24] rounded-full text-xs font-gaming uppercase tracking-wider text-[#EBEBEB]">
                  {roleIcons[player.role]}
                  {player.role}
                </span>
                {player.isCaptain && (
                  <span className="px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-gaming uppercase tracking-widest rounded-full">
                    Chef d'Équipe
                  </span>
                )}
              </div>

              <h2 className="text-4xl md:text-5xl font-black font-gaming uppercase tracking-wide text-[#EBEBEB] mb-2">
                {player.pseudo}
              </h2>
              <p className="text-sm font-gaming text-[#EE1C25] uppercase tracking-widest mb-6">
                Roster {player.gender === 'female' ? 'Féminin' : 'Masculin'}
              </p>

              <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed bg-[#1A1D24]/20 p-4 rounded-xl border border-[#1A1D24]/30 mb-6">
                {player.playstyle || "Aucune description de gameplay disponible."}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-[#A1A1AA]">
                  <Smartphone className="w-4 h-4 text-[#0E3BF0]" />
                  <span className="text-xs md:text-sm">Appareil : <strong className="text-[#EBEBEB]">{player.device || "Non spécifié"}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-[#A1A1AA]">
                  <Calendar className="w-4 h-4 text-[#FFD700]" />
                  <span className="text-xs md:text-sm">Recruté : <strong className="text-[#EBEBEB]">{player.joinedAt || "Récent"}</strong></span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 bg-[#080B10] border border-[#1A1D24] p-4 rounded-xl text-center">
                <div>
                  <p className="text-[10px] uppercase font-gaming text-[#A1A1AA] tracking-wider">K/D Ratio</p>
                  <p className="text-xl font-black text-[#EE1C25] mt-1">{player.kd}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-gaming text-[#A1A1AA] tracking-wider">Précision</p>
                  <p className="text-xl font-black text-[#EBEBEB] mt-1">{player.precision || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-gaming text-[#A1A1AA] tracking-wider">Rang Max</p>
                  <p className="text-xs font-bold text-[#FFD700] uppercase mt-2 tracking-wide truncate">{player.rank}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-[#1A1D24]/40">
              <span className="text-xs font-gaming uppercase tracking-widest text-[#A1A1AA]">Suivre le joueur :</span>
              <div className="flex gap-4">
                {player.socials?.twitter && (
                  <a href={player.socials.twitter} target="_blank" rel="noreferrer" className="p-2 bg-[#1A1D24]/60 rounded-lg text-[#A1A1AA] hover:text-[#EE1C25] transition-colors">
                    {/* <Twitter className="w-4 h-4" /> */}
                  </a>
                )}
                {player.socials?.youtube && (
                  <a href={player.socials.youtube} target="_blank" rel="noreferrer" className="p-2 bg-[#1A1D24]/60 rounded-lg text-[#A1A1AA] hover:text-[#EE1C25] transition-colors">
                    {/* <Youtube className="w-4 h-4" /> */}
                  </a>
                )}
                {player.socials?.instagram && (
                  <a href={player.socials.instagram} target="_blank" rel="noreferrer" className="p-2 bg-[#1A1D24]/60 rounded-lg text-[#A1A1AA] hover:text-[#EE1C25] transition-colors">
                    {/* <Instagram className="w-4 h-4" /> */}
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}