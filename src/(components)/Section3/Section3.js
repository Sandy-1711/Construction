import sec3css from './Section3.module.css'
export default function Section3() {
    return <section className={sec3css.section}>
        <div className={sec3css.secLeft}></div>
        <div className={sec3css.secRight}></div>
        <div className={sec3css.wrapper}>
            <div className={sec3css.text}>
                <span>EAVANA INFRATECH A CONSTRUCTION COMPANY</span>
                <h2>Best Provider for Construction Services</h2>
                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
                <p>Evana Infratech was founded with the noble motive of providing the best construction services at affordable prices to clients. The company has completed hundreds of projects in multiple fields of construction. It’s a one-stop solution for all your construction-related needs. The company is led by a group of enthusiasts and professionals, who deliver the best of services. 
</p>
            </div>
            <div className={sec3css.banners}>
                <div className={sec3css.banner}>
                    <img src='/HeroBackgroundImage.png'/>
                    <div>
                        <h2>900+</h2>
                        <p>PROJECT COMPLETED</p>
                    </div>
                </div>
                <div className={sec3css.banner}>
                    <img  src='/HeroBackgroundImage.png'/>
                    <div>
                        <h2>54,900</h2>
                        <p>HAPPY CUSTOMERS</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}