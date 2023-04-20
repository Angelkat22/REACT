export const products_request = callback => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(json => callback(json))
}