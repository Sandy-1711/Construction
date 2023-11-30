'use client'
import { CustomHero, Footer, Navbar, Services } from "@/(components)"
import data from "@/(components)/datas/ServicesTabData"
import LocoScroll from "@/(utils)/LocomotiveScroll"

export default function Page() {
    LocoScroll(true)
    return <main data-scroll data-scroll-container>
        <Navbar />
        <CustomHero h1={"HOME > SERVICES >"} p={"SERVICES"} imgSrc={"/ConstructionAbout.png"} />
        <Services mappingdata={data} />
        <Footer />
    </main>
}