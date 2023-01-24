import sheetMusic from '../assets/images/sheet-music.png'


export default function Listen() {
    return (
        <>
            <section>
                <div className="section-container my-20">
                    <h3 className='pb-16'>Listen</h3>

                    {/* items container 1*/}
                    <div className="flex flex-col items-center justify-between space-y-16 pb-12 md:flex-row md:space-y-0 md:space-x-12">
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                    </div>

                    {/* items container 2*/}
                    <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                        {/* item 1 */}
                        <div className="flex flex-col items-center space-y-5">
                            <img src={sheetMusic} alt="Jan recording" className="mb-6" />
                            <h4>Recording Title</h4>
                            <p className="max-w-md text-gray-700">Description</p>
                        </div>
                    </div>

                    {/* button container */}
                    <div className="flex flex-col justify-center w-full space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-4">
                        <a href="/Recordings" className="btn my-36">Music & Books by Jan</a>
                    </div>



                </div>

               
            </section>


        </>
    )
}