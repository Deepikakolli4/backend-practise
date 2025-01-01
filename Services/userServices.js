const User = require('../Schema/schema');
const bcrypt = require('bcrypt');
const createUser = async (email, password) => {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw Error('already exists');
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, encryptedPassword });
        newUser.save();
        return newUser;
    } catch (error) {
        console.log(error);
    }
};
module.exports = { createUser };