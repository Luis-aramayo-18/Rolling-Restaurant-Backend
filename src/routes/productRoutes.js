import express from "express";
import { getProduct, getProducts } from "../controllers/getControllers";
import { postProduct } from "../controllers/postControllers";
import { deleteProduct } from "../controllers/deleteControllers";
import { putProduct } from "../controllers/putControllers";


export const routerProducts = express.Router();

//RUTAS GET
routerProducts.get("/products",getProducts)
routerProducts.get("/product/:id",getProduct)

//RUTAS POST
routerProducts.post("/product",postProduct);

//RUTAS DELETE
routerProducts.delete("/product/:id",deleteProduct);

//RUTAS PUT/PAT
routerProducts.put("/product/:id",putProduct);
