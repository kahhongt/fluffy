import { useState, useEffect } from 'react';
import About from './About';
import Contact from './Contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Home() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    // Use custom hook for scroll animations
    const [aboutRef, aboutVisible] = useScrollAnimation();
    const [contactRef, contactVisible] = useScrollAnimation();

    useEffect(() => {
        // Set initial image based on dark mode
        const updateImage = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setCurrentImage(
                isDark ? '/images/dark-logo.png' : '/images/light-logo.png'
            );
        };

        // Preload images
        const preloadImages = () => {
            const darkImg = new Image();
            const lightImg = new Image();

            let loadedCount = 0;
            const onImageLoad = () => {
                loadedCount++;
                if (loadedCount === 2) {
                    setTimeout(() => setImagesLoaded(true), 100);
                }
            };

            darkImg.onload = onImageLoad;
            lightImg.onload = onImageLoad;

            darkImg.src = '/images/dark-logo.png';
            lightImg.src = '/images/light-logo.png';
        };

        updateImage();
        preloadImages();

        // Watch for dark mode changes
        const observer = new MutationObserver(() => {
            updateImage();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className='flex flex-col gap-16'>
            <section className='min-h-screen flex flex-col items-center justify-center bg-background dark:bg-dark-background gap-4 px-8'>
                {/* Image container */}
                <div
                    className={`relative h-52 w-auto flex items-center justify-center transition-all duration-1000 ease-out ${
                        imagesLoaded
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95'
                    }`}
                >
                    {/* Hidden preload images */}
                    <img
                        src='/images/dark-logo.png'
                        alt=''
                        className='hidden'
                        loading='eager'
                    />
                    <img
                        src='/images/light-logo.png'
                        alt=''
                        className='hidden'
                        loading='eager'
                    />

                    {/* Visible image */}
                    <img
                        src={currentImage}
                        alt='Diametric Labs'
                        className='h-60 w-auto object-contain transition-all duration-1000 ease-out'
                        loading='eager'
                    />
                </div>

                {/* Text container */}
                <div
                    className='flex items-center flex-col gap-8 transition-all duration-1000 ease-out'
                    style={{
                        transform: imagesLoaded
                            ? 'translateY(0)'
                            : 'translateY(-50px)',
                        marginTop: imagesLoaded ? '0' : 'auto',
                        marginBottom: imagesLoaded ? '0' : 'auto',
                    }}
                >
                    <h1 className='text-4xl text-primary dark:text-dark-primary font-bold text-center max-w-6xl'>
                        We are an applied AI research and development company
                    </h1>
                    <p className='text-lg text-secondary dark:text-dark-secondary max-w-4xl text-center'>
                        We are currently in stealth. Stay tuned!
                    </p>
                </div>
            </section>

            {/* About section with scroll animation */}
            <div
                ref={aboutRef}
                className={`transition-all duration-1000 ease-out ${
                    aboutVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-20 opacity-0'
                }`}
            >
                <About />
            </div>

            {/* Contact section with scroll animation */}
            <div
                ref={contactRef}
                className={`transition-all duration-1000 ease-out ${
                    contactVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-20 opacity-0'
                }`}
            >
                <Contact />
            </div>
        </main>
    );
}

export default Home;
