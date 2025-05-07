
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-dark relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Criamos <span className="gradient-text">Experiências Digitais</span> que Transformam
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Transformando negócios através de design inovador de websites e soluções estratégicas de marketing digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-purple text-white hover:bg-brand-purple/20 text-lg"
              >
                Nosso Portfólio
              </Button>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-background"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-background"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-background"></div>
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">100+ clientes</span> confiam em nossa agência
              </p>
            </div>
          </div>

          <div className="relative">            
            <div className="relative glass-card p-4 rounded-2xl shadow-xl animate-bounce-subtle">
              <div className="aspect-video rounded-xl overflow-hidden bg-brand-dark/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-400">Imagem ou vídeo do projeto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
