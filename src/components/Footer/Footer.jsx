import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer__contacts">
                    <a className="footer__logo" href="/"><img width='40px'src="https://res.cloudinary.com/djwbdrfki/image/upload/v1648914595/elrose-shop/header/header-logo_yh8hfl.png" alt="" />
                ELROSE</a>
                    <a className="footer__phone" href="tel:+380950000000">+38 (095) 000 00 00</a>
                    <a  className="footer__email" href="mailto:info@elrose.com">info@elrose.com</a>
                </div>
                <div className="footer__main">
                    <nav className="footer-nav">
                        <NavLink className="footer-nav__link" to="/delivery">Delivery</NavLink>
                        <NavLink className="footer-nav__link" to="/payment">Payment</NavLink>
                        <NavLink className="footer-nav__link" to="/return">Return</NavLink>
                        <NavLink className="footer-nav__link" to="/sizeChart">Size chart</NavLink>
                        <NavLink className="footer-nav__link" to="/contacts">Contacts</NavLink>
                    </nav>
                    <div className="footer__address">
                        <div className="">
                            ADDRESS:
                            <br />
                            Kyiv, Heroiv Kosmosu street, 15
                        </div>
                        <div className="">
                            SHOP HOURS
                            <br />9.00 a.m. - 09.00 p.m.
                        </div>
                    </div>
                </div>
                <form action=""></form>
                </div>
      </div>
    );
}

export default Footer