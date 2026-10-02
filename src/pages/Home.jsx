import React from "react";
import Navbar from "@/components/somosboo/Navbar";
import Hero from "@/components/somosboo/Hero";
import About from "@/components/somosboo/About";
import Services from "@/components/somosboo/Services";
import Process from "@/components/somosboo/Process";
import Portfolio from "@/components/somosboo/Portfolio";
import ForWhom from "@/components/somosboo/ForWhom";
import FinalCTA from "@/components/somosboo/FinalCTA";
import Footer from "@/components/somosboo/Footer";

export default function Home() {
  return (
    <div className="bg-boo-obsidian">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <ForWhom />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}