
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      toast({
        title: "Inscrição realizada",
        description: "Você receberá nossas atualizações em breve!",
      });
      setEmail("");
    } else {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, insira seu email para se inscrever.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between py-12">
      {/* Header - Logo */}
      <div className="w-full container mx-auto flex justify-center">
        <img 
          src="https://vibrantss.com/wp-content/uploads/2025/05/logo_vibrants_texto.png" 
          alt="VibrantSs" 
          className="h-20 md:h-24"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 max-w-lg mx-auto">
        {/* Custom Image */}
        

        {/* Gradient Outline Text */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue border-2 border-transparent bg-clip-border" style={{
          WebkitTextStroke: '2px transparent',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(to right, #8E54E9, #4776E6)'
        }}>
          Em Breve
        </h1>
        
        <p className="text-xl text-white/90 mb-12 max-w-md">
          Estamos criando algo revolucionário para transformar sua experiência digital. Prepare-se para uma jornada incrível!
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="w-full mb-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button 
              type="submit" 
              className="rounded-full text-lg font-medium bg-white text-black hover:bg-white/90 border-none"
            >
              Assinar
            </Button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a href="#" className="text-white/80 hover:text-brand-purple transition-colors">
            <div className="bg-white/10 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </div>
          </a>
          <a href="#" className="text-white/80 hover:text-brand-purple transition-colors">
            <div className="bg-white/10 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
          </a>
          <a href="#" className="text-white/80 hover:text-brand-purple transition-colors">
            <div className="bg-white/10 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full text-center text-gray-400 mt-20">
        <p>© 2025 VibrantSs - Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default ComingSoon;
