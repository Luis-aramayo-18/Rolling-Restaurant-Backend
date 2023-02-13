import { randomID } from "../helpers/randomID"
import { validateContent } from "../helpers/validateContent"
import ProductDB from "../models/productSchema"

export const postProduct = async (req,res)=>{
    const body =  req.body

    if(!validateContent("POST_PRODUCT",body)){

        res.status(400).json({
            message:"campos invalidos"
        })
        return
    }

    const newProduct = new ProductDB({
        id:randomID(),
        image: body.image,
        name: body.name,
        description: body.description,
        price: body.price,
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