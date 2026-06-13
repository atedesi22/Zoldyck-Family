

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShoppingCart, Zap, Medal, Star, BellDot, CalendarDays, Sword, Mic, Award, ChevronsDown, Trophy, Swords } from 'lucide-react';
// import Button from '../components/ui/Button'; // Assuming you created the button component from previous step

import Button from '../../components/ui/Button'; // Adjust the path as necessary

// Données fictives mais prestigieuses des accomplissements du clan
const achievements = [
  {
    id: 1,
    title: "CODM Africa Championship",
    rank: "1er Place",
    date: "Saison 2025",
    description: "Victoire écrasante 4-1 en grande finale Point Stratégique contre la structure d'élite adverse.",
    type: "gold",
  },
  {
    id: 2,
    title: "Zoldyck Invitational Cup",
    rank: "1er Place",
    date: "Décembre 2025",
    description: "Tournoi communautaire regroupant les 16 meilleures équipes francophones en Recherche & Destruction.",
    type: "gold",
  },
  {
    id: 3,
    title: "Esport Pro League Tier 1",
    rank: "2e Place",
    date: "Automne 2025",
    description: "Une saison régulière intense conclue sur le podium après des play-offs mémorables.",
    type: "silver",
  },
  {
    id: 4,
    title: "Scrim League Elite Division",
    rank: "Top 4",
    date: "Janvier 2026",
    description: "Maintien historique au sommet du classement des clans les plus agressifs de la scène.",
    type: "bronze",
  },
];

// Statistiques globales du palmarès
const stats = [
  { label: "Titres Majeurs", value: "12", icon: <Trophy className="w-5 h-5 text-[#FFD700]" /> },
  { label: "Matchs Gagnés", value: "148", icon: <Target className="w-5 h-5 text-[#EE1C25]" /> },
  { label: "Podiums", value: "34", icon: <Medal className="w-5 h-5 text-[#0E3BF0]" /> },
  { label: "Win Rate", value: "82%", icon: <Star className="w-5 h-5 text-[#FFD700]" /> },
];

// --- Animation Variants ---
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const glassMorphEffect = "backdrop-blur-xl bg-[#1A1D24]/60 border border-[#1A1D24]/30";

// --- Mock Data ---
const features = [
    { icon: <Target className="w-8 h-8 text-[#EE1C25]" />, title: 'Structure e-Sport', desc: 'Gestion professionnelle de nos teams.' },
    { icon: <Users className="w-8 h-8 text-[#0E3BF0]" />, title: 'Communauté Active', desc: 'Soutien et entraînements réguliers.' },
    { icon: <ShoppingCart className="w-8 h-8 text-[#FFD700]" />, title: 'Shop Officiel CP', desc: 'Achats sécurisés de CP et passes de combat.' },
    { icon: <Zap className="w-8 h-8 text-white" />, title: 'Vibe & Fun', desc: 'Le plaisir du jeu avant tout !' },
];

const announcements = [
    { icon: <Award className="text-[#FFD700]" />, title: "Qualification CL Championnat Régional", type: "Compétition", date: "Dans 2 jours" },
    { icon: <Mic className="text-[#0E3BF0]" />, title: "Briefing Général - Stratégie S5", type: "Réunion", date: "Ce soir 21h" },
];

