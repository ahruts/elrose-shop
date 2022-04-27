async function getProduct(id) {
  let response = await fetch("https://ahruts.github.io/elrose-shop-server/");
    let products = await response.json();
    const product = await products.cards.filter((item) => {
        if (item.vendorCode === id) {
          return item;
        }
    })
  return product;
}

export default getProduct;
