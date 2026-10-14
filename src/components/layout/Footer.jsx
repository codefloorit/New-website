import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { siteConfig } from "../../data/siteConfig";
import { itServices } from "../../data/itServices";
import { taxServices } from "../../data/taxServices";
import logo from "../../assets/codefloor-it-logo.webp";
import logoSmall from "../../assets/codefloor-it-logo-160.webp";

const Footer = () => {
  const featuredTax = taxServices.slice(0, 5);
  const companyLinks = [
    { label: "About Codefloor IT", path: "/about" },
    { label: "Our Work", path: "/work" },
    { label: "Insights", path: "/insights" },
    { label: "FAQs", path: "/faqs" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full relative bg-[#0B1220] border-t border-white/10 pt-20 pb-8 overflow-hidden text-white/80">
      {/* Subtle background signature grid alignment */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Newsletter Strip */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
          <div className="text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
              Practical web and software insights
            </h2>
            <p className="text-white/60 text-sm mt-1.5">
              Guides on website cost, web applications, speed and modernization.
            </p>
          </div>
          {/* No mailing list exists yet, so link to the articles instead of
              collecting emails that go nowhere. */}
          <Link
            to="/insights"
            className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black px-6 py-3 text-sm font-semibold flex-shrink-0 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-95 transition duration-300"
          >
            Read our insights <Send size={15} />
          </Link>
        </div>

        {/* Link Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-16 mb-14">
          {/* Brand Presentation Column */}
          <div className="sm:col-span-2 flex flex-col gap-4">
            <Link to="/" aria-label="Codefloor IT home" className="inline-block self-start group transition duration-300">
              <img
                src={logo}
                srcSet={`${logoSmall} 160w, ${logo} 320w`}
                sizes="80px"
                alt="Codefloor IT logo"
              width={320}
              height={320}
              loading="lazy"
                className="h-20 w-auto object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex gap-2.5 mt-2">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column: Services */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Services
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              {itServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Company */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Company
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-[#D4AF37] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Tax Services */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Tax & Financial
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              {featuredTax.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/tax-services/${s.slug}`}
                    className="hover:text-[#D4AF37] transition-colors line-clamp-1"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/tax-services"
                  className="text-[#D4AF37] font-medium hover:underline transition-colors flex items-center gap-1"
                >
                  All tax services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Contact Details */}
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Contact
            </h2>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#D4AF37] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-mono tracking-wide order-2 sm:order-1">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/50 order-1 sm:order-2">
            <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-[#D4AF37] transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="hover:text-[#D4AF37] transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;