import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Layers, ShieldCheck, BarChart3, Cloud, Layout, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Liste des services identique au footer avec icônes adaptées
  const menuServices = [
    { title: 'Conseil & Stratégie', icon: <Layers className="w-5 h-5" />, desc: 'Alignement IT & Business' },
    { title: 'Cybersécurité', icon: <ShieldCheck className="w-5 h-5" />, desc: 'Protection de vos actifs' },
    { title: 'Business Intelligence', icon: <BarChart3 className="w-5 h-5" />, desc: 'Analyse de données IA' },
    { title: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" />, desc: 'Infrastructure agile' },
    { title: 'Développement Web', icon: <Layout className="w-5 h-5" />, desc: 'Solutions sur mesure' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 py-4 lg:px-8 ${
      isScrolled 
      ? "bg-[#002955]/90 backdrop-blur-2xl border-b border-white/10 py-3" 
      : "bg-transparent py-6"
    }`}>
      <div className="w-full max-w-[95%] mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
           <img 
              src={logo} 
              alt="Magis Digitals Logo" 
              className="h-20 lg:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300" 
           />
        </div>
        
        {/* MENU CENTRAL */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-lg font-bold tracking-wide text-gray-200">
           <Link to="/" className="hover:text-[#16e3f4] transition-colors relative group">
              Acceuil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
           </Link>

           {/* DROPDOWN SERVICES */}
           <div 
             className="relative"
             onMouseEnter={() => setIsServicesOpen(true)}
             onMouseLeave={() => setIsServicesOpen(false)}
           >
             <button className={`flex items-center gap-1 hover:text-[#16e3f4] transition-colors py-2 ${isServicesOpen ? 'text-[#16e3f4]' : ''}`}>
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#16e3f4] transition-all ${isServicesOpen ? 'w-full' : 'w-0'}`}></span>
             </button>

             <AnimatePresence>
               {isServicesOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-4 w-[320px]"
                 >
                   <div className="bg-[#002955] border border-white/10 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-3xl">
                     <div className="p-4 grid gap-2">
                       {menuServices.map((item, idx) => (
                         <a 
                           key={idx} 
                           href="#" 
                           className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group"
                         >
                           <div className="w-10 h-10 rounded-xl bg-[#16e3f4]/10 flex items-center justify-center text-[#16e3f4] group-hover:bg-[#16e3f4] group-hover:text-[#002955] transition-all">
                             {item.icon}
                           </div>
                           <div>
                             <div className="text-sm font-bold text-white group-hover:text-[#16e3f4] transition-colors">{item.title}</div>
                             <div className="text-[11px] text-gray-400 font-medium">{item.desc}</div>
                           </div>
                         </a>
                       ))}
                     </div>
                     <div className="bg-white/5 p-4 border-t border-white/5">
                        <a href="#" className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-[#16e3f4] hover:text-white transition-colors">
                          Voir tous les détails <ArrowRight className="w-4 h-4" />
                        </a>
                     </div>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           <a href="#" className="hover:text-[#16e3f4] transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
           </a>
           <a href="#" className="hover:text-[#16e3f4] transition-colors relative group">
              Projets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
           </a>
           <a href="#" className="hover:text-[#16e3f4] transition-colors relative group">
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
           </a>
           <Link to="/contact" className="hover:text-[#16e3f4] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#16e3f4] transition-all group-hover:w-full"></span>
           </Link>
        </div>
        
        {/* BOUTON REJOINDRE */}
        <div className="flex-shrink-0">
          <button className="bg-[#fec389] text-[#002955] px-10 py-4 rounded-full font-black text-lg hover:bg-[#ffc289] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#fec389]/20">
            Nous Rejoindre
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;