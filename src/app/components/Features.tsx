import { Smartphone, Zap, MapPin, RefreshCw } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Timeføring på mobilen",
      description: "Registrer timer rett på byggeplassen. Aldri glem en fakturerbar time.",
      comingSoon: false,
    },
    {
      icon: Zap,
      title: "Faktura med ett klikk",
      description: "Timer → Faktura → Send. Ferdig.",
      comingSoon: false,
    },
    {
      icon: MapPin,
      title: "Norsk format",
      description: "MVA, KID, org.nr — alt er på plass.",
      comingSoon: false,
    },
    {
      icon: RefreshCw,
      title: "Synk med Fiken",
      description: "Eksporter til regnskapet ditt automatisk.",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">
          Laget for håndverkere
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-[#242424] border border-[#333] rounded-2xl p-8 hover:border-[#C9A227]/50 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#C9A227]/10">
                    <Icon className="w-7 h-7 text-[#C9A227]" />
                  </div>
                  {feature.comingSoon && (
                    <Badge className="bg-[#C9A227]/20 text-[#C9A227] border-[#C9A227]/30">
                      Kommer snart
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#B0B0B0]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Coming Soon Features */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Badge className="bg-[#242424] text-[#666] border-[#333] px-4 py-2">
            Vipps-betaling
          </Badge>
          <Badge className="bg-[#242424] text-[#666] border-[#333] px-4 py-2">
            Fiken-integrasjon
          </Badge>
        </div>
      </div>
    </section>
  );
}
