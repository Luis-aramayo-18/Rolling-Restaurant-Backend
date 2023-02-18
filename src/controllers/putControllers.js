import { validateContent } from "../helpers/validateContent";
import { validateData } from "../helpers/validateData";
import ProductsDB from "../models/productSchema"

export const putProduct = async (req,res)=>{
    const params = req.params;
    const {id} = params
    const body = req.body

    //VALIDAMOS 

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

    try{
    const updated = await ProductsDB.findOneAndUpdate({id},body,{new:true,})

    res.json({
        message:"Producto actualizado",
        updatedProduct: updated
    })

    } catch (err){
        res.status(500).json({
            message:"ERROR " + err
        })
    }
}