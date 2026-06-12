import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Award, Zap } from 'lucide-react';

const roleIcons = {
  Slayer: <Zap className="w-3.5 h-3.5 text-[#EE1C25]" />,
  Anchor: <ShieldAlert className="w-3.5 h-3.5 text-[#0E3BF0]" />,
  Objective: <Award className="w-3.5 h-3.5 text-[#FFD700]" />,
  Sniper: <Crosshair className="w-3.5 h-3.5 text-white" />,
};

export default function PlayerCard({ player }) {
  if (!player) return null;

  // Récupération des données avec valeurs de secours
  const gender = player.gender || 'male';
  const pseudo = player.pseudo || 'Recrue';
  const role = player.role || 'Slayer';
  const favoriteWeapon = player.favoriteWeapon || 'Non spécifiée';
  const kd = player.kd || '0.00';
  const rank = player.rank || 'Grand Maître';

  const genderColor = gender === 'female' ? 'text-[#FF69B4]' : 'text-[#0E3BF0]';

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative p-5 rounded-2xl backdrop-blur-xl bg-[#1A1D24]/40 border border-[#1A1D24]/40 overflow-hidden group flex flex-col justify-between shadow-lg transition-all duration-300 hover:border-[#EE1C25]/40"
    >
      {/* Effet de lueur diffuse en arrière-plan au survol */}
      <div className="absolute -inset-px bg-gradient-to-b from-transparent to-[#EE1C25]/5 group-hover:to-[#EE1C25]/10 rounded-2xl pointer-events-none transition-all duration-500" />

      <div className="relative z-10 w-full flex flex-col">
        
        {/* 1. LE NOM (PSEUDO) & BADGE CAPITAINE */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-2xl font-black font-gaming uppercase tracking-wide text-[#EBEBEB] group-hover:text-[#EE1C25] transition-colors duration-300 truncate">
            {pseudo}
          </h3>
          {player.isCaptain && (
            <span className="px-1.5 py-0.5 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-[8px] font-gaming uppercase tracking-widest rounded shrink-0">
              CPT
            </span>
          )}
        </div>

        {/* 2. LE SEXE (ROSTER) */}
        <p className={`text-[10px] font-gaming uppercase tracking-widest ${genderColor} mb-2`}>
          Roster {gender === 'female' ? 'Féminin' : 'Masculin'}
        </p>

        {/* 3. LE RÔLE */}
        <div className="flex items-center gap-1.5 text-xs text-[#EBEBEB] font-gaming uppercase tracking-wider mb-2 bg-[#080B10]/40 w-fit px-2.5 py-1 rounded-md border border-[#1A1D24]/60">
          {roleIcons[role] || roleIcons.Slayer}
          <span>{role}</span>
        </div>

        {/* 4. L'ARME FAVORITE */}
        <p className="text-[10px] font-gaming text-[#A1A1AA] uppercase tracking-wider mb-5">
          Arme : <span className="text-[#EBEBEB]">{favoriteWeapon}</span>
        </p>

        {/* 5. LA PHOTO DE PROFIL (Placée pile sous l'arme et au-dessus des stats) */}
        <div className="flex justify-center mb-5">
          <div className="relative w-full h-44 rounded-xl p-[1px] bg-gradient-to-b from-[#1A1D24] to-[#080B10] group-hover:from-[#EE1C25] group-hover:to-[#0E3BF0] transition-all duration-500 shadow-md overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden bg-[#080B10] flex items-center justify-center">
              <img 
                src={player.photo || "/assets/img/logo-zoldyck.webp"} 
                alt={pseudo}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = "/assets/img/logo-zoldyck.webp"; }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* 6. LE RATIO & LE RANG (LE BLOC DE STATS FINALES) */}
      <div className="relative z-10 grid grid-cols-2 gap-2 text-center bg-[#080B10]/80 backdrop-blur-md rounded-xl p-3 border border-[#1A1D24] group-hover:border-[#EE1C25]/20 transition-colors">
        <div>
          <p className="text-[9px] uppercase font-gaming text-[#A1A1AA] tracking-wider">K/D Ratio</p>
          <p className="text-base font-black text-[#EE1C25] mt-0.5">{kd}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-l border-[#1A1D24]/60">
          <p className="text-[9px] uppercase font-gaming text-[#A1A1AA] tracking-wider mb-0.5">Rang</p>
          <p className="text-[11px] font-bold text-[#FFD700] uppercase tracking-wide max-w-full truncate px-1">
            {rank.split(' ')[0]}
          </p>
        </div>
      </div>

    </motion.div>
  );
}