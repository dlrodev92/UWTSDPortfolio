import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/resume.pdf'

export default function AppLayout() {
  return (
    <>
      <div className='w-screen h-screen grid grid-cols-appLayout grid-rows-appLayout p-7 lg:p-1 scrollbar-hide '>
        <div className='col-start-1 col-span-6 row-start-1 row-span-5 lg:col-start-2 lg:col-span-4 lg:row-start-2 lg:row-span-4 bg-blueBackground flex lg:flex-row flex-col justify-end lg:rounded-[50px] rounded-[20px] lg:shadow-inner'>
          <div className="h-[10%] flex justify-center gap-10 items-center lg:flex-col lg:items-center lg:justify-center lg:w-[25%] lg:h-full lg:gap-5">
            <img className="w-[60px] lg:w-[60%] xs:ml-2 mb-1" src="https://i.ibb.co/C2gdXgb/user.webp"
            loading="lazy" alt="profile.pic" />
            <div className="flex flex-col gap-1 justify-center items-center">
              <h1 className="font-Jost tracking-wider hidden lg:block min-[1200px]:text-[130%] lg:text-[100%]  text-white font-bold">David Lopez Rodriguez</h1>
              <h2 className="font-Jost tracking-wider hidden lg:block max-[1200px]:text-[95%] lg:text-[85%]  text-white">UWTSD Student Id: 2336542</h2>
              <img className="w-[60px] lg:w-[30%] xs:ml-2 mb-1 rounded-md shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL3g9gax9Pq3vB1UUeTzGRX4g3t_3ewC-Sg&s"
            loading="lazy" alt="profile.pic" />
            </div>
            
          </div>
          <motion.div className='bg-white lg:w-[75%] lg:h-full lg:rounded-[50px] shadow-inner w-full h-[88%] rounded-b-[20px]'
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{duration: 0.5}}
                >
            <Outlet />
          </motion.div>
        </div>
        <div className='col-start-1 col-span-6 lg:col-start-6 lg:row-start-2 lg:row-span-2 flex items-center justify-center mt-3 lg:items-start lg:justify-start lg:mt-3 lg:ml-[20%] '>
          <NavBar />
        </div>
      </div>
    </>
  )
}
