import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import Projects from '../components/Projects'; // 1. Import Projects

const Home = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium mb-6 inline-block uppercase tracking-widest">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-white leading-tight"
          >
            Crafting Digital <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            I build modern, high-performance web applications with focus on user experience and robust architecture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all">
              View My Work <ArrowRight size={20} />
            </a>
            
            <div className="flex items-center gap-4">
              <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white">
                <Github size={20} />
              </a>
              <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section - 2. Place it here */}
      <Projects />
      
      {/* Footer Space */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-secondary text-sm">© {new Date().getFullYear()} YourName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;