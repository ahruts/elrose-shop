async function getProduct(id) {
  let response = await fetch("/index.json");
    let products = await response.json();
    const product = await products.cards.filter((item) => {
        if (item.vendorCode === id) {
          return item;
        }
    })
  return product;
}

export default getProduct;
