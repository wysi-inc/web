import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers["x-token"];
    jwt.verify(token, process.env.CLIENT_SECRET);

    const t = jwt.decode(token);
    if (req.ip !== t.ip) throw new Error("Invalid token");

    req.id = t.id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default verifyToken;
