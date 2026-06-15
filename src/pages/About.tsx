import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-5xl font-bold mb-8 text-white">About <span className="text-primary">Me</span></h1>
        <div className="prose prose-invert lg:prose-xl text-secondary space-y-6">
          <p>
            I am a passionate Full-Stack Developer with a focus on creating beautiful, 
            functional, and user-centered digital experiences.
          </p>
          <p>
            With expertise in the MERN stack and modern CSS frameworks like Tailwind, 
            I bridge the gap between complex backend logic and premium frontend design.
          </p>
          <h3 className="text-white text-2xl font-bold mt-12">My Journey</h3>
          <p>
            From building simple landing pages to developing complex authentication systems 
            and kitchen management platforms, I've always been driven by the desire 
            to solve real-world problems through code.
          </p>
        </div>
      </motion.div>
    </div>
  );
}