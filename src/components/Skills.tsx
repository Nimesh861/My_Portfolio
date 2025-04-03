// import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', image: '/python.jpg' },
      { name: 'JAVA', image: '/Java.png' },
      { name: 'JavaScript', image: '/Javascript.png' },
      { name: 'C/C++', image: '/C++.png' },
      { name: 'NodeJS', image: '/Node js.png' },
    ],
  },
  {
    category: 'Databases and Query Languages',
    items: [
      { name: 'MySQL', image: '/MySQL.png' },
      { name: 'PostgreSQL', image: '/PostGreSQL.jpg' },
      { name: 'Cassandra', image: '/Cassandra.png' },
      { name: 'MongoDB', image: '/MongoDB.png' },
      { name: 'DynamoDB', image: '/DynamoDB.jpg' },
    ],
  },
  {
    category: 'Web Technologies',
    items: [
      { name: 'HTML5', image: '/HTML.png' },
      { name: 'CSS', image: '/CSS.png' },
      { name: 'ReactJS', image: '/REACT.png' },
      { name: 'Django', image: '/Django.png' },
      { name: 'Typescript', image: '/Typescript.png' },
    ],
  },
  {
    category: 'Distributed Technologies',
    items: [
      { name: 'Map Reduce', image: '/Mapreduce.png' },
      { name: 'Hive', image: '/Hive.png' },
      { name: 'Kafka', image: '/Kafka.png' },
      { name: 'Redis', image: '/redis.jpg' },
    ],
  },
  {
    category: 'Cloud Technologies',
    items: [
      { name: 'AWS', image: '/AWS logo.png' },
      { name: 'GCP', image: '/GCP.png' },
    ],
  },
  {
    category: 'DevOps Technologies',
    items: [
      { name: 'GitHub/GitLab', image: '/Git.png' },
      { name: 'Jenkins', image: '/Jenkins.png' },
      { name: 'Terraform', image: '/Terraform.png' },
      { name: 'Docker', image: '/Docker.png' },
      { name: 'Kubernetes', image: '/Kubernetes.png' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen pt-20 px-8 md:px-16 lg:px-24 text-center">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-white">Skills and Technologies</h2>
        <p className="text-gray-400 mt-4 text-lg">I build software systems by leveraging ...</p>
        <div className="h-1 w-20 bg-[#F59E0B] mt-4 rounded mx-auto"></div>

        <div className="mt-16 space-y-16">
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-white mb-10">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-16">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.2, // Slight pop effect
                      y: -5, // Bounces slightly upwards
                      transition: { type: 'spring', stiffness: 300 },
                    }}
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-20 h-20 object-contain"
                    />
                    <span className="text-lg text-gray-300 mt-3">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;



