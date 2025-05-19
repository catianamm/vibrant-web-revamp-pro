import { 
  LayoutGrid, 
  Search, 
  BarChart, 
  Mail, 
  Camera, 
  Code 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <LayoutGrid className="h-10 w-10 text-brand-purple_light" />,
    title: "Design de Websites",
    description: "Websites responsivos e impressionantes que cativam seu público e impulsionam conversões."
  },
  {
    icon: <Code className="h-10 w-10 text-brand-purple_light" />,
    title: "Desenvolvimento Web",
    description: "Aplicações web personalizadas e soluções de e-commerce construídas com tecnologias de ponta."
  },
  {
    icon: <Search className="h-10 w-10 text-brand-purple_light" />,
    title: "Otimização SEO",
    description: "Melhore seu posicionamento nos motores de busca e aumente o tráfego orgânico para seu site."
  },
  {
    icon: <BarChart className="h-10 w-10 text-brand-purple_light" />,
    title: "Analytics & Relatórios",
    description: "Insights orientados por dados para otimizar suas estratégias de marketing digital e ROI."
  },
  {
    icon: <Mail className="h-10 w-10 text-brand-purple_light" />,
    title: "Email Marketing",
    description: "Campanhas de email envolventes que nutrem leads e aumentam a retenção de clientes."
  },
  {
    icon: <Camera className="h-10 w-10 text-brand-purple_light" />,
    title: "Criação de Conteúdo",
    description: "Conteúdo de alta qualidade que conta a história da sua marca e se conecta com seu público."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <Button variant="outline" className="rounded-full text-lg font-medium bg-white text-black hover:bg-white/90 border-none">
            O que oferecemos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 glass-card bg-card/80">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
export default Services;
