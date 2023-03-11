import express from "express";
import { postLogin } from "../controllers/postControllers";


export const routerAuth = express.Router()

//POST
routerAuth.post("/login",postLogin)
