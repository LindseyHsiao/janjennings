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
                            
                            <iframe width="220" height="180" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1411783396&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title="Example track"></iframe>
                            {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/harpmusiccollective" title="Harp Music Collective" target="_blank" style="color: #cccccc; text-decoration: none;">Harp Music Collective</a> · <a href="https://soundcloud.com/harpmusiccollective/write-you" title="Write You" target="_blank" style="color: #cccccc; text-decoration: none;">Write You</a></div> */}

                            <h4>Test Audio</h4>
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
                        <a href="/Recordings" className="btn my-36">Music & Books by Jan Jennings</a>
                    </div>



                </div>

               
            </section>


        </>
    )
}