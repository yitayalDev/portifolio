import React from 'react';
import frontendLibCert from '../assets/frontendlib-freecodecamp-2025.pdf';
import jsCert from '../assets/javascript-freecodecamp-2025.pdf';
import webDesignCert from '../assets/webdesign-freecodecamp-2025.pdf';
import softwareTestingCert from '../assets/softwaretesting-certificate-2025.pdf';
import progFundamentalsCert from '../assets/programmingfundamentals-certificate-2025.pdf';
import webDevBeginnersCert from '../assets/webdevelopment-beginners-certificate-2025.pdf';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            name: "Front End Development Libraries",
            issuer: "freeCodeCamp",
            year: "2025",
            file: frontendLibCert,
            color: "blue"
        },
        {
            id: 2,
            name: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            year: "2025",
            file: jsCert,
            color: "cyan"
        },
        {
            id: 3,
            name: "Responsive Web Design",
            issuer: "freeCodeCamp",
            year: "2025",
            file: webDesignCert,
            color: "indigo"
        },
        {
            id: 4,
            name: "Software Testing",
            issuer: "Software Testing Institute",
            year: "2025",
            file: softwareTestingCert,
            color: "purple"
        },
        {
            id: 5,
            name: "Programming Fundamentals",
            issuer: "Programming Academy",
            year: "2025",
            file: progFundamentalsCert,
            color: "blue"
        },
        {
            id: 6,
            name: "Web Development for Beginners",
            issuer: "Web Dev Academy",
            year: "2025",
            file: webDevBeginnersCert,
            color: "cyan"
        }
    ];

    return (
        <section id="certificates" className="py-24 bg-[#111827] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">
                        Professional Validation
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white">
                        Global <span className="text-blue-500">Certifications</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/10"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white`}>
                                    <i className="fas fa-award text-2xl"></i>
                                </div>
                                <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">{cert.year}</span>
                            </div>

                            <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {cert.name}
                            </h3>
                            <p className="text-gray-400 font-bold text-sm uppercase tracking-wide mb-8">{cert.issuer}</p>

                            <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-white font-bold text-sm bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                            >
                                Verify Credential
                                <i className="fas fa-external-link-alt ml-2 text-[10px] opacity-50"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
