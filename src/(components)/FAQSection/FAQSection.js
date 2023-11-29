import CreateFAQs from '../utils/CreateFAQs'
import faqcss from './FAQ.module.css'
export default function FAQSection() {
    return <section className={faqcss.section}>
        <div className={faqcss.wrapper}>
            <h1>Frequently Asked Questions</h1>
            <div className={faqcss.listContainer}>
                <ol>
                    {CreateFAQs()}
                </ol>
            </div>
        </div>
    </section>
}