import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Experience() {
  const education = [
    { date: '2018 - 2019', title: "High School Degree", description: 'I learned in ISGS of Sousse, and Im happy to learn in this school. It\'s the best in the world! I\'m so excited to learn new things here.' },
    { date: '2018 - 2019', title: "High School Degree", description: 'I learned in ISGS of Sousse, and Im happy to learn in this school. It\'s the best in the world! I\'m so excited to learn new things here.' },
    { date: '2018 - 2019', title: "High School Degree", description: 'I learned in ISGS of Sousse, and Im happy to learn in this school. It\'s the best in the world! I\'m so excited to learn new things here.' },
    { date: '2018 - 2019', title: "High School Degree", description: 'I learned in ISGS of Sousse, and Im happy to learn in this school. It\'s the best in the world! I\'m so excited to learn new things here.' },
  ];

  return (
    <section>
      <header className="header">
        <h2 className="h21">EXPERIENCE</h2>
      </header>
      <div className="experience">
        {education.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ item }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="boox"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0. }}
    >
      <h4 key={item.name}>{item.date}</h4>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
}

