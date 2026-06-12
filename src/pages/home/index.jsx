// import React from 'react';
// import { motion } from 'framer-motion';
// import { Target, Users, ShoppingCart, Zap, BellDot, CalendarDays, Sword, Mic, Award, ChevronsDown } from 'lucide-react';
// import Button from '../../components/ui/Button';

// // --- Animation Variants ---
// const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.15
//         }
//     }
// };

// const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// };

// const glassMorphEffect = "backdrop-blur-xl bg-[#1A1D24]/60 border border-[#1A1D24]/30";

// // --- Mock Data ---
// const features = [
//     { icon: <Target className="w-8 h-8 text-[#EE1C25]" />, title: 'Structure e-Sport', desc: 'Gestion professionnelle de nos teams.' },
//     { icon: <Users className="w-8 h-8 text-[#0E3BF0]" />, title: 'Communauté Active', desc: 'Soutien et entraînements réguliers.' },
//     { icon: <ShoppingCart className="w-8 h-8 text-[#FFD700]" />, title: 'Shop Officiel CP', desc: 'Achats sécurisés de CP et passes de combat.' },
//     { icon: <Zap className="w-8 h-8 text-white" />, title: 'Vibe & Fun', desc: 'Le plaisir du jeu avant tout !' },
// ];

// const announcements = [
//     { icon: <Award className="text-[#FFD700]" />, title: "Qualification CL Championnat Régional", type: "Compétition", date: "Dans 2 jours" },
//     { icon: <Mic className="text-[#0E3BF0]" />, title: "Briefing Général - Stratégie S5", type: "Réunion", date: "Ce soir 21h" },
// ];

// export default function HomePage() {
//     return (
//         <motion.div
//             initial="hidden"
//             animate="show"
//             variants={staggerContainer}
//             className="min-h-screen bg-[#080B10] text-[#EBEBEB] font-body overflow-hidden"
//         >
//             {/* --- HERO SECTION --- */}
//             <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
//                 <div className="absolute inset-0 z-0 overflow-hidden">
//                     <img 
//                         src="/image.jpeg" 
//                         alt="Background Gaming"
//                         className="w-full h-full object-cover opacity-10 filter blur-[1px]"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-b from-[#080B10] via-[#080B10]/70 to-[#080B10]"></div>
//                 </div>

//                 <motion.div variants={fadeInUp} className="relative z-10 max-w-4xl">
//                     <motion.img 
//                         src="/logo.jpg" 
//                         alt="Zoldyck Family Logo" 
//                         className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 drop-shadow-lg"
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.17, 0.67, 0.83, 0.67] } }}
//                     />
//                     <span className={`inline-block px-4 py-1.5 rounded-full ${glassMorphEffect} text-sm font-semibold uppercase tracking-widest text-[#EE1C25] mb-6`}>
//                         <Zap className="inline w-4 h-4 mr-2" /> Clan Officiel CODM
//                     </span>
//                     <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight mb-8">
//                         Rejoins la <span className="text-[#EE1C25]">Zoldyck</span> <br/> Family
//                     </h1>
//                     <p className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto">
//                         Mets ton talent en lumière et propulse ta vibe au niveau supérieur. L'élite locale n'attend que toi.
//                     </p>
                    
//                     {/* CORRECTION DES VARIANTES DES BOUTONS */}
//                     <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//                         <Button variant="[#EE1C25]" size="lg" className="flex items-center gap-3">
//                             <Users className="w-5 h-5"/> Postuler
//                         </Button>
//                         <Button variant="[#0E3BF0]" size="lg" className="flex items-center gap-3">
//                             <Sword className="w-5 h-5"/> Voir les Teams
//                         </Button>
//                     </div>
//                 </motion.div>

//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
//                     className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#A1A1AA] flex flex-col items-center gap-2"
//                 >
//                     <span className="text-sm font-semibold uppercase tracking-wider">Scroll</span>
//                     <ChevronsDown className="w-6 h-6 animate-bounce" />
//                 </motion.div>
//             </section>

