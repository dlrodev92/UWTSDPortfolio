import { motion } from "framer-motion";
import SkillBouble from './../components/SkillBouble';
import Carrousel from "./../components/Carrousel";
import {data} from "../data/distractionDefender.js";
import { useEffect, useState } from "react";

export default function DistractionDefender() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    function getImages() {
    const imageElements = data.carouselImages.map((image) => {
      return (
        <div className="item min-w-[550px] h-[400px] rounded-[25px] p-5 flex items-center justify-center" key={image}>
        <motion.img src={image} className="w-[80%] h-[80%] rounded-[25px] pointer-events-none" alt="project img" loading="lazy"
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 2 }}/>
        </div>
      );
    });
    return imageElements;
  }
function getSkills() {
  const skillElements = data.stackInfo.map((skill) => {
    return (
      <SkillBouble
        name={skill.name}
        grid={skill.grid}
        text={skill.text}
        color={skill.color}
      />
    );
  });
  return skillElements;
}
function getTakeaways() {
  const takeawayElements = data.takeaways.map((takeaway) => {
    return (
      <li className='lg:text-[1.1rem] text-[1rem] font-Jost italic'>"{takeaway}"</li>
    );
  });
  return takeawayElements;
}
    return (
        <motion.div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide"
        key="migthyMiniMinds"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
          <motion.h1 className='lg:text-[4rem] text-[3rem] font-Jost relative border-b-8 mb-5 border-blueBackground text-center'
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.7 }}
          >
            {data.title}
          </motion.h1>
          <motion.img src={data.heroImage} alt='project image' className='w-[100%] bg-fixed'
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.7 }}
          loading="lazy"
          />
          <div className='w-full bg-slate-200 flex flex-col justify-start md:justify-center items-center rounded-lg p-3'>
            <motion.h2 className='lg:text-[3rem] text-[2rem] font-Jost border-b-8 border-blueBackground text-center mb-5'
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.7 }}
            >
              Project Overview
            </motion.h2>
            <motion.div className='w-full flex flex-col justify-center items-center'
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.7 }}>
              <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Summary
              </h3>
              <p className='text-[1rem] text-center w-4/5 font-Jost'>
                {data.summary}
              </p>
              <motion.h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold mt-5  text-center'
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.7 }}>
                Stack
              </motion.h3>
              <motion.div className="w-[75%]  grid grid-cols-6 grid-rows-4 gap-2 p-5 "
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.7 }}>
                {getSkills()}
            </motion.div>
            <motion.h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.7 }}>
                Takeaways
            </motion.h3>
            <motion.div className="flex justify-center items-center w-[100%]"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.7 }}>
                <ul className="list-disc flex flex-col justify-center items-center p-5">
                  {getTakeaways()}
                </ul>
            </motion.div>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Gallery
            </h3>
            <Carrousel images={getImages()}/>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Links
            </h3>
            <motion.div className="flex w-full justify-around items-center"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1 }}>
                <a href="https://distractiondefender.netlify.app/" target="_blank" ><img src={screenWidth > 1023 ? "https://i.ibb.co/2jQ7Ngg/4.png" : "https://i.ibb.co/DfpcBq4/2.png"} alt="migthywebsite" className="w-[200px] p-5 hover:scale-110  duration-500 cursor-pointer "/></a>
                <a href="https://github.com/dlrodev92/Distraction_defender_Client" target="_blank"><img src="https://i.ibb.co/zhD6KVZ/Untitled-design-20.png" alt="github" className="w-[125px] h-[125px]  p-5 hover:scale-110  duration-500 cursor-pointer " /></a>
            </motion.div>
            </motion.div>
          </div>
        </motion.div>
    )
}
