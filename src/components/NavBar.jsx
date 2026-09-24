
export default function NavBar({img, children}) {
    return (
        <header className="flex sticky justify-between p-4 bg-primary gap-2 flex-wrap">
            <img src={img} alt="LOGO"></img>
            <nav className="flex justify-between gap-4 flex-wrap">
                <a href="#" className="text-white hover:text-gray-200 hover:scale-105 transition">Home Page</a>
                <a href="#" className="text-white hover:text-gray-200 hover:scale-105 transition">Our Services</a>
                <a href="#" className="text-white hover:text-gray-200 hover:scale-105 transition">Contact Us</a>
                <a href="#" className="text-white hover:text-gray-200 hover:scale-105 transition">About Us</a>
            </nav>
            <div className="flex gap-2 flex-wrap">
                {children}
            </div>
        </header>
    )
}