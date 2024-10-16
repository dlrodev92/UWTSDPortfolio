import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjCard from '../components/ProjCard';
import ProjCardSkeleton from '../components/ProjCardSkeleton';  

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}api/projects/`)
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);  
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                setLoading(false);  
            });
    }, []);

    return (
        <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-[20px] lg:rounded-[50px] gap-10 overflow-y-scroll scrollbar-hide">
            <motion.h1
                className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}>
                Essays and Works
            </motion.h1>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 p-5">
                {loading ? (
                    // Render 4 skeletons while loading
                    <>
                        <ProjCardSkeleton />
                        <ProjCardSkeleton />
                        <ProjCardSkeleton />
                        <ProjCardSkeleton />
                    </>
                ) : (
                    // Render projects once loaded
                    projects.map((project) => (
                        <ProjCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            image={project.mainImage}
                            date={project.date}
                            tags={project.tags}
                            technologies={project.technologies}
                            metatitle={project.metatitle}  
                        />
                    ))
                )}
                
            </div>
        </div>
    );
};

export default Portfolio;
