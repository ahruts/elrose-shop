import React, { Component } from "react";
import Slider from "react-slick";

function MainCarousel() {

    const settings = {
    autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
       pauseOnHover:false,
    };
    return (
        <div>
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/djwbdrfki/image/upload/v1648914393/elrose-shop/main/main-carousel-1_jorjlv.jpg" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/djwbdrfki/image/upload/v1648914392/elrose-shop/main/main-carousel-2_rqxm2u.jpg" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/djwbdrfki/image/upload/v1648914394/elrose-shop/main/main-carousel-3_ixvrpz.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
}

export default MainCarousel
