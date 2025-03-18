import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-600 py-6 px-4 md:px-8 lg:px-16 bg-[#1E293B] text-center transition-colors duration-300">
      <div className="flex flex-col items-center text-gray-400 text-sm md:text-base">
        {/* First Line */}
        <p>
          &copy; 2025 Nimesh Patel | Built with <span className="text-red-500">❤️</span> and Code
        </p>

        {/* Second Line */}
        <p className="mt-1">
          +1 (682) 323-6738 &nbsp; | &nbsp; nimesh862001@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
