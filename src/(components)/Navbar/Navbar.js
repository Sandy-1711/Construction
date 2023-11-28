import data from '../datas/NavbarListData'
import navcss from './Navbar.module.css'
import createNavbarList from '../utils/NavbarList'
export default function Navbar() {
    function createNavbar() {
        return data.map(function (dataitem,index) {
            return createNavbarList(dataitem,index)
        })
    }
    return (<div className={navcss.navbarWrapper}>
        <div className={navcss.accordion}>
            <div className={navcss.accordionWrapper}>
                <div>
                    <span>youremail@gmail.com</span>
                </div>
                <div>
                    <button>INQUIRE NOW</button>
                </div>
            </div>
        </div>
        <div className={navcss.upper}>
            <div className={navcss.logo}>
                LOGO
            </div>
            <div className={navcss.upperIn}>
                <img src='/HeroBackgroundImage.jpg' />
                <div>
                    <p>Free Call +86768454</p>
                    <p>Call Us Now 24/7 Customer Support</p>
                </div>
            </div>
            <div className={navcss.upperIn}>
                <img src='/HeroBackgroundImage.jpg' />
                <div>
                    <p>Our Location</p>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
            </div>
        </div>

        <div className={navcss.navbarInner}>

            <div className={navcss.navbar}>
                <ul>
                    {createNavbar()}
                </ul>
                <div className={navcss.inquiryButton}><button>INQUIRE NOW</button></div>
            </div>
        </div>
    </div>)
}