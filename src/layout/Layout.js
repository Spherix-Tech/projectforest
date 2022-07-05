import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Hero from "../components/hero/hero";

export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <Navbar />
        <main>
          <div className="h-full px-60">
         <Hero />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
