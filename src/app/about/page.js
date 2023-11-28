'use client'
import { Footer, Navbar, Section3 } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll";
import { Hero, OurTeam, Section2 } from "./(components)";

export default function About() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar />
        <Hero />
        <Section2 />
        <Section3 />
        <OurTeam/>
        <Footer />
    </main>
}