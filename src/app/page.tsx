import NavBar from "../components/NavBar";
import Home from "./pages/Home";
import CustomCursor from '@/components/CustomCursor';
import Footer from "@/components/Footer";

import Chatbot from "@/components/Chatbot";

import "./globals.css";

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <CustomCursor />
      <NavBar />
      <Home />
      {/* <Footer /> */}
      {/* <Chatbot /> */}
    </div>
  );
}
