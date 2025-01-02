import HeroImage from '../assets/hero-image.png';

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16'>
            <img
                src={HeroImage}
                alt=''
                className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
            />
            <h1 className='text-4xl font-bold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500'>
                    Lorena Sanabria
                </span>
                , Fullstack Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                I specialize in building modern and responsive web applications,
                with expertise in managing databases and developing mobile
                applications.
            </p>
            <div className='mt-8 space-x-4'>
                <a
                    href='https://wa.me/595976512388?text=Hola!%20Quisiera%20contactarme%20con%20usted.%20'
                    target='_blank'
                    className='bg-gradient-to-r from-blue-900 to-blue-500 text-white
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Contact With Me
                </a>
                <a
                    href='https://drive.google.com/file/d/1ltrvFUE1IeIkyLwS1C2KeUnBFKl2NP7B/view?usp=sharing'
                    download // Hace que el archivo se descargue automáticamente
                    className='bg-gradient-to-r from-pink-800 to-violet-500 text-white
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Hero;
