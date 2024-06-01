import React from "react"
import projectsData from "./Data/projects.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

export default function Projects() {

    const [isVisibleProject, setisVisibleProject] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('Projects');
            if (section) {
                const { top } = section.getBoundingClientRect();
                setisVisibleProject(top < window.innerHeight / 2);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility
        scrollToTop(); // Scroll to top when the component mounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [selectedProject, setSelectedProject] = React.useState(null);


    const openPopup = (projectId) => {
        setSelectedProject(projectsData.find(project => project.id === projectId));
    };

    const closePopup = () => {
        setSelectedProject(null);
    };


    var css = isVisibleProject ? 'fade-in' : 'opacity-0'
    console.log("css" + css)
    return (
        <section id="Projects" className={`container mx-auto flex px-10 py-40 flex-col ${isVisibleProject ? 'fade-in' : 'opacity-0'}`}>
            <div>
                <h2 className="mb-4 flex title-font sm:text-5xl text-5xl mb-4 font-medium text-green-300">Projects</h2>
                <div class="border-b border-gray-400 w-full"></div>
                <div className="flex flex-wrap -mx-4">

                    {projectsData.map(project => (
                        <div key={project.id} className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4">
                            <div className="h-full shadow-md rounded-lg px-10 py-10 cursor-pointer transition-transform transform hover:-translate-y-5 border-4 border-green-300 bg-gray-800">
                                <a href={project.link}>
                                    <img
                                        alt="gallery"
                                        className="object-cover h-80 w-full object-top, rounded-lg"
                                        src={project.image}
                                    />
                                </a>
                                <div className="cursor-pointer">
                                    <div className="flex flex-col space-y-4">
                                        <h2 className="text-3xl font-bold text-white p-2">{project.title}</h2>
                                        <ul className="list-none flex flex-wrap items-center text-xl">
                                            {project.technologies.map((skill, index) => (
                                                <li className="text-gray-400 bg-gray-700 rounded-full p-2 mr-2 mb-2 text-white" key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                        <div className="p-4">
                                            <p className="text-gray-400 text-xl text-white overflow-hidden" style={{ lineHeight: '1.5rem', maxHeight: '10rem' }}>
                                                {project.description}
                                            </p>
                                        </div>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                className="text-xl text-blue-300 p-4 flex items-center"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Project Homepage
                                                <i className="fas fa-arrow-right ml-2"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};