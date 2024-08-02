import {motion} from "framer-motion"
import Paragraph from "../../components/Paragraph"
import References from "../../components/References"
import AssessmentFooter from "../../components/AssesmentFooter";
import poster from "../../assets/images/poster.png"
import mindmap from "../../assets/images/mindmap.png"


export default function Task2() {
    const references = [
        {
          text: "UWTSD University, 'Managing Emotions'",
          link: "https://uwtsd.careercentre.me/resources/elearning/hub.aspx?redirect=/e-learning/asset/view/5038&redirectUrl=",
          accessDate: "24-Jul-2024"
        },
        {
          text: " A. Soronen, 'Emotional Labour in Magazine Work,' Journalism Practice, vol. 12, no. 3, pp. 290-307, 2018, doi: 10.1080/17512786.2017.1297685.",
          link: "https://www.researchgate.net/publication/315895340_Emotional_Labour_in_Magazine_Work_Suppressing_and_evoking_emotions_as_part_of_project-based_teamwork",
          accessDate: "24-Jul-2024"
        },
        {
          text: "Nicolas Henckes,‘The first pulse you take is your own’ – but don't forget your colleagues'. Emotion teamwork in pre-hospital emergency medical services, doi.org/10.1111/1467-9566.12261 ",
          link: "https://onlinelibrary.wiley.com/doi/10.1111/1467-9566.12261",
          accessDate: "24-Jul-2024"
        }
      ];


      const footerLinks = [
        { text: 'Task1', href: '/LDEAssesment/task1' },
        { text: 'LDEAssesment Home', href: '/LDEAssesment' },
        { text: 'Task3', href: '/LDEAssesment/task3' },
      ];
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide gap-8 pb-8">
        <motion.h1 className="lg:text-[2rem] text-[1.5rem] font-Jost  relative border-b-8 border-blueBackground text-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Task2 - 
            Professional Academic poster and collaborative mindmap. 
        </motion.h1>
        <Paragraph>
            This secction task will showcase an academic poster that highligt the importance os managing emotions on teamwork and collaboration and also it will exhibit a mindmap based on the Moodle Unit 2 topic 4 wichi is a collaborative task with 3 other students, Dmytro, Ruy and Francesco.
        </Paragraph>
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            A3 Poster
        </motion.h1>

        <motion.img
            src={poster}
            loading="lazy"
            initial={{ opacity: 0 }}
            alt="A3 Poster"
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="w-full max-w-2xl mx-auto"
        />
    
       
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Poster Link  
        </motion.h1>
        <Paragraph>
          Check the poster here <a href="https://1drv.ms/i/s!AvN9O2Ym8AXYbOcAOXAVgCRv37g?e=cDlgTv" target="_blank" className="bg-blueBackground text-white font-Jost text-lg py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-700">Link To Poster</a>
        </Paragraph>
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Mind Map   
        </motion.h1>

        <motion.img
            src={mindmap}
            loading="lazy"
            initial={{ opacity: 0 }}
            alt="A3 Poster"
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="w-full max-w-2xl mx-auto"
        />
        
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Mind Map Link 
        </motion.h1>

        <Paragraph>
             Check the mind map here <a href="https://1drv.ms/i/s!AvN9O2Ym8AXYa11E900e54ljTvI?e=e2IXVZ" target="_blank" className="bg-blueBackground text-white font-Jost text-lg py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-700">Link To Mindmap</a>
        </Paragraph>
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2 underline text-blueBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            References   
        </motion.h1>
        <Paragraph>
        
            <References references={references} />

        </Paragraph>
        
        <AssessmentFooter links={footerLinks} />
        
        

        
        </div>
    )
}
