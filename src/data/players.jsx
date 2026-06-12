// src/data/players.js

export const clanPlayers = [
  // ==================== DIVISION T1 (L'ÉLITE) ====================
  {
    id: 1,
    pseudo: "Killua",
    gender: "male",
    division: "T1",
    type: "titulaire",
    isCaptain: true,
    role: "Slayer",
    favoriteWeapon: "Kilo 141",
    // Informations complètes pour la future modale / fiche détaillée
    photo: "/assets/img/players/killua.webp", // Chemin vers sa photo
    rank: "Légendaire (Top 5000)",
    kd: "2.45",
    precision: "34.2%",
    joinedAt: "Janvier 2025",
    device: "iPad Pro M2",
    playstyle: "Ultra-agressif, excelle dans les duels à moyenne distance et le contrôle des lignes de réapparition.",
    socials: {
      twitter: "https://twitter.com/killua_codm",
      youtube: "https://youtube.com/c/killuacodm",
      instagram: ""
    }
  },
  {
    id: 2,
    pseudo: "Alluka",
    gender: "female",
    division: "T1",
    type: "titulaire",
    isCaptain: false,
    role: "Slayer",
    favoriteWeapon: "Fennec",
    photo: "/assets/img/players/alluka.webp",
    rank: "Légendaire",
    kd: "2.60",
    precision: "29.8%",
    joinedAt: "Mars 2025",
    device: "iPhone 15 Pro Max",
    playstyle: "Spécialiste du combat rapproché (CQB). Force les entrées sur les points de capture avec une vitesse de réaction hors norme.",
    socials: {
      twitter: "",
      youtube: "",
      instagram: "https://instagram.com/alluka_zld"
    }
  },
  {
    id: 3,
    pseudo: "Kurapika",
    gender: "male",
    division: "T1",
    type: "titulaire",
    isCaptain: false,
    role: "Anchor",
    favoriteWeapon: "LK24",
    photo: "/assets/img/players/kurapika.webp",
    rank: "Légendaire",
    kd: "2.10",
    precision: "38.5%",
    joinedAt: "Février 2025",
    device: "iPad Air 5",
    playstyle: "Le cerveau de l'équipe. Il garantit les meilleures réapparitions (spawns) pour ses coéquipiers grâce à un placement irréprochable.",
    socials: {
      twitter: "https://twitter.com/kurapika_anchor",
      youtube: "",
      instagram: ""
    }
  },
  {
    id: 4,
    pseudo: "Bisky",
    gender: "female",
    division: "T1",
    type: "titulaire",
    isCaptain: false,
    role: "Objective",
    favoriteWeapon: "HVK-30",
    photo: "/assets/img/players/bisky.webp",
    rank: "Légendaire",
    kd: "2.15",
    precision: "31.0%",
    joinedAt: "Mai 2025",
    device: "ROG Phone 8",
    playstyle: "Dédiée à la capture et au maintien des zones Point Stratégique. Très solide sous la pression des vagues ennemies.",
    socials: {
      twitter: "",
      youtube: "",
      instagram: ""
    }
  },
  {
    id: 5,
    pseudo: "Hisoka",
    gender: "male",
    division: "T1",
    type: "titulaire",
    isCaptain: false,
    role: "Sniper",
    favoriteWeapon: "DL Q33",
    photo: "/assets/img/players/hisoka.webp",
    rank: "Légendaire",
    kd: "2.35",
    precision: "51.2%",
    joinedAt: "Avril 2025",
    device: "iPad Pro M1",
    playstyle: "Sniper chirurgical capable de débloquer des situations complexes en un seul tir. Redoutable en Recherche & Destruction.",
    socials: {
      twitter: "https://twitter.com/hisoka_sniper",
      youtube: "https://youtube.com/c/hisokashots",
      instagram: ""
    }
  },

  // ==================== REMPLAÇANTS T1 ====================
  {
    id: 6,
    pseudo: "Gon",
    gender: "male",
    division: "T1",
    type: "remplacant",
    isCaptain: false,
    role: "Objective",
    favoriteWeapon: "CBR4",
    photo: "/assets/img/players/gon.webp",
    rank: "Légendaire",
    kd: "1.95",
    precision: "30.5%",
    joinedAt: "Janvier 2025",
    device: "iPhone 14 Pro",
    playstyle: "Grande endurance en match. Capable de remplacer n'importe quel joueur objectif au pied levé.",
    socials: {}
  },
  {
    id: 7,
    pseudo: "Machi",
    gender: "female",
    division: "T1",
    type: "remplacant",
    isCaptain: false,
    role: "Anchor",
    favoriteWeapon: "Grau 5.56",
    photo: "/assets/img/players/machi.webp",
    rank: "Grand Maître V",
    kd: "1.98",
    precision: "33.1%",
    joinedAt: "Juin 2025",
    device: "iPad Mini 6",
    playstyle: "Joueuse très calme, excellente vision de jeu et communication claire lors des rotations.",
    socials: {}
  },
  {
    id: 8,
    pseudo: "Leorio",
    gender: "male", 
    division: "T1",
    type: "remplacant",
    isCaptain: false,
    role: "Slayer",
    favoriteWeapon: "RUS-79U",
    photo: "/assets/img/players/leorio.webp",
    rank: "Grand Maître IV",
    kd: "2.05",
    precision: "28.7%",
    joinedAt: "Février 2025",
    device: "ROG Phone 6",
    playstyle: "Très agressif, excelle dans les engagements à courte distance et les flancs rapides.",
    socials: {} 
  },
  {
    id: 9,
    pseudo: "Shizuku",  
    gender: "female",
    division: "T1",
    type: "remplacant", 
    isCaptain: false,
    role: "Support",
    favoriteWeapon: "M4LMG",
    photo: "/assets/img/players/shizuku.webp",
    rank: "Grand Maître III",
    kd: "1.85",
    precision: "27.5%",
    joinedAt: "Mars 2025",
    device: "iPad Air 4",
    playstyle: "Joueuse de soutien, spécialisée dans le contrôle de zone et la suppression des ennemis avec des tirs de suppression.",
    socials: {}
  }
  // Tu pourras dupliquer et remplir pour les divisions T2, T3, T4 de la même manière...
];