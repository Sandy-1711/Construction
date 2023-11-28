'use client'
import { Footer, LatestProjects, Navbar } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll"
export default function Page() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar/>
        <LatestProjects />
        <Footer/>
    </main>
}