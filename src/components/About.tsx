import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-light overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop"
                alt="Arborist at work"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Detail */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-brand-dark p-12 rounded-[2rem] text-brand-light shadow-2xl"
            >
              <p className="text-6xl font-serif text-brand-accent mb-2">20+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Years of</p>
              <p className="text-sm uppercase tracking-[0.3em] font-bold">Excellence</p>
            </motion.div>

            {/* Decorative Grid */}
            <div className="absolute -left-12 -bottom-12 w-64 h-64 opacity-10 pointer-events-none -z-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-8">Our Legacy</h2>
            <h3 className="text-6xl md:text-8xl font-serif leading-tight mb-12">
              Texan Roots. <br />
              <span className="italic">Elite Standards.</span>
            </h3>
            
            <div className="space-y-8 text-xl text-brand-dark/60 leading-relaxed font-light">
              <p>
                Founded in the heart of Dallas, Ponce Tree Services has redefined 
                professional tree management through a commitment to arborist-led 
                excellence and surgical precision.
              </p>
              <p>
                We serve a discerning clientele who understand that their trees 
                are more than just landscape—they are living legacies that require 
                specialized, high-end care.
              </p>
              
              <div className="pt-12 flex items-center gap-8">
                <div className="flex flex-col">
                  <p className="font-serif text-2xl text-brand-dark">Juan Ponce</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Founder & Lead Arborist</p>
                </div>
                <div className="h-12 w-[1px] bg-brand-dark/10" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/1200px-Flag_of_Texas.svg.png"
                  alt="Texas Flag"
                  className="h-6 opacity-20 grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
