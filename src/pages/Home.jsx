import {motion} from "framer-motion"

import SkillsSection from '../components/SkillsSection'
import { useState, useEffect } from 'react'


export default function Home() {
    const [specialty, setSpecialty] = useState("Python");

    const [statements, setStatements] = useState("I develop dynamic and responsive web applications using React");

    const handleTimerSpecialty = () => {
    const specialties = [ "React", "NodeJs", "Django", "Git" ,"JavaScript", "Python",];
    const statements = ["I create secure backend applications using NodeJs and Django", "I'm currently expanding my knowledge of web arquitecture  through studies on the Platzi Platform", "I use Git to track and manage my projects", "I've worked for over 6 months on different projects as freelancer", "I develop dynamic and responsive web applications using React",]
    let i = 0;
    let a = 0

    const intervalId = setInterval(() => {
        setSpecialty(specialties[i]);
        i = (i + 1) % specialties.length;
        setStatements(statements[a]);
        a = (a + 1) % statements.length;
    }, 3500);

    };

    useEffect(() => {
    handleTimerSpecialty();

    // If you want to clear the interval when the component unmounts, you can return a cleanup function:
    return () => clearInterval();
    }, []);

 

    return (
        <div className="h-full w-[100%] flex flex-col rounded:[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide">
            <div className="bg-[url('https://i.ibb.co/QbhQdHS/Untitled-design-25.webp')] md:bg-[url('https://i.ibb.co/k6SN0C4/Untitled-design-23.webp')] h-full w-full bg-cover bg-no-repeat bg-bottom md:bg-center">
                <div className="h-full w-full bg-blueBackground bg-opacity-20 flex items-end md:items-start justify-center  ">
                    <motion.div className="flex flex-col justify-around items-center p-5  h-[30%] w-[90%] md:w-[85%] bg-white bg-opacity-90 rounded-[10px] border-4 border-blueBackground mb-2 mt-2"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.7 }}>
                            <h1 className="lg:text-[1.4rem] text-[1rem] font-Jost bold relative border-b-8 border-blueBackground text-center">
                                Hi! I'm David, a junior web developer specializing in
                            <motion.span 
                                key={specialty}
                                className="ml-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                              {specialty}
                            </motion.span>
                            </h1>
                            
                            <motion.li 
                                className="list-none"
                                key={statements}
                                initial={{ opacity:0 , y: '-100%' }}
                                animate={{ opacity:1 , y: 0 }}
                                exit={{ opacity:0 , y: '100%' }}
                                transition={{ duration: 0.7 }}
                                >
                            <h3 className="lg:text-[1.2rem] text-[0.9rem] italic font-Jost"> {`"${statements}"`} </h3>
                            </motion.li>
                    </motion.div>
                </div>
            </div>
            <motion.div className="flex flex-col justify-start items-center h-[30%]"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7 }}
            >
                <h2 className="lg:text-[1.8rem] text-[1.2rem] font-Jost -bold relative border-b-8 border-blueBackground "
                >
                    My Skills
                </h2>

                <div className="w-full p-3">
                    <SkillsSection/>
                </div>
            
            </motion.div>


            </div>
                )
            }
