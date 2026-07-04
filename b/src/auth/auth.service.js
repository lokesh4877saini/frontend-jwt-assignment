const { generateToken } = require("../service/jwt");
const userModel = require("../user/user.model");
const bcrypt = require("bcrypt");
const register = async (req) => {
    console.log("I am inside service file");

    const { fullname, email, password, confirmPassword, role } = req.body;

    const isEmailExist = await userModel.findOne({ email });

    if (isEmailExist) {
        throw new Error("Email already exists");
    }

    if (password !== confirmPassword) {
        throw new Error("Password does not match");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullname,
        email,
        password: hashedPassword,
        role,
    });
    const token = generateToken({
        id: user._id,
        role: user.role,
    });
    console.log(user,token);
    return { user, token };
};

const login = async (req) => {
    const { email, password } = req.body;
    console.log("EMail and password",email,password);
    const user = await userModel.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
   console.log("isMatch",isMatch);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = generateToken({
        id: user._id,
        role: user.role,
    });

    return {
        user,
        token,
    };
};

module.exports = {
    register,
    login,
};