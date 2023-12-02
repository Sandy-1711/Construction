'use client'
import { useEffect, useLayoutEffect } from 'react'
import sec2css from '../Section2/Section2.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function Sec2Cards() {
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`.${sec2css.card}`, {
            stagger: 0.05,
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: `.${sec2css.cards}`,
                scroller: 'body',
                start: 'top bottom',

            }
        })
    })
    return <div className={sec2css.cards}>
        <div className={sec2css.card}>
            <div className={sec2css.cardImage}>
                <img src='/engineer.svg' />
            </div>
            <div className={sec2css.text}>
                <h2>Quality Construction</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
        <div className={sec2css.card}>
            <div className={sec2css.cardImage}>
                <img src='/engineer2.svg' />
            </div>
            <div className={sec2css.text}>
                <h2>Quality Construction</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
        <div className={sec2css.card}>
            <div className={sec2css.cardImage}>
                <img src='/crane.svg' />
            </div>
            <div className={sec2css.text}>
                <h2>Quality Construction</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
    </div>
}