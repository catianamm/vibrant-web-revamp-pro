
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-gradient-to-b from-[#1c1532] via-[#3a1254] to-[#1c1532] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Tenha seu site feito pela VibrantSs
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Faremos o seu site do seu jeito
            </p>
            <div className="pt-6">
              <Button size="lg" className="rounded-full text-lg font-medium bg-white text-black hover:bg-white/90">
                Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
