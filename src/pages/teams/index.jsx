import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Crown, Users, Target } from 'lucide-react';
import PlayerCard from '../../components/modules/teams/PlayerCard';

const glassContainer = "backdrop-blur-xl bg-[#1A1D24]/20 border border-[#1A1D24]/20";

// --- NOUVELLES DONNÉES HIÉRARCHISÉES ---
const mockPlayers = [
  // ==================== DIVISION T1 (L'ÉLITE) ====================
  // 5 Titulaires
  { id: 1, pseudo: "Killua", role: "Slayer", favoriteWeapon: "Kilo 141", kd: "2.45", rank: "Légendaire", isCaptain: true, gender: "male", division: "T1", type: "titulaire" },
  { id: 2, pseudo: "Alluka", role: "Slayer", favoriteWeapon: "Fennec", kd: "2.60", rank: "Légendaire", isCaptain: false, gender: "female", division: "T1", type: "titulaire" },
  { id: 3, pseudo: "Kurapika", role: "Anchor", favoriteWeapon: "LK24", kd: "2.10", rank: "Légendaire", isCaptain: false, gender: "male", division: "T1", type: "titulaire" },
  { id: 4, pseudo: "Bisky", role: "Objective", favoriteWeapon: "HVK-30", kd: "2.15", rank: "Légendaire", isCaptain: false, gender: "female", division: "T1", type: "titulaire" },
  { id: 5, pseudo: "Hisoka", role: "Sniper", favoriteWeapon: "DL Q33", kd: "2.35", rank: "Légendaire", isCaptain: false, gender: "male", division: "T1", type: "titulaire" },
  // 7 Remplaçants
  { id: 6, pseudo: "Gon", role: "Objective", favoriteWeapon: "CBR4", kd: "1.95", rank: "Légendaire", isCaptain: false, gender: "male", division: "T1", type: "remplacant" },
  { id: 7, pseudo: "Machi", role: "Anchor", favoriteWeapon: "Grau 5.56", kd: "1.98", rank: "Grand Maître V", isCaptain: false, gender: "female", division: "T1", type: "remplacant" },
  { id: 8, pseudo: "Pakunoda", role: "Sniper", favoriteWeapon: "LW3-Tundra", kd: "2.05", rank: "Légendaire", isCaptain: false, gender: "female", division: "T1", type: "remplacant" },
  { id: 9, pseudo: "Illumi", role: "Slayer", favoriteWeapon: "Type 19", kd: "2.12", rank: "Grand Maître IV", isCaptain: false, gender: "male", division: "T1", type: "remplacant" },
  { id: 10, pseudo: "Chrollo", role: "Anchor", favoriteWeapon: "KN-44", kd: "2.20", rank: "Légendaire", isCaptain: false, gender: "male", division: "T1", type: "remplacant" },
  { id: 11, pseudo: "Feitan", role: "Slayer", favoriteWeapon: "CX9", kd: "2.01", rank: "Grand Maître III", isCaptain: false, gender: "male", division: "T1", type: "remplacant" },
  { id: 12, pseudo: "Shizuku", role: "Objective", favoriteWeapon: "PDW-57", kd: "1.89", rank: "Grand Maître V", isCaptain: false, gender: "female", division: "T1", type: "remplacant" },

  // ==================== EXEMPLE DIVISION T2 ====================
  { id: 13, pseudo: "Leorio", role: "Sniper", favoriteWeapon: "Locust", kd: "1.80", rank: "Grand Maître IV", isCaptain: true, division: "T2", type: "titulaire" },
  { id: 14, pseudo: "Knuckle", role: "Slayer", favoriteWeapon: "AK117", kd: "1.75", rank: "Grand Maître III", isCaptain: false, division: "T2", type: "titulaire" },
  // ... Ajoute le reste des joueurs T2, T3, T4 sur le même modèle
];

