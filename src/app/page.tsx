import React from "react";

import Hero from "../pages/Hero";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
