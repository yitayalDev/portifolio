import uogLmsImg from "../assets/UOG LMS.png";
import emsImg from "../assets/EMS.jpg";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "UOG LMS",
      subtitle: "Enterprise Learning Management System",
      description: "A state-of-the-art educational platform designed for the University of Gondar. It streamlines academic workflows with advanced features for course orchestration, real-time progress analytics, and seamless student-instructor collaboration.",
      image: uogLmsImg,
      technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoLink: "https://lms-client-adrw.vercel.app/",
      clientGithub: "https://github.com/yitayalDev/LMS-Client",
      serverGithub: "https://github.com/yitayalDev/LMS-Server"
    },
    {
      id: 2,
      title: "EMS",
      subtitle: "Employee Management System",
      description: "A full-stack Employee Management System featuring advanced Role-Based Access Control (RBAC), department organization, and real-time dashboard analytics.",
      image: emsImg,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoLink: "https://ems-2gho.onrender.com",
      clientGithub: "https://github.com/yitayalDev/EMS",
      serverGithub: "https://github.com/yitayalDev/server"
    }

  ];

  const handleLinkClick = (e, url) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    const finalUrl = typeof e === 'string' ? e : url;
    if (finalUrl && finalUrl !== '#') {
      window.open(finalUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">
            Featured Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:border-blue-500/30"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Visual Showcase */}
                <div className="lg:w-3/5 relative overflow-hidden h-[300px] lg:h-auto group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <button
                      onClick={(e) => handleLinkClick(e, project.demoLink)}
                      className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      Explore Experience <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                      {project.subtitle}
                    </h4>
                    <h3 className="text-3xl font-extrabold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-bold text-gray-300 px-4 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors hover:border-blue-500/50 hover:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={(e) => handleLinkClick(e, project.demoLink)}
                      className="flex items-center gap-3 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-black transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] border border-white/10"
                    >
                      <i className="fas fa-external-link-alt text-sm"></i>
                      LIVE PREVIEW
                    </button>
                    <button
                      onClick={(e) => handleLinkClick(e, project.clientGithub)}
                      className="flex items-center gap-3 bg-white/5 border-2 border-blue-500/30 text-white px-8 py-3.5 rounded-xl font-black transition-all duration-300 hover:bg-white hover:text-blue-900 hover:border-white"
                    >
                      <i className="fab fa-github text-lg"></i>
                      CLIENT SIDE
                    </button>
                    <button
                      onClick={(e) => handleLinkClick(e, project.serverGithub)}
                      className="flex items-center gap-3 bg-white/5 border-2 border-blue-500/30 text-white px-8 py-3.5 rounded-xl font-black transition-all duration-300 hover:bg-white hover:text-blue-900 hover:border-white"
                    >
                      <i className="fab fa-github text-lg"></i>
                      SERVER SIDE
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Explorer Button */}
        <div className="text-center mt-24">
          <p className="text-gray-500 font-medium mb-6 italic">Looking for more? Dive into my professional contributions</p>
          <button
            onClick={(e) => handleLinkClick(e, 'https://github.com/yitayalDev')}
            className="group inline-flex items-center gap-3 bg-white/5 text-gray-300 border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/10 hover:text-white hover:border-blue-500/50 transition-all duration-500"
          >
            <i className="fab fa-github text-xl group-hover:rotate-12 transition-transform"></i>
            <span>Browse Full Repository</span>
            <i className="fas fa-external-link-alt text-[10px] opacity-50"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

