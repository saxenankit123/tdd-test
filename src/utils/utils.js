export function validateName(name) {
    if (name.length > 20) {
        const err = new Error("User cannot be registered because name is more than 20 chars long")
        err.statusCode = 400
        throw err
    }
}