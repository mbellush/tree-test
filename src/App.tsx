/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-gold selection:text-forest">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar - Refined */}
        <div className="bg-forest py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-center text-gold text-xs font-bold uppercase tracking-[0.4em] mb-16 opacity-60">Recognized Excellence</p>
            
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 mb-20">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Better_Business_Bureau_logo.svg/2560px-Better_Business_Bureau_logo.svg.png" 
                alt="BBB" 
                className="h-8 md:h-10 brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/HomeAdvisor_logo.svg/2560px-HomeAdvisor_logo.svg.png" 
                alt="HomeAdvisor" 
                className="h-6 md:h-7 brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Angi_logo.svg/2560px-Angi_logo.svg.png" 
                alt="Angi" 
                className="h-6 md:h-7 brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
              <div className="flex items-center gap-3 text-cream font-serif text-2xl">
                <span className="text-gold tracking-widest">★★★★★</span>
                <span className="text-sm uppercase tracking-widest font-bold opacity-50">Google Verified</span>
              </div>
            </div>

            {/* Mini Reviews Layout Demo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  whileHover={{ opacity: 1, scale: 1.02 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-[10px] font-bold">
                      JD
                    </div>
                    <div>
                      <p className="text-cream text-xs font-bold">John Doe</p>
                      <div className="text-gold text-[8px] tracking-tighter">★★★★★</div>
                    </div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_logo_2015.svg/2560px-Google_logo_2015.svg.png" 
                      alt="Google" 
                      className="h-3 ml-auto opacity-40" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-cream/60 text-xs leading-relaxed italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Services />
        <About />
        <Process />
        <ServiceArea />
        
        {/* Testimonials - Refined Editorial Layout */}
        <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-moss mb-4">Client Stories</h2>
                <h3 className="text-5xl md:text-7xl font-serif text-forest leading-tight">
                  Trusted by <br />
                  <span className="italic">North Texas.</span>
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-3xl font-serif font-bold text-forest">4.9/5</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Average Rating</p>
                </div>
                <div className="h-12 w-[1px] bg-forest/10" />
                <div className="text-gold text-xl tracking-tighter">★★★★★</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-cream/30 p-10 rounded-[2.5rem] text-left border border-forest/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-forest text-sm">Sarah Jenkins</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Plano, TX</p>
                  </div>
                </div>
                <div className="text-gold text-sm mb-4">★★★★★</div>
                <p className="text-xl font-serif italic text-forest leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  "Ponce Tree Services did an incredible job removing a massive oak. They were professional, fast, and left the yard cleaner than they found it."
                </p>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_logo_2015.svg/2560px-Google_logo_2015.svg.png" 
                  alt="Google" 
                  className="h-4 opacity-20" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-cream/30 p-10 rounded-[2.5rem] text-left border border-forest/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=michael" alt="Michael" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-forest text-sm">Michael Rodriguez</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Dallas, TX</p>
                  </div>
                </div>
                <div className="text-gold text-sm mb-4">★★★★★</div>
                <p className="text-xl font-serif italic text-forest leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  "We've used them for annual trimming for 5 years now. Their arborists really know their stuff. Our trees have never looked healthier."
                </p>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_logo_2015.svg/2560px-Google_logo_2015.svg.png" 
                  alt="Google" 
                  className="h-4 opacity-20" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-cream/30 p-10 rounded-[2.5rem] text-left border border-forest/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=david" alt="David" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-forest text-sm">David Thompson</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Fort Worth, TX</p>
                  </div>
                </div>
                <div className="text-gold text-sm mb-4">★★★★★</div>
                <p className="text-xl font-serif italic text-forest leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  "Juan and his team are the best in DFW. Fair pricing and exceptional work. They handled our emergency storm damage perfectly."
                </p>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_logo_2015.svg/2560px-Google_logo_2015.svg.png" 
                  alt="Google" 
                  className="h-4 opacity-20" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
