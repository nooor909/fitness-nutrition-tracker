const allowedFields=[
    "name",
    "age",
    "email",
    "phone",
    "weight",
    "BMI"  
]

function validateUserData(userData) {
    if (!userData || typeof userData !== 'object' || Array.isArray(userData)) 
        return false;
    } 

    if (Object.keys(userData).some(field => !allowedFields.includes(field))) {
        return false;}

    return (
        typeof userData.name === 'string' &&
        userData.name.trim().length > 0 &&
        typeof userData.age === 'number' &&
        userData.age > 0 &&
        typeof userData.email === 'string' &&
        userData.email.trim().length > 0 &&
        typeof userData.phone === 'string' &&
        userData.phone.trim().length > 0 &&
        typeof userData.weight === 'number' &&
        userData.weight > 0 &&
        typeof userData.BMI === 'number' &&
        userData.BMI > 0
    )

    function validateUserDataPatch(userData) {
        if (!userData || typeof userData !== 'object' || Array.isArray(userData)
        || Object.keys (userData).length === 0) {
            return false;
        }
        return Object.keys(userData).every(field => allowedFields.includes(field));
    }
    function validateID(id) {
        const parsedID = Number(id);
        return Number.isInteger(parsedID) && parsedID > 0;
    }
    Module.exports = {
        validateUserData,
        validateUserDataPatch,
        validateID
    };