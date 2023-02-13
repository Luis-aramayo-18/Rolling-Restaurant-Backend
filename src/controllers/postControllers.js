import { randomID } from "../helpers/randomID"
import { validateContent } from "../helpers/validateContent"
import { validateData } from "../helpers/validateData"
import ProductDB from "../models/productSchema"

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