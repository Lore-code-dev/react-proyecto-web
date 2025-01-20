import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

function App() {
    return (
        <>
            <Navbar />
            <main className='size-full flex flex-col text-white'>
                <div class='fixed inset-0 -z-10 size-full'>
                    <div class='relative size-full bg-slate-950'>
                        <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
                        <div className='absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
                    </div>
                </div>
                <Hero />
                <About />
                <Service />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
