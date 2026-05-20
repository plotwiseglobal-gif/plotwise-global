import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Mail, Linkedin, Phone } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X size={24} />
                  ) : (
                    <Menu size={24} />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/95 backdrop-blur-lg" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-80 bg-black border-l border-white/10 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm">PP</span>
                    </div>
                    <span className="text-white font-semibold text-xl">
                      ProductPursuit
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="w-full flex items-center justify-between p-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                          >
                            <span>{item.label}</span>
                            <motion.div
                              animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-2 space-y-1">
                                  {item.dropdown.map((dropdownItem) => (
                                    <a
                                      key={dropdownItem}
                                      href="#"
                                      className="block p-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                    >
                                      {dropdownItem}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="block p-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  <a
                    href="mailto:contact@productpursuit.co"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Mail size={18} />
                    <span>contact@productpursuit.co</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Phone size={18} />
                    <span>+1 (234) 567-890</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PremiumNavbar;
