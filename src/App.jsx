import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/services';
import ContactPage from './pages/contacts/ContactPage';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Composant Chat Flottant avec animation d'entrée
const FloatingChat = () => (
  <motion.button 
    initial={{ opacity: 0, scale: 0, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-10 right-10 w-20 h-20 bg-[#16e3f4] text-[#002955] rounded-full shadow-[0_20px_50px_rgba(22,227,244,0.4)] flex items-center justify-center z-[100] border-4 border-white"
    onClick={() => window.open('https://wa.me/237693250319', '_blank')}
  >
    <MessageSquare size={32} />
    <span className="absolute -top-2 -right-4 bg-[#fec389] text-[#002955] px-3 py-1 rounded-full text-[10px] font-black shadow-lg border border-white whitespace-nowrap">
        EXPERT EN LIGNE
    </span>
  </motion.button>
);

function App() {
  return (
    <Router>
      {/* Placer le FloatingChat ici permet de l'afficher sur TOUTES les pages 
          car il est en dehors du composant <Routes> 
      */}
      <FloatingChat />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;