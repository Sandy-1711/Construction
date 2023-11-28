'use client'
import pagecss from './page.module.css'
import LocoScroll from '../(utils)/LocomotiveScroll'
import { Copyright, Footer, Hero, LatestProjects, Navbar, Section2, Section3, Services } from '@/(components)';
export default function Page() {
  LocoScroll(true);
  return (<main className={pagecss.main} data-scroll data-scroll-container>
    <div className={pagecss.pageWrapper}>

      <Navbar />
      <Hero />
      <Section2 />
      <Services />
      <Section3 />
      <LatestProjects />
      <Footer />
      <Copyright />
    </div>
  </main>)
}