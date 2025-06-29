import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiFileText } from 'react-icons/fi';

const Home = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com' },
    // { icon: <FiTwitter />, url: 'https://twitter.com' },
  ];

  return (
    <section id="home" className="home-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="home-content"
        >
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">
            <span className="gradient-text">Prabin Gautam</span>
          </h1>
          <h2 className="title">
            I build <span className="highlight">digital experiences</span>.
          </h2>
          
          <p className="description">
            I'm a web applications and mobile applications developer specializing in building exceptional web and mobile applications. 
            Currently focused on creating accessible, human-centered products with modern technologies.
          </p>

          <div className="cta-buttons">
            <a href="#contact" className="btn primary">
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn secondary"
            >
              <FiFileText className="icon" />
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="social-links"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
    </section>
  );
};

export default Home;