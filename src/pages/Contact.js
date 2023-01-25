import sheetMusic from '../assets/images/sheet-music.jpg'


export default function Contact() {
    return (
       <>
        <section id="contact">
            <div className="section-container my-20">
                <h3>
                    Contact
                </h3>
                <p className="section-content mb-24">
                For inquiries regarding bookings, rates and availability, lessons, harp sales or rentals
                </p>
                
            </div>
        </section>

       <section id="contact-details">
        <div className="section-container contact">
            <div className="relative flex flex-col md:flex-row md:space-x-32">
                {/* image */}
                <div className="md:w-1/2">
                    <img src={sheetMusic} alt="Jan" className="md:absolute top-0 right-[50%]"/>
                </div>
                {/* items container */}
                <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
                    {/* item 1 */}
                    <div>
                        <h4>email</h4>
                        <a href='mailto:mail@harpbiz.com' className="max-w-md text-gray-700">mail@harpbiz.com</a>
                    </div>
                    {/* item 2 */}
                    <div>
                        <h4>phone</h4>
                        <p className="max-w-md text-gray-700">407-905-2501</p>
                    </div>
                    {/* item 3 */}
                    <div>
                        <h4>address</h4>
                        <p className="max-w-md text-gray-700">Jan Jennings <br />P.O. Box 680451 <br /> Orlando, FL 32868-0451</p>
                    </div>
                </div>
            </div>
        </div>
       </section>
       
       </> 
    )
}
