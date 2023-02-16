import {Link} from "react-router-dom"
import "./index.css"

const Header = () => (
    <div className="header-card">
        <h1 className="heading">GST (Goods And Services Tax)</h1>
        <nav className="nav-card">
            <ul className="list-container">
                <Link to="/"><li className="list-item">Home</li></Link>
                <Link to="/articles"><li className="list-item">Articles</li></Link>
                <Link to="/faqs"><li className="list-item">FAQs</li></Link>
                <Link to="/bookings"><li className="list-item">Book a Webinar</li></Link>
            </ul>
        </nav>
        
    </div>
)

export default Header