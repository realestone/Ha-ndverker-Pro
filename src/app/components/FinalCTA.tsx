import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "33d1bafa-9183-4c1a-bd8a-e5098d57a825");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Klar til å spare tid?
        </h2>

        {/* Email Signup */}
        {submitted ? (
          <div className="max-w-lg mx-auto mb-4 text-center">
            <p className="text-[#C9A227] text-xl font-semibold">Takk! 🎉</p>
            <p className="text-[#B0B0B0] mt-2">Vi gir deg beskjed når appen er klar.</p>
          </div>
        ) : (
          <>
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4"
            >
              <input type="hidden" name="subject" value="Ny påmelding - Håndverker Pro" />
              <Input
                type="email"
                name="email"
                required
                placeholder="din@epost.no"
                className="bg-[#242424] border-[#333] text-white placeholder:text-[#666] h-14 rounded-full px-6 flex-1 text-lg"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#C9A227] hover:bg-[#B89020] text-[#1A1A1A] font-semibold rounded-full px-10 h-14 text-lg whitespace-nowrap disabled:opacity-50"
              >
                {loading ? "Sender..." : "Få tidlig tilgang"}
              </Button>
            </form>

            <p className="text-sm text-[#666]">
              Helt gratis å registrere seg. Ingen spam.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
