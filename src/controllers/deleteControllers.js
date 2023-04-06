import ProductsDB from "../models/productSchema"
import UserDB from "../models/userSchema"


   export const deleteProduct = async (req,res)=>{
    const params = req.params;
    const {id} = params

    try{
    const deleted = await ProductsDB.findOneAndDelete({id})

    res.json({
        message:"Producto eliminado",
        deletedProduct: deleted
    })

    } catch (err){
        res.status(500).json({
            message:"ERROR " + err
        })
    }
}


export const deleteUser = async (req,res)=>{
    const params = req.params;
    const {id} = params

    try{
    const deleted = await UserDB.findOneAndDelete({id})

    res.json({
        message:"Usuario eliminado",
        deletedProduct: deleted
    })

    } catch (err){
        res.status(500).json({
            message:"ERROR " + err
        })
    }
}
