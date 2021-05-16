const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const createToken = async (data) => {
  return jwt.sign(data, "secret");
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization missing",
      });
    }

    const decoded = jwt.verify(token, "secret");

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid Authorization",
      });
    }

    const user = User.findById(decoded);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Authorization",
      });
    }

    req.user = user;
    return next();
  } catch (e) {
    return res
      .status(401)
      .json({ success: false, message: "could not authorize" });
  }
};

module.exports = {
  createToken,
  verifyToken,
};
