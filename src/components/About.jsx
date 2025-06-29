import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'TypeScript',
    'JQuery',
    'MongoDB',
    'Firebase',
    'c#,Dotnet',
    'MsSqlServer'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>
            <span className="section-number"></span> About Me
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <p>
              Hello! My name is Prabin and I enjoy creating things that live on the internet. 
              My interest in web development started back in my college days when I decided to try 
              learning html and css.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at software develoment company. My main focus 
              these days is building accessible, inclusive products and digital 
              experiences at Upstatement for a variety of clients.
            </p>
            <p>
              I also recently graduate from George Brown College in Mobile Application Development and strategy where I learn all the 
              process and concepts of mobile application development. 
            </p>
            <p>Here are a few technologies I've been working with recently:
              1. For frontend: React 
              2. For mobile application development: React native and Kotlin.
              3. For backend: dotnet framework and dotnet core, along with node and express. 
            </p>

            <ul className="skills-list">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FiArrowRight className="skill-icon" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-wrapper">
              <div className="image-placeholder"></div>
              <div className="image-frame"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;