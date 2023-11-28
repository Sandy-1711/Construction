import data from '../datas/ServiceListHome'
import createServiceCard from '../utils/CreateServiceCard'
import servicecss from './Services.module.css'
export default function Services({ mappingdata, ...props }) {

    return (<section className={servicecss.serviceSection}>
        <div className={servicecss.serviceBackground}></div>
        <div className={servicecss.serviceWrapper}>
            <div className={servicecss.text}>
                <p>OUR SERVICES</p>
                <h2>We Offer Services</h2>
            </div>
            <div className={servicecss.services}>
                {mappingdata && mappingdata.map(function (dataitem) {
                    return createServiceCard(dataitem)
                })}
                {!mappingdata && data.map(function (dataitem) {
                    return createServiceCard(dataitem)
                })}
            </div>
        </div>
    </section>)
}