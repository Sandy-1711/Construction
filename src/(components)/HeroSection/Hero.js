import HeroImage from '../HeroImage/HeroImage'
import herocss from './Hero.module.css'
export default function Hero() {
    return (<section className={herocss.heroSection}>
        <div className={herocss.heroWrapper}>
            <div className={herocss.heroText}>
                <h1>WE BUILD GREAT PROJECTS</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                <div>
                    <button>OUR SERVICES</button>
                    <button>REQUEST A QUOTE</button>
                </div>
            </div>
        </div>
        <HeroImage/>
    </section>)
}