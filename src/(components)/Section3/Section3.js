import sec3css from './Section3.module.css'
export default function Section3() {
    return <section className={sec3css.section}>
        <div className={sec3css.secLeft}></div>
        <div className={sec3css.secRight}></div>
        <div className={sec3css.wrapper}>
            <div className={sec3css.text}>
                <span>WILCON A CONSTRUCTION COMPANY</span>
                <h2>Best Provider for Industrial Services</h2>
                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
            </div>
            <div className={sec3css.banners}>
                <div className={sec3css.banner}>
                    <img src='/HeroBackgroundImage.jpg'/>
                    <div>
                        <h2>48,000</h2>
                        <p>PROJECT COMPLETED</p>
                    </div>
                </div>
                <div className={sec3css.banner}>
                    <img  src='/HeroBackgroundImage.jpg'/>
                    <div>
                        <h2>54,900</h2>
                        <p>HAPPY CUSTOMERS</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}