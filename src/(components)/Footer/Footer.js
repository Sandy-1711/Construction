import footercss from './Footer.module.css'
export default function Footer() {
    return <footer className={footercss.footer}>
        <div className={footercss.footerWrapper}>
            <div className={footercss.footerList}>
                <h2>ABOUT</h2>
                <p>Far far away, behind the word mountains, far from the countries.</p>
                <div>T F I</div>
            </div>
            <div className={footercss.footerList}>
                <h2>LINKS</h2>
                <ul>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>PROJECT</a></li>

                </ul>
            </div>
            <div className={footercss.footerList}>
                <h2>SERVICES</h2>
                <ul>
                    a
                </ul>
            </div>
            <div className={footercss.footerList}>
                <h2>HAVE A QUESTION?</h2>
                <p>address</p>
                <p>number</p>
                <p>email</p>
            </div>
        </div>
    </footer>
}