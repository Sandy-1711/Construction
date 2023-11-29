'use client'
import { useEffect } from 'react'
import testcss from './Testimonial.module.css'
export default function Testimonial() {
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
    return (<section className={testcss.section}>
        <div className={testcss.left}></div>
        <div className={testcss.right}></div>
        <div className={testcss.wrapper}>
            <div className={testcss.text}>
                <span>READ TESTIMONIALS</span>
                <h2>It&apos;s always a joy to hear that the work we do has positively reviews</h2>
            </div>
            <div className={testcss.carousel}>
                <div className={testcss.cards}>

                    <div num='0' className={testcss.card + ' ' + testcss.active} style={{ '--i': 1 }} >
                        <div>

                            <div>
                                <img src='/HeroBackgroundImage.jpg' />
                            </div>
                            <div>

                                <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <h2>Jeff Freshman</h2>
                                <span>GUESTS</span>
                            </div>
                        </div>
                    </div>
                    <div num='1' className={testcss.card} style={{ '--i': 2 }}>
                        <div>

                            <div>
                                <img src='/HeroBackgroundImage.jpg' />

                            </div>
                            <div>

                                <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <h2>Jeff Freshman</h2>
                                <span>GUESTS</span>
                            </div>
                        </div>
                    </div>
                    <div num='2' className={testcss.card} style={{ '--i': 3 }}>
                        <div>

                            <div>
                                <img src='/ConstructionAbout.jpeg' />

                            </div>
                            <div>

                                <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <h2>Jeff Freshman</h2>
                                <span>GUESTS</span>
                            </div>
                        </div>
                    </div>
                    <div num='3' className={testcss.card} style={{ '--i': 4 }}>
                        <div>

                            <div>
                                <img src='/HeroBackgroundImage.jpg' />

                            </div>
                            <div>

                                <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <h2>Jeff Freshman</h2>
                                <span>GUESTS</span>
                            </div>
                        </div>
                    </div>
                    <div num='4' className={testcss.card} style={{ '--i': 5 }}>
                        <div>

                            <div>
                                <img src='/ConstructionAbout.jpeg' />

                            </div>
                            <div>

                                <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                                <h2>Jeff Freshman</h2>
                                <span>GUESTS</span>
                            </div>
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