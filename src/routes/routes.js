import express from "express";
import { getProduct, getProducts } from "../controllers/getControllers";
import { postProduct } from "../controllers/postControllers";


export const router = express.Router();

//RUTAS GET
router.get("/products",getProducts)
router.get("/product/:id",getProduct)

//RUTAS POST
router.post("/product",postProduct);