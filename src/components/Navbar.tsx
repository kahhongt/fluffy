import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModeToggle from './ModeToggle';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Check initial dark mode state
        const checkDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
            setCurrentImage(
                isDark
                    ? '/images/diametric-dark.png'
                    : '/images/diametric-light.png'
            );
        };

        // Preload both images
        const preloadImages = () => {
            const darkImg = new Image();
            const lightImg = new Image();

            let loadedCount = 0;
            const onImageLoad = () => {
                loadedCount++;
                if (loadedCount === 2) {
                    setImagesLoaded(true);
                }
            };

            darkImg.onload = onImageLoad;
            lightImg.onload = onImageLoad;

            darkImg.src = '/images/diametric-dark.png';
            lightImg.src = '/images/diametric-light.png';
        };

        checkDarkMode();
        preloadImages();

        // Watch for dark mode changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'class'
                ) {
                    const isDark =
                        document.documentElement.classList.contains('dark');
                    if (isDark !== isDarkMode) {
                        setIsDarkMode(isDark);
                        setCurrentImage(
                            isDark
                                ? '/images/diametric-dark.png'
                                : '/images/light-logo.png'
                        );
                    }
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, [isDarkMode]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='bg-background dark:bg-dark-background text-primary dark:text-dark-primary w-full sticky top-0 z-50 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link
                        to='/'
                        className='flex items-center text-2xl font-bold text-primary dark:text-dark-primary'
                        onClick={closeMobileMenu}
                    >
                        {/* Hidden images for preloading */}
                        <img
                            src='/images/diametric-dark.png'
                            alt=''
                            className='hidden'
                            loading='eager'
                        />
                        <img
                            src='/images/diametric-light.png'
                            alt=''
                            className='hidden'
                            loading='eager'
                        />

                        {/* Visible image with smooth transitions */}
                        <img
                            src={currentImage}
                            alt='Diametric Labs'
                            className={`h-8 w-auto object-contain transition-all duration-400 ease-in-out ${
                                imagesLoaded
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-95'
                            }`}
                            loading='eager'
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex space-x-8 items-center'>
                        <a
                            href='#about'
                            className='text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium transition-colors duration-200'
                        >
                            About
                        </a>
                        <a
                            href='#contact'
                            className='text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium transition-colors duration-200'
                        >
                            Contact
                        </a>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden flex items-center space-x-4'>
                        <ModeToggle />
                        <button
                            onClick={toggleMobileMenu}
                            className='text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent p-2 rounded-md transition-colors duration-200'
                            aria-label='Toggle mobile menu'
                        >
                            <div className='w-6 h-6 relative'>
                                <span
                                    className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 ${
                                        isMobileMenuOpen
                                            ? 'rotate-45'
                                            : '-translate-y-2'
                                    }`}
                                ></span>
                                <span
                                    className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 ${
                                        isMobileMenuOpen
                                            ? 'opacity-0 scale-0'
                                            : 'opacity-100 scale-100'
                                    }`}
                                ></span>
                                <span
                                    className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 ${
                                        isMobileMenuOpen
                                            ? '-rotate-45'
                                            : 'translate-y-2'
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMobileMenuOpen
                            ? 'max-h-48 opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className='py-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
                        <a
                            href='#about'
                            className='block text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium transition-colors duration-200'
                            onClick={closeMobileMenu}
                        >
                            About
                        </a>
                        <a
                            href='#contact'
                            className='block text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium transition-colors duration-200'
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
