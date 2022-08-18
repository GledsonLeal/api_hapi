const mongoose = require('../db/conexao')
const { Schema } = mongoose

const ProductSchema = mongoose.model(
    'ProductSchema',
    new Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
    )
)

module.exports = ProductSchema