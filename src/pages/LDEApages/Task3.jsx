import {motion} from "framer-motion"
import Paragraph from "../../components/Paragraph"
import References from "../../components/References"
import AssessmentFooter from "../../components/AssesmentFooter";


export default function Task3() {
    const references = [
        {
          text: "J. Stein, 'Using the Stages of Team Development,' Human Resources at MIT",
          link: "https://hr.mit.edu/learning-topics/teams/articles/stages-development#:~:text=During%20the%20Norming%20stage%20of,reality%20of%20the%20team's%20experience",
          accessDate: ""
        },
        {
          text: "M. Vich and M. Kim, 'Construction and Application of Radical Candor: Efficiency of Criticism at Work,' Central European Business Review, vol. 5, no. 4, pp. 11-22, Jan. 2016.",
          link: "https://www.researchgate.net/publication/313680390_Construction_and_Application_of_Radical_Candor_Efficiency_of_Criticism_at_Work",
          accessDate: ""
        },
        {
          text: "E. Lockhart, 'Spinach in Your Teeth,' Radical Candor,",
          link: "https://www.radicalcandor.com/blog/video-spinach-teeth/",
          accessDate: "25-Jun-2024"
        },
      ];
      const footerLinks = [
        { text: 'Task2', href: '/LDEAssesment/task2' },
        { text: 'LDEAssesment Home', href: '/LDEAssesment' },
        { text: 'Task4', href: '/LDEAssesment/task4' },
      ];
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide gap-8 pb-8">
        <motion.h1 className="lg:text-[2rem] text-[1.5rem] font-Jost  relative border-b-8 border-blueBackground text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Task3 - 
            Automatic Referencing tool 
        </motion.h1>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Radical Candor In the Norming Phase 
        </motion.h2>
        <Paragraph>
            The Norming phase is crucial in team development. In this phase individuals resolve conflicts, understand each other’s strengths and establish roles. Effective communication here can have a massive impact on the team's success. This text aims to explore how the Radical Candor approach can be used to enhance the Norming phase, addressing key dysfunctions and fostering a cohesive team environment. 
        </Paragraph>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Characteristics of the Norming Phase
        </motion.h2>
        <Paragraph>
            Understanding the key features of the norming phase is crucial to understanding how this helps increase team cohesion and productivity. During this phase, the team members start to make adjustments between expectations and the actual experience of being a part of the team. Such a resolution results in broader, more tolerant norms and expectations so that members can be themselves. They begin to see the different points of view and ways in which a diverse group is stronger than one with wrong-sound opinions. This leads to enabling members of the group to feel they belong as a whole because contributing with constructive criticism is much more practical [1] so that everyone can partake in the group unity.    
        </Paragraph>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Addressing Dysfunctions in Teams with Radical Candor   
        </motion.h2>
        <Paragraph>
             In the Norming phase, addressing team dysfunctions such as lack of commitment and avoidance of accountability is crucial. Radical Candor, is an effective strategy to tackle these issues furthermore it encourages direct and honest feedback, which helps in overcoming exaggerated politeness and “false kindness” often observed in teams [2]. 
        </Paragraph>
        <Paragraph>
            Incorporating Radical Candor, teams can effectively address dysfunctions by ensuring open communication and constructive feedback enhancing commitment and accountability leading to a more resilient and high-performing team [2].
        </Paragraph>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Application of Radical Candor in the Norming Phase: Spinach in Your Teeth   
        </motion.h2>
        <Paragraph>

            A practical example of Radical Candor is the "spinach in your teeth" scenario described by Russ Laraway, co-founder of Radical Candor LLC [3]. In a YouTube video presentation, Russ represents 4 ways of managing the situation: Radical Candor; Obnoxious Aggression; Ruinous Empathy; or Manipulative Insincerity.

        </Paragraph>
        <Paragraph>
            
            With Radical Candor, a co-worker might take the person aside and quietly, warmly say: ‘I just wanted to let you know you have a piece of spinach in your teeth’ calling attention to the dirty tooth in a way that neither humiliates nor creates long-term resentment. The essence of Radical Candor is challenging directly while caring personally, with the likely result that the problem gets solved and the relationship is not damaged [3].
                
        </Paragraph>
        <Paragraph>
            
            Applying Radical Candor in the Norming phase ensures that feedback is given in a manner that supports personal and professional growth, fostering a more cohesive and high-functioning team as shown in the video previously mentioned [3].
    
        </Paragraph>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Summary  
        </motion.h2>
        <Paragraph>
            The Norming phase is crucial in team development, characterized by resolving conflicts, understanding each other's strengths, and establishing clear roles. Good communication is vital to the success of Norming; indeed, Radical Candor helps this process by facilitating open and honest communication that is caring at the same time as shown in the  "spinach in your teeth" scenario.  
        </Paragraph>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2 underline text-blueBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
             Refworks Practical Evidence  
        </motion.h2>
        <motion.h2 className="lg:text-[1.4rem] text-[1.2rem] font-Jost font-bold text-center p-2 underline text-blueBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            References   
        </motion.h2>
        <Paragraph>
        
            <References references={references} />

        </Paragraph>
       
        <AssessmentFooter links={footerLinks} />
        
        
        </div>
    )
}
