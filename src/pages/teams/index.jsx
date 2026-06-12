import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Crown, Users } from 'lucide-react';

// Import de nos données centralisées et de nos composants
import { clanPlayers } from '../../data/players';
import PlayerCard from '../../components/modules/teams/PlayerCard';
import PlayerDetailCard from '../../components/ui/PlayerDetailCard';

export default function TeamsPage() {
  const [activeDivision, setActiveDivision] = useState('T1');
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Gère le joueur cliqué

  const divisionPlayers = clanPlayers.filter(player => player.division === activeDivision);
  const titulaires = divisionPlayers.filter(p => p.type === 'titulaire');
  const remplacants = divisionPlayers.filter(p => p.type === 'remplacant');

  const divisions = [
    { id: 'T1', name: 'Division T1', label: 'Élite Alpha' },
    { id: 'T2', name: 'Division T2', label: 'Challengers' },
    { id: 'T3', name: 'Division T3', label: 'Espoirs' },
    { id: 'T4', name: 'Division T4', label: 'Académie' },
  ];

  return (
    <div className="min-h-screen bg-[#080B10] text-[#EBEBEB] px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EN-TÊTE DE LA PAGE --- */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE1C25]/10 border border-[#EE1C25]/20 text-xs font-gaming uppercase tracking-widest text-[#EE1C25] mb-4">
            <Swords className="w-3.5 h-3.5" /> Hiérarchie Compétitive
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-gaming uppercase tracking-tight">
            Rosters <span className="text-[#EE1C25]">Zoldyck</span>
          </h1>
        </div>

        {/* --- SELECTEUR DE DIVISION --- */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex p-1.5 rounded-xl bg-[#1A1D24]/80 border border-[#1A1D24]/40 relative z-10 w-full max-w-2xl min-w-[340px]">
            {divisions.map((div) => {
              const isSelected = activeDivision === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivision(div.id)}
                  className={`flex-1 py-3 text-center font-gaming uppercase transition-colors duration-300 z-10 rounded-lg flex flex-col items-center justify-center relative ${
                    isSelected ? 'text-[#080B10] font-black' : 'text-[#A1A1AA] hover:text-[#EBEBEB]'
                  }`}
                >
                  <span className="text-sm tracking-widest">{div.id}</span>
                  <span className={`text-[9px] tracking-wider hidden sm:block ${isSelected ? 'text-[#080B10]/80' : 'text-[#A1A1AA]/70'}`}>{div.label}</span>
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

        {/* --- LISTINGS DES JOUEURS --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDivision}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-16"
          >
            {/* Titulaires */}
            <div>
              <div className="flex items-center gap-3 mb-8 border-l-4 border-[#EE1C25] pl-4">
                <Crown className="w-5 h-5 text-[#FFD700]" />
                <h2 className="text-xl md:text-2xl font-black font-gaming uppercase tracking-wider">Les Cinq Titulaires</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {titulaires.map((player) => (
                  <div key={player.id} onClick={() => setSelectedPlayer(player)} className="cursor-pointer">
                    <PlayerCard player={player} />
                  </div>
                ))}
              </div>
            </div>

            {/* Remplaçants */}
            <div>
              <div className="flex items-center gap-3 mb-8 border-l-4 border-[#0E3BF0] pl-4">
                <Users className="w-5 h-5 text-[#0E3BF0]" />
                <h2 className="text-xl md:text-2xl font-black font-gaming uppercase tracking-wider">Banc / Remplaçants</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {remplacants.map((player) => (
                  <div key={player.id} onClick={() => setSelectedPlayer(player)} className="cursor-pointer">
                    <PlayerCard player={player} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- OVERLAY DE DÉTAILS AVEC ANIMATION TILT 3D --- */}
        <AnimatePresence>
          {selectedPlayer && (
            <PlayerDetailCard 
              player={selectedPlayer} 
              onClose={() => setSelectedPlayer(null)} 
            />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}