
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
    icon: <LayoutGrid className="h-10 w-10 text-brand-purple" />,
    title: "Website Design",
    description: "Stunning, responsive websites that captivate your audience and drive conversions."
  },
  {
    icon: <Code className="h-10 w-10 text-brand-purple" />,
    title: "Web Development",
    description: "Custom web applications and e-commerce solutions built with cutting-edge technologies."
  },
  {
    icon: <Search className="h-10 w-10 text-brand-purple" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website."
  },
  {
    icon: <BarChart className="h-10 w-10 text-brand-purple" />,
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your digital marketing strategies and ROI."
  },
  {
    icon: <Mail className="h-10 w-10 text-brand-purple" />,
    title: "Email Marketing",
    description: "Engaging email campaigns that nurture leads and boost customer retention."
  },
  {
    icon: <Camera className="h-10 w-10 text-brand-purple" />,
    title: "Content Creation",
    description: "High-quality content that tells your brand story and connects with your audience."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto mb-6"></div>
          <p className="text-gray-600">
            We provide comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-gray-100">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
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

export default Services;
