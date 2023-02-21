import jwt from "jsonwebtoken"

const secretKey = process.env.JWT_KEY

export const isAuthenticated = (req,res, next)=>{
    const headers = req.headers;
    const autHeader = headers.authorization;
    
    if(!autHeader){
        res.status(403).json({
            message: "Token no valido o expirado"
        })
        return
    }

    const token = autHeader.split(" ")[1];

    try{
        const tokenInf = jwt.verify(token,secretKey)

        req.user=tokenInf

        next()
    } catch(err){
        res.status(403).json({
            message: "Token no valido o expirado"
        })
        return
    }

}