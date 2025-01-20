import { BiLogoTelegram } from 'react-icons/bi';
import { GiFlowerEmblem } from 'react-icons/gi';
import About from './About';
import Contact from './Contact';

function Home() {
    return (
        <main className='flex flex-col gap-28'>
            <section className='min-h-screen flex flex-col items-center justify-center bg-background dark:bg-dark-background gap-4 p-8'>
                <img
                    src='/images/dark-logo.png'
                    alt='Diametric Labs'
                    className='h-52 w-auto hidden dark:block object-contain'
                />
                <img
                    src='/images/light-logo.png'
                    alt='Diametric Labs'
                    className='h-52 w-auto dark:hidden object-contain'
                />
                <h1 className='text-4xl text-primary dark:text-dark-primary font-bold py-10 text-center max-w-6xl '>
                    We are an applied AI research and development company.
                </h1>
                <p className='text-lg text-secondary dark:text-dark-secondary max-w-4xl text-center px-4 mb-8'>
                        We are currently in stealth. Stay tuned!
                </p>
            </section>
            <About />
            <Contact />
        </main>
    );
}

export default Home;
