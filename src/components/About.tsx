
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="aspect-square bg-gray-200 rounded-md"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 bg-white p-4 rounded-lg shadow-lg">
                <div className="aspect-video bg-gray-300 rounded-md"></div>
              </div>
              <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-brand-purple text-white p-4 rounded-full shadow-lg">
                <span className="text-xl font-bold">10+</span>
                <p className="text-xs">Years Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Agency</h2>
            <div className="h-1 w-20 bg-brand-purple mb-8"></div>
            <p className="text-gray-600 mb-8">
              Vibrant is a full-service digital marketing and web development agency dedicated to 
              helping businesses establish a strong online presence. With over 10 years of experience, 
              our team of creative minds and technical experts works together to deliver exceptional 
              digital solutions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-purple mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-semibold">Expert Team</span> - Our professionals stay at the forefront of digital trends
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-purple mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-semibold">Custom Solutions</span> - Tailored strategies designed for your specific business needs
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-purple mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-semibold">Results-Driven</span> - We focus on metrics that matter to your business growth
                </p>
              </div>
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
