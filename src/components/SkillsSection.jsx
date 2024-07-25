import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { backendData, frontedData } from "../data/skills.data";

const SkillsSection = () => {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState({});

  const backendRef = useRef(null);
  const frontendRef = useRef(null);

  const toggleAccordion = (label) => {
    setSelectedLabel((prevLabel) => (prevLabel === label ? null : label));
  };

  const toggleSkill = (skillName) => {
    setExpandedSkills((prevSkills) => ({
      ...prevSkills,
      [skillName]: !prevSkills[skillName],
    }));
  };

  const skillVariants = {
    collapsed: { height: '50px' },
    expanded: { height: 'auto' },
  };

  useEffect(() => {
    if (selectedLabel === 'backend' && backendRef.current) {
      backendRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (selectedLabel === 'frontend' && frontendRef.current) {
      frontendRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedLabel]);

  return (
    <div className="flex flex-col items-center gap-2 ">
      {/* Backend Skills */}
      <div className="w-[90%] p-2 border-2 border-blueBackground rounded-xl">
        <h3
          className="text-[0.9rem] md:text-[1.1rem] font-bold  cursor-pointer flex items-center flex-col  justify-center gap-4"
          onClick={() => toggleAccordion('backend')}
          ref={backendRef}
        >
          Backend {selectedLabel === 'backend' ? '🔽' : '🔼'}
        </h3>
        <AnimatePresence>
          {selectedLabel === 'backend' && (
            <motion.ul
              key="backend-skills"
              className="accordion flex flex-col items-center gap-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {backendData.map((skill) => (
                <motion.div
                  onClick={() => toggleSkill(skill.name)}
                  key={skill.name}
                  className="text-[0.8rem] md:text-[0.9rem] font-Jost w-[90%] md:w-[70%] rounded-xl cursor-pointer overflow-hidden"
                  style={{
                    backgroundImage: `url("${skill.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  variants={skillVariants}
                  initial="collapsed"
                  animate={expandedSkills[skill.name] ? 'expanded' : 'collapsed'}
                  exit="collapsed"
                >
                  <div className="flex flex-col justify-start gap-4 h-full p-2 bg-black bg-opacity-80 text-white rounded-xl">
                    <h2 className='text-[1.2rem] md:text-[1.5rem]'>{skill.name}</h2>
                    <h3 className='text-[1.1rem] md:text[1.3rem]'>Certifications: <span className='italic underline text-[0.9rem] md:text[1rem]'>{skill.certifications}</span> </h3>
                    <p className='text-[1.1rem] md:text[1.3rem]'>Journey: <span className='italic underline text-[0.9rem] md:text[1rem]'>{skill.learningJourney}</span></p>
                  </div>
                </motion.div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Frontend Skills */}
      <div className="w-[90%] p-2 border-2 bg-blueBackground text-white rounded-xl flex flex-col items-center justify-center gap-4">
        <h3
          className="text-[0.9rem] md:text-[1.1rem] font-bold cursor-pointer flex items-center"
          onClick={() => toggleAccordion('frontend')}
          ref={frontendRef}
        >
          Frontend {selectedLabel === 'frontend' ? '🔽' : '🔼'}
        </h3>
        <AnimatePresence>
          {selectedLabel === 'frontend' && (
            <motion.ul
              key="frontend-skills"
              className="accordion accordion flex flex-col items-center gap-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {frontedData.map((skill) => (
                <motion.div
                  onClick={() => toggleSkill(skill.name)}
                  key={skill.name}
                  className="font-Jost w-[90%] md:w-[70%] rounded-xl cursor-pointer overflow-hidden "
                  style={{
                    backgroundImage: `url("${skill.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  variants={skillVariants}
                  initial="collapsed"
                  animate={expandedSkills[skill.name] ? 'expanded' : 'collapsed'}
                  exit="collapsed"
                >
                  <div className="flex flex-col justify-start gap-4 h-full p-2 bg-black bg-opacity-80 text-white rounded-xl">
                    <h2 className='text-[1.2rem] md:text-[1.5rem]'>{skill.name}</h2>
                    <h3 className='text-[1.1rem] md:text[1.3rem]'>Certifications: <span className='italic underline text-[0.9rem] md:text[1rem]'>{skill.certifications}</span> </h3>
                    <p className='text-[1.1rem] md:text[1.3rem]'>Journey: <span className='italic underline text-[0.9rem] md:text[1rem]'>{skill.learningJourney}</span></p>
                  </div>
                </motion.div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsSection;