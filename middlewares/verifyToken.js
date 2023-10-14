import jwt from "jsonwebtoken";

const verifyToken = (req) => {
    const token = req.headers['x-token'];

    let result = true;
    try {
        jwt.verify(token, process.env.CLIENT_SECRET);
    } catch (error) {
        result = false;
    }

    return result;
}

export default verifyToken;