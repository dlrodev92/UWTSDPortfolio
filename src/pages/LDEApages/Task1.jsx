import {motion} from "framer-motion"


export default function Task1() {
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded:[20px] lg:rounded-[50px] gap-10 overflow-y-scroll scrollbar-hide">
        <motion.h1 className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Task 1
        </motion.h1>
        
        </div>
    )
}
