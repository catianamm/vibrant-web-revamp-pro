
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter bg-black">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
