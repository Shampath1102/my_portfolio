import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Cpu, Globe, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="text-blue-400" />,
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: <Database className="text-emerald-400" />,
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "JWT Auth"]
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="text-purple-400" />,
    skills: ["Git", "Postman", "Vercel", "Netlify", "Responsive Design"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            The modern tech stack I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl group transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-secondary hover:text-primary hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}