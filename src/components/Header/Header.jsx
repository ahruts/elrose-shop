import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Header() {

    return (
        <div className="header">
            <div className="container">
                <a className="header__logo" href="/"><img width='50px'src="https://res.cloudinary.com/djwbdrfki/image/upload/v1648914595/elrose-shop/header/header-logo_yh8hfl.png" alt="" />
                ELROSE</a>
                <nav className="nav">
                    <NavLink className='nav__link' to="/stock">Stock</NavLink>
                    <NavLink className='nav__link'to="/products">
                        Products
                        <div className="nav-selected-block">
                        <NavLink to="/tops" className='nav-selected-block__link'>Tops</NavLink>
                        <NavLink to="/skirts" className='nav-selected-block__link'>Skirts</NavLink>
                        <NavLink className='nav-selected-block__link' to="/pants">Pants</NavLink>
                        <NavLink className='nav-selected-block__link' to="/dresses">Dresses</NavLink>
                        <NavLink className='nav-selected-block__link' to="/costumes">Costumes</NavLink>
                            <NavLink className='nav-selected-block__link' to="/accessories">Accessories</NavLink>
                    </div>
                    </NavLink>

                    <NavLink className='nav__link' to="/favorites">
                        For buyers
                        <div className="nav-selected-block">
                        <NavLink className='nav-selected-block__link' to="/delivery">Delivery</NavLink>
                        <NavLink className='nav-selected-block__link' to="/payment">Payment</NavLink>
                        <NavLink className='nav-selected-block__link' to="/return">Return</NavLink>
                        <NavLink className='nav-selected-block__link' to="/sizeChart">Size chart</NavLink>
                    </div>
                    </NavLink>
                    <NavLink className='nav__link' to="/aboutUs">About us</NavLink>
                    <NavLink className='nav__link' to="/contacts">Contacts</NavLink>
                <NavLink className='nav__cart' to="/cart"><FiShoppingCart /></NavLink></nav>

            </div>
      </div>
    );
}

export default Header