const { login, register } = require("./auth.service");

const registerController = async (req, res) => {
    try {
        console.log("Register in controller called");
        const {user,token} = await register(req);
        res.status(201).json({
            success: true,
            data: { user, token },
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

const loginController = async (req, res) => {
    try {
        const {user,token} = await login(req);
        res.status(200).json({
            success: true,
            data: { user, token },
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};


module.exports = {
    registerController,
    loginController
};