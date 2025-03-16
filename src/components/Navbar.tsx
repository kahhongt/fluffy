import { Link } from 'react-router-dom';
import ModeToggle from './ModeToggle';

function Navbar() {
    return (
        <nav className='bg-background dark:bg-dark-background text-primary dark:text-dark-primary w-full'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col sm:flex-row justify-between h-auto sm:h-16'>
                    <Link
                        to='/'
                        className='flex items-center text-2xl font-bold text-primary dark:text-dark-primary'
                    >
                        <img
                            src='/images/diametric-dark.png'
                            alt='Diametric Labs'
                            className='h-8 w-auto hidden dark:block object-contain'
                        />
                        <img
                            src='/images/diametric-light.png'
                            alt='Diametric Labs'
                            className='h-8 w-auto dark:hidden object-contain'
                        />
                    </Link>

                    <div className='flex space-x-8 justify-center items-center mt-4 sm:mt-0'>
                        <a
                            href='#about'
                            className='text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium'
                        >
                            About
                        </a>
                        <a
                            href='#contact'
                            className='text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium'
                        >
                            Contact
                        </a>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
