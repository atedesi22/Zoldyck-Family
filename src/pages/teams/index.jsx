import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Swords } from 'lucide-react';
import PlayerCard from '../../components/modules/teams/PlayerCard';

const glassContainer = "backdrop-blur-xl bg-[#1A1D24]/20 border border-[#1A1D24]/20";

// Mock Data des joueurs du clan Zoldyck
const mockPlayers = [
  // Team Masculine
  { id: 1, pseudo: "Killua", role: "Slayer", favoriteWeapon: "Kilo 141", kd: "2.45", rank: "Légendaire", isCaptain: true, gender: "male" },
  { id: 2, pseudo: "Gon", role: "Objective", favoriteWeapon: "CBR4", kd: "1.95", rank: "Légendaire", isCaptain: false, gender: "male" },
  { id: 3, pseudo: "Kurapika", role: "Anchor", favoriteWeapon: "LK24", kd: "2.10", rank: "Grand Maître V", isCaptain: false, gender: "male" },
  { id: 4, pseudo: "Leorio", role: "Sniper", favoriteWeapon: "DL Q33", kd: "1.80", rank: "Grand Maître IV", isCaptain: false, gender: "male" },
  
  // Team Féminine
  { id: 5, pseudo: "Alluka", role: "Slayer", favoriteWeapon: "Fennec", kd: "2.60", rank: "Légendaire", isCaptain: true, gender: "female" },
  { id: 6, pseudo: "Bisky", role: "Objective", favoriteWeapon: "HVK-30", kd: "2.15", rank: "Légendaire", isCaptain: false, gender: "female" },
  { id: 7, pseudo: "Machi", role: "Anchor", favoriteWeapon: "Grau 5.56", kd: "1.98", rank: "Grand Maître V", isCaptain: false, gender: "female" },
  { id: 8, pseudo: "Pakunoda", role: "Sniper", favoriteWeapon: "LW3-Tundra", kd: "2.05", rank: "Légendaire", isCaptain: false, gender: "female" },
];

export default function TeamsPage() {
  const [activeTab, setActiveTab] = useState('male'); // 'male' ou 'female'

  // Filtrer les joueurs selon l'onglet actif
  const filteredPlayers = mockPlayers.filter(player => player.gender === activeTab);

  return (
    <div className="min-h-screen bg-[#080B10] text-[#EBEBEB] px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E3BF0]/10 border border-[#0E3BF0]/20 text-xs font-gaming uppercase tracking-widest text-[#0E3BF0] mb-4">
            <Swords className="w-3.5 h-3.5" /> Les Alignements
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-gaming uppercase tracking-tight">
            Rosters <span className="text-[#EE1C25]">Zoldyck</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm md:text-base mt-4">
            Découvrez les compétiteurs et compétitrices d'élite qui défendent nos couleurs sur la scène Call of Duty: Mobile.
          </p>
        </div>

        {/* COMMUTATEUR DE TEAM (TABS) */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-xl bg-[#1A1D24]/60 border border-[#1A1D24]/40 relative z-10 w-full max-w-sm">
            <button
              onClick={() => setActiveTab('male')}
              className={`flex-1 py-3 text-center font-gaming uppercase tracking-widest text-xs font-bold rounded-lg relative transition-colors duration-300 z-10 ${
                activeTab === 'male' ? 'text-[#EBEBEB]' : 'text-[#A1A1AA]'
              }`}
            >
              Roster Masculin
              {activeTab === 'male' && (
                <motion.div
                  layoutId="activeTeamTab"
                  className="absolute inset-0 bg-[#EE1C25] rounded-lg -z-10 shadow-[0_4px_12px_rgba(238,28,37,0.3)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('female')}
              className={`flex-1 py-3 text-center font-gaming uppercase tracking-widest text-xs font-bold rounded-lg relative transition-colors duration-300 z-10 ${
                activeTab === 'female' ? 'text-[#EBEBEB]' : 'text-[#A1A1AA]'
              }`}
            >
              Roster Féminin
              {activeTab === 'female' && (
                <motion.div
                  layoutId="activeTeamTab"
                  className="absolute inset-0 bg-[#0E3BF0]/80 rounded-lg -z-10 shadow-[0_4px_12px_rgba(14,59,240,0.3)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* GRILLE DES JOUEURS ANIMÉE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}