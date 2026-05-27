import { Linkedin, Mail } from "lucide-react";
import { SITE } from "@/data/site";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-px mx-auto max-w-7xl py-6 sm:py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* LEFT: Email */}
        <a
          href={`mailto:${SITE.email}?subject=Inquiry`}
          className="flex items-center gap-3 text-white transition-colors duration-200 hover:text-gold hover:underline cursor-pointer"
          aria-label="Email us"
        >
          <Mail size={18} className="text-gold" />
          <span className="text-sm sm:text-base font-medium">{SITE.email}</span>
        </a>

        {/* CENTER: LinkedIn */}
        <div className="flex items-center">
          <div className="hidden md:block w-px h-6 bg-white/20 mx-6"></div>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-white hover:text-[#0A66C2] transition-colors duration-200"
          >
            <Linkedin size={20} className="text-[#0A66C2]" />
            <span className="text-sm sm:text-base font-medium">LinkedIn</span>
          </a>
          <div className="hidden md:block w-px h-6 bg-white/20 mx-6"></div>
        </div>

        {/* RIGHT: Copyright */}
        <div className="text-white text-xs sm:text-sm text-center md:text-right">
          © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
