import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { iconList } from '../data/iconList';  // Import your icon list

export default function ProjCard(props) {
    const navigate = useNavigate();
    
    const navigateTo = () => {
        const linkPage = props.metatitle == "LDEAssesment" ? `/project/${props.metatitle}` : `/project/${props.id}`;
        navigate(linkPage);
    };

    return (
        <motion.div className="xs:min-w-[340px] h-auto flex flex-col items-center gap-3 rounded-[25px] shadow-xl p-5 relative bg-white"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}>

            {/* Image */}
            <div className="relative w-full h-[200px] rounded-[25px] bg-white overflow-hidden">
                <img
                    src={props.image}
                    className="w-full h-full object-cover rounded-[25px]"
                    alt="project"
                />
            </div>

            {/* Title */}
            <h2 className="text-[1rem] font-Jost font-bold text-center">
                {props.title}
            </h2>

            {/* Date */}
            <p className="text-sm text-gray-500">
                {props.date}
            </p>

            {/* Hover Divs for Techs and Tags */}
            <div className="flex flex-row gap-2 mt-2 w-full justify-center items-center">
                {/* Techs Div */}
                <div className="relative">
                    <div className="text-xs bg-slate-200 hover:bg-slate-400 text-black font-semibold px-4 py-2 rounded-lg cursor-pointer group transition duration-300">
                        Technologies
                        <div className="absolute invisible w-[300px] -right-40 top-full mt-1 p-3 bg-white shadow-lg border rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {props.technologies && props.technologies.length > 0 ? (
                            <div className="flex flex-wrap gap-2 justify-center w-full">
                                {props.technologies.map((tech, index) => (
                                    <span key={index} className="text-xl px-2 py-1 rounded-full">
                                        {iconList[tech] || <p className='font-bold text-sm text-black'>tech</p> }  
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-gray-500">No technologies used for this project</p>
                        )}
                        </div>
                    </div>
                </div>

                {/* Tags Div */}
                <div className="relative">
                    <div className="group text-xs bg-slate-200 hover:bg-slate-400 text-black font-semibold px-4 py-2 rounded-lg cursor-pointer transition duration-300">
                        Tags
                        <div className="absolute invisible w-[300px] -left-40 top-full mt-1 p-3 bg-white shadow-lg border rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {props.tags && props.tags.length > 0 ? (
                            <div className="flex flex-wrap gap-2 justify-center">
                                {props.tags.map((tag, index) => (
                                    <span key={index} className="text-xs bg-blueBackground text-white px-2 py-1 rounded-md">
                                        {tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-gray-500">No tags available</p>
                        )}
                        </div>
                    </div>                    
                </div>
            </div>

            {/* Go to Project Button */}
            <button className="font-Jost tracking-wider text-white border-2 bg-blueBackground font-bold p-1 w-[50%] rounded-[25px] h-[45px] text-[0.9rem] flex items-center justify-center hover:scale-110 duration-500 cursor-pointer shadow-lg mt-4"
                onClick={navigateTo}>
                Go To Project
            </button>
        </motion.div>
    );
}
