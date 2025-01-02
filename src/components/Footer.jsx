import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>
                            Lorena Sanabria
                        </h3>
                        <p className='text-gray-400'>
                            Full-Stack Developer based in Py, specializing in
                            web and software development.
                        </p>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='flex items-center justify-center'>
                            <input
                                type='email'
                                placeholder='Your email'
                                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-violet-400'
                            />
                            <button
                                type='submit'
                                className='bg-gradient-to-r from-pink-900 via-violet-900 to-blue-900 text-white px-4 
                py-2 rounded-r-lg'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div
                    className='border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center'>
                    <p className='text-gray-400'>
                        &copy; {new Date().getFullYear()} Code by Lore Sanabria
                        <FontAwesomeIcon
                            icon={faCode}
                            className='ml-2 text-blue-700'
                        />
                    </p>
                    <div className='flex space-x-4 my-4 md:my-0'>
                        <a
                            href='https://www.facebook.com/share/Mzwb3vyENVTzGb19/?mibextid=LQQJ4d'
                            className='text-gray-400 hover:text-white'>
                            <FaFacebook />
                        </a>
                        <a
                            href='https://www.instagram.com/loresanabriac_?igsh=NnJsNjNyNHdoMGl3&utm_source=qr'
                            className='text-gray-400 hover:text-white'>
                            <FaInstagram />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/lorena-sanabria-cabral-106320240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                            className='text-gray-400 hover:text-white'>
                            <FaLinkedin />
                        </a>
                        <a
                            href='https://github.com/Lore-code-dev'
                            className='text-gray-400 hover:text-white'>
                            <FaGithub />
                        </a>
                        <a
                            href='https://wa.me/595976512388?text=Hola!%20Quisiera%20contactarme%20con%20usted.%20'
                            className='text-gray-400 hover:text-white'>
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div className='flex space-x-4'>
                        <a href='#' className='text-gray-400 hover:text-white'>
                            {/* Privacy */}
                        </a>
                        <a
                            href='#'
                            className='text-gray-400 hover:text-white'></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
