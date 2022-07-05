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
          <div className="p-4 lg:py-8 lg:pl-64 lg:pr-44 h-full ">
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
