import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="cursor-pointer group"
          >
            <h1 className="text-2xl font-black text-white tracking-tighter transition-all group-hover:text-blue-400">
              YITAYAL<span className="text-blue-500">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 relative group overflow-hidden ${activeSection === item ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300 ${activeSection === item ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                    }`}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none bg-white/5 border border-white/10 rounded-xl"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="flex flex-col bg-[#111827]/95 backdrop-blur-2xl shadow-2xl rounded-3xl mt-4 mb-8 border border-white/5 overflow-hidden">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`block px-8 py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-200 ${activeSection === item
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
