import express from "express";
import { deleteOrder } from "../controllers/deleteControllers";
import { getOrder, getOrders } from "../controllers/getControllers";
import { postOrder } from "../controllers/postControllers";
import { putOrder } from "../controllers/putControllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const routerOrder = express.Router();

//-----------------------GET
routerOrder.get("/orders",getOrders)
routerOrder.get("/order/:id",getOrder)

//----------------------------POST
routerOrder.post("/order",postOrder)

//-----------------------------------------DELETE
routerOrder.delete("/order/:id",deleteOrder)

//-------------------------------PUT
routerOrder.put("/order/:id",putOrder)



