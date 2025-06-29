import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React', level: 70 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JQuery', level: 85 }
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Firebase', level: 70 },
      { name: 'REST APIs', level: 90 },
      { name: 'MsSqlServer', level: 90 },
      { name: 'C#,Dotnet', level: 90 }
    ]
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Visual Studio', level: 70 }
    ]
  },
  {
    category: 'Mobiile Appication',
    icon: '🛠️',
    skills: [
      { name: 'Kotlin', level: 40 },
      { name: 'React Native', level: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>
            <span className="section-number"></span> My Skills
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;