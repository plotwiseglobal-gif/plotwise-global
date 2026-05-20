import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const handleDropdownItemClick = (item: typeof servicesDropdownItems[0]) => {
    if (item.path) {
      navigate(item.path);
    }
    setServicesDropdownOpen(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
      <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-center flex-shrink-0">
          <Link to="/" className="flex items-center justify-center" onClick={() => setOpen(false)}>
            <img 
              src={logo} 
              alt="Plot Wise Global Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
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
                    <button
                      key={index}
                      onClick={() => handleDropdownItemClick(item)}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-black hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `flex items-center text-xs sm:text-sm font-medium transition-colors ${
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
                <div key={l.to}>
                  <button
                    onClick={handleServicesClick}
                    className="w-full py-2.5 sm:py-3 px-2 text-sm font-medium border-b border-gray-700 text-white/80 hover:text-yellow-400 text-left"
                  >
                    Services
                  </button>
                  
                  {/* Mobile Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="bg-gray-900 border-l-4 border-yellow-400">
                      {servicesDropdownItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleDropdownItemClick(item)}
                          className="w-full text-left py-2.5 px-6 text-sm text-white/70 hover:text-yellow-400 hover:bg-gray-800 transition-colors border-b border-gray-700"
                        >
                          {item.name}
                        </button>
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
