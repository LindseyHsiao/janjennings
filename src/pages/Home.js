import studentHarp from '../assets/images/student-harp.jpg'
import orchestra from '../assets/images/orchestra.jpg'
import sheetMusic from '../assets/images/sheet-music.jpg'
import harpstrings from '../assets/images/harpstrings.jpg'

export default function Home() {
    return (
        <>
            <section id="feature">
                {/* <!-- feature container-->
         */}
                <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
                    {/* <!-- Image --> */}
                    <img src={studentHarp} alt="Student playing harp" className='max-w-full h-auto'/>

                    {/* <!-- text container --> */}
                    <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
                        <h2 className="max-w-lg mt-10 mb-6 text-4xl text-center text-gray-900 uppercase md:mt-0 md:text-left">
                            Experience & elegance
                        </h2>
                        <p className="max-w-md text-center md:text-left">
                        Orlando harpist, Jan Jennings provides beautiful harp music for weddings, receptions, and special events. Jan has been a professional harp player in Orlando for more than 25 years and is considered one of the top harpists in the country. She can add elegance to your special occasion with harp music and string ensembles.
                        </p>
                    </div>
                </div>
            </section>

    {/* // <!-- creations section --> */}
            <section id="creations">
                {/* <!-- creations container --> */}
                <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                    {/* <!-- creations header --> */}
                    <div className="flex justify-center mb-20 md:justify-between">
                        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                            You deserve the best
                        </h2>
                        <button className="hidden btn md:block">
                            See All
                        </button>
                    </div>

                    {/* <!-- items container  --> */}
                    <div className="item-container my-20">
                        {/* <!-- item 1 --> */}
                        <div className="group item">
                            <img src={harpstrings} alt="student playing harp"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                             <a href="/Media"><h5>
                                Media
                            </h5></a>
                        </div>
                        {/* <!-- item 2 --> */}
                        <div className="group item">
                            <img src={sheetMusic} alt="sheet music"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <a href="/Listen"><h5>
                                Listen
                            </h5></a>
                        </div>

                        {/* <!-- item 3 --> */}
                        <div className="group item">
                            <img src={harpstrings} alt="harpstrings"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <h5>
                                Reviews
                            </h5>
                        </div>

                        {/* <!-- item 4 --> */}
                        <div className="group item">
                        <img src={orchestra} alt="orchestra"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <a href="/Recordings"><h5>
                                Music <br/> & Books
                            </h5></a>
                        </div>

                    </div>

                    {/* <!-- items container 2 --> */}
                    <div className="item-container my-20">
                        {/* <!-- item 1 --> */}
                        <div className="group item">
                            <img src={orchestra} alt="orchestra"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <a href="/Contact"><h5>
                                Contact
                            </h5></a>
                        </div>
                        {/* <!-- item 2 --> */}
                        <div className="group item">
                            <img src={harpstrings} alt="harpstrings"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <a href="/Events"><h5>
                                Events
                            </h5></a>
                        </div>

                        {/* <!-- item 3 --> */}
                        <div className="group item">
                            <img src={sheetMusic} alt="sheet music"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <a href="/Lessons"><h5>
                                Lessons
                            </h5></a>
                        </div>

                        {/* <!-- item 4 --> */}
                        <div className="group item">
                        <img src={harpstrings} alt="harpstrings"
                                className="w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <a href="/About"><h5>
                                About
                            </h5></a>
                        </div>

                    </div>

                    

    
                    
                    {/* <!-- bottom button container --> */}
                    <div className="flex justify-center mt-10 md:hidden">
                        <button className="btn w-full md:hidden">See All</button>
                    </div>
                </div>
            </section>
        </>
    )
}