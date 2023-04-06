import  express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"
import { routerProducts } from "./routes/productRoutes";
import { routerUsers } from "./routes/usersRoutes";
import { routerAuth } from "./routes/authRoutes";


import "./database/database"

dotenv.config()  

const app = express();


app.set("PORT", process.env.PORT || 5000);


app.use(morgan("dev")); 
app.use(cors());
app.use(express.json());


app.use(routerProducts);
app.use(routerUsers);
app.use(routerAuth)


app.listen(app.get("PORT"),()=>{
    console.log(`servidor ejectuandose en ${app.get("PORT")}`)
})