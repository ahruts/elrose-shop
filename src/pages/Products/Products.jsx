import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductsAction } from "../../store/actions";


function Products() {
      const {category} = useParams()
  const [catalog, setCatalog] = useState(null);
  const dispatch = useDispatch()
  const stateCards = useSelector((state) => state.cards);

  useEffect(() => {
    productsList()
  }, [stateCards, category]);


  function productsList() {
    if (!stateCards) {
      dispatch(getProductsAction())
    }
    if (stateCards) {
      if (category == "products") {
        const catalog = stateCards.map((item) => {
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
        setCatalog(catalog)
      } else {
        const filteredCatalog = stateCards.filter((item) => {
        if (category === item.category) {
          return item;
        }
        })
        const catalog = filteredCatalog.map((item) => {
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
        setCatalog(catalog)
      }
    }
}

    return (
      <>
        <div className="container">
          <main className="products">
            <aside className="products-categories">
              <p className="products-categories__title">Categories</p>
              <NavLink to="/tops" className="products-categories__link" href="">Tops</NavLink>
              <NavLink to="/skirts" className="products-categories__link" href="">Skirts</NavLink>
              <NavLink to="/pants" className="products-categories__link" href="">Pants</NavLink>
              <NavLink to="/dresses" className="products-categories__link" href="">Dresses</NavLink>
              <NavLink to="/costumes" className="products-categories__link" href="">Costumes</NavLink>
              <NavLink to="/accessories" className="products-categories__link" href="">Accessories</NavLink>
          </aside>
            <ul className="product-list">{catalog ? catalog : <p>Loading..</p>}</ul>
            </main>
            </div>
      </>
    );
}

export default Products