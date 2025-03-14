import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Devinandana</span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'Computer Science Student',
                  1000,
                  'Tech Enthusiast',
                  1000,
                  'Aspiring Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-secondary"
              />
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              A 3rd year Computer Science Engineering student at College of Engineering Karunagapally. 
              I'm eager to learn about new technologies and continuously develop my skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all">
                Contact Me <FaArrowRight />
              </Link>
              <div className="flex gap-4 items-center">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-dark hover:bg-gray-800 text-white p-3 rounded-full transition-all">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/devinandana-s-ab25472b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] hover:bg-[#006399] text-white p-3 rounded-full transition-all">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-2">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Profile" 
                  className="rounded-full w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-title mx-auto">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science Engineering student currently in my 3rd year at College of Engineering Karunagapally. 
              My journey in technology is driven by curiosity and a desire to create meaningful solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              I'm constantly exploring new technologies and frameworks to expand my knowledge and skill set. 
              I believe in the power of continuous learning and am always eager to take on new challenges that help me grow.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              When I'm not coding, you can find me exploring tech blogs, participating in hackathons, or collaborating on open-source projects.
            </p>
            <div className="mt-10">
              <Link to="/skills" className="bg-primary hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all mx-auto w-fit">
                View My Skills <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mx-auto">Skills Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's a quick look at some of my technical skills. Visit the Skills page for a more detailed breakdown.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'React', 'Python', 'C'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card text-center"
              >
                <h3 className="font-bold text-lg">{skill}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/skills" className="text-primary hover:text-indigo-700 font-medium flex items-center gap-2 transition-all mx-auto w-fit">
              See All Skills <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mx-auto">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects. Visit the Projects page to see my complete portfolio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Project 1',
                description: 'Its 4 Me is a time management app that helps users create their ideal daily schedule and track actual activities. It visually compares planned vs. actual time usage, highlighting discrepancies and offering personalized suggestions to stay on track and achieve goals.',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              },
              {
                title: 'Project 2',
                description: 'A personal portfolio showcasing my skills, projects, and experience as a Software Development Engineer.',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="text-primary hover:text-indigo-700 font-medium flex items-center gap-2 w-fit">
                  View Project <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/projects" className="bg-primary hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all mx-auto w-fit">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;