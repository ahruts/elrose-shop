import React, { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router";
import { addToFavoritesAction, deleteFromFavoritesAction } from "../../store/actions";



function ProductCard({ vendorCode, url, price, name }) {
  const [favorites, setFavorite] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const deleteFromFavorites = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(deleteFromFavoritesAction(vendorCode))
    if (typeof JSON.parse(localStorage.getItem("favorites")) == 'number') {
      localStorage.removeItem(`favorites`)
    } else {
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      const index = favorites.indexOf(vendorCode);
      favorites.splice(index, 1);
      localStorage.setItem('favorites', `${JSON.stringify(favorites)}`)
    }
  }

  const addToFavorites = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(addToFavoritesAction(vendorCode))
    if (typeof JSON.parse(localStorage.getItem("favorites")) == 'object' && localStorage.getItem("favorites")) {
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      favorites.push(`${[vendorCode]}`)
      localStorage.setItem('favorites', `${JSON.stringify(favorites)}`)
    } else if (typeof JSON.parse(localStorage.getItem("favorites")) == 'number') {
      let favorites = localStorage.getItem('favorites').split(' ')
      favorites.push(`${[vendorCode]}`)
      localStorage.setItem('favorites', `${JSON.stringify(favorites)}`)
    } else if (typeof JSON.parse(localStorage.getItem("favorites")) == 'object' && !localStorage.getItem("favorites")) {
      localStorage.setItem('favorites', `${[vendorCode]}`)
    }
  }

  const handleClick = () => {
        navigate(`/products/${vendorCode}`)
    }

  return (
    <div onClick={handleClick} className="product-card">
            <img width="100%" src={url} alt="" />
            <div className="product-card__text">
                <h1 className="product-card__name">
                {name}
                </h1>
                {favorites || (localStorage.getItem(`favorites`) && localStorage.getItem(`favorites`).includes(vendorCode)) ? <BsSuitHeartFill className="product-card__heart" onClick={deleteFromFavorites}/> : <BsSuitHeart className="product-card__heart" onClick={addToFavorites}/>}
            </div>
            <h2 className="product-card__price">{price} USD</h2>
      </div>
    );
}


export default ProductCard;

