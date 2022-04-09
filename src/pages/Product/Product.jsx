import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import getProduct from "../../api/getProduct";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { GiHanger } from "react-icons/gi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addToCartAction, addToFavoritesAction, deleteFromFavoritesAction, getProductsAction } from "../../store/actions";
import { useDispatch } from "react-redux";
import SizeChartModal from "../../components/SizeChartModal/SizeChartModal";
import * as Yup from "yup";
import InformationModal from "../../components/InformationModal/InformationModal";

const Product = () => {
    const navigate = useNavigate()
    const {productID} = useParams()
    const [product, setProduct] = useState(null);
    const [hasError, setHasError] = useState(false)
    const [favorites, setFavorite] = useState();
    const [sizeChartModal, setSizeChartModal] = useState(null);
    const [informationModal, setInformationModal] = useState(null);
    const dispatch = useDispatch()

        useEffect(() => {
        dispatch(getProductsAction())
        getProduct(productID)
            .then((item) => {
                setProduct(item[0])
            })
            .catch((err) => setHasError(true))
        }, [])

    const CustomErrorMessage = ({ children }) => {
        setInformationModal(<InformationModal onClick={closeRequiredChartModal} children={ children }/>)
        return (<div style={{display: 'none'}}>{children}</div>)
}
    const validationSchema = Yup.object().shape({
  size: Yup.string().required("Please, choose your size")
});

    const closeSizeChartModal = () => {
    setSizeChartModal(null)
    };
    const closeRequiredChartModal = () => {
    setInformationModal(null)
  };

  const openSizeChartModal = () => {
    setSizeChartModal(
      <SizeChartModal onClick={closeSizeChartModal} />
    );
  };

  const deleteFromFavorites = (event) => {
      dispatch(deleteFromFavoritesAction(product.vendorCode))
getProduct(productID)
            .then((item) => {
                setProduct(item[0])
            })
            .catch((err) => setHasError(true))
    if (typeof JSON.parse(localStorage.getItem("favorites")) == 'number') {
      localStorage.removeItem(`favorites`)
    } else {
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      const index = favorites.indexOf(product.vendorCode);
      favorites.splice(index, 1);
      localStorage.setItem('favorites', `${JSON.stringify(favorites)}`)
    }
  }

  const addToFavorites = (event) => {
      dispatch(addToFavoritesAction(product.vendorCode))
      getProduct(productID)
            .then((item) => {
                setProduct(item[0])
            })
            .catch((err) => setHasError(true))
    if (typeof JSON.parse(localStorage.getItem("favorites")) == 'object' && localStorage.getItem("favorites")) {
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      favorites.push(`${[product.vendorCode]}`)
      localStorage.setItem('favorites', `${JSON.stringify(favorites)}`)
    } else if (typeof JSON.parse(localStorage.getItem("favorites")) == 'number') {
      let favorites = localStorage.getItem('favorites').split(' ')
      favorites.push(`${[product.vendorCode]}`)
      localStorage.setItem('favorites', `${JSON.stringify(favorites)}`)
    } else if (!localStorage.getItem("favorites")) {
      localStorage.setItem('favorites', `[${[product.vendorCode]}]`)
    }
    }

    const addToCart = (values, actions) => {
        if (typeof JSON.parse(localStorage.getItem("cart")) == 'object' && localStorage.getItem("cart")) {
      let cart = JSON.parse(localStorage.getItem("cart"))
      if (!cart.includes(`${[productID]}.${[values.size]}`)) {
      cart.push(`${[productID]}.${[values.size]}`)
          localStorage.setItem('cart', `${JSON.stringify(cart)}`)
          setInformationModal(<InformationModal onClick={closeRequiredChartModal} children={"Product added to the cart"} />)
          dispatch(addToCartAction({size: values.size, vendorCode: product.vendorCode, URL:
                    product.URL, price: product.price}))
      } else {
          setInformationModal(<InformationModal onClick={closeRequiredChartModal} children={ "Product is already in the cart" }/>)
      }
        } else if (typeof JSON.parse(localStorage.getItem("cart")) == 'number') {
            console.log("num")
      let cart = localStorage.getItem('cart').split(' ')
      if (!cart.includes(`${[productID]}.${[values.size]}`)) {
      cart.push(`${[productID]}.${[values.size]}`)
          localStorage.setItem('cart', `${JSON.stringify(cart)}`)
          setInformationModal(<InformationModal onClick={closeRequiredChartModal} children={"Product added to the cart"} />)
           dispatch(addToCartAction({size: values.size, vendorCode: product.vendorCode, URL:
                    product.URL, price: product.price}))
      } else {
          setInformationModal(<InformationModal onClick={closeRequiredChartModal} children={ "Product is already in the cart" }/>)
      }
    } else if (!localStorage.getItem("cart")) {
            localStorage.setItem('cart', `${[productID]}.${[values.size]}`)
            setInformationModal(<InformationModal onClick={closeRequiredChartModal} children={"Product added to the cart"} />)
            dispatch(addToCartAction({size: values.size, vendorCode: product.vendorCode, URL:
                    product.URL, price: product.price}))
    }
  };

    return hasError ? (
        <>
            <p>Sorry, no products found</p>
            <Link to="/emails/inbox">Go to all products</Link>
        </>
    ) : product && (
            <div className="container" >
                <main className="product">
                    <img className="product__img" src={product.URL} alt="" />
                        <div className="product__description">
                            <div className="product__title"><p className="product__name">{product.name}</p>
                                {favorites || (localStorage.getItem(`favorites`) && localStorage.getItem(`favorites`).includes(product.vendorCode)) ? <BsSuitHeartFill className="product__heart" onClick={deleteFromFavorites}/> : <BsSuitHeart className="product__heart" onClick={addToFavorites}/>}
                            </div>
                            <p className="product__price">{product.price} USD</p>
                        <p className="product__size"> choose your size</p>

                        <Formik validationSchema={validationSchema} onSubmit={addToCart} initialValues={{ size: ''}}>
                            <Form className="product__buy-form">
                                <div className="product__size-chart">
                                    {product.sizes.map((item) => {
                                        if (product.awaiableSizes.includes(item)) {
                                        return <div key={`${item}`} className="product__size-cell">
                                            <Field size={item} type="radio" id={`${item}`} value={`${item}`} name="size" className="product__size-radio-btn" />
                                            <label className="product__size-radio-mask" htmlFor={`${item}`}>{`${item}`}</label>
                                        </div>
                                        } else {
                                            return <div key={`${item}`} className="product__size-cell">
                                                <Field disabled type="radio" id={`${item}`} value={`${item}`} name="size" className="product__size-radio-btn" />
                                                <label className="product__size-radio-mask product__size-radio-mask--disabled" htmlFor={`${item}`}>{`${item}`}</label>

                                        </div>
                                    }
                                    })}
                                </div>
                                <div onClick={openSizeChartModal} className="product__size-btn"> <GiHanger /> Determine your size</div>
<ErrorMessage name="size" component={CustomErrorMessage}/>
                                <button type="submit" className="product__buy-btn">Buy</button>
                            </Form>
                        </Formik>
                        <table className="product-details">
            <tr  >
            <th className="product-details__title">Color</th>
            <td className="product-details__description"><p>{ product.color}</p>
</td>
        </tr>
            <tr>
            <th className="product-details__title">Composition</th>
            <td className="product-details__description"><p>{product.composition}</p>
</td>
        </tr>
            <tr>
            <th className="product-details__title">Care</th>
            <td className="product-details__description"><p>{product.care}</p>
</td>
        </tr>
            <tr>
            <th className="product-details__title">Model parameters</th>
            <td className="product-details__description"><p>{ product.modelParameters}</p>
</td>
        </tr>
    </table>
                    </div>
                    {sizeChartModal}
                    {informationModal}
                </main>
            </div>

    )
}

export default Product