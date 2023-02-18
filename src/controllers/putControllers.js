import { validateContent, validateContentUser } from "../helpers/validateContent";
import { validateData, validateDataUser } from "../helpers/validateData";
import ProductsDB from "../models/productSchema"
import UserDB from "../models/userSchema"


//------------------------PRODUCT

export const putProduct = async (req,res)=>{
    const params = req.params;
    const {id} = params
    const body = req.body

    //VALIDAMOS 

      //validar cantidad de campos

      if(!validateContent("POST_PRODUCT",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }

    //validar valores

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

//------------------------USER

export const putUser = async (req,res)=>{
    const params = req.params;
    const {id} = params
    const body = req.body

    //VALIDAMOS 

      //validar cantidad de campos

      if(!validateContentUser("POST_USER",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }

    //validar valores

    if(!validateDataUser(body)){
        res.status(400).json({
            message:"campos invalidos 2"
        })
        return
    }

    try{
    const updated = await UserDB.findOneAndUpdate({id},body,{new:true,})

    res.json({
        message:"Usuario actualizado",
        updatedProduct: updated
    })

    } catch (err){
        res.status(500).json({
            message:"ERROR " + err
        })
    }
}