export default function TeamsPage() {
  const [activeDivision, setActiveDivision] = useState('T1');

  // Filtrer les joueurs par Division
  const divisionPlayers = mockPlayers.filter(player => player.division === activeDivision);

  // Séparer les titulaires des remplaçants au sein de cette division
  const titulaires = divisionPlayers.filter(p => p.type === 'titulaire');
  const remplacants = divisionPlayers.filter(p => p.type === 'remplacant');

  const divisions = [
    { id: 'T1', name: 'Division T1', label: 'Élite Alpha' },
    { id: 'T2', name: 'Division T2', label: 'Challengers' },
    { id: 'T3', name: 'Division T3', label: 'Espoirs' },
    { id: 'T4', name: 'Division T4', label: 'Académie' },
  ];

  return (
    <div className="min-h-screen bg-[#080B10] text-[#EBEBEB] px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EN-TÊTE DE LA PAGE --- */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE1C25]/10 border border-[#EE1C25]/20 text-xs font-gaming uppercase tracking-widest text-[#EE1C25] mb-4">
            <Swords className="w-3.5 h-3.5" /> Hiérarchie Compétitive
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-gaming uppercase tracking-tight">
            Rosters <span className="text-[#EE1C25]">Zoldyck</span>
          </h1>
          <p className="text-[#A1A1AA] text-xs md:text-sm mt-4 uppercase tracking-wider">
            Structure : 4 Divisions • 12 Joueurs par équipe (5 Titulaires / 7 Remplaçants)
          </p>
        </div>

        {/* --- SELECTEUR DE DIVISION (T1 à T4) --- */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-none">
  <div className="flex p-1.5 rounded-xl bg-[#1A1D24]/80 border border-[#1A1D24]/40 relative z-10 w-full max-w-2xl min-w-[340px]">
    {divisions.map((div) => {
      const isSelected = activeDivision === div.id;

      return (
        <button
          key={div.id}
          onClick={() => setActiveDivision(div.id)}
          className={`flex-1 py-3 text-center font-gaming uppercase transition-colors duration-300 z-10 rounded-lg flex flex-col items-center justify-center relative ${
            isSelected 
              ? 'text-[#080B10] font-black' // Devient noir sur fond rouge -> Lisibilité parfaite !
              : 'text-[#A1A1AA] hover:text-[#EBEBEB]' // Reste gris/blanc si non-sélectionné
          }`}
        >
          {/* Nom de la division (T1, T2...) */}
          <span className="text-sm tracking-widest">{div.id}</span>
          
          {/* Label de la division (Élite, Académie...) */}
          <span className={`text-[9px] tracking-wider hidden sm:block ${
            isSelected ? 'text-[#080B10]/80' : 'text-[#A1A1AA]/70'
          }`}>
            {div.label}
          </span>
          
          {/* Fond rouge animé de l'onglet actif */}
          {isSelected && (
            <motion.div
              layoutId="activeDivisionTab"
              className="absolute inset-0 bg-[#EE1C25] rounded-lg -z-10 shadow-[0_0_15px_rgba(238,28,37,0.4)]"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      );
    })}
  </div>
</div>

        {/* --- CONTENU DE LA DIVISION SÉLECTIONNÉE --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDivision}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-16"
          >
            {/* 1. SECTION TITULAIRES (5 Joueurs) */}
            <div>
              <div className="flex items-center gap-3 mb-8 border-l-4 border-[#EE1C25] pl-4">
                <Crown className="w-5 h-5 text-[#FFD700] animate-pulse" />
                <h2 className="text-xl md:text-2xl font-black font-gaming uppercase tracking-wider">
                  Les Cinq Titulaires <span className="text-xs text-[#A1A1AA] font-normal font-body ml-2">({titulaires.length}/5)</span>
                </h2>
              </div>
              
              {titulaires.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {titulaires.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#A1A1AA] italic">Aucun titulaire enregistré dans cette division pour le moment.</p>
              )}
            </div>

            {/* 2. SECTION REMPLAÇANTS (7 Joueurs) */}
            <div>
              <div className="flex items-center gap-3 mb-8 border-l-4 border-[#0E3BF0] pl-4">
                <Users className="w-5 h-5 text-[#0E3BF0]" />
                <h2 className="text-xl md:text-2xl font-black font-gaming uppercase tracking-wider">
                  Banc / Remplaçants <span className="text-xs text-[#A1A1AA] font-normal font-body ml-2">({remplacants.length}/7)</span>
                </h2>
              </div>

              {remplacants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {remplacants.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#A1A1AA] italic">Aucun remplaçant sur le banc pour cette division.</p>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}