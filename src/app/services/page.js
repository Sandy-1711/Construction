'use client'
import { Footer, Navbar, Services } from "@/(components)"
import data from "@/(components)/datas/ServicesTabData"
import LocoScroll from "@/(utils)/LocomotiveScroll"

export default function Page() {
    LocoScroll(true)
    return <main data-scroll data-scroll-container>
        <Navbar />
        <Services mappingdata={data} />
        <Footer />
    </main>
}