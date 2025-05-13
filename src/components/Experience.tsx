import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  defaultBorder: string;
  hoverBorder: string;
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'OrbTech Pro LLP',
    period: 'Jan 2022 - July 2022',
    responsibilities: [
      'Enhanced RESTful APIs with Spring Boot and MySQL, improving data retrieval efficiency by 25% while integrating Kafka for event-driven architecture and boosting real-time data processing by 30%.',
      'Facilitated front-end development with React.js, improving UI responsiveness by 40%.',
      'Automated CI/CD pipelines with Jenkins and Docker, cutting deployment time by 50% and boosting system stability.'
    ],
    technologies: ['Spring Boot', 'MySQL', 'Kafka', 'React.js', 'Jenkins', 'Docker'],
    defaultBorder: '#F59E0B',
    hoverBorder: '#DC2626'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'OrbTech Pro LLP',
    period: 'Aug 2022 - July 2023',
    responsibilities: [
      'Contributed to backend development with Node.js and Firebase, optimizing data handling and reducing server load by 30% while implementing AWS Lambda functions to cut operational costs by 25%.',
      'Developed real-time data streaming services using Web-Sockets and Spring Boot, reducing response latency by 45%.',
      'Collaborated with the DevOps team to streamline task tracking and sprint management in JIRA, enhancing development cycle efficiency.'
    ],
    technologies: ['Node.js', 'Firebase', 'AWS Lambda', 'Spring Boot', 'Web-Sockets', 'JIRA'],
    defaultBorder: '#10B981',
    hoverBorder: '#9333EA'
  },
  {
    id: 3,
    title: 'Research Assistant',
    company: 'UT Arlington',
    period: 'Aug 2023 - Dec 2024',
    responsibilities: [
      'Migrated the Texas Disability History site from Drupal 7 to 9, enhancing system reliability by 95% and optimizing database queries for 30% faster page loads.',
      'Engineered an interactive survey module using React and REST APIs, reducing survey creation time by 50% and boosting engagement rates by 40%.'
    ],
    technologies: ['Drupal', 'React', 'REST APIs'],
    defaultBorder: '#3B82F6',
    hoverBorder: '#F59E0B'
  }
];

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Social Media Dashboard',
    description:
      'Built Social Dash, a social media management platform supporting 500+ user accounts with multi-account management, post scheduling, and real-time analytics via API integrations with Facebook, Twitter, and LinkedIn. Developed with React, Node.js, Firebase, and AWS in 7 Agile sprints.',
    technologies: ['React', 'Node.js', 'Firebase', 'AWS', 'Jira'],
    githubUrl: 'https://github.com/Nimesh861/SocialMediaDashboard',
    image: '../photo/Social.jpg'
  },
  {
    id: 2,
    title: 'Real-Time Log Monitoring Solution',
    description:
      'Reduced response latency by 45% and improved live data synchronization. Automated log monitoring reduced manual effort by 40% and enhanced log retrieval efficiency by 25%.',
    technologies: ['WebSocket', 'Spring Boot'],
    githubUrl: 'https://github.com/Nimesh861/RealTimeLogMonitoring',
    image: '../photo/Real.jpg'
  },
  {
    id: 3,
    title: 'Banking System',
    description:
      'Achieved 95% schema completeness ensuring data integrity and reliability, and improved query execution accuracy by 98%, enhancing overall system performance.',
    technologies: ['Python', 'MySQL'],
    githubUrl: 'https://github.com/Nimesh861/BankingSystem',
    image: '../photo/Banking.jpg'
  },
  {
    id: 4,
    title: 'Android Quiz Game',
    description:
      'Increased development efficiency by 30% through detailed design artifacts, reducing ambiguities by 40% and enhancing deployment success rate by 95% with structured planning.',
    technologies: ['Java', 'MySQL'],
    githubUrl: 'https://github.com/Nimesh861/AndroidQuizGame',
    image: '../photo/Quiz.png'
  },
  {
    id: 5,
    title: 'Market Trend Analysis Using ML-LSTM Model',
    description:
      'Developed a Market Trend prediction web application using an LSTM model trained on historical stock data. Delivered real-time visualization and predictions via a Flask-based web UI.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'Yahoo Finance API', 'JavaScript'],
    githubUrl: 'https://github.com/Nimesh861/MarketTrendLSTM',
    image: '../photo/Trend.jpg'
  },
  {
    id: 6,
    title: 'Heart Disease Prediction System',
    description:
      'Machine learning-powered web app using Django and Decision Tree to predict heart disease risk. Includes patient-doctor appointment management and user-friendly interface.',
    technologies: ['Python', 'Django', 'Scikit-learn', 'Pandas', 'Streamlit', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Nimesh861/HeartDiseasePrediction',
    image: '../photo/heart.jpg'
  }  
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen pt-24 md:pl-16 px-4 md:px-8 lg:px-16 relative">
      <motion.div className="relative z-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="h-1 w-16 bg-[#F59E0B] mt-2 rounded"></div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="card relative pl-6 py-4 rounded-md transition-colors bg-[#1E293B] dark:bg-[#1F2937]"
              style={{ borderLeftWidth: '4px', borderLeftColor: exp.defaultBorder }}
              whileHover={{ borderLeftColor: exp.hoverBorder }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-light">{exp.title}</h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-white mt-20">Projects</h2>
        <div className="h-1 w-16 bg-[#F59E0B] mt-2 rounded"></div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden flex flex-col h-full rounded-xl bg-[#1E293B] dark:bg-[#1F2937]"
              whileHover={{ scale: 1.03, rotateY: 3, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden rounded-xl mb-4">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-light mb-2 px-4">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow px-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2 px-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-code-bg rounded-full text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center px-4 pb-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
