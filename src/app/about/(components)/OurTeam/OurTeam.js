import teamcss from './OurTeam.module.css'
export default function OurTeam() {
    return <section className={teamcss.section}>
        <div className={teamcss.wrapper}>
            <div className={teamcss.text}>
                <span>OUR TEAM</span>
                <h2>Our Team</h2>
            </div>
            <div className={teamcss.cards}>
                <div className={teamcss.card}>
                    <img src='/Ajay-Shah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Ajay Shah</h2>
                        <span>Managing Director</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Rashmi-Shah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Rashmi Shah</h2>
                        <span>Director</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Sanjay-Shah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Sanjay Shah</h2>
                        <span>Legal Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Miraz-Khan.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Miraz Khan</h2>
                        <span>Head Technical & Engineering</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Brajesh-Roy.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Brajesh Roy</h2>
                        <span>Head, Purchase & Engineering</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Nitin-Jha.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Nitin Jha</h2>
                        <span>Head, Operation & Management</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Wasim-Ansari.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Wasim Ansari</h2>
                        <span>Head, Marketing & Sales</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Sanket-Suman.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Sanket Suman</h2>
                        <span>Head, Planing & Designing</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Roshan-Sonu.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Roshan Sonu</h2>
                        <span>Field Manager Marketing</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
}