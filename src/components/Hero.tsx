import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  const greetings = ["Hej", "Hola", "Ciao", "Hallo", "Olá", "Hello", "こんにちは"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        flex flex-col-reverse md:flex-row
        items-center justify-between
        min-h-screen
        px-6 md:px-12 lg:px-16
        bg-[#0f172a]
      "
    >
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-2">
          {greetings[currentGreetingIndex]},
        </h1>

        <h2 className="
          text-3xl md:text-4xl lg:text-5xl
          font-bold
          bg-gradient-to-r from-pink-500 to-yellow-500
          bg-clip-text text-transparent
          mb-4
        ">
          I'm Nimesh Patel
        </h2>

        <h3 className="
          text-3xl md:text-4xl lg:text-5xl
          font-bold
          bg-gradient-to-r from-pink-500 to-yellow-500
          bg-clip-text text-transparent
          mb-4
        ">
          Full Stack Developer <span className="ml-4"></span>
        </h3>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-mono mb-8">
          Java / Python / JavaScript / ReactJs / NodeJs / AWS / Docker / Kubernetes / Jenkins
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={scrollToContact}
            className="
              border border-yellow-400
              text-yellow-400
              py-2 px-6
              rounded
              text-lg font-semibold
              transition duration-200
              hover:bg-yellow-400 hover:text-black
            "
          >
            CONTACT ME
          </button>
          <a
            href="photo/Nimesh__Resume.pdf"
            download="Nimesh_resume.pdf"
            className="
              border border-yellow-400
              text-yellow-400
              py-2 px-6
              rounded
              text-lg font-semibold
              flex items-center gap-2
              transition duration-200
              hover:bg-yellow-400 hover:text-black
            "
          >
            <Download className="w-5 h-5" />
            Resume/CV
          </a>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center z-10 relative"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30"></div>
          <div
            className="
              relative
              rounded-full
              overflow-hidden
              border-4 border-gray-700
              w-[32rem] h-[32rem]
              md:w-[40rem] md:h-[40rem]
              lg:w-[48rem] lg:h-[48rem]
              flex justify-center items-center
            "
          >
            <img
              src="/Profile.jpeg"
              alt="Nimesh Patel"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
