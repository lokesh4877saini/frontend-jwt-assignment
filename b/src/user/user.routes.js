const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const {
    getAllUsersController,
    getUserByIdController,
    deleteUserController,
} = require("./user.controller"); 

router.get(
    "/users",
    protect,
    authorize(["Admin"]),
    getAllUsersController
);
router.get(
    "/user/:id",
    protect,
    authorize(["Admin", "User"]),
    getUserByIdController
);
router.delete(
    "/users/:id",
    protect,
    authorize(["Admin"]),
    deleteUserController
);

module.exports = router;