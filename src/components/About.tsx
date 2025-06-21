import { TfiMicrosoftAlt } from 'react-icons/tfi';
function About() {
    return (
        <div
            id='about'
            className='flex flex-col items-center justify-center bg-background dark:bg-dark-background px-8'
        >
            <h2 className='text-3xl text-primary dark:text-dark-primary font-bold mb-6 text-center'>
                About Diametric Labs
            </h2>
            <div className='max-w-2xl text-secondary dark:text-dark-secondary space-y-4 text-center'>
                <p>
                    We are a team of applied AI researchers, data scientists and
                    engineers from top technology companies, hedge funds and AI
                    startups.
                </p>
                <div className='flex flex-col items-center gap-2 justify-center text-xl py-10'>
                    <p>Sponsored by</p>
                    <TfiMicrosoftAlt />
                    <p>Microsoft for Startups</p>
                </div>
            </div>
        </div>
    );
}

export default About;
