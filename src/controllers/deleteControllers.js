import ProductsDB from "../models/productSchema"

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