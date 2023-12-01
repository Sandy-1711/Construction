'use client'
import { CustomHero, Footer, LatestProjects, Navbar } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll"
export default function Page() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar />
        <CustomHero h1={" > PROJECTS >"} p={"PROJECTS"} imgSrc={'/ConstructionAbout.png'} />
        {/* <LatestProjects /> */}
        <Footer />
    </main>
}