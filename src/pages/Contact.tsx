import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // For now, we simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      formRef.current?.reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let's build something <span className="text-primary">extraordinary</span>
            </h1>
            <p className="text-secondary text-lg mb-12">
              Whether you have a question or a project idea, my inbox is always open.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email Me</h3>
                  <p className="text-secondary">yourname@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Location</h3>
                  <p className="text-secondary">Available for Remote Work</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                  <input 
                    type="text" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                  <input 
                    type="email" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                <textarea 
                  required rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-primary hover:bg-indigo-600 disabled:bg-indigo-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                {isSending ? "Sending..." : "Send Message"} <Send size={18} />
              </button>

              {status === 'success' && <p className="text-emerald-500 text-center">Message sent!</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}