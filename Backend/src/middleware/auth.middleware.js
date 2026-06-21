import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {

  try {

   const token = req.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Request",
      });
    }

    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    req.admin = decodedToken;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });

  }

};

export { verifyJWT };