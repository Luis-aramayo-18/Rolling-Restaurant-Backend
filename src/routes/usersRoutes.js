import express from "express";
import { deleteUser } from "../controllers/deleteControllers";
import { getUser, getUsers } from "../controllers/getControllers";
import {  postUser } from "../controllers/postControllers";
import { putUser } from "../controllers/putControllers";

export const routerUsers = express.Router();

//POST
routerUsers.post("/user",postUser)
//GET
routerUsers.get("/users",getUsers)
routerUsers.get("/user/:id",getUser)

//DELETE
routerUsers.delete("/user/:id",deleteUser)

//PUT
routerUsers.put("/user:id",putUser )