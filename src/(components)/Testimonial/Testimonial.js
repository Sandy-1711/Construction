'use client'
import { useEffect, useLayoutEffect } from 'react'
import testcss from './Testimonial.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function Testimonial() {

    useLayoutEffect(function () {

        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`#sec`, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `#sec`,
                start: 'top 60%',
            }
        })
    })


    useEffect(function () {
        var cardArray = document.querySelectorAll(`.${testcss.card}`);
        var active = document.querySelector(`.${testcss.active}`);
        var selectorAll = document.querySelectorAll(`.${testcss.selector}`)
        var activeSelector = document.querySelector(`.${testcss.activeSelector}`);
        var num = active.getAttribute('num');
        setInterval(() => {

            cardArray[num].classList.remove(`${testcss.active}`);
            selectorAll[num].classList.remove(`${testcss.activeSelector}`)
            num = (num + 1) % cardArray.length;

            // console.log(num);
            cardArray[num].classList.add(`${testcss.active}`);
            selectorAll[num].classList.add(`${testcss.activeSelector}`);
        }, 5000);
        // selectorAll.forEach(function (selector, index) {
        //     selector.addEventListener('click', function () {
        //         var activeSelector = document.querySelector(`.${testcss.activeSelector}`);
        //         num = activeSelector.getAttribute('num');
        //         activeSelector.classList.remove(`${testcss.activeSelector}`)
        //         // num = (num + 1) % selectorAll.length;
        //         selectorAll[index].classList.add(`${testcss.activeSelector}`)
        //         console.log(activeSelector);
        //     })
        // })
    })
    return (<section id='sec' className={testcss.section}>
        <div className={testcss.left}></div>
        <div className={testcss.right}></div>
        <div className={testcss.wrapper}>
            <div className={testcss.text}>
                <span>READ TESTIMONIALS</span>
                <h2>Evana Infratech, a unit of K D Groups provides all construction-related stuffs under one roof. The company takes care of all the steps of construction starting from basic architectural designs to the stage of finishing. We provide ready-to-move buildings built up of best quality construction materials at budget-friendly expenses. With Evana Infratech, you just need to look after the finances and rest the stress falls on the company.</h2>
            </div>
            <div className={testcss.carousel}>
                <div className={testcss.cards}>

                    <div num='0' className={testcss.card + ' ' + testcss.active} style={{ '--i': 1 }} >

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/y5XoL2aTgVY?si=ujBRuvPcwlsLZrwt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>

                            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                            <h2>Jeff Freshman</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='1' className={testcss.card} style={{ '--i': 2 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/y5XoL2aTgVY?si=ujBRuvPcwlsLZrwt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>

                            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                            <h2>Jeff Freshman</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='2' className={testcss.card} style={{ '--i': 3 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/y5XoL2aTgVY?si=ujBRuvPcwlsLZrwt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>

                            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                            <h2>Jeff Freshman</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='3' className={testcss.card} style={{ '--i': 4 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/y5XoL2aTgVY?si=ujBRuvPcwlsLZrwt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>

                            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                            <h2>Jeff Freshman</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='4' className={testcss.card} style={{ '--i': 5 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/y5XoL2aTgVY?si=ujBRuvPcwlsLZrwt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>

                            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                            <h2>Jeff Freshman</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>

                </div>
                <div className={testcss.slider}>
                    <div num="0" className={testcss.selector + ' ' + testcss.activeSelector}></div>
                    <div num="1" className={testcss.selector}></div>
                    <div num="2" className={testcss.selector}></div>
                    <div num="3" className={testcss.selector}></div>
                    <div num="4" className={testcss.selector}></div>
                </div>
            </div>

        </div>
    </section>)
}