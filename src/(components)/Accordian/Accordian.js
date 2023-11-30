'use client'
import Link from 'next/link'
import acss from './Accordian.module.css'
import { useEffect } from 'react'
export default function Accordion() {
    useEffect(function () {
        var cards = document.querySelectorAll(`.${acss.card}`);
        cards.forEach(function (card) {
            card.addEventListener('click', function (e) {
                var p = card.childNodes[1].childNodes[1];
                p.classList.toggle(`${acss.active}`);
                console.log(p);
            })
        })

    }, [])
    return <section className={acss.section}>
        <div className={acss.wrapper}>
            <div className={acss.accordian}>
                <h2>Frequently Asked Questions about Evana Infratech</h2>
                <div className={acss.card}>
                    <div className={acss.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>Question:</p>
                        <p>Answer:ihoasdha sdgau dgyuagd uyasgui dgauydguyaguuoadsfuy uyfasu fubshdcbas usfyuasdjchdshsa dfiyag cuyasd uyaf  uuy gyugvyu u yf iyf ityf uuyufytt ty v</p>
                    </div>
                </div>
                <div className={acss.card}>
                    <div className={acss.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>Question:</p>
                        <p>Answer:ihoasdha sdgau dgyuagd uyasgui dgauydguyaguuoadsfuy uyfasu fubshdcbas usfyuasdjchdshsa dfiyag cuyasd uyaf  uuy gyugvyu u yf iyf ityf uuyufytt ty v</p>
                    </div>
                </div>
                <div className={acss.card}>
                    <div className={acss.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>Question:</p>
                        <p>Answer:ihoasdha sdgau dgyuagd uyasgui dgauydguyaguuoadsfuy uyfasu fubshdcbas usfyuasdjchdshsa dfiyag cuyasd uyaf  uuy gyugvyu u yf iyf ityf uuyufytt ty v</p>
                    </div>
                </div>
                <div className={acss.card}>
                    <div className={acss.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>Question:</p>
                        <p>Answer:ihoasdha sdgau dgyuagd uyasgui dgauydguyaguuoadsfuy uyfasu fubshdcbas usfyuasdjchdshsa dfiyag cuyasd uyaf  uuy gyugvyu u yf iyf ityf uuyufytt ty v</p>
                    </div>
                </div>
                <div className={acss.card}>
                    <div className={acss.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>Question:</p>
                        <p>Answer:ihoasdha sdgau dgyuagd uyasgui dgauydguyaguuoadsfuy uyfasu fubshdcbas usfyuasdjchdshsa dfiyag cuyasd uyaf  uuy gyugvyu u yf iyf ityf uuyufytt ty v</p>
                    </div>
                </div>

            </div>
            <Link href={'/faqs'}><button>More FAQs</button></Link>
        </div>
    </section>
}