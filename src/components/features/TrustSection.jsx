import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Headphones, ShieldCheck, ChevronRight, ArrowUpRight } from 'lucide-react';

const TrustSection = () => {
  const partners = [
    { name: "CISCO", role: "Network & SmartNet", badge: "Certified Partner", color: "#16e3f4" },
    { name: "FORTINET", role: "Alliance Lead: A. Nsangoun", badge: "Security Leader", color: "#06a0f8" },
    { name: "ODOO", role: "Alliance Lead: A. Nsangoun", badge: "ERP Expert", color: "#fec389" },
    { name: "MICROSOFT", role: "Cloud & Solutions", badge: "Official Provider", color: "#16e3f4" }
  ];

  const whyUs = [
    { title: "Expertise Certifiée", desc: "Support de niveau constructeur via nos Alliances Leads.", icon: <Award /> },
    { title: "Présence Afrique", desc: "Cameroun, RDC, RCA : une maîtrise totale du terrain.", icon: <Zap /> },
    { title: "Support Premium", desc: "Accès direct ressources et prix préférentiels.", icon: <Headphones /> },
    { title: "Approche Métier", desc: "Solutions alignées sur vos enjeux business réels.", icon: <ShieldCheck /> }
  ];

  return (
    <div className="flex flex-col">
      
      {/* --- 1. ALLIANCES STRATÉGIQUES (FOND BLEU #002955) --- */}
      <section className="relative bg-[#002955] text-white py-32 lg:py-56 px-4 overflow-hidden">
        {/* Effets de halos lumineux */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#16e3f4]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#06a0f8]/10 blur-[120px] rounded-full" />

        <div className="w-full max-w-[85%] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 space-y-6"
          >
            <div className="inline-block px-6 py-2 rounded-full border border-[#16e3f4]/30 bg-[#16e3f4]/10 text-[#16e3f4] text-xs font-black uppercase tracking-[0.3em]">
              Nos Partenariats
            </div>
            <h2 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none italic uppercase">
              Alliances <span className="text-[#16e3f4] not-italic underline decoration-[#fec389]">Stratégiques</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15, borderColor: partner.color }}
                className="group relative p-12 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-xl transition-all duration-500 text-center"
              >
                {/* Lueur au survol */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[4rem]" 
                  style={{ backgroundColor: partner.color }}
                />
                
                <div 
                  className="w-24 h-24 mx-auto mb-10 rounded-full flex items-center justify-center text-4xl font-black border-4 transition-all duration-700 group-hover:rotate-[360deg] shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]"
                  style={{ borderColor: partner.color, color: partner.color }}
                >
                  {partner.name[0]}
                </div>
                <h4 className="text-3xl font-black mb-2 tracking-tighter uppercase">{partner.name}</h4>
                <p className="text-xs text-gray-400 font-bold mb-10 tracking-[0.2em] h-8 leading-tight">{partner.role}</p>
                <div 
                  className="inline-block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors group-hover:bg-white group-hover:text-[#002955]"
                  style={{ borderColor: `${partner.color}50`, color: partner.color }}
                >
                  {partner.badge}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. POURQUOI NOUS (FOND GRIS CLAIR #F3F4F6) --- */}
      <section className="relative bg-gray-100 text-[#002955] py-32 lg:py-56 px-4 overflow-hidden">
        {/* Halos doux pour le fond clair */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#06a0f8]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fec389]/5 blur-[130px] rounded-full" />

        <div className="w-full max-w-[85%] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-6 py-2 rounded-full bg-[#002955] text-white text-xs font-black uppercase tracking-[0.25em]">
                Savoir-Faire Magis
              </div>
              <h2 className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-[#002955]">
                POURQUOI <span className="text-[#06a0f8] italic">NOUS ?</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <p className="text-2xl lg:text-3xl text-gray-500 font-medium leading-relaxed">
                Plus de 14 leaders de l'industrie nous font confiance pour notre <span className="text-[#002955] font-black underline decoration-[#16e3f4] decoration-4 underline-offset-8">expertise terrain</span> certifiée.
              </p>
            </motion.div>
          </div>

          {/* Cartes blanches éclatantes sur fond gris */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -20, scale: 1.02 }}
                className="p-12 rounded-[3.5rem] bg-white border border-gray-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] transition-all duration-700 group"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-gray-50 flex items-center justify-center text-[#06a0f8] mb-10 group-hover:bg-[#06a0f8] group-hover:text-white transition-all duration-500 shadow-inner">
                  {React.cloneElement(item.icon, { size: 36 })}
                </div>
                <h3 className="text-3xl font-black mb-5 tracking-tight group-hover:text-[#06a0f8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs font-black text-[#002955] uppercase tracking-widest">Détails</span>
                  <ArrowUpRight className="text-[#06a0f8]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* BANNIÈRE CLIENTS (Impact visuel maximal) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-48 bg-[#002955] rounded-[5rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#16e3f4]/10 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-6xl lg:text-8xl font-black italic leading-none mb-6">14+ CLIENTS <br />SATISFAITS.</h3>
              <p className="text-[#16e3f4] text-xl font-bold tracking-[0.3em] uppercase">Cameroun • RDC • RCA</p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ffc289" }}
              className="relative z-10 bg-[#fec389] text-[#002955] px-16 py-8 rounded-[2.5rem] font-black text-2xl flex items-center gap-4 transition-all shadow-2xl shadow-black/20"
            >
              NOS RÉFÉRENCES <ChevronRight size={32} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrustSection;