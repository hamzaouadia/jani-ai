
const HeroSection = ({ scrollRef1 }: any) => {
    return (
        <section ref={scrollRef1} className="relative flex flex-col items-center justify-center p-4 lg:px-20 h-screen w-full bg-white">
            <div className='w-full h-full flex flex-row lg:p-2 '> 
                <div className='flex flex-col justify-center lg:items-start items-center text-black h-full w-full lg:p-8 space-y-4 '>
                    <p className='lg:text-4xl font-semibold px-4'>Helping Exporters</p>
                    <p className='lg:text-9xl text-6xl font-bold p-4 lg:text-start text-center lg:w-1/2'>Track Resources</p>
                    <p className='lg:text-5xl font-semibold px-4'>Across The Supply Chain.</p>
                    <p className='font-mono px-4 lg:text-start text-center lg:w-1/2'>
                        JANI AI Tracks your resources from the farm up to the fork. 
                        Give your clients more observability and traceability to increase trust and transparency.
                    </p>
                    <div className='flex space-x-4 mt-6 px-4 text-lg font-semibold'>
                        <button className="cursor-pointer lg:px-12 px-4 border-2 border-black py-2 bg-white hover:bg-green-800 hover:text-white text-black transition duration-300">
                            Start Your JANI
                        </button>
                        <button className="cursor-pointer whitespace-nowrap lg:px-12 px-4 border-2 border-black py-2 bg-green-800 hover:bg-white hover:text-black text-white transition duration-300">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
