import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function ModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        if (localStorage.theme === 'light') {
            document.documentElement.classList.remove('dark');
            return false;
        }
        document.documentElement.classList.add('dark');
        return true;
    });

    const toggleMode = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    };

    return (
        <button
            onClick={toggleMode}
            className='p-2 rounded-lg bg-background text-primary dark:bg-dark-background dark:text-dark-primary border-none transition-colors duration-300'
        >
            {isDark ? (
                <FiSun className='w-5 h-5' />
            ) : (
                <FiMoon className='w-5 h-5' />
            )}
        </button>
    );
}

export default ModeToggle;
