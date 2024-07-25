import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
export default function ProjCard (props){
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate(props.linkPage)
    }
    return(
        
        <motion.div className="xs:min-w-[340px] h-[270px] flex flex-col items-center gap-3  rounded-[25px] shadow-xl p-2 relative "
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.5 }}>
            <div className='relative w-full h-[70%] rounded-[25px] bg-white'>
                <motion.div className={`absolute top-0 left-0 w-full h-[95%] aspect-video flex items-center justify-center ${props.overlay} opacity-0 rounded-[25px]`}
                    whileHover={{x: 0, opacity: 0.9}}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className='absolute text-[1.9rem] font-Jost font-bold text-white opacity-[200%]'>{props.title}</h1>
                </motion.div>
                <img
                 src={props.image} 
                 className="w-full h-[95%] aspect-video rounded-[25px]"
                 alt="project image"
                 />
            </div>
            <button className="font-Jost tracking-wider text-white border-2 bg-blueBackground font-bold p-1 w-[30%] rounded-[25px] h-[45px] text-[0.9rem] flex items-center justify-center hover:scale-110 duration-500 cursor-pointer shadow-lg"
            onClick={navigateTo}
            >More Info
            </button>
            <AnimatePresence>
            </AnimatePresence>
        </motion.div>
    )
}