import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Layers, 
  Lock,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

const Servicess = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
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
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Digitalisation Métier",
      description: "Transformation profonde de vos processus pour une agilité accrue et une réduction des coûts opérationnels.",
      icon: <Cpu className="w-10 h-10" />,
      tag: "Processus",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IA & Business Intelligence",
      description: "Exploitation de vos données grâce à l'intelligence artificielle pour des prises de décision prédictives.",
      icon: <BarChart3 className="w-10 h-10" />,
      tag: "Data Science",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Sécurité & SI",
      description: "Protection de vos actifs numériques et mise en conformité de vos infrastructures critiques.",
      icon: <Lock className="w-10 h-10" />,
      tag: "Cybersécurité",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const navItems = [
    { 
      name: 'Services', 
      hasDropdown: true, 
      content: ['Transformation Digitale', 'Intelligence Artificielle', 'Audit SI', 'Cybersécurité'] 
    },
    { name: 'Valeurs', hasDropdown: false },
    { 
      name: 'RSE', 
      hasDropdown: true, 
      content: ['Égalité & Parentalité', 'Éco-responsabilité', 'Impact Social'] 
    },
    { name: 'Contact', hasDropdown: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }
  };

  return (
    <div className="bg-[#05070A] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVBAR CENTRÉE AVEC DROPDOWNS */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 lg:px-12 ${
        isScrolled 
        ? "bg-[#05070A]/95 backdrop-blur-xl border-b border-white/10 py-3" 
        : "bg-transparent py-8"
      }`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center font-bold text-2xl shadow-xl shadow-blue-500/20">M</div>
            <span className="hidden lg:block text-2xl font-black tracking-tighter uppercase italic">Magis Digitals</span>
          </div>
          
          {/* Menu principal */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-12">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-gray-200 hover:text-blue-400 transition-colors py-2">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </button>

                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-3 overflow-hidden border border-gray-100"
                    >
                      <div className="space-y-1">
                        {item.content.map((subItem) => (
                          <a 
                            key={subItem} 
                            href="#" 
                            className="flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-gray-50 text-[#05070A] font-bold text-base transition-colors group/sub"
                          >
                            {subItem}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all text-blue-600" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="flex-shrink-0">
            <button className="bg-white text-black px-8 py-3 rounded-full font-black text-base hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-lg">
              Demander un Audit
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Professionnels Magis Digitals"
            className="w-full h-full object-cover scale-105 opacity-40"
          />
              {/* Overlay avec opacité réduite pour plus de clarté */}
          <div className="absolute inset-0 bg-[#05070A]/50 backdrop-grayscale-[10%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/30 via-transparent to-[#05070A]" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl w-full text-center space-y-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-blue-400 text-sm font-black tracking-widest uppercase">
            L'innovation sans cesse au rendez-vous
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-7xl lg:text-[11rem] font-black leading-none tracking-tighter">
            MAGIS <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-200">
              DIGITALS.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-2xl lg:text-4xl text-gray-300 max-w-5xl mx-auto font-medium leading-relaxed">
            Nous accompagnons les entreprises agiles dans la digitalisation, l'IA et la performance opérationnelle.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group flex items-center gap-4 bg-blue-600 hover:bg-blue-700 px-14 py-7 rounded-3xl transition-all font-black shadow-2xl shadow-blue-600/30 text-2xl">
              Découvrir nos services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-blue-500 flex justify-center mb-5">{stat.icon}</div>
              <h3 className="text-5xl font-black tracking-tight mb-2">{stat.value}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-black">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section id="services" className="relative bg-gray-50 text-[#05070A] py-32 lg:py-48 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-4xl mx-auto lg:mx-0"
            >
              <div className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-[0.25em]">
                Notre Savoir-Faire
              </div>
              <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-[#05070A]">
                NOS <span className="text-blue-600 italic">SERVICES</span>.
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
                Transformation digitale, IA et performance pure. Une vision d'excellence signée <span className="text-[#05070A] font-black italic">Magis</span>.
              </p>
              <div className="h-2 w-24 bg-blue-600 rounded-full mx-auto lg:mx-0" />
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative p-12 lg:p-14 rounded-[4rem] border border-gray-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
              >
                <div className={`absolute inset-0 rounded-[4rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-12 p-6 inline-block w-fit rounded-[2rem] bg-gradient-to-br ${service.color} text-white shadow-2xl shadow-blue-500/20 transform group-hover:rotate-6 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  
                  <div className="space-y-5 flex-grow">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-gray-200" />
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">{service.tag}</span>
                    </div>
                    
                    <h3 className="text-4xl font-black tracking-tight text-[#05070A] group-hover:text-blue-600 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-4 pt-8 border-t border-gray-50">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-300 group-hover:text-[#05070A] transition-colors">En savoir plus</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-48 bg-[#05070A] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[180px] rounded-full" />
        
        <div className="max-w-7xl mx-auto space-y-12 px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.8]">
              DOMINEZ LE <br /> <span className="text-blue-500 italic uppercase">Marché</span>.
            </h2>
            <p className="text-gray-400 text-2xl lg:text-4xl font-medium max-w-3xl mx-auto leading-relaxed">
              Contactez nos Expert Advisors à Akwa, Douala et donnez vie à vos ambitions.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <button className="relative group bg-blue-600 hover:bg-blue-700 px-16 py-8 rounded-[2rem] font-black text-2xl transition-all shadow-2xl shadow-blue-600/40">
              Démarrer un projet
            </button>
            <button className="px-16 py-8 rounded-[2rem] border border-white/10 font-black text-2xl hover:bg-white/5 transition-colors">
              Nous écrire
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Servicess;