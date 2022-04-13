const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "SET_PRODUCTS": {
      const cardsWithFavs = action.payload.map((item) => {
        if (
          localStorage.getItem(`favorites`) &&
          localStorage.getItem(`favorites`).includes(item.vendorCode)
        ) {
          item.favorite = true;
          return item;
        } else {
          return item;
        }
      });
      if (
        typeof JSON.parse(localStorage.getItem("cart")) == "object" &&
        localStorage.getItem("cart")
      ) {
        const cart = JSON.parse(localStorage.getItem("cart")).map((item) => {
          const product = action.payload.find(
            (product) => product.vendorCode === Math.trunc(item)
          );
          item = {
            vendorCode: product.vendorCode,
            price: product.price,
            URL: product.URL,
            size: item.split(".")[1],
          };
          return item;
        });
        state = { ...state, cart: cart };
      } else if (typeof JSON.parse(localStorage.getItem("cart")) == "number") {
        const product = action.payload.find(
          (product) =>
            product.vendorCode === Math.trunc(localStorage.getItem("cart"))
        );
        const cart = {
          vendorCode: product.vendorCode,
          price: product.price,
          URL: product.URL,
          size: localStorage.getItem("cart").split(".")[1],
        };
        state = { ...state, cart: cart };
      }
      console.log(state.cart);
      return { ...state, cards: cardsWithFavs };
    }
    case "ADD_TO_FAVORITES": {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.vendorCode === action.payload
            ? { ...card, favorite: true }
            : card
        ),
      };
    }
    case "ADD_TO_CART": {
      if (state.cart === null) {
        console.log('null')
        return {
          ...state,
          cart: [action.payload],
        };
      } else {
        console.log(state.cart.length);
        state.cart.push(action.payload);
return {
  ...state,
  cart: state.cart,
};
      }
    }
    case "DELETE_FROM_CART": {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.vendorCode === action.payload ? { ...card, cart: false } : card
        ),
      };
    }
    case "DELETE_FROM_FAVORITES": {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.vendorCode === action.payload
            ? { ...card, favorite: false }
            : card
        ),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
