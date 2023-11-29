'use client'
import { ContactSection, CustomHero, Footer, Navbar } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll";
export default function Contact() {
    LocoScroll(true)
    return <main data-scroll data-scroll-container>
        <Navbar />
        <CustomHero p={'HOME > CONTACT US >'} h1={'CONTACT US'} />
        <ContactSection/>
        <Footer/>
    </main>
}