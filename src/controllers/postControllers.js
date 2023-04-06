import { randomID } from "../helpers/randomID"
import { validateContent, validateContentUser } from "../helpers/validateContent"
import { validateData, validateDataUser } from "../helpers/validateData"
import ProductDB from "../models/productSchema"
import UserDB from "../models/userSchema"

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export const postProduct = async (req,res)=>{
    const body =  req.body


    if(!validateContent("POST_PRODUCT",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }


    if(!validateData(body)){
        res.status(400).json({
            message:"campos invalidos 2"
        })
        return
    }


    const newProduct = new ProductDB({
        id:randomID(),
        image: body.image,
        name: body.name,
        description: body.description,
        price: body.price,
        categoria:body.categoria,
        isActive:true
    })

    try {
        await newProduct.save()
        res.json({
        message: "Producto creado exitosamente"
    })

    } catch (err) {
        res.status(500).json({
            message: "ERROR " + err
        })
    }
    
}


export const postUser = async (req,res)=>{

    const secretKey = process.env.JWT_KEY
    const body = req.body
    const password = body.password
    const cryptedPassword = bcrypt.hashSync(password,10)


    if(!validateContentUser("POST_USER",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }


    if(!validateDataUser(body)){
        res.status(400).json({
            message:"campos invalidos 2"
        })
        return
    }


    const newUser = new UserDB({
        id:randomID(),
        name:body.name,
        lastName:body.lastName,
        email:body.email,
        password:cryptedPassword,
        isAdmin:false
    });

    try {
            await newUser.save()

            const token = jwt.sign({
                name:req.body.name,
                lastName:req.body.lastName
            },secretKey,{
                expiresIn:"1h"
            })

            res.json({
            message: "Usuario guardado exitosamente",
            token
        })
    } catch (err) {
        res.status(500).json({
            message: "ERROR: " + err,
        })
    }
}


export const postLogin = async(req,res)=>{


    const user = await UserDB.findOne({
        email:req.body.email
    })

    if(!user || !bcrypt.compareSync(req.body.password, user.password)){
        res.status(401).json({
            message: "Usuario o contraseña no valido"
        })
        return
    }


    const userInf = {
        name:user.name,
        lastName:user.lastName,
        email:user.email,
        isAdmin:user.isAdmin
    }

    const secretKey = process.env.JWT_KEY

    const token = jwt.sign(userInf,secretKey,{
        expiresIn:"1h"
    })

    res.json({
        message:"Bienvenido",
        token
    })
}
