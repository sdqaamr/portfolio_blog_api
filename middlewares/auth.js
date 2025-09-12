import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
        data: null,
        error: ["Token not provided"],
      });
    }
    token = token.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Authentication failed",
          data: null,
          error: err.message,
        });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You don't have enough permissions",
        data: null,
        error: ["Access denied"],
      });
    }
    next();
  };
};

export { verifyToken, authorizeRoles };
