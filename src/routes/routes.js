import express from "express";
import { createUser, getUsers } from "../controllers/user.js";
import { createProduct, getProducts } from "../controllers/product.js";

const router = express.Router()

router.post('/users', createUser)

router.get('/users', getUsers)

router.post('/products', createProduct)

router.get('/products', getProducts)

export default router