export default function HomePage() {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="min-h-screen bg-[#080B10] text-[#EBEBEB] font-body overflow-hidden"
        >
            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
                {/* Background Video/Image (Optional but recommended) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                        src="/image.jpeg" 
                        alt="Background Gaming"
                        className="w-full h-full object-cover opacity-10 filter blur-[1px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#080B10] via-[#080B10]/70 to-[#080B10]"></div>
                </div>

                <motion.div variants={fadeInUp} className="relative z-10 max-w-4xl">
                    <motion.img 
                        src="/logo.jpg" // Path to your actual logo
                        alt="Zoldyck Family Logo" 
                        className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.17, 0.67, 0.83, 0.67] } }}
                    />
                    <span className={`inline-block px-4 py-1.5 rounded-full ${glassMorphEffect} text-sm font-semibold uppercase tracking-widest text-[#EE1C25] mb-6`}>
                        <Zap className="inline w-4 h-4 mr-2" /> Clan Officiel CODM
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight mb-8">
                        Rejoins la <span className="text-[#EE1C25]">Zoldyck</span> <br/> Family
                    </h1>
                    <p className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto">
                        Mets ton talent en lumière et propulse ta vibe au niveau supérieur. L'élite locale n'attend que toi.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button variant="primary" size="lg" className="flex items-center gap-3">
                            <Users className="w-5 h-5"/> Postuler
                        </Button>
                        <Button variant="secondary" size="lg" className="flex items-center gap-3">
                            <Sword className="w-5 h-5"/> Voir les Teams
                        </Button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#A1A1AA] flex flex-col items-center gap-2"
                >
                    <span className="text-sm font-semibold uppercase tracking-wider">Scroll</span>
                    <ChevronsDown className="w-6 h-6 animate-bounce" />
                </motion.div>
            </section>

            {/* --- FEATURES SECTION --- */}
            <section className={`relative z-10 py-24 md:py-32 ${glassMorphEffect} border-t-0`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16 text-center">
                        L'environnement pour ton <span className="text-[#0E3BF0]">Succès</span>
                    </motion.h2>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, i) => (
                            <motion.div 
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                className={`p-8 rounded-2xl ${glassMorphEffect} hover:border-[#EE1C25]/50 transition-colors duration-300 flex flex-col items-center text-center gap-6 group`}
                            >
                                <div className="p-4 rounded-full bg-[#080B10] border-2 border-[#1A1D24] group-hover:border-[#EE1C25]/50 group-hover:bg-[#EE1C25]/10 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-wide text-[#EBEBEB]">
                                    {feature.title}
                                </h3>
                                <p className="text-[#A1A1AA] text-base">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-[#080B10] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Effet de lueur rouge en arrière-plan */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#EE1C25]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* EN-TÊTE DE LA SECTION */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE1C25]/10 border border-[#EE1C25]/20 text-xs font-gaming uppercase tracking-widest text-[#EE1C25] mb-4">
                    <Trophy className="w-3.5 h-3.5" /> Cabinet des Trophées
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black font-gaming uppercase tracking-tight text-[#EBEBEB]">
                    Notre <span className="text-[#EE1C25]">Palmarès</span>
                    </h2>
                </div>
                <p className="text-[#A1A1AA] text-sm md:text-base max-w-md md:text-right">
                    L'histoire s'écrit sur le champ de bataille. Voici les ligues et compétitions où la famille Zoldyck a imposé sa suprématie.
                </p>
                </div>

                {/* COMPTEURS / STATISTIQUES EN GRILLE */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                {stats.map((stat, idx) => (
                    <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="backdrop-blur-xl bg-[#1A1D24]/30 border border-[#1A1D24]/40 p-6 rounded-2xl flex items-center gap-4 group hover:border-[#EE1C25]/40 transition-colors duration-300"
                    >
                    <div className="p-3 bg-[#080B10] border border-[#1A1D24] rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-gaming uppercase text-[#A1A1AA] tracking-wider">{stat.label}</p>
                        <p className="text-2xl md:text-3xl font-black font-gaming text-[#EBEBEB] mt-0.5">{stat.value}</p>
                    </div>
                    </motion.div>
                ))}
                </div>

                {/* LISTING DES HAUTS FAITS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((item, idx) => {
                    // Définition des lueurs de bordure en fonction de la couleur du trophée
                    const glowClass = 
                    item.type === 'gold' ? 'group-hover:border-[#FFD700]/50 shadow-[0_0_20px_rgba(255,215,0,0.02)]' :
                    item.type === 'silver' ? 'group-hover:border-[#0E3BF0]/50 shadow-[0_0_20px_rgba(14,59,240,0.02)]' :
                    'group-hover:border-[#EE1C25]/50 shadow-[0_0_20px_rgba(238,28,37,0.02)]';

                    const iconColor =
                    item.type === 'gold' ? 'text-[#FFD700]' :
                    item.type === 'silver' ? 'text-[#A1A1AA]' :
                    'text-[#CD7F32]';

                    return (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className={`backdrop-blur-md bg-[#1A1D24]/10 border border-[#1A1D24]/30 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 relative group transition-all duration-300 ${glowClass}`}
                    >
                        {/* Icône Trophée responsive à gauche */}
                        <div className="flex sm:flex-col items-center justify-center">
                        <div className="p-4 bg-[#080B10]/80 border border-[#1A1D24] rounded-2xl relative">
                            <Trophy className={`w-8 h-8 ${iconColor}`} />
                            {/* Petite lueur derrière l'icône */}
                            <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 rounded-2xl" />
                        </div>
                        </div>

                        {/* Corps de texte de l'accomplissement */}
                        <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-xl font-black font-gaming uppercase tracking-wide text-[#EBEBEB] group-hover:text-[#EE1C25] transition-colors">
                                {item.title}
                            </h3>
                            <span className="text-xs font-gaming font-bold text-[#EE1C25] bg-[#EE1C25]/10 border border-[#EE1C25]/20 px-2 py-0.5 rounded uppercase tracking-widest">
                                {item.date}
                            </span>
                            </div>
                            <p className="text-sm font-gaming uppercase tracking-wider text-[#FFD700] mb-3 flex items-center gap-1.5">
                            <Swords className="w-3.5 h-3.5" /> {item.rank}
                            </p>
                            <p className="text-sm text-[#A1A1AA] leading-relaxed">
                            {item.description}
                            </p>
                        </div>
                        </div>

                    </motion.div>
                    );
                })}
                </div>

            </div>
            </section>

            {/* --- ANNOUNCEMENTS MODULE PREVIEW --- */}
            <section className="relative z-10 py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight flex items-center gap-4">
                            <BellDot className="w-8 h-8 md:w-12 md:h-12 text-[#FFD700]" /> Briefings Récents
                        </motion.h2>
                        <Button variant="[#FFD700]" size="sm" className="flex items-center gap-2">
                             Voir tout <CalendarDays className="w-4 h-4"/>
                        </Button>
                    </div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        {announcements.map((ann, i) => (
                            <motion.a 
                                href="/announcements" 
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
                                className={`block p-6 md:p-8 rounded-xl ${glassMorphEffect} hover:border-[#FFD700]/50 transition duration-300 flex items-center justify-between gap-6`}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20">
                                        {React.cloneElement(ann.icon, { className: 'w-7 h-7' })}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#EBEBEB]">{ann.title}</h3>
                                        <p className="text-[#A1A1AA] text-sm mt-1">{ann.date}</p>
                                    </div>
                                </div>
                                <span className={`sm:inline-block px-3 py-1 rounded font-semibold uppercase text-xs tracking-wider ${ann.type === 'Compétition' ? 'bg-[#EE1C25]/20 text-[#EE1C25]' : 'bg-[#0E3BF0]/20 text-[#0E3BF0]'}`}>
                                    {ann.type}
                                </span>
                                <ChevronsDown className="w-6 h-6 text-[#A1A1AA] rotate-[-90deg]"/>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}