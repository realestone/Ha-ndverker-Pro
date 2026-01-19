import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F] border-t border-[#333]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#666] text-sm">
            © 2025 Håndverker Pro
          </p>

          {/* Social & Contact */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-[#666] hover:text-[#C9A227] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hei@håndverkerpro.no" 
              className="text-[#666] hover:text-[#C9A227] transition-colors text-sm"
            >
              Kontakt: hei@håndverkerpro.no
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
