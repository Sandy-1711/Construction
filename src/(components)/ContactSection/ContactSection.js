import contactcss from './ContactSection.module.css'
export default function ContactSection() {
    return <section className={contactcss.section}>
        <div className={contactcss.wrapper}>
            <div className={contactcss.text}>
                <span>CONTACT US</span>
                <h2>Message us for more details</h2>
                <p> far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className={contactcss.formContainer}>

                <form className={contactcss.form}>
                    <div>

                        <input
                            name='name'
                            placeholder='Your Name'
                            type='text'
                        />
                        <input
                            type='email'
                            placeholder='Your Email'
                            name='email'
                        />
                    </div>
                    <input
                        type='text'
                        placeholder='Subject'
                        name='subject'
                    />
                    <textarea
                        placeholder='Message'
                        name="message"
                        rows={10}
                    />
                    <button>SEND MESSAGE</button>
                </form>
                <div className={contactcss.info}>
                    <div className={contactcss.infoCard}>
                        <img src='/ConstructionAbout.jpeg' />
                        <div>
                            <h2>Address:</h2>
                            <span>asdfih ashfoi a</span>
                        </div>
                    </div>
                    <div className={contactcss.infoCard}>
                        <img src='/ConstructionAbout.jpeg' />
                        <div>
                            <h2>Phone:</h2>
                            <p>+879846549879</p>
                        </div>
                    </div>
                    <div className={contactcss.infoCard}>
                        <img src='/ConstructionAbout.jpeg' />
                        <div>
                            <h2>Email:</h2>
                            <p>info@yoursite.com</p>
                        </div>
                    </div>
                    <div className={contactcss.infoCard}>
                        <img src='/ConstructionAbout.jpeg' />
                        <div>
                            <h2>Website:</h2>
                            <p>yoursite.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}