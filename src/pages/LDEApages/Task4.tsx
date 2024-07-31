import {motion} from "framer-motion"
import Paragraph from "../../components/Paragraph"
import AssessmentFooter from "../../components/AssesmentFooter";
import CSSIcon from '../../assets/icons/css.svg';
import HTMLIcon from '../../assets/icons/html.svg';
import JavaScriptIcon from '../../assets/icons/javascript.svg';
import ReactIcon from '../../assets/icons/react.svg';





export default function Task4() {
      const footerLinks = [
        { text: 'Task3', href: '/LDEAssesment/task3' },
        { text: 'LDEAssesment Home', href: '/LDEAssesment' },
      ];
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide gap-8 pb-8">
        <motion.h1 className="lg:text-[2rem] text-[1.5rem] font-Jost  relative border-b-8 border-blueBackground text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Task4 - 
            My E-Portfolio: Tools Explained
        </motion.h1>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Tools Used
        </motion.h2>

        <Paragraph>
            For building my e-portfolio, I utilized JavaScript, CSS, and HTML nad the React framework.
        </Paragraph>

        <div className="flex items-start justify-center space-x-4">
            <img src={JavaScriptIcon} alt="JavaScript Icon" className="w-12 h-12" />
            <img src={CSSIcon} alt="CSS Icon" className="w-12 h-12" />
            <img src={HTMLIcon} alt="HTML Icon" className="w-12 h-12" />
            <img src={ReactIcon} alt="React Icon" className="w-12 h-12" />
        </div>

        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Reason for Choosing These Tools
        </motion.h2>

        <Paragraph>
            <span className="font-bold text-[1.3rem]">Long-term Vision:</span> My idea behind this e-portfolio is to use it as a proof of my work at the UWTSD and showcase all my academic projects Scalability and ongoing improvement one of the reasons I choosed React as this is just the 1.0 version.
        </Paragraph>

        <Paragraph>
            <span className="font-bold text-[1.3rem]">Constant Improvement:</span> The content of the data in my first essay is currently embedded directly into the HTML. My mid-term goal is  to create an API to store my projects in a database and pull that data into my portfolio dynamically and I can achieve that with this portfolio.
        </Paragraph>

        <Paragraph>
            <span className="font-bold text-[1.3rem]">Flexibility and Customisability:</span>  React allowed me flexibility and creativity. I wanted a unique design that express my ideas as I wanted. I finally created something that is exclusive, on the other hand using a web builder I would not have that flexibility and I would have had to stick to templates or what the builder allows the user to do.
        </Paragraph>

        
        <Paragraph>
            <span className="font-bold text-[1.3rem]"> Comfort and Accuracy:</span>  My familiarity with React helped me to do what I needed on this project.
        </Paragraph>

        <Paragraph>
            To summarized, choosing these tools provides me a framework for a professional unique design e-portfolio that will grow along with me and my work throughout my academic career.
        </Paragraph>
       
       
        <AssessmentFooter links={footerLinks} />
        
        
        </div>
    )
}
