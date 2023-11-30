import sec2css from '../Section2/Section2.module.css'
export default function Sec2About() {
    return <div className={sec2css.about}>
        <div className={sec2css.aboutImage}>
            <img src='/about.png' />
            <div className={sec2css.triangle}></div>
        </div>
        <div className={sec2css.middle}>
            <img src='/crane.svg' />
        </div>
        <div className={sec2css.aboutText}>
            <span>WELCOME TO IVANA INFRATECH</span>
            <h2>IVANA INFRATECH a Construction Company</h2>
            <div className={sec2css.aboutP}>
                <img src='/hammer.svg' />
                <p>The field of construction is as old as Indian civilisation. Marvellous and splendid civil structures of the Indus Valley civilisation are still a part of discussion in the world of civil engineering. With the sprawl of rapid urbanisation in India, the field of construction has become an ever-expanding arena. On an almost daily basis, we could see additions of new technologies and types of equipment.
                </p>
            </div>
            <p>With the economic liberalisation of India in the early 90s, the private sector penetrated almost all parts of the country. This led to huge demand for construction in various strata like hospitals, commercial buildings, villas, bungalows, individual houses, etc. Subsequently, a fresh demand emerged in India for professionally competent people in the field of civil construction.
            </p>
        </div>
    </div>
}