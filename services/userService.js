const userModel = require('../models/userModel');
const userRepository = require('../repository/userRepository');

// Retrieve, search, filter amd paginate user items
    async function getAllUserItems (query){
        const items = await userRepository.getUserItems();

        const page = query.page === undefined ? 1 : Number(query.page);
        const limit = query.limit === undefined ? 10 : Number(query.limit);

        if (query.category !== undefined) {
            if (typeof query.category !== 'string') { 
                return { error: 'Category must be a single text value' };
            }
            const category = query.category.trim().toLowerCase();
            items = items.filter(item => item.category.toLowerCase() === category);
        }
        return items;
    }