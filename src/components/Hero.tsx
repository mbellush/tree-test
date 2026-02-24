import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, MapPin, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden bg-black">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
          poster="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
        >
          <source 
            src="https://muhammadh29.sg-host.com/wp-content/uploads/2026/02/LANDING-VIDEO-REVISED-1.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Sophisticated Dark Overlay - Neutralized Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] text-cream mb-8 tracking-tighter">
              Tree Services <br />
              <span className="italic text-gold">in DFW.</span>
            </h1>
            
            <p className="text-xl text-cream/80 mb-12 max-w-xl leading-relaxed font-light">
              Experience the gold standard of tree care. From complex removals to 
              artistic pruning, we bring 20+ years of Texan expertise to your landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-20">
              <a href="#contact" className="bg-gold text-forest px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-white hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-gold/10">
                Request a Free Quote <ArrowRight size={20} />
              </a>
              <button className="flex items-center justify-center gap-4 group text-cream font-medium">
                <div className="w-14 h-14 rounded-full border border-cream/30 flex items-center justify-center group-hover:bg-cream group-hover:text-forest transition-all">
                  <Play size={20} fill="currentColor" />
                </div>
                <span className="uppercase tracking-widest text-sm">Watch Our Process</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-cream/10">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cream/40">Safety First</p>
                <p className="font-serif text-lg text-cream">Fully Insured</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cream/40">Expertise</p>
                <p className="font-serif text-lg text-cream">Certified Arborists</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cream/40">Availability</p>
                <p className="font-serif text-lg text-cream">24/7 Emergency</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cream/40">Experience</p>
                <p className="font-serif text-lg text-cream">20+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade to transition into the next forest section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-forest via-forest/20 to-transparent z-10" />
    </section>
  );
}
