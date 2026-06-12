import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Shield, Trophy, ShoppingBag, Bell, Menu, X, Users2 } from 'lucide-react';

// Import de tes composants de pages
// import HomePage from './pages/home/HomePage';
import HomePage from './pages/home';
import BottomNavbar from './components/layout/BottomNavbar';
import Navbar from './components/layout/Navbar';
// import TeamsPage from './pages/teams/TeamsPage'; // À importer quand tu les créeras
// import AnnouncementsPage from './pages/announcements/AnnouncementsPage';
// import ShopPage from './pages/shop/ShopPage';

const glassNavbar = "backdrop-blur-md bg-[#080B10]/70 border-b border-[#1A1D24]/40";
const glassFooter = "backdrop-blur-md bg-[#1A1D24]/40 border-t border-[#1A1D24]/30";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/', icon: <Shield className="w-4 h-4" /> },
    { name: 'Teams', href: '/teams', icon: <Users2 className="w-4 h-4" /> },
    { name: 'Annonces', href: '/announcements', icon: <Bell className="w-4 h-4" /> },
    { name: 'Shop', href: '/shop', icon: <ShoppingBag className="w-4 h-4" /> },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-[#080B10] text-[#EBEBEB] font-body flex flex-col justify-between selection:bg-[#EE1C25] selection:text-white">
        
        {/* Barre du haut (Masquée sur mobile, visible sur PC) */}
        <Navbar links={navLinks} />

        {/* CONTENU PRINCIPAL */}
        {/* Note le padding : pt-20 pour laisser la place au header sur PC, pb-20 pour laisser la place au footer sur Mobile */}
        <main className="flex-grow pt-0 md:pt-20 pb-20 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/teams" element={<TeamsPage />} /> */}
                {/* <Route path="/announcements" element={<AnnouncementsPage />} /> */}
                {/* <Route path="/shop" element={<ShopPage />} /> */}
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Barre du bas (Visible sur mobile, masquée sur PC) */}
        <BottomNavbar links={navLinks} />

        {/* FOOTER DESKTOP UNIQUE (Masqué sur mobile pour un rendu épuré style App) */}
        <footer className="hidden md:block backdrop-blur-md bg-[#1A1D24]/40 border-t border-[#1A1D24]/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-gaming uppercase tracking-widest text-sm font-bold">
              © {new Date().getFullYear()} <span className="text-[#EE1C25]">Zoldyck Family</span>. Tous droits réservés.
            </p>
          </div>
        </footer>

      </div>
    </Router>
  );
}