async function getProducts() {
    let response = await fetch("/index.json");
    let products = await response.json();
    return products
}

export default getProducts