function presentUserData(userItem) {
    return {
        id: userItem.id,
        name: userItem.name,
        age: userItem.age,
        email: userItem.email,
        phone: userItem.phone,
        weight: userItem.weight,
        BMI: userItem.BMI
    };
}

function presentAllUsersData(userData, pagination) {
    return{
        data: userData.map(presentUserData),
        pagination: {
            page: pagination.page,
            limit: pagination.limit,
            total: pagination.total,
            totalPages: pagination.totalPages
        }
    };
}

module.exports = {
    presentUserData,
    presentAllUsersData 
}