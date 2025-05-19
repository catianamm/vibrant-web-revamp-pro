import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type PortfolioCategory = "all" | "web" | "marketing" | "branding";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "web",
    description: "Modern online store with seamless checkout process",
    image: "bg-gray-200",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "branding",
    description: "Complete brand redesign for a tech startup",
    image: "bg-gray-300",
  },
  {
    id: 3,
    title: "SEO Campaign",
    category: "marketing",
    description: "Increased organic traffic by 200% in 3 months",
    image: "bg-gray-400",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "web",
    description: "User-friendly interface for a fitness application",
    image: "bg-gray-500",
  },
  {
    id: 5,
    title: "Email Marketing",
    category: "marketing",
    description: "Automated campaigns with 40% open rate",
    image: "bg-gray-600",
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "web",
    description: "Professional website for a financial institution",
    image: "bg-gray-700",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <Button variant="outline" className="rounded-full text-lg font-medium bg-white text-black hover:bg-blue border-none">
            Nossos Projetos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group card-hover rounded-lg overflow-hidden">
              <div className={`${item.image} h-60 relative`}>
                <div className="absolute inset-0 bg-brand-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="rounded-full text-lg font-medium bg-white text-black hover:bg-white/90 border-none">
            Peça um orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
