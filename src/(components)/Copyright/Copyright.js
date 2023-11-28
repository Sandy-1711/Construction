import copycss from './Copyright.module.css'
export default function Copyright() {
    return <div className={copycss.copyright}>
        <div className={copycss.copyLeft}>
            <p>Copyright @2023 All rights reserved!</p>
        </div>
    </div>
}