"use client"
import React from "react";

const BusinessSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center p-4 h-screen bg-white">
            <div className='w-full h-full text-black text-center flex flex-row justify-end'>
                <div className='lg:w-1/2 h-full flex flex-col justify-center items-center lg:p-20 p-4 space-y-8'>
                    <div className='space-y-4 flex justify-center items-center'>
                        <p className='lg:text-6xl text-4xl font-semibold'>
                            Manage your Agribusiness the Smart Way.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-lg font-mono font-light'>
                            Recording your company data in an Excel sheet doesn't scale well enough and soon you will have Excel sheets that is hard to keep track of.
                        </p>
                        <p className='text-lg font-mono font-light mt-4'>
                            At JANI, we cover that for you and you can focus on the core operations of your business to increase revenue and growth.
                        </p>
                    </div>
                    <div className='w-full flex justify-center space-x-4 mt-6'>
                        <div className="flex items-center justify-center bg-green-800">
                            <button className="cursor-pointer px-12 border-2 bg-white -translate-y-1.5 scale-105 hover:scale-100 hover:translate-0 hover:bg-green-800 hover:text-white transform duration-300 border-black py-2">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSection;
