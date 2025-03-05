import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  // Skills data - you can update this later with your actual skills
  const skillsData = {
    'Programming Languages': [
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'C', level: 70 },
    ],
    'Web Development': [
      { name: 'HTML/CSS', level: 85 },
      { name: 'React', level: 75 },
    ],
    'Tools & Technologies': [
      { name: 'GitHub', level: 80 },
      { name: 'ReactJS', level: 75 },
      { name: 'VS Code', level: 85 },
    ],
  };

  const categoryIcons = {
    'Programming Languages': <FaCode className="text-primary text-3xl" />,
    'Web Development': <FaLaptopCode className="text-primary text-3xl" />,
    'Tools & Technologies': <FaTools className="text-primary text-3xl" />,
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels.
            I'm constantly learning and improving these skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                {categoryIcons[category]}
                <h2 className="text-2xl font-bold ml-3">{category}</h2>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="bg-primary h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6">Other Skills & Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Problem Solving', 'Team Collaboration', 'UI/UX Design', 'Machine Learning', 'Data Structures', 'Algorithms', 'Agile Methodology', 'Technical Writing'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Currently Learning</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I'm always expanding my knowledge. Here are some technologies I'm currently focusing on:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React Native', 'GraphQL', 'TypeScript', 'Next.js'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="bg-primary text-white px-4 py-2 rounded-full"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;