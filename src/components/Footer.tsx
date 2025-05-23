
const Footer = () => {
  return (
    <footer className="bg-white text-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex justify-center md:justify-start">
            <img src="https://vibrantss.com/wp-content/uploads/2025/05/logo_vibrants_texto.png" alt="VibrantSs" className="h-32" />
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Páginas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black-400 hover:text-violet-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-black-400 hover:text-violet-400 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-black-400 hover:text-violet-400 transition-colors">Projetos</a></li>
              <li><a href="#about" className="text-black-400 hover:text-violet-400 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Utility pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black-400 hover:text-violet-400 transition-colors">Style Guide</a></li>
              <li><a href="#" className="text-black-400 hover:text-violet-400 transition-colors">Instructions</a></li>
              <li><a href="#" className="text-black-400 hover:text-violet-400 transition-colors">Licenses</a></li>
              <li><a href="#" className="text-black-400 hover:text-violet-400 transition-colors">Changelog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="px-4 py-2 bg-white/10 text-white rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-black text-white px-6 py-2 rounded-r-lg border border-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
