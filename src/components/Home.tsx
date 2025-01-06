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
                        We are currently building 2 products: <strong> Solaris </strong> - a multi-platform decision-making agent that operates across various messaging applications globally, and <strong> Charis </strong> - a patient monitoring system that uses AI to improve mental health outcomes for psychology and counselling clinics.
                </p>
                <div className="flex gap-4">
                    <a href='https://t.me/diametricbot' target='_blank'>
                        <button className='bg-accent text-primary dark:bg-dark-primary dark:text-dark-background rounded-lg px-6 py-3 flex items-center gap-3 text-lg'>
                            <BiLogoTelegram className="text-xl" /> Solaris on Telegram
                        </button>
                    </a>
                    <a href='https://t.me/diametricbot' target='_blank'>
                        <button className='bg-accent text-primary dark:bg-dark-primary dark:text-dark-background rounded-lg px-6 py-3 flex items-center gap-3 text-lg'>
                            <GiFlowerEmblem className="text-xl" /> Charis on Web Browser
                        </button>
                    </a>
                </div>
            </section>
            <About />
            <Contact />
        </main>
    );
}

export default Home;
