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
import Footer from '../components/features/Footer';
import Navbar from '../components/features/Navbar';
import TrustSection from '../components/features/TrustSection';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
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
      color: "from-[#06a0f8] to-[#16e3f4]"
    },
    {
      title: "Digitalisation Métier",
      description: "Transformation profonde de vos processus pour une agilité accrue et une réduction des coûts opérationnels.",
      icon: <Cpu className="w-10 h-10" />,
      tag: "Processus",
      color: "from-[#16e3f4] to-[#06a0f8]"
    },
    {
      title: "IA & Business Intelligence",
      description: "Exploitation de vos données grâce à l'intelligence artificielle pour des prises de décision prédictives.",
      icon: <BarChart3 className="w-10 h-10" />,
      tag: "Data Science",
      color: "from-[#fec389] to-[#ffc289]"
    },
    {
      title: "Sécurité & SI",
      description: "Protection de vos actifs numériques et mise en conformité de vos infrastructures critiques.",
      icon: <Lock className="w-10 h-10" />,
      tag: "Cybersécurité",
      color: "from-[#06a0f8] to-[#002955]"
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
    <div className="bg-[#002955] text-white font-sans selection:bg-[#16e3f4]/30 overflow-x-hidden">
      
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Professionnels travaillant sur un projet"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[#002955]/70 backdrop-grayscale-[10%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002955]/60 via-transparent to-[#002955]" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#06a0f8]/20 blur-[100px] md:blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#16e3f4]/10 blur-[100px] md:blur-[150px] rounded-full animate-pulse" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-full md:max-w-[80%] lg:max-w-[60%] text-center space-y-8 md:space-y-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#16e3f4]/30 bg-[#16e3f4]/10 text-[#16e3f4] text-[10px] md:text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16e3f4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16e3f4]"></span>
            </span>
            Transformation digitale
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black leading-[1.1] md:leading-none tracking-tighter">
            L'EXCELLENCE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16e3f4] via-[#06a0f8] to-[#fec389]">
              AU SERVICE DU FUTUR.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-0">
            Des solutions technologiques sur mesure pour les entreprises visionnaires qui souhaitent dominer leur marché.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-[#06a0f8] hover:bg-[#002955] border border-transparent hover:border-[#06a0f8] px-8 md:px-14 py-5 md:py-7 rounded-2xl md:rounded-3xl transition-all duration-300 font-black shadow-2xl shadow-[#06a0f8]/30 text-xl md:text-2xl">
              Découvrir <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 py-12 md:py-20 bg-white/[0.01] border-y border-white/5">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group p-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#16e3f4]/10 text-[#16e3f4] mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-[#16e3f4]/20 transition-all duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section id="services" className="relative bg-gray-100 text-[#002955] py-20 md:py-32 lg:py-48 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#06a0f8]/20 rounded-full blur-[80px] md:blur-[120px] -mr-32 -mt-32" />
        
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-16 md:mb-24 gap-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="inline-block px-5 py-2 rounded-full bg-[#06a0f8] text-white text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">
                Notre Savoir-Faire
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black tracking-tighter leading-[1] md:leading-[0.85] text-[#002955]">
                NOS <span className="text-[#06a0f8] italic">SERVICES</span>.
              </h2>
            </motion.div>
            
            <motion.div 
              className="max-w-xl space-y-6 md:space-y-8"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-medium leading-relaxed">
                Innovation, IA et performance pure. <span className="text-[#002955] font-black italic">Magis</span>.
              </p>
              <div className="h-1.5 md:h-2 w-20 md:w-24 bg-[#06a0f8] rounded-full mx-auto lg:mx-0" />
            </motion.div>
          </div>
      
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-8 p-4 md:p-5 inline-block w-fit rounded-2xl md:rounded-[2rem] bg-gradient-to-br ${service.color} text-white shadow-xl transform group-hover:rotate-6 transition-transform duration-500`}>
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">{service.icon}</div>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-6 md:w-8 bg-gray-200" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#06a0f8]">{service.tag}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#002955] group-hover:text-[#06a0f8] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
      
                  <div className="mt-10 flex items-center gap-4 pt-6 border-t border-gray-50">
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#06a0f8] group-hover:border-[#06a0f8] transition-all">
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#002955]">En savoir plus</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TrustSection />
      <Footer />
    </div>
  );
};

export default Home;