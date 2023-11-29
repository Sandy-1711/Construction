'use client'
import { CustomHero, Footer, LatestProjects, Navbar } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll"
export default function Page() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar/>
        <CustomHero h1={"HOME > PROJECTS >"} p={"PROJECTS"} imgSrc={'/ConstructionAbout.jpeg'}/>
        <LatestProjects />
        <Footer/>
    </main>
}