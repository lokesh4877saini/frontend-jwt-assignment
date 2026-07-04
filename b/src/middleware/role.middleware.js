const authorize = (allowedRoles) => {
    console.log("allowedRoles:", allowedRoles);
    return (req, res, next) => {
        console.log(req.user);
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Don't have permission",
            });
        }
        next();
    };
};

module.exports = authorize;