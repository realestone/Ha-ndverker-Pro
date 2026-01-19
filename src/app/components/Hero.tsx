import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Faktura på<br />
              <span className="text-[#C9A227]">30 sekunder</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#B0B0B0] mb-8">
              Før timer. Send faktura. Få betalt.<br />
              Alt fra mobilen.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0 mb-6">
              <Input 
                type="email" 
                placeholder="din@epost.no" 
                className="bg-[#242424] border-[#333] text-white placeholder:text-[#666] h-12 rounded-full px-6 flex-1"
              />
              <Button className="bg-[#C9A227] hover:bg-[#B89020] text-[#1A1A1A] font-semibold rounded-full px-8 h-12 whitespace-nowrap">
                Registrer deg
              </Button>
            </div>

            <p className="text-sm text-[#666]">
              Kommer snart — registrer deg for tidlig tilgang
            </p>
          </div>

          {/* Right: App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1578242174372-e26b3681587f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc2ODgyNzc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Håndverker Pro app on iPhone"
                className="w-full max-w-sm rounded-3xl shadow-2xl"
              />
              {/* Gold glow effect */}
              <div className="absolute inset-0 bg-[#C9A227]/10 blur-3xl -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
