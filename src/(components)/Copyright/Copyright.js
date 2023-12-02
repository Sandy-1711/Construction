import copycss from './Copyright.module.css'
export default function Copyright() {
    return <div className={copycss.copyright}>

        <div className={copycss.copyLeft}>
        </div>
        <div className={copycss.wrapper}>
            <p>Copyright @2023 All rights reserved!</p>
        </div>
    </div>
}