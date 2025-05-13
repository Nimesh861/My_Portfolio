// import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', image: `${import.meta.env.BASE_URL}../photo/Python.jpg` },
      { name: 'JAVA', image: `${import.meta.env.BASE_URL}../photo/Java.png` },
      { name: 'JavaScript', image: `${import.meta.env.BASE_URL}../photo/Javascript.png` },
      { name: 'C/C++', image: `${import.meta.env.BASE_URL}../photo/C++.png` },
      { name: 'NodeJS', image: `${import.meta.env.BASE_URL}../photo/Nodejs.png` },
    ],
  },
  {
    category: 'Databases and Query Languages',
    items: [
      { name: 'MySQL', image: `${import.meta.env.BASE_URL}../photo/MySQL.png` },
      { name: 'PostgreSQL', image: `${import.meta.env.BASE_URL}../photo/PostGreSQL.jpg` },
      { name: 'Cassandra', image: `${import.meta.env.BASE_URL}../photo/Cassandra.png` },
      { name: 'MongoDB', image: `${import.meta.env.BASE_URL}../photo/MongoDB.png` },
      { name: 'DynamoDB', image: `${import.meta.env.BASE_URL}../photo/DynamoDB.jpg` },
    ],
  },
  {
    category: 'Web Technologies',
    items: [
      { name: 'HTML5', image: `${import.meta.env.BASE_URL}../photo/HTML.png` },
      { name: 'CSS', image: `${import.meta.env.BASE_URL}../photo/CSS.png` },
      { name: 'ReactJS', image: `${import.meta.env.BASE_URL}../photo/REACT.png` },
      { name: 'Django', image: `${import.meta.env.BASE_URL}../photo/Django.png` },
      { name: 'Typescript', image: `${import.meta.env.BASE_URL}../photo/Typescript.png` },
    ],
  },
  {
    category: 'Distributed Technologies',
    items: [
      { name: 'Map Reduce', image: `${import.meta.env.BASE_URL}../photo/Mapreduce.png` },
      { name: 'Hive', image: `${import.meta.env.BASE_URL}../photo/Hive.png` },
      { name: 'Kafka', image: `${import.meta.env.BASE_URL}../photo/Kafka.png` },
      { name: 'Redis', image: `${import.meta.env.BASE_URL}../photo/redis.jpg` },
    ],
  },
  {
    category: 'Cloud Technologies',
    items: [
      { name: 'AWS', image: `${import.meta.env.BASE_URL}../photo/AWS-logo.png` },
      { name: 'GCP', image: `${import.meta.env.BASE_URL}../photo/GCP.png` },
    ],
  },
  {
    category: 'DevOps Technologies',
    items: [
      { name: 'GitHub/Gitlab', image: `${import.meta.env.BASE_URL}../photo/Git.png` },
      { name: 'Jenkins', image: `${import.meta.env.BASE_URL}../photo/Jenkins.png` },
      { name: 'Terraform', image: `${import.meta.env.BASE_URL}../photo/Terraform.png` },
      { name: 'Docker', image: `${import.meta.env.BASE_URL}../photo/Docker.png` },
      { name: 'Kubernetes', image: `${import.meta.env.BASE_URL}../photo/Kubernetes.png` },
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
                      scale: 1.2,
                      y: -5,
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


