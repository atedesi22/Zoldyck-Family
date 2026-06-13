import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, Calendar, User, ArrowUpRight, Filter, ChevronRight, Target, X, Send, MessageSquare, ShieldCheck, Camera, UserCheck } from 'lucide-react';

// Données de tes annonces et articles
const initialAnnonces = [
  {
    id: 1,
    title: "Campagne de Recrutement 2026 : Rejoignez l'élite Zoldyck (T1 à T4)",
    excerpt: "Le clan ouvre officiellement ses portes ! Que vous soyez un Slayer agressif pour l'Élite Alpha (T1) ou un jeune espoir cherchant à faire ses preuves à l'Académie (T4), déposez votre candidature dès maintenant.",
    category: "Recrutement",
    date: "13 Juin 2026",
    author: "Staff_Zoldyck",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    isFeatured: true, // Met l'article en avant (Grande bannière)
    requirements: ["K/D Ratio > 2.00 (Pour T1/T2)", "Dispo soirs de tournois", "Micro fonctionnel & Discord"]
  },
  {
    id: 2,
    title: "Analyse Patch Notes Saison 5 CODM : La nouvelle Meta SMG",
    excerpt: "Nos capitaines ont décortiqué les derniers buff et nerf de la mise à jour. Découvrez quelles armes équiper pour le prochain championnat.",
    category: "Patch Notes",
    date: "10 Juin 2026",
    author: "SlayerX",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600",
    isFeatured: false
  },
  {
    id: 3,
    title: "Zoldyck se qualifie pour les phases finales de l'Africa Pro League",
    excerpt: "Après un seed parfait de 5 victoires d'affilée, notre roster Élite Alpha décroche son ticket pour l'arbre final. Prochain match ce weekend !",
    category: "Compétition",
    date: "08 Juin 2026",
    author: "Coach_Z",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
    isFeatured: false
  },
  {
    id: 4,
    title: "Événement Communautaire : 1v1 Sniper Night ce vendredi",
    excerpt: "Inscription ouverte à tous les membres du serveur. Venez défier les titulaires au snipe sur la map Raid. Des cashprizes en CP à gagner !",
    category: "Communauté",
    date: "05 Juin 2026",
    author: "Mod_Zoldyck",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=600",
    isFeatured: false
  }
];

// LISTE DES QUESTIONS DU CHATBOT
const RECRUITMENT_QUESTIONS = [
  { id: 'pseudo', text: "Soldat, décline ton identité. Quel est ton pseudo exact sur CODM ?", type: 'text' },
  { id: 'sexe', text: "Sélectionne ton genre pour l'attribution du Roster :", type: 'options', options: ['Masculin', 'Féminin'] },
  { id: 'device', text: "Sur quel type d'appareil joues-tu ?", type: 'options', options: ['Smartphone', 'Tablette', 'Émulateur / Manette'] },
  { id: 'anciennete', text: "Quelle est ton ancienneté sur Call of Duty Mobile ?", type: 'options', options: ['Ancien Joueur', 'Nouveau Joueur'] },
  { id: 'niveau', text: "Comment évalues-tu ton niveau global ?", type: 'options', options: ['Débutant', 'Amateur', 'Pro / Compétitif'] },
  { id: 'role', text: "Quel est ton rôle principal en jeu ?", type: 'options', options: ['Slayer', 'Anchor', 'Objective', 'Sniper'] },
  { id: 'style', text: "Quel est ton style de jeu favori ?", type: 'options', options: ['Hyper-Agressif (Rush)', 'Tactique / Temporisé', 'Polyvalent / Soutien'] },
  { id: 'constance', text: "Quelle est ta constance de jeu ?", type: 'options', options: ['Tout le temps (Hardcore)', 'Souvent (Régulier)', 'Rarement (Occasionnel)'] },
  { id: 'source', text: "Où as-tu entendu parler du clan Zoldyck ?", type: 'options', options: ['Réseaux Sociaux', 'En Jeu (Matchs)', 'Bouche-à-oreille / Ami'] },
  { id: 'motivation', text: "En quelques mots, quelle est ta motivation principale à intégrer le clan ?", type: 'text' },
  { id: 'fichiers', text: "Pour finaliser, télécharge une image de toi et une capture de ton avatar/profil en jeu :", type: 'files' }
];

