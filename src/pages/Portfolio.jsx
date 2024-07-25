import {motion} from "framer-motion"
import ProjCard from "../components/ProjCard"

export default function Portfolio() {
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded:[20px] lg:rounded-[50px] gap-10 overflow-y-scroll scrollbar-hide">
        <motion.h1 className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Projects
        </motion.h1>
        <div className="w-full h-auto flex justify-center flex-wrap gap-5 p-5">
        <ProjCard
        title="Iberosucre Web"
        image="https://i.ibb.co/Pr2Sg96/portada.png"
        linkPage="/ShowsLatinos"
        overlay="bg-red-300"
        />
       
        <ProjCard
        title="Distraction Defender"
        image="https://i.ibb.co/5rJWtjD/D.png"
        linkPage="/DistractionDefender"
        overlay="bg-blue-400"
        />

        <ProjCard
        title="El Dorado"
        image="https://i.ibb.co/QfrskwF/Screenshot-Capture-2023-09-24-00-43-22.webp"
        linkPage="/ElDorado"
        overlay="bg-yellow-700"
        />
         <ProjCard
        title="Ibb Uploader Library"
        image="https://i.ibb.co/BsRxc80/UPLOADER-1.png"
        linkPage="/IbbUploader"
        overlay="bg-red-500/80"
        />

        <ProjCard
        title="Mighty Mini Minds"
        image="https://i.ibb.co/vHXh0cr/mmm-hero.webp"
        linkPage="/MigthyMiniMinds"
        overlay="bg-mmm"
        />
        
        <ProjCard
        title="R S P L S"
        image="https://i.ibb.co/DDnpQhC/bigbang.webp"
        linkPage="/bigBang"
        overlay="bg-bigbang"
        />

        <ProjCard
        title="This.Portfolio"
        image="https://i.ibb.co/XWGFLLD/this-Portfolio.webp"
        linkPage="/ThisPortfolio"
        overlay="bg-blueBackground"
        />
        
        </div>
        </div>
    )
}
