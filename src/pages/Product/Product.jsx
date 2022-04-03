import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import getProduct from "../../api/getProduct";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { GiHanger } from "react-icons/gi";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Product = () => {
    const navigate = useNavigate()
    const {productID} = useParams()
    const [product, setProduct] = useState(null);
    const [sizeTable, setSizeTable] = useState(null);
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        getProduct(productID)
            .then((item) => {
                setProduct(item[0])
            })
            .catch((err) => setHasError(true))
    }, [])


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
                                <BsSuitHeart className="product__heart"/>
                            </div>
                            <p className="product__price">{product.price} USD</p>
                        <p className="product__size"> choose your size</p>

                        <Formik initialValues={{ name: ''}}>
                            <Form className="product__buy-form">
                                <div className="product__size-chart">
                                    <div className="product__size-cell">
                                        <Field type="radio" id='100' value="100" name="size" className="product__size-radio-btn" />
                                        <label className="product__size-radio-mask" htmlFor="100">100</label>
                                    </div>
                                    <div className="product__size-cell">

                                        <Field type="radio" id='200' value="200" name="size" className="product__size-radio-btn" />
                                        <label className="product__size-radio-mask" htmlFor="200">200</label>
                                    </div>
                                    {product.sizes.map((item) => {
                                        return <div key={item} className="product__size-cell">
                                        <Field type="radio" id={item} value={item} name="size" className="product__size-radio-btn" />
                                        <label className="product__size-radio-mask" htmlFor={item}>{item}</label>
                                    </div>
                                    })}
                                </div>
                                <button className="product__size-btn"> <GiHanger /> Determine your size</button>
                                <button className="product__buy-btn">Buy</button>
                            </Form>
                        </Formik>
                        <p className="product__composition">Composition:{ product.composition}</p>

                    </div>
                </main>
            </div>

    )
}

export default Product