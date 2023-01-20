import studentHarp from '../assets/images/student-harp.png'
import orchestra from '../assets/images/orchestra.png'
import sheetMusic from '../assets/images/sheet-music.png'
import harpstrings from '../assets/images/harpstrings.png'

export default function Home() {
    return (
        <>
            <section id="feature">
                {/* <!-- feature container-->
         */}
                <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
                    {/* <!-- Image --> */}
                    <img src={studentHarp} alt="" width={100}/>

                    {/* <!-- text container --> */}
                    <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
                        <h2 className="max-w-lg mt-10 mb-6 text-4xl text-center text-gray-900 uppercase md:mt-0 md:text-left">
                            Lessons with Jan
                        </h2>
                        <p className="max-w-md text-center md:text-left">
                            Jan teaches both lever and pedal harp and attracts students from the entire southeast and Central
                            Florida. Standard classical harp repertoire and theory are required, but she teaches arranging and
                            improvisation. </p>
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
                    <div className="item-container">
                        {/* <!-- item 1 --> */}
                        <div className="group item">
                            <img src={orchestra} alt=""
                                className="hidden w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <h5>
                                Meet Jan
                            </h5>
                        </div>
                        {/* <!-- item 2 --> */}
                        <div className="group item">
                            <img src={sheetMusic} alt=""
                                className="hidden w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <h5>
                                Listen
                            </h5>
                        </div>

                        {/* <!-- item 3 --> */}
                        <div className="group item">
                            <img src={harpstrings} alt=""
                                className="hidden w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <h5>
                                Reviews
                            </h5>
                        </div>

                        {/* <!-- item 4 --> */}
                        <div className="group item">
                            <img src="images/orcehstra.png" alt=""
                                className="hidden w-full duration-200 md:block group-hover:scale-110" />
                            {/* <!-- item gradient --> */}
                            <div className="item-gradient"></div>
                            {/* <!-- item text --> */}
                            <h5>
                                Events
                            </h5>
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