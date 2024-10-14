import { validateName } from "../utils/utils.js"

var userData = []

export function create(data) {
    validateUser(data)
    addUser(data)
}


function validateUser(data) {
    validateAge(data.age)
    validateName(data.name)
    validateStudentId(data)
}
function validateAge(age) {
    if (age < 18) {
        const err = new Error("User cannot be registered because age is less than 18")
        err.statusCode = 400
        throw err
    }
}

function validateStudentId(data) {
    if (data.profession != undefined && data.profession == 'Student' && data.Id == undefined) {
        const err = new Error("User cannot be registered because Id is mandatory in case of a student")
        err.statusCode = 400
        throw err
    }
}

function addUser(data) {
    userData.push(data)
    cpuLoad(5)
}

export function get() {
    return userData
}

function cpuLoad(durationInSeconds) {
    const endTime = Date.now() + durationInSeconds * 1000;
    let count = 0;

    // Busy loop
    while (Date.now() < endTime) {
        // Increment a counter to keep the loop running
        count++;
    }
}