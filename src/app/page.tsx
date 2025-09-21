import NavBar from "../components/NavBar";
import Home from "./pages/Home";
import CustomCursor from '@/components/CustomCursor';
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"], // include 400 (regular)
  display: "swap",
});

export default function Page() {
  return (
    <div className={`relative !scroll-smooth ${manrope.className}`}>
      {/* <CustomCursor /> */}
      <NavBar />
      <Home />
      <Footer />
      <Chatbot />
    </div>
  );
}