export default function AnnoncesPage() {
  const [filter, setFilter] = useState('Tous');
  
  const categories = ['Tous', 'Recrutement', 'Compétition', 'Patch Notes', 'Communauté'];

  // Filtrage des articles
  const filteredAnnonces = filter === 'Tous' 
    ? initialAnnonces 
    : initialAnnonces.filter(item => item.category === filter);

  // On isole l'annonce de recrutement principale pour la mettre en "Hero Banner" tout en haut
  const featuredPost = initialAnnonces.find(item => item.isFeatured);
  // Les autres articles de la grille (en évitant de dupliquer si le filtre est sur "Tous")
  const gridPosts = filteredAnnonces.filter(item => !item.isFeatured || filter === 'Recrutement');


  const [isBotOpen, setIsBotOpen] = useState(false);
  
  // États du Chatbot
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);

  const chatEndRef = useRef(null);

  // Auto-scroll vers le bas du chat à chaque nouveau message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  // Initialisation du Bot au premier clic
  const handleOpenBot = () => {
    setIsBotOpen(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsFormComplete(false);
    setChatHistory([
      { sender: 'bot', text: "Salutations recrue. Je suis NovaAI, l'assistant tactique de Zoldyck. Je vais évaluer ton profil pour le clan." },
      { sender: 'bot', text: RECRUITMENT_QUESTIONS[0].text }
    ]);
  };

  // Envoi via champ texte libre
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isFormComplete) return;

    const currentQuestion = RECRUITMENT_QUESTIONS[currentQuestionIndex];
    const userResponse = inputValue.trim();

    setAnswers(prev => ({ ...prev, [currentQuestion.id]: userResponse }));
    setChatHistory(prev => [...prev, { sender: 'user', text: userResponse }]);
    setInputValue('');

    advanceChat(userResponse, currentQuestionIndex + 1);
  };

  // Sélection via boutons d'options d'un clic
  const handleSelectOption = (option) => {
    if (isFormComplete) return;
    const currentQuestion = RECRUITMENT_QUESTIONS[currentQuestionIndex];

    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
    setChatHistory(prev => [...prev, { sender: 'user', text: option }]);

    advanceChat(option, currentQuestionIndex + 1);
  };

  // Simulation d'envoi des images
  const handleSimulateUpload = (type) => {
    const updatedFiles = { ...simulatedFiles, [type]: true };
    setSimulatedFiles(updatedFiles);

    setChatHistory(prev => [...prev, { sender: 'user', text: `📸 ${type === 'photo' ? 'Photo de moi' : 'Lien/Capture de mon Avatar'} téléversée.` }]);

    if (updatedFiles.photo && updatedFiles.avatar) {
      setAnswers(prev => ({ ...prev, fichiers: "Images fournies et prêtes pour WhatsApp" }));
      advanceChat("Images fournies", currentQuestionIndex + 1);
    }
  };

  // Formatage du gros pavé pour l'envoi WhatsApp
  const getWhatsAppLink = () => {
    const phoneNumber = "237690416147"; 
    const message = `*ENTRETIEN DE RECRUTEMENT CLAN ZOLDYCK*\n\n` +
                    `• *Pseudo CODM :* ${answers.pseudo}\n` +
                    `• *Sexe / Roster :* ${answers.sexe}\n` +
                    `• *Device utilisé :* ${answers.device}\n` +
                    `• *Ancienneté :* ${answers.anciennete}\n` +
                    `• *Niveau estimé :* ${answers.niveau}\n` +
                    `• *Rôle favori :* ${answers.role}\n` +
                    `• *Style de jeu :* ${answers.style}\n` +
                    `• *Constance :* ${answers.constance}\n` +
                    `• *Source d'info :* ${answers.source}\n` +
                    `• *Motivation :* ${answers.motivation}\n\n` +
                    `_Note : Je prépare ma photo et mon screenshot de profil à envoyer dans la foulée du chat._`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const currentQuestion = RECRUITMENT_QUESTIONS[currentQuestionIndex];


  return (
    <div className="min-h-screen bg-[#080B10] text-[#EBEBEB] px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* EN-TÊTE PAGE */}
        <div className="border-b border-[#1A1D24]/60 pb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE1C25]/10 border border-[#EE1C25]/20 text-xs font-gaming uppercase tracking-widest text-[#EE1C25] mb-4">
            <Megaphone className="w-3.5 h-3.5" /> Fil d'actualité du clan
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-gaming uppercase tracking-tight">
            Annonces & <span className="text-[#EE1C25]">News</span>
          </h1>
        </div>

        {/* ========================================================================= */}
        {/* GRANDE BANNIÈRE : L'ANNONCE DE RECRUTEMENT EN VEDETTE                      */}
        {/* ========================================================================= */}
        {featuredPost && (filter === 'Tous' || filter === 'Recrutement') && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-3xl bg-[#1A1D24]/20 border-2 border-[#EE1C25]/30 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-hidden relative group shadow-[0_0_40px_rgba(238,28,37,0.15)]"
          >
            {/* Effet lumineux néon rouge en fond */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#EE1C25]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#EE1C25]/15 transition-colors duration-500" />
            
            {/* Image de l'annonce */}
            <div className="lg:col-span-5 h-56 lg:h-full rounded-2xl overflow-hidden bg-[#080B10] border border-[#1A1D24] relative">
              <img src={featuredPost.image} alt="Recrutement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[#EE1C25] text-[#080B10] text-[10px] font-gaming font-black uppercase tracking-widest">
                {featuredPost.category}
              </span>
            </div>

            {/* Infos de l'annonce */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-gaming text-[#A1A1AA]">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {featuredPost.author}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black font-gaming uppercase tracking-wide text-[#EBEBEB] group-hover:text-[#EE1C25] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-[#A1A1AA] leading-relaxed font-body">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Pré-requis affichés dynamiquement */}
              <div className="bg-[#080B10]/60 border border-[#1A1D24] rounded-xl p-4 space-y-2">
                <p className="text-[10px] font-gaming uppercase tracking-wider text-[#FFD700] flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" /> Profils recherchés :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {featuredPost.requirements.map((req, i) => (
                    <div key={i} className="text-xs text-[#EBEBEB] flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#EE1C25] shrink-0" />
                      <span className="truncate">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button 
                onClick={handleOpenBot}
                className="w-full sm:w-fit px-6 py-3 bg-[#EE1C25] text-[#080B10] font-gaming font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[#EE1C25]/90 transition-all shadow-[0_0_20px_rgba(238,28,37,0.3)] flex items-center justify-center gap-2 self-start active:scale-95"
              >
                Postuler <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* BARRE DE FILTRAGE DES CATEGORIES */}
        <div className="flex items-center gap-3 bg-[#1A1D24]/40 border border-[#1A1D24]/60 px-4 py-3 rounded-2xl overflow-x-auto scrollbar-none">
          <Filter className="w-4 h-4 text-[#A1A1AA] shrink-0 hidden sm:block" />
          <div className="flex gap-2">
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-lg font-gaming text-[10px] uppercase tracking-wider whitespace-nowrap transition-all border ${
                    isSelected 
                      ? 'bg-[#EBEBEB] text-[#080B10] border-[#EBEBEB] font-black' 
                      : 'bg-[#080B10]/40 text-[#A1A1AA] border-[#1A1D24] hover:text-[#EBEBEB] hover:border-[#A1A1AA]/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* GRILLE DES AUTRES ACTUALITÉS                                              */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
          >
            {gridPosts.length > 0 ? (
              gridPosts.map((item) => (
                <div 
                  key={item.id}
                  className="group bg-[#1A1D24]/20 border border-[#1A1D24]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#EE1C25]/30 shadow-lg"
                >
                  {/* Miniature Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#080B10]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#1A1D24]/80 backdrop-blur-md border border-[#1A1D24] text-[9px] font-gaming uppercase tracking-widest text-[#EBEBEB]">
                      {item.category}
                    </span>
                  </div>

                  {/* Contenu Texte */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] font-gaming text-[#A1A1AA]">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                        <span>•</span>
                        <span>{item.author}</span>
                      </div>
                      <h3 className="font-gaming font-bold text-base text-[#EBEBEB] uppercase tracking-wide leading-snug group-hover:text-[#EE1C25] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] font-body line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Lien Lire la suite */}
                    <div className="pt-3 border-t border-[#1A1D24]/40 flex items-center justify-between text-[10px] font-gaming uppercase tracking-wider text-[#A1A1AA] group-hover:text-[#EBEBEB] transition-colors cursor-pointer">
                      <span>Lire l'annonce</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#EE1C25]" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 border border-dashed border-[#1A1D24] rounded-2xl bg-[#1A1D24]/10">
                <p className="text-sm font-gaming text-[#A1A1AA] uppercase tracking-widest">Aucune annonce trouvée dans cette catégorie.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* POP-UP MODAL : CHATBOT DE RECRUTEMENT INTERACTIF                           */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {isBotOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#080B10]/95 backdrop-blur-xl flex items-center justify-center p-4">
              <motion.div initial={{ scale: 0.95, y: 15 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 15 }} className="w-full max-w-xl bg-[#1A1D24]/40 border border-[#1A1D24] rounded-2xl h-[600px] flex flex-col overflow-hidden shadow-2xl">
                
                {/* Header du Chat */}
                <div className="p-4 bg-[#080B10] border-b border-[#1A1D24] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EE1C25] animate-pulse" />
                    <div>
                      <p className="font-gaming text-xs uppercase tracking-widest text-[#EBEBEB]">NovaAI Tactique</p>
                      <p className="text-[9px] font-body text-[#A1A1AA]">Questionnaire d'évaluation ({currentQuestionIndex + 1}/{RECRUITMENT_QUESTIONS.length})</p>
                    </div>
                  </div>
                  <button onClick={() => setIsBotOpen(false)} className="text-[#A1A1AA] hover:text-[#EE1C25] transition-colors"><X className="w-5 h-5" /></button>
                </div>

                {/* Historique des discussions */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-none bg-[#080B10]/20">
                  {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs font-body leading-relaxed ${
                        msg.sender === 'bot' ? 'bg-[#1A1D24] border border-[#1A1D24] text-[#EBEBEB]' : 'bg-[#EE1C25]/10 border border-[#EE1C25]/20 text-[#EE1C25] font-semibold'
                      }`}>{msg.text}</div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                {/* OPTIONS CLICABLES / FORMULAIRES DE BAS DE CONVERSATION */}
                <div className="p-4 bg-[#080B10] border-t border-[#1A1D24] space-y-3">
                  
                  {/* CAS 1 : Boutons d'options d'un clic */}
                  {!isFormComplete && currentQuestion?.type === 'options' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 animate-fadeIn">
                      {currentQuestion.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(opt)}
                          className="py-2.5 px-3 rounded-xl bg-[#1A1D24]/60 border border-[#1A1D24] text-[#EBEBEB] text-xs font-gaming uppercase tracking-wider hover:border-[#EE1C25]/60 hover:text-[#EE1C25] transition-all text-center"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* CAS 2 : Zone de téléversement (Fichiers Photo & Avatar) */}
                  {!isFormComplete && currentQuestion?.type === 'files' && (
                    <div className="grid grid-cols-2 gap-3 animate-fadeIn">
                      <button
                        onClick={() => handleSimulateUpload('photo')}
                        disabled={simulatedFiles.photo}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-gaming uppercase tracking-wider transition-all ${
                          simulatedFiles.photo 
                            ? 'bg-[#0E3BF0]/10 border-[#0E3BF0]/40 text-[#0E3BF0]' 
                            : 'bg-[#1A1D24]/60 border-[#1A1D24] text-[#EBEBEB] hover:border-[#EE1C25]'
                        }`}
                      >
                        <Camera className="w-5 h-5" />
                        <span>{simulatedFiles.photo ? "✓ Photo Ok" : "Uploader ma Photo"}</span>
                      </button>
                      
                      <button
                        onClick={() => handleSimulateUpload('avatar')}
                        disabled={simulatedFiles.avatar}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-gaming uppercase tracking-wider transition-all ${
                          simulatedFiles.avatar 
                            ? 'bg-[#0E3BF0]/10 border-[#0E3BF0]/40 text-[#0E3BF0]' 
                            : 'bg-[#1A1D24]/60 border-[#1A1D24] text-[#EBEBEB] hover:border-[#EE1C25]'
                        }`}
                      >
                        <UserCheck className="w-5 h-5" />
                        <span>{simulatedFiles.avatar ? "✓ Avatar Ok" : "Uploader mon Avatar"}</span>
                      </button>
                    </div>
                  )}

                  {/* CAS 3 : Saisie texte standard pour les questions ouvertes */}
                  {!isFormComplete && currentQuestion?.type === 'text' && (
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Écris ton texte ici..."
                        className="flex-1 bg-[#1A1D24]/60 border border-[#1A1D24] rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#EE1C25]/60 text-[#EBEBEB] font-body"
                      />
                      <button type="submit" disabled={!inputValue.trim()} className="p-2.5 rounded-xl bg-[#EE1C25] text-[#080B10] hover:bg-[#EE1C25]/90 transition-colors disabled:opacity-30 flex items-center justify-center shrink-0">
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}

                  {/* BOUTON GLOBAL FINALE WHATSAPP */}
                  <div className="pt-1">
                    {isFormComplete ? (
                      <a 
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-[#25D366] text-[#080B10] font-gaming font-black text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95"
                      >
                        Transmettre le dossier via WhatsApp <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <button disabled className="w-full py-3 bg-[#1A1D24] border border-[#1A1D24] text-[#A1A1AA]/30 font-gaming font-black text-xs uppercase tracking-widest rounded-xl cursor-not-allowed text-center flex items-center justify-center gap-2">
                        {currentQuestion?.type === 'files' ? "Fournir les deux images requises..." : "Entretien en cours..."}
                      </button>
                    )}
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