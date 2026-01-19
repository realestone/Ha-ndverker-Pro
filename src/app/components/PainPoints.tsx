import { FileText, Clock, Banknote } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      icon: FileText,
      before: "Timer på tilfeldige lapper",
      after: "Timer rett i appen",
    },
    {
      icon: Clock,
      before: "Fakturering tar en hel kveld",
      after: "Faktura på 30 sekunder",
    },
    {
      icon: Banknote,
      before: "Venter 30+ dager på betaling",
      after: "Send med Vipps",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Bruker du fortsatt Excel, papir,<br />
          eller glemmer du å fakturere?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-[#1A1A1A] border border-[#333] rounded-2xl p-6 hover:border-[#C9A227]/50 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A227]/10 mb-4">
                  <Icon className="w-6 h-6 text-[#C9A227]" />
                </div>
                
                <div className="space-y-3">
                  <p className="text-[#B0B0B0] line-through">
                    {point.before}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-[#C9A227]"></div>
                    <span className="text-[#4CAF50] font-semibold">
                      {point.after}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
