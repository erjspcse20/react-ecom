import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    gadfsdjfh sydf gsadyf gyk kaufh alduiyfh audfh aufd adf afashkdh fhdfkhj fhdaag fyad gfggyag fuka hkadfad
                    aahdf ggfykad gfiuaghi adhf aodfh ddf
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        gadfsdjfh sydf sadyf gyk kaufh alduiyfh
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: 8713648137463
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text"> Email: gfsh@hygs.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Category</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div classlame="text">
                        hjsbdfhv sdfhbsdjhbsd vcsdhbdshbsd sdjfksf
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    </footer>
}
export default Footer;
