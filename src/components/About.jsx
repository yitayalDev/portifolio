import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#111827] relative">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Detailed Story */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">
              Architecture of my Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Driven by <span className="text-blue-500">Curiosity</span>,<br />
              Defined by <span className="text-cyan-400">Execution</span>.
            </h3>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a dedicated frontend developer with a passion for creating
                engaging and responsive web experiences. With expertise in modern
                JavaScript frameworks and a keen eye for design, I bring ideas
                to life through clean, efficient code.
              </p>
              <p>
                Since starting my journey, I've delivered high-impact solutions for diverse
                clients, always prioritizing user experience and technical excellence. My approach
                blends creative problem-solving with rigorous engineering.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-blue-600/10 border-2 border-blue-500/50 text-white font-bold py-4 px-10 rounded-2xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 flex items-center gap-3">
                <i className="fas fa-download text-blue-400 group-hover:text-white transition-colors"></i> Download Resume
              </button>
            </div>
          </div>

          {/* Glassmorphic Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Projects Completed", value: "50+", icon: "fa-project-diagram", color: "blue" },
                { label: "Years Experience", value: "3+", icon: "fa-code", color: "cyan" },
                { label: "Satisfied Clients", value: "30+", icon: "fa-smile-beam", color: "indigo" },
                { label: "Tech Mastered", value: "15+", icon: "fa-terminal", color: "blue" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/10 group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fas ${stat.icon} text-${stat.color}-500 text-xl`}></i>
                  </div>
                  <h4 className="text-4xl font-black text-white mb-2">{stat.value}</h4>
                  <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;