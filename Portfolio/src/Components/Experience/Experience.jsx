import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20  mt-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My Experience
          </motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Skill 1 */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Front-End Development
            </h3>
            <p className="text-black mb-4">
              As a Front-End Developer, I specialize in building responsive and user-friendly websites. I have hands-on experience with HTML, CSS, and JavaScript to create interactive and visually appealing web pages.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Python</h3>
            <p className="text-gray-600 mb-4">
              I have a strong foundation in Python, and I’m passionate about solving problems with code. I’ve worked with Python in web development, automation scripts, and data manipulation.
            </p>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Version Control & Collaboration
            </h3>
            <p className="text-gray-600 mb-4">
              I have worked extensively with Git for version control, collaborating with teams and managing code through platforms like GitHub. I understand branching, merging, and resolving conflicts effectively.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Git (GitHub, GitLab)</li>
            </ul>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Front-End Developer (Intern)
            </h3>
            <p className="text-gray-600 mb-4">
              Worked on creating interactive UIs with React and Tailwind CSS. Involved in the design and implementation of new features for websites, ensuring responsiveness and optimal user experience.
            </p>
            <p className="text-gray-600">Duration: 3 months</p>
            <p className="mt-4 text-gray-600">Responsibilities:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Implemented UI components using React and Tailwind CSS</li>
              <li>Worked closely with the design team to ensure pixel-perfect layouts</li>
              <li>Wrote clean, reusable code and maintained project structure</li>
              <li>Collaborated with back-end developers for API integration</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
