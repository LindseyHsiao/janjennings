import facebookIcon from '../assets/images/icon-facebook.svg'
import instagramIcon from '../assets/images/icon-instagram.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg'
import logo from '../assets/images/logo.png'


export default function Footer(){
    return(
        <footer className="bg-gradient-to-b from-black to-gray-900">
        {/* <!-- container --> */}
        <div className="container max-w-6xl py-10 mx-auto">
            {/* <!-- footer flex container --> */}
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                {/* <!-- menu and logo container  --> */}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-8">
                    {/* <!-- logo --> */}
                    <div className="h-8">
                        <img src={logo} alt="Jan Jennings Logo" className="w-44 md:ml-3"/>
                    </div>
                    {/* <!-- menu --> */}
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                        {/* <!-- item 1 --> */}
                        <div className="h-10 group">
                            <a href="/About">About</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>
                        </div>
                        {/* <!-- item 1 --> */}
                        <div className="h-10 group">
                            <a href="/Events">Events</a>
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
                                <img src={facebookIcon} alt="Facebook Icon" className="h-6"/>
                            </a>
                        </div>
                        {/* <!-- icon 2 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src={instagramIcon} alt="Instagram Icon" className="h-6"/>
                            </a>
                        </div>
                        {/* <!-- icon 3 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src={pinterestIcon} alt="Pinterest Icon" className="h-6"/>
                            </a>
                        </div>
                    </div>
                    {/* <!-- copy --> */}
                    <div className="font-bold">
                        &copy; 2023 Jan Jennings. All Rights Reserved
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
}