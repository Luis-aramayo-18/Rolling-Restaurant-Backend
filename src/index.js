import  express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"
import { routerProducts } from "./routes/productRoutes";
import { routerUsers } from "./routes/usersRoutes";
import { routerAuth } from "./routes/authRoutes";
// import { routerOrder } from "./routes/orderRoutes";

import "./database/database"

dotenv.config()  //permite utilizar las variables del .env

//inicializamos express

const app = express();

//Configuramos servidor

app.set("PORT", process.env.PORT || 5000); //para que nuestro servidor se corra en la variable .env o p5000

//Middlewares

app.use(morgan("dev")); 
app.use(cors());
app.use(express.json());

//Rutas

app.use(routerProducts);
app.use(routerUsers);
app.use(routerAuth)


//Loop del servidor

app.listen(app.get("PORT"),()=>{
    console.log(`servidor ejectuandose en ${app.get("PORT")}`)
})