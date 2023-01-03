const jwt = require("jsonwebtoken");
const User = require("../models/userModles");
const asyncHandler = require("express-async-handler");

//WE are putting this protect function before the get api. , so that the unautherized person is not able to accesss.
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decode the token id;

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // this will put the userid of the user to the req.user and not keeping the password.
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized , token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
