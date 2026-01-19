import { Button } from "@/app/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-lg border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center">
              <span className="text-[#1A1A1A] font-bold text-lg">HP</span>
            </div>
            <span className="text-white font-semibold text-xl">Håndverker Pro</span>
          </div>

          {/* CTA Button */}
          <Button className="bg-[#C9A227] hover:bg-[#B89020] text-[#1A1A1A] font-semibold rounded-full px-6">
            Få tidlig tilgang
          </Button>
        </div>
      </div>
    </header>
  );
}
