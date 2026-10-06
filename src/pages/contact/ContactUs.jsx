import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import PageHero from "../../components/common/PageHero";
import ContactForm from "../../components/forms/ContactForm";
import Reveal from "../../components/common/Reveal";
import { siteConfig } from "../../data/siteConfig";

const ContactUs = () => {
  return (
    <>
      {/* Luxury Configured PageHero */}
      <PageHero
        eyebrow="Contact"
        title="Contact Codefloor IT"
        description="Tell us about your website or web application project. We are based in Ahmedabad, Gujarat, and reply within one business day."
        breadcrumbItems={[{ label: "Contact" }]}
      />

      <section className="relative overflow-hidden bg-[#060913] py-24 px-4 sm:px-6 lg:px-8 text-white w-full border-b border-white/5">
        {/* Spatial Heritage Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 relative z-10">
          
          {/* Info Column (Left Matrix) */}
          <Reveal direction="left" className="flex flex-col gap-6">
            {[
              { icon: MapPin, label: "Location", value: siteConfig.address },
              { icon: Phone, label: "Phone & WhatsApp", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s+/g, "")}` },
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Clock, label: "Working Hours", value: siteConfig.businessHours },
            ].map((item) => (
              <div 
                key={item.label} 
                className="relative bg-[#0A0F1A]/80 border border-white/5 p-5 flex gap-5 shadow-xl group transition-all duration-300 hover:border-[#D4AF37]/30"
              >
                {/* Traditional Framing Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60" />
                
                <span className="flex-shrink-0 flex h-12 w-12 items-center justify-center bg-[#0B1220] border border-white/10 text-[#F5D76E] transition-all duration-300 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/40">
                  <item.icon size={20} />
                </span>
                
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/60 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-serif text-white/90 leading-relaxed tracking-wide">
                    {item.href ? <a href={item.href} className="hover:text-[#F5D76E]">{item.value}</a> : item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Premium Social Vault Anchors */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: FaLinkedinIn, label: "LinkedIn", href: siteConfig.social.linkedin },
                { Icon: FaInstagram, label: "Instagram", href: siteConfig.social.instagram },
                { Icon: FaFacebookF, label: "Facebook", href: siteConfig.social.facebook },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Codefloor IT on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-none bg-[#0A0F1A] border border-white/10 text-white/50 hover:text-[#F5D76E] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>            
          </Reveal>

          {/* Form Column (Right Secure Ingestion Panel) */}
          <Reveal direction="right" delay={0.1} className="relative p-1 bg-[#0A0F1A]/50 border border-white/5 shadow-2xl">
            {/* Structural Accents over Form Block */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/40" />
            
            <div className="p-6 sm:p-10 bg-[#0A0F1A] border border-white/5">
              <div className="mb-6 space-y-1">
                <h2 className="text-xl font-serif font-bold tracking-wide">Send us a message</h2>
                <p className="text-sm text-white/50">Your message opens in WhatsApp, ready to send.</p>
              </div>
              <ContactForm />
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
};

export default ContactUs;