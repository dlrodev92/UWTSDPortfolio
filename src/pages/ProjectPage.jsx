import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi'; 
import Paragraph from '../components/Paragraph';
import ImageGrid from '../components/ImageGrid';
import ProjectPageSkeleton from '../components/ProjectPageSkeleton';


const ProjectPage = () => {
    const { id } = useParams(); 
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}api/projects/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching project:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <ProjectPageSkeleton/>; 
    }

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="p-4 h-full w-full flex flex-col items-center justify-start rounded-[20px] lg:rounded-[50px] gap-10 overflow-y-auto scrollbar-hide">
            <h1 className="text-4xl font-bold mb-6 text-center">{project.title}</h1>

            <motion.img
                src={project.mainImage}
                loading="lazy"
                initial={{ opacity: 0 }}
                alt="Project Main Image"
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="aspect-video h-[75%] bg-cover bg-no-repeat bg-bottom md:bg-center shadow-md rounded-md"
            />
            
            <div className="w-full flex flex-col items-center justify-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <Paragraph>{project.description}</Paragraph>
            </div>

            {project.tasks && project.tasks.length > 0 && (
                <div className="w-full flex flex-col items-center gap-6 mb-8">
                    <h2 className="text-2xl font-semibold">Summary</h2>
                    {project.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="w-full max-w-[800px] flex flex-col items-center gap-4">
                            {task.paragraphs && task.paragraphs.length > 0 && task.paragraphs.map((paragraphObj, paraIndex) => (
                                <Paragraph key={paragraphObj.id} className="w-full text-left">
                                    {paragraphObj.paragraph}
                                </Paragraph>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            <div className="w-full mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Images</h2>
                <ImageGrid images={project.tasks[0].images} />
            </div>

            {project.files && project.files.length > 0 && (
                <motion.div 
                    className="w-full flex flex-col items-center justify-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h2 className="text-2xl font-semibold">Files</h2>
                    {project.files.map((file) => (
                        <motion.div
                            key={file.id}
                            className="w-full max-w-[400px] flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div>
                                <h3 className="font-semibold text-lg">{file.name}</h3>
                                <p className="text-sm text-gray-500">Click to download the file</p>
                            </div>
                            <a
                                href={file.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="text-blue-500 hover:text-blue-700"
                            >
                                <FiDownload className="text-3xl" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            )}

        </div>
    );
};

export default ProjectPage;
