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
                        <div className={contactcss.svgContainer}>

                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                fill='#FC5E28' viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                        </div>
                        <div>
                            <h2>Address:</h2>
                            <span>asdfih ashfoi a</span>
                        </div>
                    </div>
                    <div className={contactcss.infoCard}>
                        <div className={contactcss.svgContainer}>
                            <svg
                                fill='#FC5E28' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        </div>
                        <div>
                            <h2>Phone:</h2>
                            <p>+879846549879</p>
                        </div>
                    </div>
                    <div className={contactcss.infoCard}>
                        <div className={contactcss.svgContainer}>

                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill='#FC5E28'><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>                        </div>
                        <div>
                            <h2>Email:</h2>
                            <p>info@yoursite.com</p>
                        </div>
                    </div>
                    <div className={contactcss.infoCard}>
                        <div className={contactcss.svgContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16"
                                fill='#FC5E28' width="16" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                        </div>
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