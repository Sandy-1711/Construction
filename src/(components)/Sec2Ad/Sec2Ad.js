import sec2css from '../Section2/Section2.module.css'
export default function Sec2Ad() {
    return <div className={sec2css.ad}>
    <div className={sec2css.adImage}>
        <img src='/HeroBackgroundImage.png' />
    </div>
    <div className={sec2css.adText}>
        <h2>PROVIDING PERSONALIZED AND HIGH QUALITY SERVICES</h2>
        <p>We can manage your dream building A small river named Duden flows by their place</p>
        <button>REQUEST A QUOTE</button>
    </div>
</div>
}