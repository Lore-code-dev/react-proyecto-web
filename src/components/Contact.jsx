import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    Contact Me
                </h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3
                            className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'></h3>
                        <p></p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-violet-800 mr-2'></FaEnvelope>
                            <a
                                href='mailto:youremail@example.com'
                                className='hover:underline'>
                                lesanabriac@gmail.com
                            </a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-blue-800 mr-2'></FaPhone>
                            <span>0976512388</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkedAlt className='inline-block text-pink-800 mr-2'></FaMapMarkedAlt>
                            <span>Asunción, Paraguay</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block mb-2'>
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-violet-400'
                                    placeholder='Enter You Name'
                                />
                            </div>
                            <div>
                                <label htmlFor='emial' className='block mb-2'>
                                    Email
                                </label>
                                <input
                                    type='text'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-violet-400'
                                    placeholder='Enter You Email'
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block mb-2'>
                                    Message
                                </label>
                                <textarea
                                    type='text'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-violet-400'
                                    rows='5'
                                    placeholder='Enter You Message'
                                />
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    className='bg-gradient-to-r from-violet-800 via-violet-700 to-blue-900 text-white md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
