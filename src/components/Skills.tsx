import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Server,
  Globe,
  Cpu,
  Cloud,
  Layers,
  GitBranch,
  Terminal,
  PenTool as Tool,
  Shield,
  Settings,
  Box
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  borderColor: string; // Unique border color for each category
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string; // Hex or Tailwind color code
}

const Skills: React.FC = () => {
  // 6 skill categories
  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Programming Languages',
      borderColor: 'border-red-500',
      skills: [
        { name: 'Python', icon: <Code2 />, color: '#3B82F6' },
        { name: 'Java', icon: <Code2 />, color: '#DC2626' },
        { name: 'C++', icon: <Code2 />, color: '#9333EA' },
        { name: 'JavaScript', icon: <Code2 />, color: '#F59E0B' },
        { name: 'SQL', icon: <Database />, color: '#10B981' },
        { name: 'PostgreSQL', icon: <Database />, color: '#3B82F6' }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      borderColor: 'border-green-500',
      skills: [
        { name: 'Spring MVC', icon: <Layers />, color: '#10B981' },
        { name: 'Spring Boot', icon: <Layers />, color: '#059669' },
        { name: 'Microservices', icon: <Box />, color: '#3B82F6' },
        { name: 'Spring Security', icon: <Shield />, color: '#EF4444' }
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      borderColor: 'border-blue-500',
      skills: [
        { name: 'HTML', icon: <Globe />, color: '#EA580C' },
        { name: 'CSS', icon: <Layers />, color: '#3B82F6' },
        { name: 'JavaScript', icon: <Code2 />, color: '#F59E0B' },
        { name: 'Bootstrap', icon: <Layers />, color: '#A855F7' },
        { name: 'jQuery', icon: <Code2 />, color: '#3B82F6' }
      ]
    },
    {
      id: 'tools',
      title: 'DevOps & Tools',
      borderColor: 'border-yellow-500',
      skills: [
        { name: 'Docker', icon: <Box />, color: '#3B82F6' },
        { name: 'Kubernetes', icon: <Settings />, color: '#60A5FA' },
        { name: 'Terraform', icon: <Tool />, color: '#9333EA' },
        { name: 'Jenkins', icon: <Settings />, color: '#EF4444' },
        { name: 'ArgoCD', icon: <GitBranch />, color: '#3B82F6' },
        { name: 'Ansible', icon: <Terminal />, color: '#DC2626' },
        { name: 'Git', icon: <GitBranch />, color: '#EA580C' },
        { name: 'Maven', icon: <Tool />, color: '#F97316' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms & Services',
      borderColor: 'border-purple-500',
      skills: [
        { name: 'AWS', icon: <Cloud />, color: '#F97316' },
        { name: 'Azure', icon: <Cloud />, color: '#3B82F6' },
        { name: 'GCP', icon: <Cloud />, color: '#EF4444' }
      ]
    },
    {
      id: 'aws-services',
      title: 'AWS Services',
      borderColor: 'border-pink-500',
      skills: [
        { name: 'EKS/ECS', icon: <Cpu />, color: '#EA580C' },
        { name: 'Lambda', icon: <Server />, color: '#F97316' },
        { name: 'S3/CloudFront', icon: <Database />, color: '#F59E0B' },
        { name: 'RDS', icon: <Database />, color: '#3B82F6' },
        { name: 'API Gateway', icon: <Globe />, color: '#A855F7' },
        { name: 'CloudWatch', icon: <Terminal />, color: '#2563EB' }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen pt-24 px-4 md:px-8 lg:px-16 relative">
      <motion.div className="relative z-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
        {/* <h2 className="section-title">Skills</h2> */}
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="h-1 w-16 bg-[#F59E0B] mt-2 rounded"></div>

        {/* Skill Categories (All Boxes Now Have a Dark Background) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`card relative border-2 p-4 rounded-md shadow-md 
                ${category.borderColor} transition-colors bg-dark dark:bg-dark`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.05)'
              }}
            >
              <h3 className="text-xl font-bold text-light mb-6">{category.title}</h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                  >
                    {/* The colorful icon box */}
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 shadow-lg" style={{ backgroundColor: skill.color }}>
                      <div className="text-darker">
                        {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-8 h-8' })}
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
