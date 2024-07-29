import {motion} from "framer-motion"
import Paragraph from "../../components/Paragraph"
import References from "../../components/References"
import AssessmentFooter from "../../components/AssesmentFooter";


export default function Task1() {
    const references = [
        {
          text: "The Importance of Time Management for Software Developers, Insure Your Company",
          link: "https://insureyourcompany.com/blog/the-importance-of-time-management-for-software-developers/",
          accessDate: "18-Jun-2024"
        },
        {
          text: "Critical Thinking in Software Development, Pragmatic Engineer Blog",
          link: "https://blog.pragmaticengineer.com/critical-thinking/",
          accessDate: "18-Jun-2024"
        },
        {
          text: "University of London, Critical thinking and writing, in Critical Thinking Guide, pp. 1-4, 2020",
          link: "https://studenthub.city.ac.uk/__data/assets/pdf_file/0011/372818/2.-Critical-thinking-guide_FINAL.pdf",
          accessDate: "18-Jun-2024"
        },
        {
          text: "J. Sonmez, Don’t Get Religious about Technology, in Soft Skills: The software developer's life manual, Manning Publications, 2020, pp. 104-106.",
          link: ""
        }
      ];
      const footerLinks = [
        { text: 'LDEAssesment Home', href: '/LDEAssesment' },
        { text: 'Task2', href: '/LDEAssesment/task2' },
      ];
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide gap-8 pb-8">
        <motion.h1 className="lg:text-[2rem] text-[1.5rem] font-Jost  relative border-b-8 border-blueBackground text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Task1 - 
            IEEE Referencing & written summary on essential academic and employment skills. 
        </motion.h1>
        <Paragraph>
            Developing essential academic skills during university is crucial for a successful career, especially in the field of software engineering where I see myself in 3 years. Three key skills that are particularly valuable are time management, critical thinking, and adaptability.  
        </Paragraph>
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Time Management 
        </motion.h1>
        <Paragraph>
            Good time management is essential for success in academia. At the university, managing coursework, projects, and personal schedules requires efficient use of time where each activity is scheduled at the right time. According to an article on the blog Insure Your Company, time management enables software developers to stay organized, meet deadlines, and avoid overrunning project budgets which can hinder the success of the software development industry.【1】.    
        </Paragraph>
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Critical Thinking   
        </motion.h1>
        <Paragraph>
            The ability to think critically is also an essential skill for assessing, researching and solving complex problems. As an engineer, it is key for designing algorithms or solving complex Problems. As more and more AI tools are used, this skill will also differentiate between professionals who are asking questions and understanding outputs from those who will not. 【2】【3】.   
        </Paragraph>
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Adaptability   
        </motion.h1>
        <Paragraph>
            In university, students must learn how to adapt to new subjects, technologies, and methodologies. As a software engineer being adaptable is a fundamental skill as the technology and tools evolve quickly, adapting to new programming languages, frameworks, and industry trends is a constant requirement. Software developers must avoid becoming overly attached to specific technologies and remain open to learning, as highlighted by John Sonmez in his advice on avoiding dogmatic beliefs about technology【4】.  
        </Paragraph>
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Conclusion  
        </motion.h1>
        <Paragraph>
             Learning how to best manage time, think critically, and adapt during university will lead to higher scores, but more importantly, it will help students have a baseline to build a career in software engineering.   
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
        <motion.h1 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Reflection on Turnitin Similarity Score and Self-Assessment Task 1B
        </motion.h1>
        <Paragraph>
            I submitted my work to the Turnitin link 'Task One - Similarity Check', and recived a 20% similarity score. I think my score is fair, as only 1 sentence is similar to 3 different websites, so I changed the sentence and its structure. If I use the 'Generic Assessment Criteria', I would give myself 75%. Because I think I cover the criteria, I show that I understand the topic. If I had more words to explain and dive into the topic I believe I would have done it better. 
        </Paragraph>
        <AssessmentFooter links={footerLinks} />
        
        

        
        </div>
    )
}
