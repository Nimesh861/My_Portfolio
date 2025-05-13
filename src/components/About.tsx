import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  
  const skills = [
    "Python", "Java", "Kafka", "Docker", "Kubernetes", "AWS", "SQL", 
    "React", "Node.js", "Spring Boot", "CI/CD", "Jenkins", "Git", 
    "TensorFlow", "PyTorch", "Scikit-learn", "PostgreSQL"
  ];

  return (
    <section id="about" className="min-h-screen pt-24 md:pl-16 px-4 md:px-8 lg:px-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-darker z-0"></div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="section-title">About Me</h2> */}
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <div className="h-1 w-16 bg-[#F59E0B] mt-2 rounded"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            {/* Updated: Added a border and padding to the code block */}
            <div className="code-block mb-6 border border-blue-500 rounded p-4">
              <pre className="text-sm md:text-base">
{`{
  "name": "Nimesh Patel",
  "role": "Software Engineer",
  "experience": "3 years",
  "skills": [
    "Python", "Java", "AWS", "DevOps", "React", "Spring Boot"
  ],
  "education": {
    "degree": "Master of Science in Computer Science",
    "university": "University of Texas at Arlington",
    "year": 2025
  }
}`}
              </pre>
            </div>
            
            <p className="text-gray-300 mb-6">
              I'm a skilled software engineer with expertise in backend and cloud technologies, including <strong>AWS, Kafka, Docker, and Kubernetes</strong>. 
              With <strong>3 years of experience</strong>, I have built scalable applications, optimized DevOps workflows, and improved system performance.
            </p>
            
            <button 
              className="btn-outline flex items-center gap-2"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : 'More About Me'}
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-200">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="
                    px-3 py-1 
                    bg-code-bg 
                    border 
                    border-gray-700 
                    rounded-full 
                    text-sm 
                    text-gray-300 
                    transition-colors 
                    duration-300
                    hover:border-blue-500 
                    hover:text-blue-500
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {expanded && (
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-200">My Journey</h3>
                <p className="text-gray-300 mb-4">
                  My journey in software development started with a strong foundation in <strong>backend engineering</strong> and <strong>cloud computing</strong>.
                  During my <strong>tenure at OrbTech Pro LLP</strong>, I played a pivotal role in building high-performance APIs, integrating <strong>Kafka</strong> for event-driven systems, and optimizing <strong>CI/CD pipelines</strong> using <strong>Jenkins & Docker</strong>.
                </p>
                <p className="text-gray-300 mb-4">
                  As a <strong>Research Assistant at UT Arlington</strong>, I successfully migrated a legacy <strong>Drupal 7 system to Drupal 9</strong>, 
                  boosting system efficiency by <strong>95%</strong> and optimizing database performance by <strong>30%</strong>.
                  I also built an <strong>interactive survey module</strong> using <strong>React</strong> and <strong>REST APIs</strong>, improving engagement rates by <strong>40%</strong>.
                </p>
                <p className="text-gray-300">
                  Passionate about <strong>DevOps and AI-driven applications</strong>, I actively work on cloud automation, 
                  microservices, and real-time data solutions. I am AWS Certified and constantly exploring new technologies 
                  to build <strong>efficient, scalable, and resilient</strong> systems.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
