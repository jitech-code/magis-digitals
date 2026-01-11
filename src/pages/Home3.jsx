import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Users, TrendingUp, ShieldCheck, Menu ,
  Cpu, 
  BarChart3, 
  Layers, 
  Lock,
  ChevronDown,
  ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Gestion du scroll pour la Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: "CA 2023", value: "625M", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Collaborateurs", value: "+30", icon: <Users className="w-5 h-5" /> },
    { label: "Clients", value: "+14", icon: <Globe className="w-5 h-5" /> },
    { label: "Indépendant", value: "100%", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const services = [
    {
      title: "Stratégie & Performance",
      description: "Audit complet de vos systèmes d'information et conseil stratégique pour aligner l'IT sur vos objectifs business.",
      icon: <Layers className="w-10 h-10" />,
      tag: "Conseil",
      color: "from-[#06a0f8] to-[#16e3f4]" // Code couleur Semi-blue -> Primary-blue
    },
    {
      title: "Digitalisation Métier",
      description: "Transformation profonde de vos processus pour une agilité accrue et une réduction des coûts opérationnels.",
      icon: <Cpu className="w-10 h-10" />,
      tag: "Processus",
      color: "from-[#16e3f4] to-[#06a0f8]" // Inverse
    },
    {
      title: "IA & Business Intelligence",
      description: "Exploitation de vos données grâce à l'intelligence artificielle pour des prises de décision prédictives.",
      icon: <BarChart3 className="w-10 h-10" />,
      tag: "Data Science",
      color: "from-[#fec389] to-[#ffc289]" // Code couleur Clear -> Semi-clear
    },
    {
      title: "Sécurité & SI",
      description: "Protection de vos actifs numériques et mise en conformité de vos infrastructures critiques.",
      icon: <Lock className="w-10 h-10" />,
      tag: "Cybersécurité",
      color: "from-[#06a0f8] to-[#002955]" // Semi-blue -> Bleu
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    // Fond principal changé en #002955 (Bleu)
    <div className="bg-[#002955] text-white font-sans selection:bg-[#16e3f4]/30 overflow-x-hidden">
      
      {/* NAVBAR CENTRÉE - Largeur augmentée */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 py-4 lg:px-8 ${
        isScrolled 
        ? "bg-[#002955]/95 backdrop-blur-xl border-b border-white/10 py-3" 
        : "bg-transparent py-6"
      }`}>
        {/* max-w augmenté pour rapprocher du bord */}
        <div className="w-full max-w-[95%] mx-auto flex items-center justify-between">
          
          {/* Logo à gauche - Agrandissement */}
          <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
             <img 
                src={logo} 
                alt="Magis Digitals Logo" 
                className="h-40 w-auto object-contain hover:scale-105 transition-transform duration-300" // Taille agrandie h-16
             />
             {/* J'ai caché le texte car le logo image est présent, dites-moi si vous voulez le remettre */}
          </div>
          
          {/* Menu centré */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-lg font-semibold tracking-wide text-gray-200">
             <a href="#" className="hover:text-[#16e3f4] transition-colors duration-300 relative group">
                Acceuil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
             </a>
             <a href="#" className="hover:text-[#16e3f4] transition-colors duration-300 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
             </a>
             <a href="#" className="hover:text-[#16e3f4] transition-colors duration-300 relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
             </a>
             <a href="#" className="hover:text-[#16e3f4] transition-colors duration-300 relative group">
                Projets
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
             </a>
             <a href="#" className="hover:text-[#16e3f4] transition-colors duration-300 relative group">
                À propos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
             </a>
             <a href="#" className="hover:text-[#16e3f4] transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
             </a>
          </div>
          
          {/* Bouton à droite - Couleur Clear/Orange */}
          <div className="flex-shrink-0">
            <button className="bg-[#fec389] text-[#002955] px-8 py-3 rounded-full font-bold hover:bg-[#ffc289] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#fec389]/20">
              Nous Rejoindre
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Image de fond avec overlay adapté au bleu #002955 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Professionnels travaillant sur un projet"
            className="w-full h-full object-cover scale-105"
          />
          {/* Overlay modifié pour correspondre au bleu demandé */}
          <div className="absolute inset-0 bg-[#002955]/60 backdrop-grayscale-[10%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002955]/40 via-transparent to-[#002955]" />
        </div>

        {/* Effets de lumière avec les codes couleurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06a0f8]/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#16e3f4]/10 blur-[150px] rounded-full animate-pulse" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-[95%] text-center space-y-10 top-7"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#16e3f4]/30 bg-[#16e3f4]/10 text-[#16e3f4] text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16e3f4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16e3f4]"></span>
            </span>
            Votre partenaire en transformation digitale
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl lg:text-9xl font-black leading-none tracking-tighter">
            L'EXCELLENCE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16e3f4] via-[#06a0f8] to-[#fec389]">
              AU SERVICE DU FUTUR.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Nous concevons des solutions technologiques sur mesure pour les entreprises visionnaires qui souhaitent dominer leur marché.
          </motion.p>
          
           <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="group flex items-center gap-4 bg-[#06a0f8] hover:bg-[#002955] border border-transparent hover:border-[#06a0f8] px-14 py-7 rounded-3xl transition-all duration-300 font-black shadow-2xl shadow-[#06a0f8]/30 text-2xl">
                 Découvrir nos services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
            </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 py-24 bg-white/[0.01] border-y border-white/5">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group p-6 rounded-3xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#16e3f4]/10 text-[#16e3f4] mb-6 group-hover:scale-110 group-hover:bg-[#16e3f4]/20 transition-all duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      {/* Fond gris clair conservé pour contraste avec le texte foncé de la section services de votre code original */}
      <section id="services" className="relative bg-gray-50 text-[#002955] py-32 lg:py-48 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#06a0f8]/20 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#16e3f4]/20 rounded-full blur-[120px] -ml-64 -mb-64" />
      
        <div className="w-full max-w-[95%] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-4xl mx-auto lg:mx-0"
            >
              <div className="inline-block px-5 py-2 rounded-full bg-[#06a0f8] text-white text-xs font-black uppercase tracking-[0.25em]">
                Notre Savoir-Faire
              </div>
              <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-[#002955]">
                NOS <span className="text-[#06a0f8] italic">SERVICES</span>.
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl space-y-8 mx-auto lg:mx-0"
            >
              <p className="text-2xl lg:text-3xl text-gray-500 font-medium leading-relaxed">
                Transformation digitale, IA et performance pure. Une vision d'excellence signée <span className="text-[#002955] font-black italic">Magis</span>.
              </p>
              <div className="h-2 w-24 bg-[#06a0f8] rounded-full mx-auto lg:mx-0" />
            </motion.div>
          </div>
      
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative p-8 lg:p-10 rounded-[3rem] border border-gray-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
              >
                <div className={`absolute inset-0 rounded-[3rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-10 p-5 inline-block w-fit rounded-[2rem] bg-gradient-to-br ${service.color} text-white shadow-2xl shadow-blue-500/20 transform group-hover:rotate-6 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  
                  <div className="space-y-5 flex-grow">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-gray-200" />
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-[#06a0f8]">{service.tag}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black tracking-tight text-[#002955] group-hover:text-[#06a0f8] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
      
                  <div className="mt-12 flex items-center gap-4 pt-8 border-t border-gray-50">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#06a0f8] group-hover:border-[#06a0f8] transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300 group-hover:text-[#002955] transition-colors">En savoir plus</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER ESPACE POUR LE SCROLL */}
      <footer className="py-32 flex flex-col items-center justify-center text-center px-6 bg-[#002955]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <p className="text-[#16e3f4] font-bold tracking-[0.5em] uppercase text-xs">Prêt à innover ?</p>
          <h2 className="text-4xl font-black">Construisons demain ensemble.</h2>
        </motion.div>
      </footer>
    </div>
  );
};

export default Home;