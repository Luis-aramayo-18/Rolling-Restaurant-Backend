import express from "express";
import { getProducts } from "../controllers/getControllers";
import { postProduct } from "../controllers/postControllers";


export const router = express.Router();

//RUTAS GET
router.get("/products",getProducts)

//RUTAS POST
router.post("/product",postProduct);