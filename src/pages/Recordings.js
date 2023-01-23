import sheetMusic from '../assets/images/sheet-music.png'


export default function Recordings () {
    return (
        <>
        <section>
            <div className="section-container my-20">
                <h3>Music and Books</h3>
                <p className="section-content mb-16">
                    Great
                </p>

                {/* items container */}
                <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                    {/* item 1 */}
                    <div className="flex flex-col items-center space-y-5">
                        <img src={sheetMusic} alt="Jan recording" className="mb-6"/>
                        <h5>Recording Title</h5>
                        <p className="max-w-md text-gray-700">Description</p>
                    </div>
                    {/* item 1 */}
                    <div className="flex flex-col items-center space-y-5">
                        <img src={sheetMusic} alt="Jan recording" className="mb-6"/>
                        <h5>Recording Title</h5>
                        <p className="max-w-md text-gray-700">Description</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}