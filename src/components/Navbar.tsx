import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideDesktop = dropdownRef.current?.contains(target);
      const isClickInsideMobile = mobileDropdownRef.current?.contains(target);

      if (!isClickInsideDesktop && !isClickInsideMobile) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setServicesDropdownOpen((current) => !current);
  };

  const handleDropdownItemClick = () => {
    setServicesDropdownOpen(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex h-[80px] max-w-screen-2xl items-center justify-between px-6 lg:px-10 xl:px-16">
        <Link
          to="/"
          className="flex items-center flex-shrink-0"
          onClick={() => {
            setOpen(false);
            setServicesDropdownOpen(false);
          }}
        >
          <img src={logo} alt="Plot Wise Global Logo" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-10 flex-nowrap whitespace-nowrap">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.to}
                ref={dropdownRef}
                className="relative inline-flex h-full items-center"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={handleServicesClick}
                  type="button"
                  className="inline-flex h-full items-center text-sm font-medium leading-none text-white/80 transition-colors hover:text-yellow-400"
                >
                  Services
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 min-w-[220px] rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all duration-200 origin-top ${
                    servicesDropdownOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  {servicesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={handleDropdownItemClick}
                      className="block rounded-t-2xl px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-black first:rounded-t-2xl last:rounded-b-2xl border-b border-gray-100 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `inline-flex h-full items-center text-sm font-medium leading-none transition-colors ${
                    isActive ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:text-gray-300"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-800 bg-black">
          <nav className="mx-auto flex w-full max-w-screen-2xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div key={link.to} ref={mobileDropdownRef} className="space-y-1">
                  <button
                    onClick={handleServicesClick}
                    type="button"
                    className="w-full rounded-2xl border border-gray-700 bg-gray-900 px-4 py-3 text-left text-sm font-medium text-white/80 transition-colors hover:border-yellow-400 hover:text-yellow-400"
                  >
                    Services
                  </button>
                  {servicesDropdownOpen && (
                    <div className="space-y-1 rounded-2xl border border-yellow-400 bg-gray-900 p-1">
                      {servicesDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={handleDropdownItemClick}
                          className="block rounded-xl px-5 py-3 text-sm text-white/80 transition-colors hover:bg-gray-800 hover:text-yellow-400"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
