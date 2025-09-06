"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrollDirection, setScrollDirection] = useState("up"); // "up" or "down"
//     const [lastScrollY, setLastScrollY] = useState(0);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 1536) {
//                 setIsOpen(false);
//             }
//         };

//         const handleScroll = () => {
//             const currentY = window.scrollY;

//             if (currentY > lastScrollY) {
//                 setScrollDirection("down");
//                 setIsOpen(false); // close menu when scrolling down
//             } else if (currentY < lastScrollY) {
//                 setScrollDirection("up");
//             }
//             setLastScrollY(currentY);

//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [lastScrollY]);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     return (
//         <div className="fixed top-0 w-full flex items-center justify-between p-4 pt-6 text-black z-9999">
//             <motion.div
//                 initial={{ backgroundColor: "#016630" }}
//                 animate={
//                     scrollDirection === "down"
//                         ? { backgroundColor: "none" } // hide navbar when scrolling down
//                         : { backgroundColor: "#016630" }   // show navbar when scrolling up
//                 }
//                 transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0 }} // start immediately
//                 className="relative w-full"
//             >
//                 <motion.nav
//                     initial={{ y: 0, x: 0, opacity: 1 }}
//                     animate={
//                         scrollDirection === "down"
//                             ? { y: 0, x: 0, opacity: 0 } // hide navbar when scrolling down
//                             : { y: -4, x: 4, opacity: 1 }   // show navbar when scrolling up
//                     }
//                     transition={{
//                         y: { type: "spring", stiffness: 200, damping: 25, delay: 0 }, // no delay
//                         x: { type: "spring", stiffness: 200, damping: 25, delay: 0 }, // no delay
//                         opacity: { duration: 0.5, delay: 0 }, // opacity happens later
//                     }}
//                     className="flex items-center bg-white justify-between w-full h-20 p-4 px-8 border z-100 shadow-md"
//                 >
//                     <div className="flex items-center space-x-4 w-1/4">
//                         <h1 className="text-2xl font-bold whitespace-nowrap">JANI-AI</h1>
//                     </div>

//                     {/* Desktop links */}
//                     <div className="hidden 2xl:flex justify-center space-x-20 text-lg font-semibold w-2/4 text-black">
//                         <a href="#">About</a>
//                         <a href="#">Blog</a>
//                         <a href="#">Pricing</a>
//                         <a href="#">Features</a>
//                     </div>

//                     {/* Desktop buttons */}
//                     <div className="hidden 2xl:flex space-x-8 text-lg font-semibold w-1/4 justify-end text-black">
//                         <div className="flex items-center justify-center bg-green-800">
//                             <button className="cursor-pointer px-12 border-2 bg-white -translate-y-[4px] translate-x-[4px] hover:translate-0 transform duration-300 border-black py-2">
//                                 Register
//                             </button>
//                         </div>
//                         <button className="cursor-pointer whitespace-nowrap px-12 border-2 border-black py-2 bg-green-800 hover:bg-white hover:text-black text-white transition duration-300">
//                             Sign In
//                         </button>
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="flex 2xl:hidden justify-center w-10">
//                         <button onClick={toggleMenu} className="flex flex-col gap-2">
//                             <div className="h-[2px] w-8 bg-black"></div>
//                             <div className="h-[2px] w-8 bg-black"></div>
//                         </button>
//                     </div>
//                 </motion.nav>

//                 {/* Mobile dropdown */}
//                 {isOpen && (
//                     <div className="absolute top-20 left-0 w-full bg-green-800 p-4 shadow-lg z-50">
//                         <div className="flex flex-col justify-center items-center space-y-4 text-lg font-semibold">
//                             <div className="flex flex-col items-start space-y-2 w-full text-white">
//                                 <div className="w-full flex justify-between p-4"><a href="#" className="text-2xl">About</a></div>
//                                 <div className="w-full flex justify-between p-4"><a href="#" className="text-2xl">Blog</a></div>
//                                 <div className="w-full flex justify-between p-4"><a href="#" className="text-2xl">Pricing</a></div>
//                                 <div className="w-full flex justify-between p-4"><a href="#" className="text-2xl">Features</a></div>
//                             </div>
//                             <div className="flex space-x-8 text-lg font-semibold justify-end text-black">
//                                 <button className="cursor-pointer px-12 border-2 bg-white text-black transform duration-300 border-black py-2">
//                                     Register
//                                 </button>
//                                 <button className="cursor-pointer whitespace-nowrap px-12 border-2 border-black py-2 bg-green-800 text-white transition duration-300">
//                                     Sign In
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </motion.div>
//         </div>
//     );
// };

// import { Info, FileText, CircleDollarSign, Star } from "lucide-react";

import NeumorphicEffect from "./NeumorphicEffect";


const NavBar = () => {
    
    return (
        <div className="fixed top-0 w-full h-70 flex p-4 px-8 pt-6 text-[#ffffff] z-9999">
            <div className="relative w-full">
                <nav className="flex flex-row items-center justify-between w-full z-100">
                    <NeumorphicEffect className="px-4 rounded-full">
                        <div className="flex items-center p-4">
                            <h1 className="text-xl whitespace-nowrap">JANI-AI</h1>
                        </div>
                    </NeumorphicEffect>

                    <NeumorphicEffect className="rounded-full px-4">
                        <div className="flex flex-row justify-center items-center px-8 space-x-8 text-lg h-full">
                            <div className="flex items-center p-4">
                                <a href="#" title="About">
                                    <p>About</p>
                                </a>
                            </div>
                            <div className="flex items-center p-4">
                                <a href="#" title="Blog">
                                    <p>Blog</p>
                                </a>
                            </div>
                            <div className="flex items-center p-4">
                                <a href="#" title="Pricing">
                                    <p>Pricing</p>
                                </a>
                            </div>
                            <div className="flex items-center p-4">
                                <a href="#" title="Features">
                                    <p>Features</p>
                                </a>
                            </div>
                        </div>
                    </NeumorphicEffect>

                    <NeumorphicEffect className="rounded-full p-4" pressEffect={true}>
                        <div className="p-2">
                            <button className="flex flex-col items-center justify-around gap-2 ">
                                <div className="w-[25px] h-[2px] bg-white rounded-full"></div>
                                <div className="w-[25px] h-[2px] bg-white rounded-full"></div>
                            </button>
                        </div>
                    </NeumorphicEffect>

                </nav>
            </div>
        </div>
        )
};

export default NavBar;
