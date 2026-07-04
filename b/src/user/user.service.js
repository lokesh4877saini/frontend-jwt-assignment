const User = require("./user.model");

const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    deleteUser,
};