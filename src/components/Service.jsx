const services = [
    {
        id: 1,
        title: 'Web Design',
        description:
            'Creating visually appealing and user-friendly web designs.',
    },
    {
        id: 2,
        title: 'Frontend Development',
        description: 'Building responsive and interactive user interfaces.',
    },
    {
        id: 3,
        title: 'Backend Development',
        description: 'Developing robust server-side logic and databases.',
    },
    {
        id: 4,
        title: 'Full-Stack Development',
        description: 'Combining both frontend and backend development skills.',
    },
    {
        id: 5,
        title: 'Mobile App Development',
        description:
            'Building high-performance and visually stunning mobile applications using Flutter for Android and iOS.',
    },
    {
        id: 6,
        title: 'Enterprise System Maintenance',
        description:
            'Ensure smooth operation and optimal performance of your business systems with our expert database maintenance services.',
    },
];
const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='service'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    My Services
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                        <div
                            key={service.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105'>
                            <div
                                className='text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-pink-600 to-white-400'>
                                {service.id}
                            </div>
                            <h3
                                className='mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-violet-700 via-pink-300 to-blue-500'>
                                {service.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>
                                {service.description}
                            </p>
                            <a
                                href='#'
                                className='mt-4 inline-block text-blue-400 hover:text-blue-500'>
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
