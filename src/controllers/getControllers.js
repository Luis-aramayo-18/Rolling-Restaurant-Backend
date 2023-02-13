import ProductsDB from "../models/productSchema"

export const getProducts = async (req,res)=>{
    const data = await ProductsDB.find()

    res.json({
        data:data,
    })
}