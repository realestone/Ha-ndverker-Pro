import Slider from "react-slick";
import { Clock, FileCheck, CheckCircle2 } from "lucide-react";

export function AppPreview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dotsClass: "slick-dots !bottom-[-40px]",
  };

  const screens = [
    {
      title: "1. Jobb-oversikt",
      description: "Oversikt over alle aktive jobber og timer",
      icon: Clock,
      bgColor: "from-[#2A2A2A] to-[#1F1F1F]",
      content: (
        <div className="space-y-4 p-6">
          <div className="bg-[#333] rounded-xl p-4 border border-[#444]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-semibold">Elektroarbeid - Oslo</span>
              <span className="text-[#C9A227] text-sm">Aktiv</span>
            </div>
            <div className="text-sm text-[#B0B0B0] space-y-1">
              <p>Kunde: Oslobygg AS</p>
              <p>Timer denne uke: 12.5t</p>
              <p>Siste oppdatering: I dag 14:30</p>
            </div>
          </div>
          <div className="bg-[#333] rounded-xl p-4 border border-[#444]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-semibold">Vedlikehold - Drammen</span>
              <span className="text-[#666] text-sm">Klar til faktura</span>
            </div>
            <div className="text-sm text-[#B0B0B0] space-y-1">
              <p>Kunde: Bærum Eiendom</p>
              <p>Timer totalt: 24t</p>
              <p>Timelønn: 950 kr</p>
            </div>
          </div>
          <div className="bg-[#333] rounded-xl p-4 border border-[#444]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-semibold">Installasjon - Asker</span>
              <span className="text-[#4CAF50] text-sm">Fullført</span>
            </div>
            <div className="text-sm text-[#B0B0B0] space-y-1">
              <p>Kunde: Asker Byggeservice</p>
              <p>Timer totalt: 8t</p>
              <p>Fakturert: 7 600 kr</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. Forhåndsvisning av faktura",
      description: "Generer faktura automatisk fra registrerte timer",
      icon: FileCheck,
      bgColor: "from-[#2A2A2A] to-[#1F1F1F]",
      content: (
        <div className="space-y-4 p-6">
          <div className="bg-[#333] rounded-xl p-4 border border-[#C9A227]/30">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-white">FAKTURA</h3>
              <p className="text-sm text-[#B0B0B0]">Fakturanr: 2025-001</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-[#444] pb-2">
                <span className="text-[#B0B0B0]">Til:</span>
                <span className="text-white font-semibold">Bærum Eiendom AS</span>
              </div>
              <div className="flex justify-between border-b border-[#444] pb-2">
                <span className="text-[#B0B0B0]">Org.nr:</span>
                <span className="text-white">999 888 777</span>
              </div>
              <div className="flex justify-between border-b border-[#444] pb-2">
                <span className="text-[#B0B0B0]">Arbeid:</span>
                <span className="text-white">Vedlikehold - Drammen</span>
              </div>
              <div className="flex justify-between border-b border-[#444] pb-2">
                <span className="text-[#B0B0B0]">Timer:</span>
                <span className="text-white">24t × 950 kr</span>
              </div>
              <div className="flex justify-between border-b border-[#444] pb-2">
                <span className="text-[#B0B0B0]">Subtotal:</span>
                <span className="text-white">22 800 kr</span>
              </div>
              <div className="flex justify-between border-b border-[#444] pb-2">
                <span className="text-[#B0B0B0]">MVA (25%):</span>
                <span className="text-white">5 700 kr</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[#C9A227] font-bold">TOTALT:</span>
                <span className="text-[#C9A227] font-bold text-lg">28 500 kr</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-[#C9A227] hover:bg-[#B89020] text-[#1A1A1A] font-semibold py-3 rounded-full">
              Send faktura
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "3. Faktura sendt!",
      description: "Bekreftelse og sporing av faktura",
      icon: CheckCircle2,
      bgColor: "from-[#1F3A1F] to-[#1A1A1A]",
      content: (
        <div className="space-y-4 p-6">
          <div className="bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-[#4CAF50]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Faktura sendt!</h3>
            <p className="text-[#B0B0B0] mb-6">
              Din faktura er nå sendt til Bærum Eiendom AS
            </p>
            
            <div className="bg-[#333] rounded-lg p-4 space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[#B0B0B0] text-sm">Fakturanummer:</span>
                <span className="text-white font-mono">2025-001</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#B0B0B0] text-sm">Sendt til:</span>
                <span className="text-white">post@baerumeiendom.no</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#B0B0B0] text-sm">Beløp:</span>
                <span className="text-[#C9A227] font-bold">28 500 kr</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#B0B0B0] text-sm">Forfallsdato:</span>
                <span className="text-white">14 dager</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#B0B0B0] text-sm">Status:</span>
                <span className="bg-[#C9A227]/20 text-[#C9A227] px-3 py-1 rounded-full text-xs">
                  Venter på betaling
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <button className="w-full bg-[#333] hover:bg-[#444] text-white font-semibold py-3 rounded-full">
                Vis PDF
              </button>
              <button className="w-full bg-transparent border border-[#444] hover:border-[#C9A227] text-white font-semibold py-3 rounded-full">
                Del på Vipps
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          Enkel arbeidsflyt
        </h2>
        <p className="text-center text-[#B0B0B0] text-lg mb-12">
          Fra timer til betaling på under ett minutt
        </p>
        
        <div className="app-preview-carousel pb-16">
          <Slider {...settings}>
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              return (
                <div key={index} className="px-2">
                  <div className="bg-[#242424] border border-[#333] rounded-3xl overflow-hidden">
                    {/* Screen Header */}
                    <div className={`bg-gradient-to-br ${screen.bgColor} p-6 border-b border-[#333]`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#C9A227]/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#C9A227]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{screen.title}</h3>
                          <p className="text-sm text-[#B0B0B0]">{screen.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Screen Content */}
                    <div className="min-h-[400px]">
                      {screen.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* Custom carousel styles */}
      <style>{`
        .app-preview-carousel .slick-prev,
        .app-preview-carousel .slick-next {
          width: 44px;
          height: 44px;
          z-index: 10;
        }
        
        .app-preview-carousel .slick-prev {
          left: -22px;
        }
        
        .app-preview-carousel .slick-next {
          right: -22px;
        }
        
        .app-preview-carousel .slick-prev:before,
        .app-preview-carousel .slick-next:before {
          font-size: 44px;
          opacity: 0.5;
          color: #C9A227;
        }
        
        .app-preview-carousel .slick-prev:hover:before,
        .app-preview-carousel .slick-next:hover:before {
          opacity: 1;
        }
        
        .app-preview-carousel .slick-dots li button:before {
          color: #C9A227;
          opacity: 0.3;
          font-size: 10px;
        }
        
        .app-preview-carousel .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #C9A227;
        }

        @media (max-width: 768px) {
          .app-preview-carousel .slick-prev {
            left: 10px;
          }
          
          .app-preview-carousel .slick-next {
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
}