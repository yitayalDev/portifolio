import profileImage from '../assets/yi.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 text-white">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black tracking-widest uppercase mb-2 animate-bounce">
              Available for New Projects
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Digital Stories
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-2xl font-medium">
              Professional Frontend Developer specializing in building high-performance,
              visually stunning web applications with Next.js and modern tech.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative bg-[#2563eb] text-white font-black py-4 px-12 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] active:scale-[0.98] border-2 border-white/20"
              >
                VIEW SHOWCASE
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-[#3b82f6] bg-[#1e40af]/30 text-white font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:bg-white hover:text-[#0f172a] hover:scale-[1.05] active:scale-[0.98]"
              >
                LET'S TALK
              </button>
            </div>
          </div>

          {/* Profile Image Showcase */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative group">
              {/* Outer Glows */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl group-hover:bg-blue-500/40 transition-all duration-700"></div>
              <div className="absolute -inset-4 rounded-full border-2 border-blue-500/10 animate-spin-slow"></div>

              {/* Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden border-8 border-white/5 shadow-2xl p-2 bg-[#0f172a]">
                <img
                  src={profileImage}
                  alt="Yitayal"
                  className="w-full h-full rounded-full object-cover transition duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                />
                {/* Visual Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-white/10 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black text-gray-500 group-hover:text-blue-500 tracking-[0.3em] uppercase transition-colors">Scroll</span>
        <div className="w-8 h-12 border-2 border-white/50 rounded-2xl flex justify-center p-2 group-hover:border-blue-500 transition-colors">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-scroll-down shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
