import React from 'react';

const Skills = () => {
  const mainSkills = [
    { name: "React Native / Mobile", icon: "fa-mobile-alt", color: "blue" },
    { name: "React / Next.js", icon: "fa-react", color: "cyan", fab: true },
    { name: "Node.js & Express", icon: "fa-node-js", color: "green", fab: true },
    { name: "MongoDB & SQL", icon: "fa-database", color: "green" },
    { name: "TypeScript", icon: "fa-code", color: "blue" },
    { name: "Tailwind / Styling", icon: "fa-wind", color: "cyan" },
    { name: "REST & GraphQL APIs", icon: "fa-[#0f172a]", iconClass: "fas fa-network-wired", color: "yellow" },
    { name: "Git & CI/CD", icon: "fa-git-alt", color: "orange", fab: true }
  ];

  const tools = [
    "React Native", "Flutter", "Android / iOS Dev", "Redux Toolkit", 
    "Express.js", "MongoDB", "PostgreSQL", "Next.js App Router", 
    "Vite", "Figma UI/UX", "Postman / API Testing", "Docker & Cloud Deployments"
  ];

  return (
    <section id="skills" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">
            Core Competencies
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            My Technical <span className="text-blue-500">Ecosystem</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center transition-all duration-500 hover:border-blue-500/50 hover:bg-white/10 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${skill.iconClass ? skill.iconClass : (skill.fab ? 'fab ' : 'fas ') + skill.icon} text-3xl transition-all ${skill.color === 'blue' ? 'text-blue-500' :
                    skill.color === 'cyan' ? 'text-cyan-400' :
                      skill.color === 'green' ? 'text-green-500' :
                        skill.color === 'yellow' ? 'text-yellow-400' :
                          'text-orange-500'
                  }`}></i>
              </div>
              <h4 className="text-white font-bold text-lg">{skill.name}</h4>
            </div>
          ))}
        </div>

        {/* Specialized Tools */}
        <div className="pt-12 border-t border-white/5">
          <h4 className="text-center text-gray-500 font-bold uppercase tracking-[0.3em] mb-12 text-xs">
            Specialized Tools & Ecosystem
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-bold text-sm transition-all hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-1"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;