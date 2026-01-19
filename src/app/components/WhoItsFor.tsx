import { Zap, Wrench, Hammer } from "lucide-react";

export function WhoItsFor() {
  const trades = [
    {
      icon: Zap,
      label: "Elektrikere",
    },
    {
      icon: Wrench,
      label: "Rørleggere",
    },
    {
      icon: Hammer,
      label: "Snekkere og tømrere",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
          Perfekt for:
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {trades.map((trade, index) => {
            const Icon = trade.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#C9A227]/10 flex items-center justify-center mb-4 border border-[#C9A227]/30">
                  <Icon className="w-10 h-10 text-[#C9A227]" />
                </div>
                <p className="text-xl text-white font-semibold">
                  {trade.label}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-xl text-[#B0B0B0] italic">
          "For deg som heller vil jobbe enn å sitte med papirarbeid"
        </p>
      </div>
    </section>
  );
}
