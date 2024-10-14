import { create, get } from "../services/user.js"

export function createUser(req, res) {
    const data = req.body
    try {
        create(data)
        res.status(200).json({ message: 'user created' });
    } catch (err) {
        res.status(err.statusCode).json({ message: err.message });
    }

}

export function getUsers(req, res) {
    const data = get()
    res.send(data)

}