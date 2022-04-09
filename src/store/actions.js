import getProducts from "../api/getProducts";

export const getProductsAction = () => (dispatch, getState) => {
  getProducts().then((products) => {
    dispatch({ type: "SET_PRODUCTS", payload: products.cards });
  });
};

export const addToFavoritesAction = (vendorCode) => (dispatch, getState) => {
  dispatch({ type: "ADD_TO_FAVORITES", payload: vendorCode });
};

export const deleteFromFavoritesAction =
  (vendorCode) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_FAVORITES", payload: vendorCode });
  };

  export const addToCartAction = (vendorCode) => (dispatch, getState) => {
    dispatch({ type: "ADD_TO_CART", payload: vendorCode });
  };

  export const deleteFromCartAction = (vendorCode) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: vendorCode });
  };
