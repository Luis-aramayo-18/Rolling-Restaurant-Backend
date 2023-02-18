import ProductsDB from "../models/productSchema"
import UserDB from "../models/userSchema"

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

//----------USERS

export const getUsers = async (req,res)=>{
    const data = await UserDB.find()

    res.json({
        data:data
    })
}