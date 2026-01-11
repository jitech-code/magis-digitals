import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Layers, 
  Lock 
} from 'lucide-react';

const services = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
      tag: "Expertise",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Digitalisation Métier",
      description: "Transformation profonde de vos processus pour une agilité accrue et une réduction des coûts opérationnels.",
      icon: <Cpu className="w-10 h-10" />,
      tag: "Cœur de métier",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IA & Business Intelligence",
      description: "Exploitation de vos données grâce à l'intelligence artificielle pour des prises de décision prédictives.",
      icon: <BarChart3 className="w-10 h-10" />,
      tag: "Innovation",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Sécurité & SI",
      description: "Protection de vos actifs numériques et mise en conformité de vos infrastructures critiques.",
      icon: <Lock className="w-10 h-10" />,
      tag: "Protection",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  // Variantes pour l'affichage dynamique (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-[#05070A] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVBAR CENTRÉE */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 lg:px-12 ${
        isScrolled 
        ? "bg-[#05070A]/90 backdrop-blur-xl border-b border-white/10 py-3" 
        : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">M</div>
            <span className="hidden sm:block text-xl font-black tracking-tighter uppercase">Magis Digitals</span>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-semibold tracking-wide text-gray-300">
            <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Expertises</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Valeurs</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">RSE</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
          
          <div className="flex-shrink-0">
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
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
            alt="Équipe professionnelle"
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
          className="relative z-10 max-w-5xl w-full text-center space-y-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-blue-400 text-xs font-bold tracking-widest uppercase">
            L'innovation sans cesse au rendez-vous
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl lg:text-9xl font-black leading-none tracking-tighter">
            MAGIS <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-200">
              DIGITALS.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Nous accompagnons les entreprises agiles dans la digitalisation, l'IA et la performance opérationnelle.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-2xl transition-all font-bold shadow-2xl shadow-blue-600/30 text-lg">
              Découvrir nos expertises <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-blue-400 flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-black tracking-tight">{stat.value}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION SERVICES REVITALISÉE */}
      <section id="services" className="relative bg-gray-50 text-[#05070A] py-40 lg:py-56 px-6 overflow-hidden">
        {/* Décorations de fond vives */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em]">
                Nos Expertises
              </div>
              <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-[#05070A]">
                LE FUTUR <br />
                <span className="text-blue-600">PENSÉ</span> <br />
                POUR VOUS.
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pt-24 space-y-8"
            >
              <p className="text-2xl lg:text-3xl text-gray-500 font-medium leading-snug">
                Nous transformons la complexité technologique en levier de performance pure. 
                Une approche <span className="text-[#05070A] font-black italic">Magis</span> pour des résultats hors normes.
              </p>
              <div className="h-1 w-24 bg-blue-600 rounded-full" />
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 lg:gap-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative p-12 lg:p-20 rounded-[4rem] border border-gray-100 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] transition-all duration-700"
              >
                {/* Accent de couleur dynamique au survol */}
                <div className={`absolute top-0 left-0 w-full h-full rounded-[4rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className={`mb-12 p-6 inline-block rounded-[2rem] bg-gradient-to-br ${service.color} text-white shadow-2xl shadow-blue-500/20 transform group-hover:rotate-6 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="h-px w-8 bg-gray-200" />
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">{service.tag}</span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#05070A] group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg lg:text-xl text-gray-400 font-medium leading-relaxed max-w-md group-hover:text-gray-600 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-gray-300 group-hover:text-[#05070A] transition-colors">Explorer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER / CONTACT REVISITÉ */}
      <footer className="py-40 bg-[#05070A] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full" />
        
        <div className="max-w-5xl mx-auto space-y-12 px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none">
              PRÊT À <span className="text-blue-500 italic">MAGISER</span> <br /> VOTRE SUCCÈS ?
            </h2>
            <p className="text-gray-400 text-xl lg:text-2xl font-medium">
              Contactez nos Expert Advisors à Douala, Cameroun.
            </p>
          </motion.div>
          
          <button className="relative group bg-blue-600 hover:bg-blue-700 px-16 py-6 rounded-[2rem] font-black text-2xl transition-all shadow-2xl shadow-blue-600/40">
            <span className="relative z-10">Démarrer la mission</span>
            <div className="absolute inset-0 bg-white/20 rounded-[2rem] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default services;