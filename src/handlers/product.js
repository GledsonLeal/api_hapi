const ProductModel = require('../models/product')
const transformer = require('../helpers/transformer')//tranforma em API-JSON


const getAll = async (req, h)=>{
    const products = await ProductModel.find({})
    return { data: products.map(transformer)}
}
const find = async (req, h)=>{
    const product = await ProductModel.findById(req.params.id)
    return { data:transformer(product) }
}
const save = async (req, h)=>{
    //o h é o response. Por convensão, é h no hapy
    console.log(req.payload.name, req.payload.price)

    const { name, price} = req.payload
    //const priceFormat = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const product = new ProductModel({
        name, price
    })
    await product.save()
    // ver padrões da api com json
    // https://jsonapi.org/
    //a função transformer está implementada nos handlers
    return h.response(transformer(product)).code(201)

}
const remove = async (req,h)=>{
    await ProductModel.findOneAndDelete({ _id: req.params.id })
    // status 204 - no content: não estou mandando mensagem no corpo da requisição,
    // mas foi executado com sucesso
    return h.response().code(204)    
}


module.exports={
    getAll,
    save,
    remove,
    find
}