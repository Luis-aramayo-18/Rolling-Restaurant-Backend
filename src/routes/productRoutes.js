import express from "express";
import { getProduct, getProductCategory, getProductId, getProductName, getProducts } from "../controllers/getControllers";
import { postProduct } from "../controllers/postControllers";
import { deleteProduct } from "../controllers/deleteControllers";
import { putProduct } from "../controllers/putControllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";


export const routerProducts = express.Router();

//RUTAS GET
routerProducts.get("/products",isAuthenticated,getProducts)
routerProducts.get("/product/:id",isAuthenticated,getProduct)
routerProducts.get("/product/:categoria",isAuthenticated,getProductCategory)
routerProducts.get("/product/:name",isAuthenticated,getProductName)

//RUTAS POST
routerProducts.post("/product",isAuthenticated,postProduct);

//RUTAS DELETE
routerProducts.delete("/product/:id",isAuthenticated,deleteProduct);

//RUTAS PUT/PAT
routerProducts.put("/product/:id",isAuthenticated,putProduct);
