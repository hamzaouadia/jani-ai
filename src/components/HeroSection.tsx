import { motion } from "framer-motion";

import NeumorphicEffect from "./NeumorphicEffect";

const textItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.8, duration: 0.5 } },
};

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center p-4 lg:px-20 h-screen w-full text-[#effdf1] bg-[#1b4332]"
    >
      <div className="w-full h-full flex flex-row lg:p-2">
        <div className="flex flex-col justify-center lg:items-start items-center h-full w-full lg:p-8 space-y-4 overflow-hidden">
          <motion.div
            variants={textItem}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col lg:items-start items-center space-y-2"
          >
            <p className=" lg:text-4xl font-semibold px-4">Helping Exporters</p>
            <p className=" lg:text-9xl text-6xl font-bold p-4 lg:text-start lg:w-1/2 text-center">Track Resources</p>
            <p className=" lg:text-5xl font-semibold px-4">Across The Supply Chain.</p>
            <p className="font-mono px-4 lg:text-start text-center lg:w-1/2">
              JANI AI Tracks your resources from the farm up to the fork. 
              Give your clients more observability and traceability to increase trust and transparency.
            </p>
          </motion.div>
          <div className="flex space-x-4 mt-6 px-4 text-lg font-semibold">
            <NeumorphicEffect className="rounded-full flex flex-row items-center justify-center h-full " pressEffect={true}>
              <button className="cursor-pointer whitespace-nowrap lg:px-12 px-4 py-2 transition duration-300 ">
                Start Your JANI
              </button>
            </NeumorphicEffect>
            <NeumorphicEffect className="rounded-full flex flex-row items-center justify-center h-full " pressEffect={true}>
              <button className="cursor-pointer whitespace-nowrap lg:px-12 px-4 py-2 transition duration-300 ">
                Contact Sales
              </button>
            </NeumorphicEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
