import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
<footer className="relative bg-[#002955] text-white pt-24 pb-12 px-4 overflow-hidden border-t border-white/10">
      
      {/* 1. ON INSÈRE LES EFFETS ICI */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#16e3f4] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#ffc289] blur-[140px] rounded-full" />
      </div>

      {/* 2. LE CONTENU RESTE DANS SON CONTAINER RELATIF */}
      <div className="relative z-10 w-full max-w-[95%] mx-auto">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. INFO SOCIÉTÉ & LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col space-y-6">
              <img 
                src={logo} 
                alt="Magis Digitals" 
                className="h-50 w-auto object-contain self-start hover:scale-105 transition-transform" 
              />
              <div>
                <h3 className="text-3xl font-black tracking-tighter uppercase italic">Magis Digitals</h3>
                <p className="text-[#16e3f4] font-bold text-lg tracking-[0.2em]">Innovation & Expertise</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-xl leading-relaxed font-medium">
              Transformons vos idées en valeur depuis 2019. L'excellence technologique au service de votre croissance.
            </p>
            
            <div className="flex space-x-5">
              {[<Linkedin />, <Twitter />, <Facebook />].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, backgroundColor: "#06a0f8", color: "#002955" }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#16e3f4] transition-all duration-300 shadow-xl"
                >
                  {React.cloneElement(icon, { size: 24 })}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 2. SERVICES (Textes agrandis) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-2xl font-black mb-8 border-b-2 border-[#16e3f4] pb-2 inline-block">Nos Services</h4>
            <ul className="space-y-5">
              {['Conseil & Stratégie', 'Cybersécurité', 'Business Intelligence', 'Cloud & DevOps', 'Développement Web'].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 10, color: "#16e3f4" }}
                    className="text-gray-400 text-xl font-semibold flex items-center space-x-3 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-[#16e3f4]" />
                    <span>{service}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. CONTACT (Design épuré & large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-2xl font-black mb-8 border-b-2 border-[#16e3f4] pb-2 inline-block">Contact</h4>
            <div className="space-y-8 text-gray-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#16e3f4]" />
                </div>
                <span className="text-xl font-medium">
                  Akwa carrefour idéal<br/>
                  B.P: 7296 Douala, Cameroun
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Mail className="w-6 h-6 text-[#16e3f4]" />
                </div>
                <a href="mailto:magisdigitals@gmail.com" className="text-xl font-bold hover:text-[#16e3f4] transition-colors">
                  magisdigitals@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-[#16e3f4]" />
                </div>
                <a href="tel:+237693250319" className="text-2xl font-black text-white hover:text-[#16e3f4] transition-all">
                  +237 693 250 319
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4. NEWSLETTER (Bouton Premium) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-2xl font-black mb-8 border-b-2 border-[#16e3f4] pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-300 text-lg mb-6 font-medium leading-relaxed">
              Restez informé de nos dernières innovations technologiques.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#16e3f4] text-white text-lg transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(22, 227, 244, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-5 bg-[#16e3f4] text-[#002955] rounded-2xl font-black text-xl shadow-lg transition-all"
              >
                S'abonner maintenant
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* BAS DE PAGE */}
        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-lg font-medium">
          <p className="text-gray-500">
            © 2026 <span className="text-white">Magis Digitals</span>. Tous droits réservés.
          </p>
          
          <div className="flex flex-wrap justify-center gap-10">
            {['Mentions légales', 'Confidentialité', 'CGV'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-[#16e3f4] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;