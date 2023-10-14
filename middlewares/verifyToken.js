import jwt from "jsonwebtoken";

const verifyToken = (req) => {
    let id = null;
    try {
        const token = req.headers['x-token'];
        jwt.verify(token, process.env.CLIENT_SECRET);
        const t = jwt.decode(token);
        if (req.ip !== t.ip) id = null;
        else id = t.id;
    } catch (error) {
        id = null;
    }
    return id;
}

export default verifyToken;