import { useState, useEffect } from 'react';

function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

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
                                : '/images/diametric-light.png'
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

    return (
        <div className='flex flex-col items-center justify-center gap-5 py-10'>
            <p className='text-sm text-muted-foreground'>&copy; 2025</p>
            <div className='relative w-[150px] aspect-[5/1]'>
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
            </div>
        </div>
    );
}

export default Footer;
