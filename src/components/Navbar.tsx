import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import logo from "../assets/plotwise_.png";

const servicesDropdownItems = [
  { name: "Find PG / Rentals", path: "/services/find-pg-rentals" },
  { name: "Investment Deals", path: "/services/investment-deals" },
  { name: "Asset Management", path: "/services/asset-management" },
  { name: "Marketing for Builders", path: "/services/marketing-builders" },
  { name: "Financial Advisory", path: "/services/financial-advisory" },
  { name: "Real Estate Aftercare", path: "/services/real-estate-aftercare" },
  { name: "Properties", path: "/properties" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideDesktop = dropdownRef.current?.contains(target);
      const isClickInsideMobile = mobileDropdownRef.current?.contains(target);

      if (!isClickInsideDesktop && !isClickInsideMobile) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServicesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setServicesDropdownOpen(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800 w-full">
      <div className="w-full flex items-center justify-between h-16 px-6 lg:px-12">
        <div className="flex items-center justify-center flex-shrink-0">
          <Link to="/" className="flex items-center justify-center" onClick={() => setOpen(false)}>
            <img 
              src={logo} 
              alt="Plot Wise Global Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 whitespace-nowrap">
          {NAV_LINKS.map((l) => (
            l.label === "Services" ? (
              <div
                key={l.to}
                ref={dropdownRef}
                className="relative flex items-center"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={handleServicesClick}
                  className="flex items-center text-xs sm:text-sm font-medium transition-colors text-white/80 hover:text-yellow-400"
                    type="button"
                >
                  Services
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-300 origin-top ${
                    servicesDropdownOpen 
                      ? 'opacity-100 scale-100 visible' 
                      : 'opacity-0 scale-95 invisible'
                  }`}
                >
                  {servicesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={handleDropdownItemClick}
                      className="w-full block text-left px-4 py-3 text-sm text-gray-700 hover:text-black hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `flex items-center text-sm font-medium transition-colors px-3 py-2 ${
                    isActive ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"
                  }`
                }
              >
                {l.label}
              </NavLink>
            )
          ))}
        </nav>

        <button
          className="lg:hidden text-white p-1.5 hover:text-gray-300"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black border-t border-gray-800 animate-in slide-in-from-top duration-200">
          <nav className="container-px mx-auto py-3 sm:py-4 flex flex-col gap-0.5">
            {NAV_LINKS.map((l) => (
              l.label === "Services" ? (
                <div key={l.to} ref={mobileDropdownRef}>
                  <button
                    onClick={handleServicesClick}
                    type="button"
                    className="w-full py-2.5 sm:py-3 px-2 text-sm font-medium border-b border-gray-700 text-white/80 hover:text-yellow-400 text-left"
                  >
                    Services
                  </button>
                  
                  {/* Mobile Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="bg-gray-900 border-l-4 border-yellow-400">
                      {servicesDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={handleDropdownItemClick}
                          className="w-full block text-left py-2.5 px-6 text-sm text-white/70 hover:text-yellow-400 hover:bg-gray-800 transition-colors border-b border-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 sm:py-3 px-2 text-sm font-medium border-b border-gray-700 ${
                      isActive ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
