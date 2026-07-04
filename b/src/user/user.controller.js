const {
    getAllUsers,
    getUserById,
    deleteUser,
} = require("./user.service");

const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers();

        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    getAllUsersController,
    getUserByIdController,
    deleteUserController,
};