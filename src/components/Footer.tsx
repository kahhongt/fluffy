function Footer() {
    return (
        <div className='flex flex-col items-center justify-center gap-5 py-10'>
            <p className='text-sm text-muted-foreground'>&copy; 2025</p>
            <div className='relative w-[150px] aspect-[5/1]'>
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
            </div>
        </div>
    );
}
export default Footer;
