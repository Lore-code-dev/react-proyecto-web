import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24 bg-gradient-to-r from-blue-900 via-black-800 to-black-400'>
            <div className='container py-2 flex justify-center md:justify-between items-center'>
                <div className='text-2xl font-bold hidden md:inline'>
                    Welcome to my Website{' '}
                    <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <div className='space-x-6'>
                    <a href='#home' className='hover:text-gray-400'>
                        Home
                    </a>
                    <a href='#about' className='hover:text-gray-400'>
                        About
                    </a>
                    <a href='#service' className='hover:text-gray-400'>
                        Services
                    </a>
                    <a href='#project' className='hover:text-gray-400'>
                        Projects
                    </a>
                    <a href='#contact' className='hover:text-gray-400'>
                        Contact
                    </a>
                </div>
                <a
                    href='https://wa.me/595976512388?text=Hola!%20Quisiera%20contactarme%20con%20usted.%20'
                    target='_blank'
                    className='bg-gradient-to-r from-violet-500 to-blue-900 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Connect Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
