import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    // { icon: <FiTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FiMail />, url: 'gautamprabin91@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="social-link"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <p className="footer-text">
            Designed & Built by <span className="highlight">Prabin Gautam</span>
          </p>

          <p className="copyright">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;