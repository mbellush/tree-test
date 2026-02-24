import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "A comprehensive on-site assessment of your landscape's health and structural needs."
  },
  {
    number: "02",
    title: "Strategic Plan",
    description: "Development of a surgical management plan tailored to your property's unique requirements."
  },
  {
    number: "03",
    title: "Elite Execution",
    description: "Implementation by our certified team using state-of-the-art rigging and safety systems."
  },
  {
    number: "04",
    title: "Pristine Restoration",
    description: "Complete site cleanup, leaving your landscape in a state of refined perfection."
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-brand-dark text-brand-light overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-6">Our Methodology</h2>
            <h3 className="text-6xl md:text-8xl font-serif leading-tight">
              The Standard <br />
              <span className="italic">Of Care.</span>
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-24 bg-brand-accent/30" />
            <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">Seamless Integration</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              <div className="text-[10rem] font-serif font-bold text-white/5 absolute -top-24 -left-8 pointer-events-none transition-colors duration-700 group-hover:text-brand-accent/10">
                {step.number}
              </div>
              <div className="relative z-10">
                <h4 className="text-3xl font-serif mb-6 group-hover:text-brand-accent transition-colors duration-500">{step.title}</h4>
                <p className="text-brand-light/40 text-lg leading-relaxed font-light max-w-xs">
                  {step.description}
                </p>
              </div>
              <div className="mt-12 h-[1px] w-0 bg-brand-accent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
