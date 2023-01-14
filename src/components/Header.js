import logo from '../images/logo.png'

export default function Header() {
    return (
        <section id="hero" >
            {/* Hero Container */}
            <container className="max-w-6xl mx-auto px-6 py-12 md:px-0">
                {/* menu/logo container */}
                <nav className="flex items-center justify-between font-bold text-white">
                    <img alt="Jan Jennings" src={logo} />
                </nav>

            </container>

        </section>

    )
}