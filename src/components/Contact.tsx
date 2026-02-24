import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-brand-light">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-8">Inquiries</h2>
            <h3 className="text-6xl md:text-8xl font-serif leading-tight mb-12">
              Begin Your <br />
              <span className="italic">Consultation.</span>
            </h3>
            
            <div className="space-y-12 mt-24">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-muted flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-light transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Call Directly</p>
                  <a href="tel:2145194046" className="text-3xl font-serif hover:text-brand-accent transition-colors">214.519.4046</a>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-muted flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-light transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Email Inquiries</p>
                  <a href="mailto:info@poncetreeservices.com" className="text-3xl font-serif hover:text-brand-accent transition-colors">info@poncetreeservices.com</a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-muted p-12 md:p-20 rounded-[3rem]"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Client Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-brand-dark/10 py-4 focus:outline-none focus:border-brand-accent transition-all font-serif text-xl"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-brand-dark/10 py-4 focus:outline-none focus:border-brand-accent transition-all font-serif text-xl"
                    placeholder="(214) 000-0000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Service Interest</label>
                <select className="w-full bg-transparent border-b border-brand-dark/10 py-4 focus:outline-none focus:border-brand-accent transition-all font-serif text-xl appearance-none">
                  <option>Precision Trimming</option>
                  <option>Technical Removal</option>
                  <option>Emergency Response</option>
                  <option>Arborist Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-dark/10 py-4 focus:outline-none focus:border-brand-accent transition-all font-serif text-xl resize-none"
                  placeholder="Describe your landscape needs..."
                />
              </div>

              <button className="w-full btn-premium bg-brand-dark text-brand-light hover:bg-brand-accent flex items-center justify-center gap-4 group">
                Submit Inquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
