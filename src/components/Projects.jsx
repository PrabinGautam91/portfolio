import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  
  {
    title: 'Human Resources Management Information System (HRMIS)',
    description: 'Covers all the process of Human Resources management in any organization. Feature like performance evaluation, time tracking and attendance management, employee scheduling,payroll management in single application.',
    technologies: ['Dotnet Framework' ,'MsSqlServer' ,'JQuery' ,'RestfullAPIS'],
    // githubLink: '#',
    liveLink: '#',
    // image: '/placeholder2.jpg'
  },
  {
    title: 'Nepal Increased Sustainability Tea Exports Project(NISTEP)',
    description: 'Allows full traceability of tea production in Nepal. Can get access to every details of Tea production from farmers to the factory with just a qr scan.',
    technologies: ['Dotent Core','JQuery', 'mySQL'],
    // githubLink: '#',
    liveLink: '#',
    // image: '/placeholder3.jpg'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>
            <span className="section-number"></span> Featured Projects
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {/* <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                    >
                      <FiGithub />
                    </a> */}
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live project"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;