"use client"
import NeumorphicEffect from "./NeumorphicEffect";

const BusinessSection = () => {
    return (
        <section className="snap-start relative flex flex-col items-center justify-center p-4 h-screen text-[#effdf1] bg-[#1b4332]">
            <div className="w-full h-full text-center flex flex-row justify-end">
                <div className="lg:w-1/2 h-full flex flex-col justify-center items-center lg:p-20 p-4 space-y-8">
                    <div className="space-y-4 flex justify-center items-center">
                        <p className="lg:text-6xl text-4xl font-semibold">
                            Manage your Agribusiness the Smart Way.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg font-mono font-light">
                            {`Recording your company data in an Excel sheet doesn't scale well enough and soon you will have Excel sheets that are hard to keep track of.`}
                        </p>
                        <p className="text-lg font-mono font-light mt-4">
                            At JANI, we cover that for you and you can focus on the core operations of your business to increase revenue and growth.
                        </p>
                    </div>
                    <div className="w-full flex justify-center space-x-4 mt-6">
                        <NeumorphicEffect  pressEffect={true} className="flex items-center justify-center rounded-full bg-[#1b4332]">
                            <button className="cursor-pointer px-12 transform duration-300 py-2">
                                Register
                            </button>
                        </NeumorphicEffect>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSection;
