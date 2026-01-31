import "./Footer.css";

export default function Footer({ storeName, email }) {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div>
                    <h4 className="footer__title">{storeName}</h4>
                    <p className="footer__text">Built with React components for ComponentCorner.</p>
                </div>

                <div>
                    <h4 className="footer__title">Contact</h4>
                    <p className="footer__text">{email}</p>
                </div>
            </div>

            <div className="footer__bottom">
                <small>© {new Date().getFullYear()} {storeName}</small>
            </div>
        </footer>
    );
}
