import AboutImage from '../assets/aboutme-image.png';
import { motion } from 'motion/react';

const skills = [
    { name: 'HTML & CSS', level: 'w-10/12' },
    { name: 'React JS', level: 'w-11/12' },
    { name: 'Node JS', level: 'w-9/12' },
    { name: 'C#', level: 'w-11/12' },
    { name: 'SQL Server', level: 'w-9/12' },
    { name: 'Flutter', level: 'w-9/12' },
    { name: 'Figma', level: 'w-9/12' },
];

const stats = [
    {
        value: '1',
        label: 'Year Experience',
    },
    {
        value: 'Enterprise +',
        label: 'Projects Completed',
    },
];

const About = () => {
    return (
        <div className='text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    About Me
                </h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img
                        src={AboutImage}
                        alt='About Me'
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
                    />
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            I am a passionate full-stack developer with a focus
                            on building modern and responsive web applications.
                            With a strong foundation in both frontend and
                            backend technologies, I strive to create seamless
                            and efficient user experiences.
                        </p>
                        <div className='space-y-4'>
                            {skills.map(({ name, level }) => (
                                <div key={name} className='flex items-center'>
                                    <label className='w-2/12'>{name}</label>
                                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{
                                                once: true,
                                                margin: '',
                                            }}
                                            className={`bg-primary h-2.5 rounded-full transform transition-transform duration-300 origin-left ${level}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                            {stats.map(({ value, label, gradient }) => (
                                <div key={label}>
                                    <h3
                                        className={`text-2xl font-bold text-primary`}>
                                        {value}
                                    </h3>
                                    <p>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
