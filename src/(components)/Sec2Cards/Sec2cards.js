import sec2css from '../Section2/Section2.module.css'
export default function Sec2Cards(){
    return <div className={sec2css.cards}>
    <div className={sec2css.card}>
        <div className={sec2css.cardImage}>
            <img src='/HeroBackgroundImage.jpg' />
        </div>
        <div className={sec2css.text}>
            <h2>Quality Construction</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
    <div className={sec2css.card}>
        <div className={sec2css.cardImage}>
            <img src='/HeroBackgroundImage.jpg' />
        </div>
        <div className={sec2css.text}>
            <h2>Quality Construction</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
    <div className={sec2css.card}>
        <div className={sec2css.cardImage}>
            <img src='/HeroBackgroundImage.jpg' />
        </div>
        <div className={sec2css.text}>
            <h2>Quality Construction</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
</div>
}