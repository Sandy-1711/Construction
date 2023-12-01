'use client'
import { CustomHero, Footer, Navbar, Section3, Testimonial } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll";
import { OurTeam, Section2 } from "./(components)";

export default function About() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar />
        <CustomHero h1={" > ABOUT >"} p={"ABOUT US"} imgSrc={'/ConstructionAbout.png'} />
        <Section2 />
        <Section3 />
        <OurTeam />
        <Testimonial />
        <Footer />
    </main>
}