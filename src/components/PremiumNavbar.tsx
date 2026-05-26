import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: string[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    dropdown: [
      "IT / AI Services",
      "Marketing Services", 
      "Consultancy Services"
    ]
  },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg"
            : "bg-black border-b border-white/5"
        }`}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">PP</span>
                </div>
                <span className="text-white font-semibold text-xl tracking-tight">
                  ProductPursuit
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <div key={item.label} className="relative">
                    {item.dropdown ? (
                      <div
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                        className="relative"
                      >
                        <button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors duration-200 group">
                          <span className="relative">
                            {item.label}
                            <motion.span
                              className="absolute bottom-0 left-0 h-0.5 bg-yellow-400 origin-left"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                          </span>
                          <motion.div
                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} className="text-white/60" />
                          </motion.div>
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              onMouseEnter={handleDropdownMouseEnter}
                              onMouseLeave={handleDropdownMouseLeave}
                              className="absolute top-full left-0 mt-2 min-w-64"
                            >
                              <div className="bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm">
                                {item.dropdown.map((dropdownItem) => (
                                  <motion.a
                                    key={dropdownItem}
                                    href="#"
                                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 relative group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <span className="relative">
                                      {dropdownItem}
                                      <motion.span
                                        className="absolute bottom-0 left-0 h-0.5 bg-yellow-400 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                      />
                                    </span>
                                  </motion.a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="relative text-white/90 hover:text-white transition-colors duration-200 group"
                      >
                        <span className="relative">
                          {item.label}
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-yellow-400 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                        </span>
                      </a>
                    )}
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </motion.nav>


    </>
  );
};

export default PremiumNavbar;