//             {/* --- FEATURES SECTION --- */}
//             <section className={`relative z-10 py-24 md:py-32 ${glassMorphEffect} border-t-0`}>
//                 <div className="max-w-7xl mx-auto px-6 md:px-12">
//                     <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16 text-center">
//                         L'environnement pour ton <span className="text-[#0E3BF0]">Succès</span>
//                     </motion.h2>

//                     <motion.div 
//                         variants={staggerContainer}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.2 }}
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//                     >
//                         {features.map((feature, i) => (
//                             <motion.div 
//                                 key={i}
//                                 variants={fadeInUp}
//                                 whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//                                 className={`p-8 rounded-2xl ${glassMorphEffect} hover:border-[#EE1C25]/50 transition-colors duration-300 flex flex-col items-center text-center gap-6 group`}
//                             >
//                                 <div className="p-4 rounded-full bg-[#080B10] border-2 border-[#1A1D24] group-hover:border-[#EE1C25]/50 group-hover:bg-[#EE1C25]/10 transition-colors duration-300">
//                                     {feature.icon}
//                                 </div>
//                                 <h3 className="text-2xl font-bold uppercase tracking-wide text-[#EBEBEB]">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-[#A1A1AA] text-base">
//                                     {feature.desc}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>

//             {/* --- ANNOUNCEMENTS MODULE PREVIEW --- */}
//             <section className="relative z-10 py-24 md:py-32">
//                 <div className="max-w-7xl mx-auto px-6 md:px-12">
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
//                         <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight flex items-center gap-4">
//                             <BellDot className="w-8 h-8 md:w-12 md:h-12 text-[#FFD700]" /> Briefings Récents
//                         </motion.h2>
                        
//                         {/* CORRECTION DE LA VARIANTE DU BOUTON */}
//                         <Button variant="accent" size="sm" className="flex items-center gap-2">
//                              Voir tout <CalendarDays className="w-4 h-4"/>
//                         </Button>
//                     </div>

//                     <motion.div 
//                         variants={staggerContainer}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.2 }}
//                         className="space-y-6"
//                     >
//                         {announcements.map((ann, i) => (
//                             <motion.a 
//                                 href="/announcements" 
//                                 key={i}
//                                 variants={fadeInUp}
//                                 whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
//                                 className={`block p-6 md:p-8 rounded-xl ${glassMorphEffect} hover:border-[#FFD700]/50 transition duration-300 flex items-center justify-between gap-6`}
//                             >
//                                 <div className="flex items-center gap-5">
//                                     <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20">
//                                         {React.cloneElement(ann.icon, { className: 'w-7 h-7' })}
//                                     </div>
//                                     <div>
//                                         <h3 className="text-xl md:text-2xl font-bold text-[#EBEBEB]">{ann.title}</h3>
//                                         <p className="text-[#A1A1AA] text-sm mt-1">{ann.date}</p>
//                                     </div>
//                                 </div>
//                                 <span className={`hidden sm:inline-block px-3 py-1 rounded font-semibold uppercase text-xs tracking-wider ${ann.type === 'Compétition' ? 'bg-[#EE1C25]/20 text-[#EE1C25]' : 'bg-[#0E3BF0]/20 text-[#0E3BF0]'}`}>
//                                     {ann.type}
//                                 </span>
//                                 <ChevronsDown className="w-6 h-6 text-[#A1A1AA] rotate-[-90deg]"/>
//                             </motion.a>
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>
//         </motion.div>
//     );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShoppingCart, Zap, BellDot, CalendarDays, Sword, Mic, Award, ChevronsDown } from 'lucide-react';
// import Button from '../components/ui/Button'; // Assuming you created the button component from previous step

import Button from '../../components/ui/Button'; // Adjust the path as necessary


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
                                <span className={`hidden sm:inline-block px-3 py-1 rounded font-semibold uppercase text-xs tracking-wider ${ann.type === 'Compétition' ? 'bg-[#EE1C25]/20 text-[#EE1C25]' : 'bg-[#0E3BF0]/20 text-[#0E3BF0]'}`}>
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