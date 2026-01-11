import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, Calendar, MessageSquare, 
  Linkedin, Twitter, Facebook, Clock, ChevronDown, 
  Globe, Download, ArrowRight, ShieldCheck 
} from 'lucide-react';
import Navbar from '../../components/features/Navbar';
import Footer from '../../components/features/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    type: 'Demander un Audit'
  });

  const offices = [
    { city: "Douala", country: "Cameroun (Siège)", addr: "Akwa carrefour idéal", tel: "+237 693 250 319" },
    { city: "Paris", country: "France", addr: "Bureaux de liaison", tel: "Contact via siège" },
    { city: "Kinshasa", country: "RDC", addr: "Business Hub", tel: "Contact via siège" },
    { city: "Bangui", country: "RCA", addr: "Antenne locale", tel: "Contact via siège" }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-[#002955] min-h-screen overflow-hidden relative">
        
        {/* --- SECTION 1 : HERO & BACKGROUND EFFECTS --- */}
        <section className="relative pt-32 pb-20 px-4 bg-[#002955] overflow-hidden">
          {/* Background Effects (Ton thème bleu) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#16e3f4]/20 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06a0f8]/10 rounded-full blur-[100px] -ml-20 -mb-20" />
          
          <div className="w-full max-w-[90%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texte Header */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="inline-block px-5 py-2 rounded-full bg-[#16e3f4] text-[#002955] text-xs font-black uppercase tracking-[0.2em]">
                  Contactez l'excellence
                </div>
                <h1 className="text-6xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                  PARLEZ À UN <br />
                  <span className="text-[#16e3f4] italic">EXPERT</span>.
                </h1>
                <p className="text-xl text-gray-300 max-w-lg font-medium">
                  "L'innovation n'est rien sans un accompagnement de proximité."
                  <span className="block mt-2 text-sm font-black uppercase tracking-widest text-[#16e3f4]">
                    — Aurelien NSANGOUN, DG
                  </span>
                </p>
              </motion.div>

              {/* IMAGE INTEGRÉE (L'endroit particulier) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative h-[400px] lg:h-[500px] rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl"
              >
                <img 
                  src="https://i.pinimg.com/736x/c2/bd/78/c2bd78ee39e885e7be5a4c1b3ff5d59f.jpg" alt="Team Collaboration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002955]/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2 : INFOS & FORMULAIRE --- */}
        <div className="w-full max-w-[90%] mx-auto relative z-10 -mt-16 pb-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* COLONNE GAUCHE */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform">
                  <ShieldCheck size={80} className="text-[#06a0f8]" />
                </div>
                <h3 className="text-xl font-black uppercase mb-6 tracking-widest border-b pb-2">Direction Générale</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-black text-[#002955]">Aurelien NSANGOUN</p>
                    <p className="text-[#06a0f8] font-bold text-sm">Directeur Général</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-tighter">Fortinet Lead</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-tighter">Odoo Lead</span>
                  </div>
                  <div className="pt-4 space-y-2 font-bold">
                    <a href="tel:+237693250319" className="flex items-center gap-3 text-gray-600 hover:text-[#06a0f8] transition-colors">
                      <Phone size={18} /> +237 693 250 319
                    </a>
                    <a href="mailto:ansangoun@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-[#06a0f8] transition-colors">
                      <Mail size={18} /> ansangoun@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                <h3 className="text-3xl font-black italic flex items-center gap-3">
                  <Globe className="text-[#16e3f4]" /> Présence Mondiale
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {offices.map((office, idx) => (
                    <div key={idx} className="p-6 bg-white/80 backdrop-blur-sm border border-white rounded-3xl hover:bg-white transition-all shadow-sm group">
                      <p className="font-black text-lg text-[#002955] group-hover:text-[#06a0f8]">{office.city}</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{office.country}</p>
                      <p className="text-sm font-medium text-gray-500 italic leading-tight">{office.addr}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COLONNE DROITE (FORMULAIRE) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 bg-white rounded-[4rem] p-10 lg:p-16 shadow-2xl border border-gray-100"
            >
              <h2 className="text-4xl font-black mb-12 uppercase">Envoyer un <span className="text-[#06a0f8]">Message</span></h2>
              <form className="grid md:grid-cols-2 gap-8">
                {/* Inputs nettoyés (Pas de placeholders inutiles selon votre demande précédente) */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nom Complet *</label>
                  <input type="text" className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#16e3f4] font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Entreprise *</label>
                  <input type="text" className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#16e3f4] font-bold" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Message *</label>
                  <textarea rows="4" className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#16e3f4] font-bold"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="md:col-span-2 bg-[#002955] text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-xl shadow-[#06a0f8]/20 transition-all hover:bg-[#06a0f8]"
                >
                  Envoyer ma demande <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* --- FAQ & CTA (FOND GRIS) --- */}
        <div className="w-full max-w-[90%] mx-auto pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-black italic">FAQ Rapide</h3>
              {["Quels sont les délais d'audit ?", "Proposez-vous du support 24/7 ?"].map((q, i) => (
                <details key={i} className="group bg-white rounded-3xl border border-gray-100 p-6 cursor-pointer">
                  <summary className="font-black list-none flex justify-between items-center group-open:text-[#06a0f8]">
                    {q} <ArrowRight className="group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="mt-4 text-gray-500 font-medium">Réponse immédiate sous 24h ouvrées.</p>
                </details>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-[#fec389] to-[#ffc289] p-12 rounded-[4rem] text-[#002955] relative overflow-hidden group shadow-2xl">
              <h3 className="text-5xl font-black italic mb-6 leading-tight">PRENEZ UN RDV <br />DIRECTEMENT.</h3>
              <button className="bg-[#002955] text-white px-10 py-5 rounded-3xl font-black text-lg flex items-center gap-4">
                Planifier mon RDV <Calendar />
              </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContactPage;