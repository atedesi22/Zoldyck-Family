import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ShieldAlert, Crosshair, Award, Zap, Calendar, Smartphone } from 'lucide-react';

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
    // CORRECTION 1 : Changement de "overflow-y-auto" et ajout de paddings verticaux (pt-24 pb-28) pour permettre le scroll mobile
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#080B10]/95 backdrop-blur-xl flex justify-center items-start overflow-y-auto px-4 sm:px-6 pt-24 pb-28 md:py-16"
    >
      {/* Bouton Fermer repositionné en haut à droite avec un fond bien visible */}
      <button 
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-[#1A1D24] border border-[#1A1D24] text-[#A1A1AA] hover:text-[#EE1C25] active:scale-95 transition-all z-50 shadow-lg"
      >
        <X className="w-6 h-6" />
      </button>

      {/* --- BLOC AVEC TILT 3D --- */}
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
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        // CORRECTION 2 : Retrait de "overflow-hidden" pour éviter les bugs de coupure sur mobile et gestion de la taille
        className="relative w-full max-w-4xl rounded-3xl bg-[#1A1D24]/40 border border-[#1A1D24]/60 p-[2px] shadow-[0_0_50px_rgba(0,0,0,0.9)] my-auto"
      >
        
        {/* BORDURE NÉON ANIMÉE */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EE1C25] via-[#0E3BF0] to-[#FFD700] opacity-40 group-hover:opacity-100 animate-spin-slow rounded-3xl blur-[2px] pointer-events-none" style={{ animationDuration: '6s' }} />

        {/* CONTENU INTERNE DE LA FICHE */}
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

          {/* COLONNE GAUCHE (PHOTO) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center relative min-h-[260px] md:min-h-[380px]" style={{ transform: "translateZ(40px)" }}>
            <div className="relative w-full h-full max-h-[340px] md:max-h-full rounded-2xl overflow-hidden border border-[#1A1D24] bg-[#1A1D24]/20 flex items-center justify-center aspect-square md:aspect-auto">
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

          {/* COLONNE DROITE (INFO / STATS) */}
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

              <h2 className="text-3xl md:text-5xl font-black font-gaming uppercase tracking-wide text-[#EBEBEB] mb-1">
                {player.pseudo}
              </h2>
              <p className="text-xs font-gaming text-[#EE1C25] uppercase tracking-widest mb-4">
                Roster {player.gender === 'female' ? 'Féminin' : 'Masculin'} • Arme : <span className="text-[#EBEBEB]">{player.favoriteWeapon}</span>
              </p>

              <p className="text-[#A1A1AA] text-xs md:text-sm leading-relaxed bg-[#1A1D24]/20 p-4 rounded-xl border border-[#1A1D24]/30 mb-4">
                {player.playstyle || "Aucune description de gameplay disponible."}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <Smartphone className="w-3.5 h-3.5 text-[#0E3BF0]" />
                  <span className="text-xs">Appareil : <strong className="text-[#EBEBEB] text-xs">{player.device || "Non spécifié"}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span className="text-xs">Recruté : <strong className="text-[#EBEBEB] text-xs">{player.joinedAt || "Récent"}</strong></span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 bg-[#080B10] border border-[#1A1D24] p-3 rounded-xl text-center">
                <div>
                  <p className="text-[9px] uppercase font-gaming text-[#A1A1AA] tracking-wider">K/D Ratio</p>
                  <p className="text-lg font-black text-[#EE1C25] mt-0.5">{player.kd}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-gaming text-[#A1A1AA] tracking-wider">Précision</p>
                  <p className="text-lg font-black text-[#EBEBEB] mt-0.5">{player.precision || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase font-gaming text-[#A1A1AA] tracking-wider">Rang Max</p>
                  <p className="text-[11px] font-bold text-[#FFD700] uppercase mt-1 tracking-wide truncate">{player.rank}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-[#1A1D24]/40">
              <span className="text-[10px] font-gaming uppercase tracking-widest text-[#A1A1AA]">Réseaux :</span>
              <div className="flex gap-3">
                {player.socials?.twitter && (
                  <a href={player.socials.twitter} target="_blank" rel="noreferrer" className="p-2 bg-[#1A1D24]/60 rounded-lg text-[#A1A1AA] hover:text-[#EE1C25] transition-colors">
                    {/* <Twitter className="w-3.5 h-3.5" /> */}
                  </a>
                )}
                {player.socials?.youtube && (
                  <a href={player.socials.youtube} target="_blank" rel="noreferrer" className="p-2 bg-[#1A1D24]/60 rounded-lg text-[#A1A1AA] hover:text-[#EE1C25] transition-colors">
                    {/* <Youtube className="w-3.5 h-3.5" /> */}
                  </a>
                )}
                {player.socials?.instagram && (
                  <a href={player.socials.instagram} target="_blank" rel="noreferrer" className="p-2 bg-[#1A1D24]/60 rounded-lg text-[#A1A1AA] hover:text-[#EE1C25] transition-colors">
                    {/* <Instagram className="w-3.5 h-3.5" /> */}
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