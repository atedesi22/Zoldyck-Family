import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Award, Zap } from 'lucide-react';

const glassCard = "backdrop-blur-xl bg-[#1A1D24]/40 border border-[#1A1D24]/30";

// Dictionnaire pour associer une icône stylée à chaque rôle CODM
const roleIcons = {
  Slayer: <Zap className="w-4 h-4 text-[#EE1C25]" />,
  Anchor: <ShieldAlert className="w-4 h-4 text-[#0E3BF0]" />,
  Objective: <Award className="w-4 h-4 text-[#FFD700]" />,
  Sniper: <Crosshair className="w-4 h-4 text-white" />,
};

export default function PlayerCard({ player }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative p-6 rounded-2xl ${glassCard} overflow-hidden group flex flex-col justify-between`}
    >
      {/* Effet de lueur en arrière-plan au survol */}
      <div className="absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-[#EE1C25]/0 group-hover:to-[#EE1C25]/10 rounded-2xl transition-all duration-500 z-0" />

      <div className="relative z-10">
        {/* En-tête : Badge de rôle et Capitaine */}
        <div className="flex justify-between items-center mb-6">
          <span className="flex items-center gap-2 px-3 py-1 bg-[#080B10]/60 border border-[#1A1D24] rounded-full text-xs font-gaming uppercase tracking-wider text-[#EBEBEB]">
            {roleIcons[player.role] || <Crosshair className="w-4 h-4" />}
            {player.role}
          </span>
          {player.isCaptain && (
            <span className="px-2.5 py-0.5 bg-[#EE1C25]/20 border border-[#EE1C25]/40 text-[#EE1C25] text-[10px] font-gaming uppercase tracking-widest rounded">
              Cpt
            </span>
          )}
        </div>

        {/* Pseudo du joueur */}
        <h3 className="text-2xl font-black font-gaming uppercase tracking-wide text-[#EBEBEB] group-hover:text-[#EE1C25] transition-colors duration-300">
          {player.pseudo}
        </h3>

        {/* Arme favorite */}
        <p className="text-xs text-[#A1A1AA] font-gaming uppercase tracking-widest mt-1">
          Arme : <span className="text-[#EBEBEB]">{player.favoriteWeapon}</span>
        </p>

        {/* Mini stats e-sport fictives/calculées */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-[#1A1D24]/40 text-center">
          <div>
            <p className="text-[10px] uppercase font-gaming text-[#A1A1AA] tracking-wider">K/D Ratio</p>
            <p className="text-base font-bold text-[#EBEBEB] mt-0.5">{player.kd}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-gaming text-[#A1A1AA] tracking-wider">Rang</p>
            <p className="text-xs font-bold text-[#FFD700] uppercase mt-1 tracking-wide">{player.rank}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}