import employeeMSImage from '@/assets/employee-ms.png';
import bookMSImage from '@/assets/admin-dashboard.png';
import billPy from '@/assets/billPy.png';
import ecommerce from '@/assets/ecommerce.png';
import pokemon from '@/assets/pokemon.png';
import plants from '@/assets/plants.png';
import { motion } from 'motion/react';

const projects = [
    {
        id: 1,
        name: 'Wallet App Demo',
        technologies: 'Mobile App',
        image: employeeMSImage,
        github: 'https://media.licdn.com/dms/image/v2/D4D22AQF9qCYFPY5QiA/feedshare-shrink_1280/feedshare-shrink_1280/0/1718404781627?e=1738800000&v=beta&t=DQpr4oUVCNF7NUROj65IQ_ojbRIk972jaejQJutY5tA',
    },
    {
        id: 2,
        name: 'ÑamopuApp',
        technologies: 'Mobile App',
        image: bookMSImage,
        github: 'https://www.figma.com/proto/3I4v0NUrUcnTJlR0CMf9Kl/%C3%91amopuApp?node-id=44-112&starting-point-node-id=44%3A112&t=zHMdaJAjYruhWkVw-1',
    },
    {
        id: 3,
        name: 'LPSoft',
        technologies: 'Dynamic Forms for HR',
        image: billPy,
        github: '',
    },

    {
        id: 4,
        name: 'E-Commerce',
        technologies: 'Website',
        image: ecommerce,
        github: 'https://lore-code-dev.github.io/hallstore.io.github/',
    },

    {
        id: 5,
        name: 'Pokemon Game',
        technologies: 'Website',
        image: pokemon,
        github: '',
    },
    {
        id: 6,
        name: 'Plants Service',
        technologies: 'Website',
        image: plants,
        github: '',
    },
];

const Projects = () => {
    return (
        <div className=' py-20' id='project'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    My Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <motion.div
                            key={project.id}
                            initial={{
                                y: '40px',
                                opacity: 0,
                                filter: 'blur(6px)',
                            }}
                            whileInView={{
                                y: '0',
                                opacity: 1,
                                filter: 'blur(0px)',
                                transition: {
                                    delay: 0.05 * project.id,
                                    bounce: false,
                                },
                            }}
                            viewport={{
                                once: true,
                                margin: '',
                            }}
                            className='bg-gray-800 p-6 rounded-lg hover:shadow-lg'>
                            <img
                                src={project.image}
                                alt={project.name}
                                className='rounded-lg mb-4 
              w-full h-48 object-cover'
                            />
                            <h3 className='text-2xl font-bold mb-2'>
                                {project.name}
                            </h3>
                            <p className='text-gray-400 mb-4'>
                                {project.technologies}
                            </p>
                            <a
                                href={project.github}
                                className='inline-block bg-primary text-black/80 px-4 hover:bg-primary/80 transition
                py-2 rounded-full'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Check It Out
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
