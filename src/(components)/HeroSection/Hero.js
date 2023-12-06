'use client'
import { useLayoutEffect } from 'react'
import HeroImage from '../HeroImage/HeroImage'
import herocss from './Hero.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function Hero() {

    return (<section className={herocss.heroSection}>
        <div className={herocss.heroWrapper}>
            <div id='heroText' className={herocss.heroText}>
                <h1>WE BUILD<br/> GREAT PROJECTS</h1>
                <p>&quot;We shape our buildings; thereafter, they shape us.&quot; - Winston Churchill</p>
                <div>
                    <button>OUR SERVICES</button>
                    <button>REQUEST A QUOTE</button>
                </div>
            </div>
        </div>
        <HeroImage />
    </section>)
}