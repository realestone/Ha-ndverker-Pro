import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Klar til å spare tid?
        </h2>

        {/* Email Signup */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
          <Input 
            type="email" 
            placeholder="din@epost.no" 
            className="bg-[#242424] border-[#333] text-white placeholder:text-[#666] h-14 rounded-full px-6 flex-1 text-lg"
          />
          <Button className="bg-[#C9A227] hover:bg-[#B89020] text-[#1A1A1A] font-semibold rounded-full px-10 h-14 text-lg whitespace-nowrap">
            Få tidlig tilgang
          </Button>
        </div>

        <p className="text-sm text-[#666]">
          Helt gratis å registrere seg. Ingen spam.
        </p>
      </div>
    </section>
  );
}
