import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Globe, Users, TrendingUp, ShieldCheck, Menu,
  Cpu, BarChart3, Layers, Lock, ChevronDown, CheckCircle2
} from 'lucide-react';

// Assurez-vous que le chemin est correct selon votre structure
import logo from './../assets/logo.png'; 

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallaxe pour le hero
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Palette de couleurs définie dans des constantes pour réutilisation propre
  const COLORS = {
    deepBlue: "#002955",
    semiBlue: "#06a0f8",
    primaryBlue: "#16e3f4",
    clear: "#fec389",
    semiClear: "#ffc289",
  };

  const stats = [
    { label: "CA 2023", value: "625M", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Experts", value: "+30", icon: <Users className="w-6 h-6" /> },
    { label: "Clients", value: "+14", icon: <Globe className="w-6 h-6" /> },
    { label: "Succès", value: "100%", icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  const services = [
    {
      title: "Stratégie & Performance",
      description: "Audit stratégique pour aligner votre IT sur vos objectifs de croissance.",
      icon: <Layers className="w-8 h-8" />,
      tag: "Conseil",
      gradient: "from-[#002955] to-[#06a0f8]"
    },
    {
      title: "Digitalisation Métier",
      description: "Refonte des processus pour une agilité opérationnelle maximale.",
      icon: <Cpu className="w-8 h-8" />,
      tag: "Processus",
      gradient: "from-[#06a0f8] to-[#16e3f4]"
    },
    {
      title: "IA & Business Intelligence",
      description: "Transformez vos données en leviers de décision prédictifs.",
      icon: <BarChart3 className="w-8 h-8" />,
      tag: "Data",
      gradient: "from-[#16e3f4] to-[#002955]" // Contrasté
    },
    {
      title: "Cybersécurité Avancée",
      description: "Bouclier numérique pour vos actifs les plus critiques.",
      icon: <Lock className="w-8 h-8" />,
      tag: "Sécurité",
      gradient: "from-[#fec389] to-[#ffc289]" // Touche chaude
    }
  ];

  // Variants pour les animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="font-sans text-[#002955] selection:bg-[#16e3f4] selection:text-[#002955] overflow-x-hidden bg-gray-50">
      
      {/* --- NAVBAR STYLE HOSTINGER --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
        ? "bg-white shadow-md py-3" 
        : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Magis Digitals Logo" className="h-10 w-auto object-contain" />
            <span className={`text-xl font-bold tracking-tight uppercase ${isScrolled ? "text-[#002955]" : "text-white"}`}>
              Magis Digitals
            </span>
          </div>
          
          {/* Menu Desktop */}
          <div className={`hidden lg:flex items-center gap-8 font-medium text-sm ${isScrolled ? "text-[#002955]" : "text-gray-200"}`}>
            {['Accueil', 'Services', 'Expertise', 'Blog'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#16e3f4] transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          
          {/* Bouton CTA */}
          <div className="hidden lg:block">
            <button className="bg-[#fec389] hover:bg-[#ffc289] text-[#002955] px-6 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg shadow-[#fec389]/20">
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <Menu className={`w-6 h-6 ${isScrolled ? "text-[#002955]" : "text-white"}`} />
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#002955]">
        
        {/* Background Gradients Dynamiques */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#06a0f8]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#16e3f4]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte Hero */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16e3f4]/10 border border-[#16e3f4]/30 text-[#16e3f4] text-xs font-bold uppercase tracking-widest w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#16e3f4] animate-ping" />
              Innovation & Performance
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
              Propulsez votre <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16e3f4] to-[#06a0f8]">
                Avenir Digital
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Nous fusionnons design épuré et technologies de pointe pour créer des écosystèmes digitaux qui surforment le marché.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#16e3f4] text-[#002955] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-lg shadow-[#16e3f4]/25 flex items-center justify-center gap-2 group">
                Commencer le projet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all backdrop-blur-sm">
                Découvrir nos offres
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-400 text-sm font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-[#16e3f4] w-4 h-4"/> Audit offert</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-[#16e3f4] w-4 h-4"/> Support 24/7</span>
            </motion.div>
          </motion.div>

          {/* Illustration/Image Droite */}
          <motion.div 
            style={{ y: yHero }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#06a0f8]/20">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Dashboard futuriste" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002955] via-transparent to-transparent opacity-90" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION (Style Hostinger: Clean bar) --- */}
      <div className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 lg:mx-8 rounded-2xl shadow-xl shadow-gray-200/50 p-8 lg:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
           {stats.map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex flex-col items-center justify-center text-center space-y-2"
             >
               <div className="p-3 bg-[#06a0f8]/10 text-[#06a0f8] rounded-xl mb-2">
                 {stat.icon}
               </div>
               <h3 className="text-4xl font-black text-[#002955]">{stat.value}</h3>
               <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
             </motion.div>
           ))}
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#06a0f8] font-bold tracking-widest uppercase mb-3">Nos Solutions</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#002955] mb-6">L'Expertise au service de votre vision.</h3>
            <p className="text-gray-600 text-lg">
              Une approche holistique combinant stratégie, design et technologie pour des résultats mesurables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#06a0f8]/10 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Hover Effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 text-[#002955] group-hover:text-white group-hover:bg-gradient-to-br ${service.gradient} transition-all duration-300 shadow-inner`}>
                    {service.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[#002955] mb-4 group-hover:text-[#06a0f8] transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-500 leading-relaxed text-sm mb-8">
                  {service.description}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-[#002955] font-bold text-sm group-hover:gap-4 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4 text-[#16e3f4]" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BANNIERE CTA (Couleur Clear/Orange) --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-[#002955] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Cercles déco */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fec389]/20 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16e3f4]/20 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-white">Prêt à transformer votre business ?</h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              Rejoignez les leaders qui ont choisi Magis Digitals pour leur accélération numérique.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#fec389] hover:bg-[#ffc289] text-[#002955] px-10 py-5 rounded-full font-bold text-lg shadow-lg shadow-[#fec389]/30"
            >
              Demander une consultation offerte
            </motion.button>
          </div>
        </div>
      </section>

      {/* --- FOOTER SIMPLIFIÉ --- */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          <img src={logo} alt="Magis Logo" className="h-12 w-auto mb-6 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" />
          <p className="text-gray-400 text-sm">© 2024 Magis Digitals. Excellence in Engineering.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;