import React from 'react';
import { Navbar } from '../components/Navbar';
import { MenuMobile } from '../components/MenuMobile';
import { Hero } from '../pages/Hero';
import { Skills } from '../pages/Skills';
import { Experience } from '../pages/Experience';
// import { About } from '../pages/About';
// import { Project } from '../pages/Project';
// import { Contact } from '../pages/Contact';


export default function Home() {

  return (
    <div>
      <Navbar />
      <MenuMobile />
      <Hero />
      <Skills />
      <Experience />
      {/* <About /> */}
      {/* <Project /> */}
      {/* <Contact /> */}
    </div>
  );
}
