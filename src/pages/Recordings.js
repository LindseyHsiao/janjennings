import sheetMusic from '../assets/images/sheet-music.jpg'


export default function Recordings() {
    return (
        <>
            <section>
                <div className="section-container my-20">
                    <h3 className='pb-16'>Music and Books</h3>

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


                   
                    <p className="section-content mt-16 mb-16">
                        If you are unable to find recordings in your area, they may be ordered directly as follows: <br />
                    </p>
                    <p className="section-content mb-16">
                        CD’s are $15.00 each plus $2.12 for postage and handling. 
                    </p>
                    <h4>To order, send check payable to:</h4>
                    <p className="section-content mb-16">Jan Jennings<br />
                        PO Box 680451<br />
                        Orlando, FL 32868-0451</p>
                </div>
            </section>
        </>
    )
}