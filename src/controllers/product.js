import { create } from '../services/products.js'

export function createProduct(req, res) {
    var data = req.body
    try {
        create(data)
        res.status(200).json({ message: 'product created' });
    } catch (err) {
        res.status(err.statusCode).json({ message: err.message })
    }
}