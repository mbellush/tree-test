import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const cities = [
  "Dallas", "Fort Worth", "Plano", "Arlington", "Irving", "Garland", 
  "Frisco", "McKinney", "Grand Prairie", "Carrollton", "Denton", "Richardson"
];

export default function ServiceArea() {
  return (
    <section className="section-padding bg-brand-muted relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-8">Local Presence</h2>
            <h3 className="text-6xl md:text-8xl font-serif leading-tight mb-12">
              Serving the <br />
              <span className="italic">Metroplex.</span>
            </h3>
            <p className="text-xl text-brand-dark/50 mb-16 max-w-xl leading-relaxed font-light">
              From the urban core of Dallas to the expansive estates of Frisco and McKinney, 
              our specialized fleet is strategically deployed across North Texas.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-12">
              {cities.map((city, i) => (
                <motion.div 
                  key={city}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-brand-dark/40 hover:text-brand-accent transition-colors cursor-default group"
                >
                  <MapPin size={14} className="group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-medium tracking-widest uppercase">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2070&auto=format&fit=crop" 
                alt="Dallas Skyline" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -left-12 bg-brand-dark p-10 rounded-[2rem] text-brand-light shadow-2xl max-w-xs border border-white/5"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <MapPin size={28} />
                </div>
                <p className="font-serif text-2xl font-bold">Rapid Deployment</p>
              </div>
              <p className="text-brand-light/50 text-sm leading-relaxed font-light">
                Our strategic dispatch centers ensure we reach most DFW locations 
                within 60 minutes for high-priority emergency calls.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
