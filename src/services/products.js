import { validateName } from "../utils/utils.js";

var productData = []

export function create(data) {
    validateName(data)
    add(data)
}

function add(data) {
    productData.push(data)
}

export function get() {
    return productData
}