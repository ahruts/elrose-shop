async function getProducts() {
    let response = await fetch(
      "https://ahruts.github.io/elrose-shop-server/"
    );
    let products = await response.json();
    return products
}

export default getProducts