import sec2css from '../Section2/Section2.module.css'
export default function Sec2About() {
    return <div className={sec2css.about}>
        <div className={sec2css.aboutImage}>
            <img src='/HeroBackgroundImage.jpg' />
        </div>
        <div className={sec2css.aboutText}>
            <span>WELCOME TO WILCON</span>
            <h2>Wilcon A Construction Company</h2>
            <div className={sec2css.aboutP}>
                <img src='/HeroBackgroundImage.jpg' />
                <p>We&apos;re in this business since 1975 and We provide the best insdustrial services</p>
            </div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
    </div>
}