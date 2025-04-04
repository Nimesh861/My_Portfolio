import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface CertificationItem {
  id: number;
  name: string;
  provider: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: 'Masters in Computer Science',
      institution: 'University of Texas at Arlington',
      location: 'Arlington, TX',
      period: 'Aug 2023 - May 2025',
      description:
        "Pursuing a Master's degree with a focus on advanced software engineering, distributed systems, and machine learning.",
    },
    {
      id: 2,
      degree: 'Bachelor in Computer Engineering',
      institution: 'University of DBATU',
      location: 'India',
      period: 'Jun 2019 - Jun 2023',
      description:
        'Graduated with a strong foundation in computer engineering, emphasizing software development, algorithms, and system design.',
    },
  ];

  const certifications: CertificationItem[] = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect - Associate',
      provider: 'Amazon Web Services (AWS)',
      period: 'Issued: Dec 2024 - Expires: Dec 2027',
      description:
        'Validated expertise in designing and deploying scalable cloud solutions using AWS services.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="education"
      className="min-h-[120vh] pt-24 px-4 md:px-8 lg:px-16 relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-darker z-0"></div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="h-1 w-16 bg-[#F59E0B] mt-2 rounded"></div>

        <div className="mt-12">
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {educationItems.map((edu) => (
              <motion.div
                key={edu.id}
                className="
                  relative
                  border-l-4 border-accent 
                  pl-6 pr-6 py-4
                  rounded-md
                  shadow-md
                  cursor-pointer
                  transition-colors
                "
                variants={item}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#243447',
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-accent"></div>

                <div className="flex items-start gap-4">
                  <div className="hidden md:block mt-1">
                    <GraduationCap className="w-10 h-10 text-accent" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-light">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <p className="text-gray-300">
                        {edu.institution}, {edu.location}
                      </p>
                      <p className="text-sm text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" /> {edu.period}
                      </p>
                    </div>
                    <p className="text-gray-400 mb-4">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <h2 className="text-4xl font-bold text-white mt-16">Certifications</h2>
        <div className="h-1 w-16 bg-[#F59E0B] mt-2 rounded"></div>

        <div className="mt-12">
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="
                  relative
                  border-l-4 border-blue-500 
                  pl-6 pr-6 py-4
                  rounded-md
                  shadow-md
                  cursor-pointer
                  transition-colors
                "
                variants={item}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#1E293B',
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-blue-500"></div>

                <div className="flex items-start gap-4">
                  <div className="hidden md:block mt-1">
                    <Award className="w-10 h-10 text-blue-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-light">
                      {cert.name}
                    </h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <p className="text-gray-300">{cert.provider}</p>
                      <p className="text-sm text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" /> {cert.period}
                      </p>
                    </div>
                    <p className="text-gray-400 mb-4">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
