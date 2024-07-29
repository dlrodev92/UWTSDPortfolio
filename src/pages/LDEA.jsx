import {motion} from "framer-motion"
import Paragraph from "../components/Paragraph"
import PageLinkButton from "../components/PageLinkButton"

export default function LDEA() {
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide gap-8">
        
        
        <motion.h1 className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            LDEAssesment
        </motion.h1>
        <div className="bg-[url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600')]  h-[200px] w-full bg-cover bg-no-repeat bg-bottom md:bg-center"></div>
       
            
            <Paragraph>
                This is the homepage of the Learning in the Digital Era  Assessment 1 for this term of June 2024. You can navigate to the tasks page by clicking the buttons below.
            </Paragraph>

            <div className="w-full flex items-center justify-around flex-wrap">
            <PageLinkButton
            to="/LDEAssesment/task1"
            >
                Task 1
            </PageLinkButton>
            <PageLinkButton
            to="/LDEAssesment/task2"
            >
                Task 2
            </PageLinkButton>
            <PageLinkButton
            to="/LDEAssesment/task3"
            >
                Task 3
            </PageLinkButton>
            <PageLinkButton
            to="/LDEAssesment/task4"
            >
                Task 4
            </PageLinkButton>

            </div>

        
       
        </div>
    )
}
