import {motion} from "framer-motion"
import Paragraph from "../components/Paragraph"
import PageLinkButton from "../components/PageLinkButton"

export default function LDEA() {
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded:[20px] lg:rounded-[50px] gap-10 overflow-y-scroll scrollbar-hide">
        
        <motion.h1 className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            LDEAssesment
        </motion.h1>
       
            
            <Paragraph>
                This is the homepage of the Learning in the Digital Era  Assessment 1 for this term of June 2024.
            </Paragraph>

            <PageLinkButton
            to="/LDEAssesment/task1"
            >
                Task 1
            </PageLinkButton>

        
       
        </div>
    )
}
