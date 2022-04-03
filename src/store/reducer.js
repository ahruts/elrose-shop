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
      const cardsWithCart = cardsWithFavs.map((item) => {
        if (
          localStorage.getItem(`cart`) &&
          localStorage.getItem(`cart`).includes(item.vendorCode)
        ) {
          item.cart = true;
          return item;
        } else {
          return item;
        }
      });

      return { ...state, cards: cardsWithCart };
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
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.vendorCode === action.payload ? { ...card, cart: true } : card
        ),
      };
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
