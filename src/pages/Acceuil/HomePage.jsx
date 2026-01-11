import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const stats = [
    { label: "CA 2023", value: "625M", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Collaborateurs", value: "+30", icon: <Users className="w-5 h-5" /> },
    { label: "Clients", value: "+14", icon: <Globe className="w-5 h-5" /> },
    { label: "Indépendant", value: "100%", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <>
    
  
    <div className="bg-[#05070A] text-white overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-amber-500/5 blur-[100px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 px-10 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-amber-400 text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Innovation sans cesse
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
              À L'HEURE OÙ TOUT <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-200 text-excentré">
                S'ACCÉLÈRE.
              </span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-xl font-bold leading-relaxed">
              Nous accompagnons les entreprises agiles dans la digitalisation, l’IA et la performance opérationnelle.
            </p>
            <div className="flex gap-6">
              <button className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition-all font-bold">
                Découvrir nos services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: yRange }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
                alt="Digital Transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent" />
            </div>
            {/* Element excentré flottant */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 z-20"
            >
              <p className="text-4xl font-bold">+14</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Clients satisfaits</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="flex justify-center text-amber-500 mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-gray-500 text-sm uppercase tracking-tighter">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
      </>
  );
};

export default HomePage;