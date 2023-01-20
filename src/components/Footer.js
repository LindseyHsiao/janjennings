import facebookIcon from '../assets/images/icon-facebook.svg'


export default function Footer(){
    return(
        <footer className="bg-black">
        {/* <!-- container --> */}
        <div className="container max-w-6xl py-10 mx-auto">
            {/* <!-- footer flex container --> */}
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                {/* <!-- menu and logo container  --> */}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-8">
                    {/* <!-- logo --> */}
                    <div className="h-8">
                        <img src="images/logo.png" alt="" className="w-44 md:ml-3"/>
                    </div>
                    {/* <!-- menu --> */}
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                        {/* <!-- item 1 --> */}
                        <div className="h-10 group">
                            <a href="#">About</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>
                        </div>
                        {/* <!-- item 1 --> */}
                        <div className="h-10 group">
                            <a href="#">Events</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>
                        </div>
                        {/* <!-- item 1 --> */}
                        <div className="h-10 group">
                            <a href="#">Support</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- social and copy container --> */}
                <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                    {/* <!-- icons container --> */}
                    <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                        {/* <!-- icon 1 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src={facebookIcon} alt="" className="h-6"/>
                            </a>
                        </div>
                        {/* <!-- icon 2 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src="images/icon-instagram.svg" alt="" className="h-6"/>
                            </a>
                        </div>
                        {/* <!-- icon 3 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src="images/icon-pinterest.svg" alt="" className="h-6"/>
                            </a>
                        </div>
                    </div>
                    {/* <!-- copy --> */}
                    <div className="font-bold">
                        &copy; 2022 Jan Jennings. All Rights Reserved
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
}