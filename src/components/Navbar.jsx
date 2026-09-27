import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar({ onInvoiceClick, onOpenAbout, onOpenContact, onOpenKitchen, onOpenCarpentry, onGoHome, isContactPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 py-8 flex justify-between items-center">

        {/* Left Side: Logo and Menu */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              if (onGoHome) {
                e.preventDefault();
                onGoHome();
              }
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/materials/logo-min.webp" alt="Standard Kitchen Solutions" className="h-16 md:h-24 w-auto" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center text-[11px] font-bold tracking-[0.2em] uppercase">
            <li>
              <a 
                href="#home" 
                onClick={(e) => {
                  if (onGoHome) {
                    e.preventDefault();
                    onGoHome();
                  }
                }}
                className="hover:text-white/70 transition-colors"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={(e) => {
                  if (onOpenAbout) {
                    e.preventDefault();
                    onOpenAbout();
                  }
                }}
                className="hover:text-white/70 transition-colors"
              >
                About
              </a>
            </li>

            <li 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-white/70 transition-colors uppercase tracking-[0.2em]">
                Services
                <FaChevronDown size={10} />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="w-40 bg-white/10 backdrop-blur-xl rounded-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden py-2 text-center">
                    <a 
                      href="#kitchen" 
                      onClick={(e) => {
                        if (onOpenKitchen) {
                          e.preventDefault();
                          onOpenKitchen();
                        }
                        setServicesOpen(false);
                      }}
                      className="block px-4 py-3 hover:bg-white/20 transition-colors text-white tracking-[0.15em]"
                    >
                      KITCHEN
                    </a>
                    <a 
                      href="#carpentry" 
                      onClick={(e) => {
                        if (onOpenCarpentry) {
                          e.preventDefault();
                          onOpenCarpentry();
                        }
                        setServicesOpen(false);
                      }}
                      className="block px-4 py-3 hover:bg-white/20 transition-colors text-white tracking-[0.15em]"
                    >
                      CARPENTRY
                    </a>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
                className="hover:text-white/70 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Us Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className="border border-white/50 hover:bg-white hover:text-black transition-colors px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center">
          
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-6 text-3xl text-white"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col space-y-8 text-center text-sm font-bold tracking-[0.2em] uppercase text-white">
            <a
              href="#home"
              onClick={(e) => {
                if (onGoHome) {
                  e.preventDefault();
                  onGoHome();
                }
                setMenuOpen(false);
              }}
              className="hover:text-white/70 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) => {
                if (onOpenAbout) {
                  e.preventDefault();
                  onOpenAbout();
                }
                setMenuOpen(false);
              }}
              className="hover:text-white/70 transition-colors"
            >
              About
            </a>

            <div>
              <button
                className="flex items-center justify-between w-full hover:text-white/70 transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                SERVICES
                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col mt-4 space-y-4 text-xs text-white/70">
                  <a
                    href="#kitchen"
                    onClick={(e) => {
                      if (onOpenKitchen) {
                        e.preventDefault();
                        onOpenKitchen();
                      }
                      setMenuOpen(false);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    KITCHEN
                  </a>
                  <a
                    href="#carpentry"
                    onClick={(e) => {
                      if (onOpenCarpentry) {
                        e.preventDefault();
                        onOpenCarpentry();
                      }
                      setMenuOpen(false);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    CARPENTRY
                  </a>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
                setMenuOpen(false);
              }}
              className="hover:text-white/70 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;