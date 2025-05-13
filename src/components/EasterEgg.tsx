import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EasterEgg: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'h' && e.altKey) {
        setIsVisible(true);
      }
      
      // Also show when typing "help"
      if (
        e.key === 'p' &&
        e.timeStamp - (window as any).lastKeyTime < 500 &&
        (window as any).lastKey === 'l' &&
        (window as any).secondLastKey === 'e' &&
        (window as any).thirdLastKey === 'h'
      ) {
        setIsVisible(true);
      }
      
      (window as any).thirdLastKey = (window as any).secondLastKey;
      (window as any).secondLastKey = (window as any).lastKey;
      (window as any).lastKey = e.key;
      (window as any).lastKeyTime = e.timeStamp;
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-dark border border-gray-700 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-mono text-primary">Developer Console</h3>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 font-mono text-sm">
              <div className="mb-4">
                <span className="text-green-400">$ </span>
                <span className="text-white">help</span>
              </div>
              
              <div className="text-gray-300 mb-6">
                <p className="mb-2">Available commands:</p>
                <ul className="space-y-2 ml-4">
                  <li><span className="text-yellow-400">about</span> - Display detailed information about me</li>
                  <li><span className="text-yellow-400">skills</span> - List all my technical skills</li>
                  <li><span className="text-yellow-400">contact</span> - Show contact information</li>
                  <li><span className="text-yellow-400">projects</span> - Display my featured projects</li>
                  <li><span className="text-yellow-400">clear</span> - Clear the console</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <span className="text-green-400">$ </span>
                <span className="text-white">about</span>
              </div>
              
              <div className="text-gray-300 mb-6">
                <p>Hello! I'm Nimesh Patel, a dedicated software engineer with a strong foundation in Computer Science.</p>
                <p className="mt-2">
                  Currently pursuing a Masters in Computer Science at the University of Texas at Arlington, and holding a Bachelor's in Computer Engineering, 
                  I specialize in building robust, scalable web applications and efficient backend systems.
                </p>
                <p className="mt-2">
                  With hands-on experience in cloud and DevOps practices as well as front-end development, I continuously leverage emerging technologies 
                  to drive innovative solutions.
                </p>
              </div>
              
              <div className="mb-4">
                <span className="text-green-400">$ </span>
                <span className="text-white">skills</span>
              </div>
              
              <div className="text-gray-300">
                <pre className="overflow-x-auto">
{`{
  "backend": ["Python", "JAVA", "Kafka", "Docker", "Kubernetes", "AWS", "SQL", "Postgres", "NoSQL"],
  "cloud_devops": ["AWS Lambda", "Git", "Bash", "Jenkins", "ELK", "Prometheus", "Grafana", "CI/CD", "Linux"],
  "frontend": ["JavaScript", "Typescript", "ReactJS", "HTML", "CSS", "Bootstrap"],
  "tools": ["TensorFlow", "NumPy", "Pandas", "Kafka", "Hadoop", "Spring Boot", "Restful APIs", "Scikit-learn", "PyTorch", "OpenCV", "Selenium", "Postman"]
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
