import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <header className='bg-black text-white px-8 md:px-16 lg:px-24 '>
            <nav className='container mx-auto py-2 flex justify-center md:justify-between items-center'>
                <div className='text-2xl font-bold hidden md:inline'>
                    Welcome to my Website{' '}
                    <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <div className='space-x-6'>
                    <a href='#home' className='hover:text-white/80 transition'>
                        Home
                    </a>
                    <a href='#about' className='hover:text-white/80 transition'>
                        About
                    </a>
                    <a
                        href='#service'
                        className='hover:text-white/80 transition'>
                        Services
                    </a>
                    <a
                        href='#project'
                        className='hover:text-white/80 transition'>
                        Projects
                    </a>
                    <a
                        href='#contact'
                        className='hover:text-white/80 transition'>
                        Contact
                    </a>
                </div>

                <button class='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px font-semibold leading-6  text-white hover:text-white/80 transition inline-block'>
                    <span class='absolute inset-0 overflow-hidden rounded-full'>
                        <span class='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>
                    </span>
                    <a
                        href='https://wa.me/595976512388?text=Hola!%20Quisiera%20contactarme%20con%20usted.%20'
                        target='_blank'
                        class=' relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '>
                        <span>Connect me</span>
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M10.75 8.75L14.25 12L10.75 15.25'></path>
                        </svg>
                    </a>
                    <span class='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40'></span>
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
