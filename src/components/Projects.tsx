import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Homely Kitchen",
    description: "A premium food delivery and kitchen management system. Features a responsive UI, real-time order tracking, and a seamless checkout experience.",
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "StudyMate",
    description: "A collaborative learning platform for students. Includes real-time chat, resource sharing, and an interactive study group management system.",
    tech: ["Node.js", "MongoDB", "Socket.io", "React"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Multi-Role Auth System",
    description: "A secure authentication framework supporting Admin, Moderator, and User roles. Implements JWT, bcrypt, and protected route logic.",
    tech: ["Express", "PostgreSQL", "JWT", "React"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-secondary">
              A selection of my recent work, ranging from full-stack applications to complex authentication systems.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors">
            View All Projects <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group rounded-3xl overflow-hidden flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}