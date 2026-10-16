let userData = [
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

function getAllUsers(req, res) {
    res.json(userData);
}

function getUserById(req, res) {
    const userId = parseInt(req.params.id);
    const user = userData.find(u => u.id === userId);
}