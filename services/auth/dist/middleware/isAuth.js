import jwt from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Authorization header missing or invalid" });
            return;
        }
        const token = authHeader.split(" ")[1]; // Remove "Bearer " prefix
        if (!token) {
            res.status(401).json({ message: "Token missing" });
            return;
        }
        const decoded = jwt.verify(token, process.env.JWT_SEC);
        if (!decoded || !decoded.user) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }
        req.user = decoded.user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "please authenticate using a valid token" });
    }
};
