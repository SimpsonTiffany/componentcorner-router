import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ cartCount = 0 }) {
    return (
        <header className="header">
            <div className="header-inner">
                <Link to="/" className="logo">
                    ComponentCorner
                </Link>

                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/cart" className="nav-link cart-link">
                        <span className="cart-icon" aria-hidden="true">🛒</span>
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
