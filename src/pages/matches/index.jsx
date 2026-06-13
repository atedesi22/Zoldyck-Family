

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Tv, Calendar, CheckCircle2, Play, Trophy, Clock, X, AlertTriangle } from 'lucide-react';

// Données fictives des clips avec de vraies structures de liens vidéo (exemples de streams ou fichiers)
const explorerClips = [
  {
    id: 1,
    title: "Grand Finale vs Alpha Esports - Le Clutch de la victoire",
    type: "Officiel",
    category: "Tournoi Africa",
    duration: "04:15",
    mvp: "SlayerX",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // URL de test vidéo
    views: "1.2k views"
  },
  {
    id: 2,
    title: "Scrim Interne T1 vs T2 - Analyse tactique Hardpoint",
    type: "Entraînement",
    category: "Scrim",
    duration: "12:40",
    mvp: "Coach_Z",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    views: "450 views"
  },
  {
    id: 3,
    title: "Highlights Sniping - Raid & Standoff S&D",
    type: "Officiel",
    category: "Cup Francophone",
    duration: "03:10",
    mvp: "SniperPro",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    views: "2.8k views"
  }
];

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState('results');
  const [activeVideo, setActiveVideo] = useState(null); // Gère le clip actuellement ouvert
  const [videoError, setVideoError] = useState(false);  // Gère les erreurs de chargement vidéo

  const handleOpenVideo = (clip) => {
    setVideoError(false);
    setActiveVideo(clip);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-[#EBEBEB] px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ========================================== */}
        {/* EN-TÊTE ET ONGLETS DE MATCHS               */}
        {/* ========================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#1A1D24]/60 pb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE1C25]/10 border border-[#EE1C25]/20 text-xs font-gaming uppercase tracking-widest text-[#EE1C25] mb-4">
              <Swords className="w-3.5 h-3.5" /> Calendrier des combats
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-gaming uppercase tracking-tight">
              Matchs & <span className="text-[#EE1C25]">Tournois</span>
            </h1>
          </div>

          <div className="flex p-1 bg-[#1A1D24]/60 border border-[#1A1D24]/40 rounded-xl relative z-10 w-full lg:w-auto min-w-[320px]">
            {[
              { id: 'live', label: 'En Direct', icon: <Tv className="w-3.5 h-3.5" /> },
              { id: 'upcoming', label: 'À Venir', icon: <Calendar className="w-3.5 h-3.5" /> },
              { id: 'results', label: 'Résultats', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 lg:flex-none px-6 py-2.5 rounded-lg font-gaming text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors relative ${
                    isSelected ? 'text-[#080B10] font-black' : 'text-[#A1A1AA] hover:text-[#EBEBEB]'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {isSelected && (
                    <motion.div
                      layoutId="activeMatchTab"
                      className="absolute inset-0 bg-[#EE1C25] rounded-lg -z-10 shadow-[0_0_15px_rgba(238,28,37,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ONGLETS CONTENU */}
        <div className="min-h-[140px]">
          {activeTab === 'results' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1D24]/20 border border-[#1A1D24]/60 rounded-2xl p-6 flex flex-col justify-between group hover:border-[#EE1C25]/30 transition-colors">
                <div className="flex justify-between items-center text-xs font-gaming uppercase tracking-wider text-[#A1A1AA] mb-4">
                  <span>CODM Africa Pro League</span>
                  <span className="text-[#EE1C25] font-bold">Victoire</span>
                </div>
                <div className="flex items-center justify-between my-2 text-center">
                  <div className="flex-1 flex flex-col items-center">
                    <img src="/logo.jpg" className="w-14 h-14 object-contain mb-2" alt="Zoldyck" onError={(e)=>{e.target.src="https://via.placeholder.com/50"}} />
                    <span className="font-gaming uppercase text-sm font-black text-[#EBEBEB]">Zoldyck</span>
                  </div>
                  <div className="px-4 py-2 bg-[#080B10] border border-[#1A1D24] rounded-xl font-gaming text-2xl font-black text-[#EBEBEB]">3 - 1</div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-14 h-14 bg-[#1A1D24] rounded-full flex items-center justify-center mb-2 font-gaming font-bold text-xs text-[#A1A1AA]">OPP</div>
                    <span className="font-gaming uppercase text-sm font-black text-[#A1A1AA]">Opponent</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'live' && (
            <div className="text-center py-12 border border-dashed border-[#1A1D24] rounded-2xl bg-[#1A1D24]/10">
              <p className="text-sm font-gaming text-[#A1A1AA] uppercase tracking-widest">Aucun match en direct pour le moment.</p>
            </div>
          )}
          {activeTab === 'upcoming' && (
            <div className="text-center py-12 border border-dashed border-[#1A1D24] rounded-2xl bg-[#1A1D24]/10">
              <p className="text-sm font-gaming text-[#A1A1AA] uppercase tracking-widest">Prochain match en cours de planification.</p>
            </div>
          )}
        </div>

        {/* ========================================== */}
        {/* SECTION : L'EXPLORER (REPLAYS)            */}
        {/* ========================================== */}
        <div className="space-y-8 pt-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E3BF0]/10 border border-[#0E3BF0]/20 text-xs font-gaming uppercase tracking-widest text-[#0E3BF0] mb-3">
              <Play className="w-3 h-3" /> Explorer le Hub Média
            </span>
            <h2 className="text-2xl md:text-4xl font-black font-gaming uppercase tracking-tight text-[#EBEBEB]">
              Résumés & <span className="text-[#0E3BF0]">Highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {explorerClips.map((clip) => {
              const isOfficial = clip.type === "Officiel";
              return (
                <div 
                  key={clip.id}
                  onClick={() => handleOpenVideo(clip)}
                  className="group bg-[#1A1D24]/20 border border-[#1A1D24]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#0E3BF0]/40 shadow-lg cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#080B10]">
                    <img 
                      src={clip.thumbnail} 
                      alt={clip.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    />
                    <span className={`absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-gaming uppercase tracking-widest font-black ${
                      isOfficial ? 'bg-[#EE1C25] text-[#080B10]' : 'bg-[#0E3BF0] text-[#EBEBEB]'
                    }`}>
                      {clip.type}
                    </span>
                    <span className="absolute bottom-3 right-3 flex items-center gap-1 px-1.5 py-0.5 bg-[#080B10]/80 border border-[#1A1D24] text-[10px] font-gaming text-[#EBEBEB] rounded">
                      <Clock className="w-3 h-3 text-[#A1A1AA]" /> {clip.duration}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 bg-[#080B10]/90 border border-[#1A1D24] rounded-full text-[#EBEBEB] group-hover:text-[#0E3BF0] shadow-xl group-hover:scale-110 transform transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-gaming text-[#A1A1AA] uppercase tracking-wider block mb-1">{clip.category}</span>
                      <h3 className="font-gaming font-bold text-sm text-[#EBEBEB] uppercase tracking-wide leading-snug group-hover:text-[#0E3BF0] transition-colors line-clamp-2">
                        {clip.title}
                      </h3>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-[#1A1D24]/40 text-[10px] font-gaming uppercase text-[#A1A1AA]">
                      <div className="flex items-center gap-1.5">
                        <Trophy className="w-3 h-3 text-[#FFD700]" />
                        <span>MVP : <strong className="text-[#EBEBEB]">{clip.mvp}</strong></span>
                      </div>
                      <span>{clip.views}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================== */}
        {/* MODAL VIDÉO DE L'EXPLORER (POP-UP)         */}
        {/* ========================================== */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#080B10]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
            >
              {/* Bouton pour fermer la vidéo (en haut à droite) */}
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-[#1A1D24] border border-[#1A1D24] text-[#A1A1AA] hover:text-[#EE1C25] transition-colors z-50 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Conteneur du Lecteur Vidéo */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="relative w-full max-w-4xl bg-[#1A1D24]/30 border border-[#1A1D24]/60 rounded-3xl p-1 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              >
                <div className="bg-[#080B10]/95 rounded-[22px] p-4 md:p-6 space-y-4">
                  
                  {/* Zone d'affichage vidéo responsive 16:9 */}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#1A1D24]">
                    {!videoError ? (
                      <video
                        src={activeVideo.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                        onError={() => setVideoError(true)} // Sécurité si le lien est mort ou non lisible
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#1A1D24]/20">
                        <AlertTriangle className="w-12 h-12 text-[#EE1C25] mb-2" />
                        <p className="font-gaming text-sm uppercase text-[#EBEBEB] tracking-wide">Échec du décodage du flux</p>
                        <p className="text-xs text-[#A1A1AA] mt-1 max-w-xs">Le fichier vidéo n'est pas accessible ou le format n'est pas pris en charge par votre navigateur.</p>
                      </div>
                    )}
                  </div>

                  {/* Informations sur le clip affiché */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pt-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-gaming uppercase tracking-widest text-[#0E3BF0]">
                        <span>{activeVideo.category}</span>
                        <span>•</span>
                        <span className="text-[#A1A1AA]">{activeVideo.type}</span>
                      </div>
                      <h2 className="text-lg md:text-xl font-black font-gaming uppercase tracking-wide text-[#EBEBEB]">
                        {activeVideo.title}
                      </h2>
                    </div>

                    {/* Badge MVP dédié */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1D24]/60 border border-[#1A1D24] rounded-xl self-start sm:self-center">
                      <Trophy className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-xs font-gaming text-[#A1A1AA] uppercase tracking-wider">
                        Action de : <strong className="text-[#EBEBEB]">{activeVideo.mvp}</strong>
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}