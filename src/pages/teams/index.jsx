import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Crown, Users, Target, Shield } from 'lucide-react';

// Imports de tes données et composants
import { clanPlayers } from '../../data/players';
import PlayerCard from '../../components/modules/teams/PlayerCard';
import PlayerDetailCard from '../../components/ui/PlayerDetailCard';

export default function TeamsPage() {
  const [activeDivision, setActiveDivision] = useState('T1');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const playersList = clanPlayers || [];
  const divisionPlayers = playersList.filter(player => player && player.division === activeDivision);
  const titulaires = divisionPlayers.filter(p => p.type === 'titulaire');
  const remplacants = divisionPlayers.filter(p => p.type === 'remplacant');

  const divisions = [
    { id: 'T1', label: 'Élite Alpha' },
    { id: 'T2', label: 'Challengers' },
    { id: 'T3', label: 'Espoirs' },
    { id: 'T4', label: 'Académie' },
  ];

  return (
    <div className="min-h-screen bg-[#080B10] text-[#EBEBEB] px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* CARTE DE PRÉSENTATION GÉANTE DE L'ÉQUIPE (HERO BANNER)                    */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-3xl bg-[#1A1D24]/20 border border-[#1A1D24]/40 p-6 md:p-10 overflow-hidden mb-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
          
          {/* Arrière-plan stylisé avec reflets et grille e-sport */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EE1C25]/10 via-transparent to-[#0E3BF0]/5 opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EE1C25]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* TEXTES ET INFOS (NOM, SEXE, RÔLE, ARME) */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE1C25]/10 border border-[#EE1C25]/20 text-xs font-gaming uppercase tracking-widest text-[#EE1C25]">
                <Swords className="w-3.5 h-3.5" /> Division Officielle
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black font-gaming uppercase tracking-tight leading-none text-[#EBEBEB]">
                Rosters <span className="text-[#EE1C25]">Zoldyck</span>
              </h1>
              
              <p className="text-sm md:text-base text-[#A1A1AA] max-w-xl font-body leading-relaxed">
                Découvrez l'élite compétitive du clan. Une hiérarchie stricte divisée en 4 catégories où chaque membre combat pour maintenir le win-rate au sommet de la scène CODM.
              </p>

              {/* Ligne d'infos contextuelles (Sexe global, Rôle dominant, Arme favorite du clan) */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-xs font-gaming uppercase tracking-wider text-[#A1A1AA]">
                <span className="px-3 py-1.5 bg-[#080B10]/60 border border-[#1A1D24] rounded-lg">
                  Format : <strong className="text-[#0E3BF0]">Mixte (M/F)</strong>
                </span>
                <span className="px-3 py-1.5 bg-[#080B10]/60 border border-[#1A1D24] rounded-lg">
                  Style : <strong className="text-[#EE1C25]">Hyper-Agressif</strong>
                </span>
                <span className="px-3 py-1.5 bg-[#080B10]/60 border border-[#1A1D24] rounded-lg">
                  Meta : <strong className="text-[#FFD700]">SMG / AR</strong>
                </span>
              </div>
            </div>

            {/* EN-TÊTE DROITE : PHOTO DE PROFIL DU CLAN / LOGO ET LE RANG GLOBALE */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
              
              {/* PHOTO DE PROFIL / LOGO DU CLAN (Placée juste au-dessus du Rang) */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl p-[3px] bg-gradient-to-b from-[#1A1D24] to-[#080B10] group-hover:from-[#EE1C25] group-hover:to-[#0E3BF0] transition-all duration-500 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-[#080B10] flex items-center justify-center border border-[#080B10]">
                  <img 
                    src="/logo.jpg" 
                    alt="Zoldyck Logo" 
                    className="w-[85%] h-[85%] object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* BLOC DE RANG GLOBAL & RATIO DE L'ÉQUIPE */}
              <div className="w-full max-w-xs grid grid-cols-2 gap-3 bg-[#080B10]/80 backdrop-blur-md border border-[#1A1D24] p-4 rounded-2xl text-center shadow-lg">
                <div className="flex flex-col justify-center items-center">
                  <Shield className="w-4 h-4 text-[#FFD700] mb-1" />
                  <p className="text-[9px] uppercase font-gaming text-[#A1A1AA] tracking-wider">Rang Global</p>
                  <p className="text-sm font-black text-[#FFD700] uppercase tracking-wide mt-0.5">Légendaire</p>
                </div>
                <div className="flex flex-col justify-center items-center border-l border-[#1A1D24]/60">
                  <Target className="w-4 h-4 text-[#EE1C25] mb-1" />
                  <p className="text-[9px] uppercase font-gaming text-[#A1A1AA] tracking-wider">K/D Moyen</p>
                  <p className="text-base font-black text-[#EE1C25] mt-0.5">2.45</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SÉLECTEUR DE DIVISION ET LISTING DES JOUEURS                             */}
        {/* ========================================================================= */}
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
                  <span className={`text-[9px] tracking-wider hidden sm:block ${isSelected ? 'text-[#080B10]/80' : 'text-[#A1A1AA]/70'}`}>
                    {div.label}
                  </span>
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

        {/* LISTINGS DES JOUEURS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDivision}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-16"
          >
            {/* Section Titulaires */}
            <div>
              <div className="flex items-center gap-3 mb-8 border-l-4 border-[#EE1C25] pl-4">
                <Crown className="w-5 h-5 text-[#FFD700]" />
                <h2 className="text-xl md:text-2xl font-black font-gaming uppercase tracking-wider">
                  Les Cinq Titulaires <span className="text-xs text-[#A1A1AA] font-normal font-body ml-2">({titulaires.length}/5)</span>
                </h2>
              </div>
              
              {titulaires.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {titulaires.map((player) => (
                    <div key={player.id} onClick={() => setSelectedPlayer(player)} className="cursor-pointer">
                      <PlayerCard player={player} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#A1A1AA] italic">Aucun joueur titulaire dans cette division.</p>
              )}
            </div>

            {/* Section Remplaçants */}
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
                    <div key={player.id} onClick={() => setSelectedPlayer(player)} className="cursor-pointer">
                      <PlayerCard player={player} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#A1A1AA] italic">Aucun remplaçant sur le banc.</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* OVERLAY DE DÉTAILS */}
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