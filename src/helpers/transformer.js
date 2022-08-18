//transforma os dados em JSON API
//https://jsonapi.org/
const transformer = product =>({
    type: 'products',
    id: product.id,
    attributes:{
        name: product.name,
        price: product.price
    },
    links: {
        self: `/api/v1/products/${product.id}`
    }
})

module.exports = transformer