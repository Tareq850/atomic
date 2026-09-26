import { Link } from "react-router-dom"
export default function NavBar({ img, children }) {
    return (
        <header className="flex sticky justify-between p-4 bg-primary gap-2 flex-wrap">
            <img src={img} alt="LOGO"></img>
            <nav className="flex justify-between gap-4 flex-wrap">
                <Link to="/" className="text-white hover:text-gray-200 hover:scale-105 transition">Home Page</Link>
                <Link to="/products" className="text-white hover:text-gray-200 hover:scale-105 transition">Our Services</Link>
                <Link to="/products/15" className="text-white hover:text-gray-200 hover:scale-105 transition">Contact Us</Link>
                <Link to="/products?page:2" className="text-white hover:text-gray-200 hover:scale-105 transition">About Us</Link>
            </nav>
            <div className="flex gap-2 flex-wrap">
                {children}
            </div>
        </header>
    )
}