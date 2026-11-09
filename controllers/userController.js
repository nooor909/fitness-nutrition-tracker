/* let userData = [
    {
        id: 1,
        name: 'Ben',
        age: 30,
        email: 'ben22@gmail.com',
        phone: '6838 3792 277 268',
        weight: 70,
        BMI: 22.5
    },
    {
        id: 2,
        name: 'John',
        age: 25,
        email: 'john25@gmail.com',
        phone: '8612 5682 882 122',
        weight: 80,
        BMI: 25.0
    },
    {
        id: 3,
        name: 'Alice',
        age: 28,
        email: 'alice28@gmail.com',
        phone: '9123 4567 890 123',
        weight: 65,
        BMI: 23.5
    }
]

let nextID = 4;

// Get /api/users
// Return all users
function getAllUsers(req, res) {
    res.json(userData);
}

// Get /api/users/:id
function getUserById(req, res) {
    const userId = parseInt(req.params.id);
    const user = userData.find(u => u.id === userId);
}
*/



const userModel = require('../models/userModel');
const userViews = require('../views/userViews');


// Calculate BMI using weight (kg) and height (cm)
function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return Number(
        (weight / (heightInMeters * heightInMeters)).toFixed(1)
    );
}

async function getAllUsers(req, res) {
    await userService.getAllUsers()
    
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}