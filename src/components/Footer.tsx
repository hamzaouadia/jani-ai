import React from 'react';

import { Home } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='sticky bottom-0 z-0 w-full h-[500px] bg-[#000000] overflow-hidden'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='p-4'>
                    <div className='z-3 -translate-y-[0px] shadow-custom shadow-black'>
                        <p className=' text-white lg:text-8xl text-6xl font-bold'>
                            JANI-AI
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
