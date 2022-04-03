import React from "react";
import slider from './img/slider.png'
import accessories from './img/accessories.png'
import costumes from './img/costumes.png'
import dresses from './img/dresses.png'
import pants from './img/pants.png'
import skirts from './img/skirts.png'
import tops from './img/tops.png'
import { NavLink } from "react-router-dom";
import MainCarousel from "../../components/MainCarousel/MainCarousel";


function Main() {
    return (
        <div className="main">

            <MainCarousel></MainCarousel>
            <div className="container">
                <div className="main-products">
                    <NavLink to="/tops" className="main-products__item tops">
                        <p className="main-products__text" >Tops</p>
                        <img className="main-products__img" src='https://res.cloudinary.com/djwbdrfki/image/upload/v1648920258/elrose-shop/main/main-tops_tadbug.jpg' alt="" />
                    </NavLink>
                    <NavLink to="/skirts" className="main-products__item skirts">
                        <p className="main-products__text" >Skirts</p>
                        <img className="main-products__img" src='https://res.cloudinary.com/djwbdrfki/image/upload/v1648920258/elrose-shop/main/main-skirts_bevnbs.jpg' alt="" />
                    </NavLink>
                    <NavLink to="/pants" className="main-products__item pants">
                        <p className="main-products__text" >Pants</p>
                        <img className="main-products__img" src='https://res.cloudinary.com/djwbdrfki/image/upload/v1648920256/elrose-shop/main/main-pants_nh5wlb.jpg' alt="" />
                    </NavLink>
                    <NavLink to="/dresses" className="main-products__item dresses">
                        <p className="main-products__text" >Dresses</p>
                        <img className="main-products__img" src='https://res.cloudinary.com/djwbdrfki/image/upload/v1648920261/elrose-shop/main/main-dresses_vtl2cl.jpg' alt="" />
                    </NavLink>
                    <NavLink to="/costumes" className="main-products__item costumes">
                        <p className="main-products__text" >Costumes</p>
                        <img className="main-products__img" src='https://res.cloudinary.com/djwbdrfki/image/upload/v1648920255/elrose-shop/main/main-costumes_bxkxll.jpg' alt="" />
                    </NavLink>
                    <NavLink to="/accessories" className="main-products__item accessories">
                        <p className="main-products__text" >Accessories</p>
                        <img className="main-products__img" src='https://res.cloudinary.com/djwbdrfki/image/upload/v1648920264/elrose-shop/main/main-accessories_ah5ezl.jpg' alt="" />
                    </NavLink>
                </div>
                    <h2 className="main-title">About us</h2>
                    <div className="main-about-us">
                        <img className="main-about-us__img" src="https://res.cloudinary.com/djwbdrfki/image/upload/v1648913775/elrose-shop/main/main-aboutUs_ozw95q.jpg" alt="" />
                    <p className="main-about-us__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis natus, inventore adipisci rem dolorem tempora accusamus ea fuga in repellat dignissimos perferendis, accusantium, neque consequuntur odit ullam vitae magni?
                        <br /><br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus quo a commodi aperiam quae voluptatum ex minus! Dolore inventore aut eum tempore in autem. Saepe ullam nihil quas a.
<br /><br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit voluptatem, architecto sequi minima consectetur rem, nesciunt ducimus, iure quod itaque ullam non? Nihil veritatis debitis nesciunt accusamus perspiciatis aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maxime fuga vero sequi quidem nihil debitis praesentium amet, architecto reiciendis aut quibusdam nobis? Quidem unde, sed omnis ut natus nisi.</p>
                </div>
            </div>
      </div>
    );
}

export default Main