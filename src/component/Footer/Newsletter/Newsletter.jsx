import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">News Letter</span>
            <span className="big-text">Signup for lattest update and offer</span>
            <div className="form">
                <input type="text" placeholder="Email Address" name="newslatter" id="newslatter" /> <button>Subscribe</button>
            </div>
            <div className="text">Will be used accordance to privacy pollicy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14} />
                </div>
                <div className="icon">
                    <FaTwitter size={14} />
                </div>
                <div className="icon">
                    <FaInstagram size={14} />
                </div>
                <div className="icon">
                    <FaLinkedin size={14} />
                </div>
            </div>
        </div>
    </div>
}
export default Newsletter;
