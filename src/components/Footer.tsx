import logo from "../assets/logo.png"
import "../styles/footer.css"

export const Footer = () => {
    return (
        <section className="footer-container">
            <div className="footer">
                <div className="footer-content" id="customer-service">
                    <a href="#">About Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Customer Service</a>
                </div>
        
                <div className="footer-content footer-img">
                    <img id="footer-logo" src={logo} alt="snacktopia logo" />
                </div>
        
                <div className="footer-content">
                    <ul className="footer-contact-list">
                        <li className="footer-contact-item">
                            <a href="/#">blendbox@gmail.com</a>
                        </li>
                        <li className="footer-contact-item">
                            <a href="/#">+4670-888 88 88</a>
                        </li>
                        <li className="footer-contact-item">
                            <a href="/#">Snack Gatan 888, Stockholm Sverige</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="copyright">@Copyright 2025</div>
        </section>
    )
}