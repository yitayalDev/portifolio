import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com", // Added missing url property
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  const handleSocialClick = (e, url, platform) => {
    e.preventDefault();
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="footer-text text-center md:text-left">
            <p className="text-gray-300 text-sm md:text-base">
              &copy; 2025 Yitayal - Frontend Developer. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Gondar, Ethiopia | 251988011906
            </p>
          </div>
          <div className="social-links flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                onClick={(e) => handleSocialClick(e, social.url, social.name)}
                aria-label={social.name}
                className="social-link bg-gray-700 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;