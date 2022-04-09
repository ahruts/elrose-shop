import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductsAction } from "../../store/actions";


function Favorites() {
  const [catalog, setCatalog] = useState(null);
  const [noProducts, setNoProducts] = useState(null);
  const dispatch = useDispatch()
  const stateCards = useSelector((state) => state.cards);

  useEffect(() => {
    productsList()
    console.log(catalog)
  }, [stateCards]);


  function productsList() {
    if (!stateCards) {
      dispatch(getProductsAction())
    }
    if (stateCards) {
      const filteredProducts = stateCards.filter((item) => {
        if (item.favorite === true) {
          return item;
        }
        })
        const catalog = filteredProducts.map((item) => {
          return (
            <ProductCard
              key={item.vendorCode}
              url={item.URL}
              name={item.name}
              price={item.price}
              vendorCode={item.vendorCode}
              favorite={item.favorite}
            ></ProductCard>
          )
        });
      if (catalog.length !== 0) {
setCatalog(catalog)
      } else
      {
        setCatalog(null)
       setNoProducts(<div className="no-favorites">
              <p className="no-favorites__text">No favorites</p>
            <NavLink to='/products' className="no-favorites__btn">Go to all products</NavLink></div>)
      }
        }
      }

    return (
      <>
        <div className="container">
          <main className="favorites">
            <h1 className="title">Favorites</h1>
            <ul className="favorites-list">{catalog}</ul>
            {noProducts}
            </main>
            </div>
      </>
    );
}

export default Favorites