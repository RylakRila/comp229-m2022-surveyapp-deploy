import { dbSecret } from "../Config/db.js";
import jwt from 'jsonwebtoken';

export function GenerateToken(user) {
    const payload = {
        id: user._id,
        DisplayName: user.DisplayName,
        username: user.username,
        EmailAddress: user.EmailAddress,
    };
    
    const jwtOptions = {
        expiresIn: 604800 // 1 week
    };
    
    return jwt.sign(payload, dbSecret, jwtOptions);
}