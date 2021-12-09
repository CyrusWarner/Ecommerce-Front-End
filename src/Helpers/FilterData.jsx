
// Takes in an array of products and searchTerm and filters the data
export const filterArrayOfProducts = (arrayOfProducts, searchTerm) => {
    let filteredProducts = []
    arrayOfProducts.forEach((product) => {
        if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){
            filteredProducts.push(product)
        }
    })
    return filteredProducts
}