import { randomID } from "../helpers/randomID"
import { validateContent, validateContentOrder, validateContentUser } from "../helpers/validateContent"
import { validateData, validateDataUser } from "../helpers/validateData"
import ProductDB from "../models/productSchema"
import UserDB from "../models/userSchema"
import OrderDB from "../models/orderSchema"

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

//-----------------PRODUCTOS

export const postProduct = async (req,res)=>{
    const body =  req.body

    //validar contenido

    if(!validateContent("POST_PRODUCT",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }

    //validar campo x campo

    if(!validateData(body)){
        res.status(400).json({
            message:"campos invalidos 2"
        })
        return
    }

    //datos validos-guardar producto

    const newProduct = new ProductDB({
        id:randomID(),
        image: body.image,
        name: body.name,
        description: body.description,
        price: body.price,
        categoria:body.categoria
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

//-------------------- USUARIOS

export const postUser = async (req,res)=>{

    const body = req.body
    const password = body.password
    const cryptedPassword = bcrypt.hashSync(password,10)

    //validar contenido

    if(!validateContentUser("POST_USER",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }

    //validar campo x campo

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
        password:cryptedPassword
    });

    try {
            await newUser.save()
            res.json({
            message: "Usuario guardado exitosamente"
        })
    } catch (err) {
        res.status(500).json({
            message: "ERROR: " + err,
        })
    }
}

//--------------AUTH

export const postLogin = async(req,res)=>{

    const user = await UserDB.findOne({
        email:req.body.email
    })

    //username incorrecto
    if(!user || !bcrypt.compareSync(req.body.password, user.password)){
        res.status(401).json({
            message: "Usuario o contraseña no valido"
        })
        return
    }

    //contraseña incorrecta

    const userInf = {
        name:user.name,
        lastName:user.lastName,
        email:user.email
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

//-----------------------------ORDER

export const postOrder = async (req,res)=>{
    const body =  req.body

    //validar contenido

    if(!validateContentOrder("POST_ORDER",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }

    //validar campo x campo

    if(!validateData(body)){
        res.status(400).json({
            message:"campos invalidos 2"
        })
        return
    }

    //datos validos-guardar producto

    const newOrder = new OrderDB({
        id:randomID(),
        mesa: body.mesa,
        categoria: body.categoria,
        name: body.name,
        description: body.description,
        cantidad:body.cantidad,
        price:body.price,
        subtot:body.subtot,
        estado:body.estado,
        email:body.email,
        isActive:body.isActive
    })

    try {
        await newOrder.save()
        res.json({
        message: "Pedido tomado exitosamente"
    })

    } catch (err) {
        res.status(500).json({
            message: "ERROR " + err
        })
    }
    
}
