import HeroImage from '../assets/hero-image.png';

const Hero = () => {
    return (
        <div className='h-[calc(100dvh_-_55px)] flex flex-col items-center justify-center text-center py-12 lg:py-24'>
            <img
                src={HeroImage}
                alt=''
                className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
            />
            <div className='container max-w-3xl mx-auto'>
                <h1 className='text-5xl lg:text-7xl font-bold motion-preset-blur-up-lg motion-duration-700'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                        Lorena Sanabria
                    </span>
                    , Fullstack Developer
                </h1>
                <p className='mt-4 text-lg lg:text-xl motion-preset-fade-lg motion-delay-500 motion-duration-500'>
                    I specialize in building modern and responsive web
                    applications, with expertise in managing databases and
                    developing mobile applications.
                </p>
            </div>
            <div className='mt-8 motion-preset-fade-lg motion-delay-500 motion-duration-500 text-lg'>
                <button class='relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    <span class='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'></span>
                    <a
                        href='https://drive.google.com/file/d/1ltrvFUE1IeIkyLwS1C2KeUnBFKl2NP7B/view?usp=sharing'
                        download
                        class='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1  text-white backdrop-blur-3xl'>
                        Download CV
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Hero;
