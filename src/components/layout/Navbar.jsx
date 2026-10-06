import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "../../data/navData";
import logo from "../../assets/codefloor-it-logo.webp";
import logoSmall from "../../assets/codefloor-it-logo-160.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open to keep it premium
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Clean route synchronization
  useEffect(() => {
    setMobileOpen(false);
    setMobileSubOpen(null);
    setOpenMenu(null);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "top-0" 
          : "top-4 sm:top-5"
      }`}
    >
      <div 
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled 
            ? "max-w-full px-0" 
            : "max-w-7xl px-4 sm:px-6 lg:px-8"
        }`}
      >
        <nav
          className={`relative overflow-visible flex items-center justify-between transition-all duration-500 ease-out
          border-white/20 bg-[#0B1220]/90 backdrop-blur-3xl
          ${
            scrolled
              ? "h-[80px] sm:h-[90px] rounded-none border-b bg-[#0B1220]/95 px-6 sm:px-12 shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
              : "h-[92px] sm:h-[104px] rounded-full border px-4 sm:px-6 lg:px-8 shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
          }`}
        >
          {/* Logo Brand Zone */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src={logo}
              srcSet={`${logoSmall} 160w, ${logo} 320w`}
              sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 80px"
              alt="Codefloor IT logo"
              width={320}
              height={320}
              className={`w-auto transition-all duration-500 ease-out group-hover:scale-105 ${
                scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24 lg:h-28"
              }`}
            />

            {/* <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-lg sm:text-xl lg:text-2xl tracking-[0.10em] text-white">
                CODEFLOOR
              </span>
              <span className="text-[6px] sm:text-[7px] lg:text-[8px] uppercase tracking-[0.18em] text-[#D4AF37] font-medium mt-0.5 sm:mt-1">
                IT TECH LLP
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation Engine */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`} 
                    />
                  )}
                </NavLink>

                {/* Desktop Dropdown Menus */}
                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <m.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full pt-3 z-[9999] left-1/2 -translate-x-1/2"
                    >
                      <div
                        className={`rounded-2xl bg-[#0B1220]/90 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] ${
                          item.mega
                            ? "grid grid-cols-2 gap-2 w-[560px]"
                            : "flex flex-col w-64"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="px-4 py-2.5 rounded-xl text-sm text-white/80 hover:bg-white/10 hover:text-[#D4AF37] transition duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Interactive Target Action */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-black px-6 py-2.5 text-sm font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition duration-300"
            >
              Discuss Your Project
            </Link>
          </div>

          {/* Mobile Interactive Trigger Button */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 active:scale-95 transition-all"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`lg:hidden mt-3 mx-4 rounded-2xl overflow-hidden border border-white/10 bg-[#0B1220]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] max-h-[calc(100vh-120px)] overflow-y-auto transition-all duration-500 ${
              scrolled ? "mx-0 mt-0 rounded-t-none rounded-b-2xl" : ""
            }`}
          >
            <div className="p-4 sm:p-5 flex flex-col gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/5 last:border-none py-1"
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-3 px-2 text-left text-white/90 text-base font-medium rounded-xl hover:bg-white/5 transition"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`text-white/60 transition-transform duration-200 ${
                            mobileSubOpen === item.label ? "rotate-180 text-[#D4AF37]" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileSubOpen === item.label && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 flex flex-col gap-0.5 pb-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="py-2.5 px-3 text-white/70 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition text-sm block"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </m.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `w-full block py-3 px-2 text-base font-medium rounded-xl transition ${
                          isActive 
                            ? "text-[#D4AF37] bg-white/5" 
                            : "text-white/90 hover:bg-white/5"
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}

              <div className="pt-4 pb-2 mt-2 border-t border-white/5">
                <Link
                  to="/contact"
                  className="w-full block rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] py-3 text-center font-semibold text-black shadow-lg shadow-[#D4AF37]/10 active:scale-[0.99] transition-transform"
                  onClick={() => setMobileOpen(false)}
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;