import { motion } from "motion/react";
import { Scissors, Zap, Trash2, Sprout, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Precision Trimming",
    description: "Arborist-led pruning to enhance structural integrity and aesthetic balance.",
    icon: <Scissors size={24} />,
    size: "lg",
    image: "https://images.unsplash.com/photo-1592150621344-c7a4c422d475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Emergency Response",
    description: "24/7 rapid deployment for storm damage and hazardous limb removal.",
    icon: <Zap size={24} />,
    size: "sm",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
  },
  {
    title: "Technical Removal",
    description: "Safe extraction of high-risk trees using advanced rigging systems.",
    icon: <Trash2 size={24} />,
    size: "sm",
    image: "https://images.unsplash.com/photo-1541433131-9482174601aa?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Health Assessments",
    description: "Deep-root fertilization and disease management for long-term vitality.",
    icon: <Sprout size={24} />,
    size: "lg",
    image: "https://images.unsplash.com/photo-1464241353125-b3058f71085c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-muted">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-6">Our Expertise</h2>
            <h3 className="text-6xl md:text-8xl font-serif leading-tight">
              Surgical Precision. <br />
              <span className="italic">Arborist Care.</span>
            </h3>
          </div>
          <p className="max-w-md text-brand-dark/50 text-xl leading-relaxed font-light">
            We combine traditional craftsmanship with modern technology to manage 
            your landscape's most valuable assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-brand-dark ${
                service.size === "lg" ? "md:col-span-2 aspect-[16/10]" : "md:col-span-1 aspect-square"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 backdrop-blur-md flex items-center justify-center text-brand-accent border border-brand-accent/20">
                    {service.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-3xl font-serif text-brand-light mb-4">{service.title}</h4>
                  <p className="text-brand-light/50 text-sm leading-relaxed max-w-xs">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
