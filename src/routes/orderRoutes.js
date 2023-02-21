import express from "express";
import { deleteOrder } from "../controllers/deleteControllers";
import { getOrder, getOrders } from "../controllers/getControllers";
import { postOrder } from "../controllers/postControllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const routerOrder = express.Router();

//-----------------------GET
routerOrder.get("/orders",isAuthenticated,getOrders)
routerOrder.get("/orders/:id",isAuthenticated,getOrder)

//----------------------------POST
routerOrder.post("/order",isAuthenticated,postOrder)

//-----------------------------------------DELETE
routerOrder.delete("/order/:id",isAuthenticated,deleteOrder)

//-------------------------------PUT



