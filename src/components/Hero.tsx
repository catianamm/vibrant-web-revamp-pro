
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              We Create <span className="gradient-text">Digital Experiences</span> That Matter
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Transforming businesses through innovative website design and strategic digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-purple text-brand-purple hover:text-brand-purple/90 text-lg"
              >
                Our Portfolio
              </Button>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">100+ clients</span> trust our agency
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white p-2 rounded-2xl shadow-xl animate-bounce-subtle">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-brand-purple/20 rounded-full mx-auto flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-500">Hero image or video here</p>
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
