import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark text-brand-light pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="space-y-12">
            <img
              src="https://muhammadh29.sg-host.com/wp-content/uploads/2025/10/cropped-cropped-Ponce-Tree-Services-logo.png"
              alt="Logo"
              className="h-16 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <p className="text-brand-light/40 leading-relaxed font-light text-lg">
              North Texas's premier arborist-led tree management firm. 
              Committed to surgical precision and the preservation of 
              living legacies.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-12">Navigation</h4>
            <ul className="space-y-6">
              {["Expertise", "Legacy", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-brand-light/60 hover:text-brand-accent transition-colors text-lg font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-12">Expertise</h4>
            <ul className="space-y-6">
              {["Precision Trimming", "Technical Removal", "Emergency Response", "Arborist Consultation"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-brand-light/60 hover:text-brand-accent transition-colors text-lg font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-12">Contact</h4>
            <div className="space-y-6 text-brand-light/60 text-lg font-light">
              <p>Dallas-Fort Worth, Texas</p>
              <p><a href="tel:2145194046" className="hover:text-brand-accent transition-colors">214.519.4046</a></p>
              <p><a href="mailto:info@poncetreeservices.com" className="hover:text-brand-accent transition-colors">info@poncetreeservices.com</a></p>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-20">
            © {new Date().getFullYear()} Ponce Tree Services. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 hover:opacity-100 transition-all group"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
