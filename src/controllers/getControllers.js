import ProductsDB from "../models/productSchema"
import UserDB from "../models/userSchema"
import OrderDB from "../models/orderSchema"

//-------------------PRODUCT

export const getProducts = async (req,res)=>{
    const data = await ProductsDB.find()

    res.json({
        data:data,
    })
}

export const getProduct = async (req,res)=>{
    const params = req.params
    const {id} = params
    const data = await ProductsDB.findOne({
        id
    })  
    res.json({
        data:data,
    })
}

export const getProductCategory = async (req,res)=>{
    const params = req.params
    const {categoria} = params
    const data = await ProductsDB.findOne({
        categoria
    })  
    res.json({
        data:data,
    })
}

export const getProductName = async (req,res)=>{
    const params = req.params
    const {name} = params
    const data = await ProductsDB.findOne({
        name
    })  
    res.json({
        data:data,
    })
}

//-----------------USERS

export const getUsers = async (req,res)=>{
    const data = await UserDB.find()

    res.json({
        data:data
    })
}

export const getUser = async (req,res)=>{
    const params = req.params
    const {id} = params
    const data = await UserDB.findOne({
        id
    })  
    res.json({
        data:data,
    })
}

//---------------------------------------------ORDER

export const getOrders = async (req,res)=>{
    const data = await OrderDB.find()

    res.json({
        data:data,
    })
}

export const getOrder = async (req,res)=>{
    const params = req.params
    const {id} = params
    const data = await OrderDB.findOne({
        id
    })  
    res.json({
        data:data,
    })
}