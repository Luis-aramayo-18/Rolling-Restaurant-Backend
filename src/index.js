import  express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"
import { router } from "./routes/routes";
import "./database/database"

dotenv.config()

//inicializamos express

const app = express();

//Configuramos servidor

app.set("PORT", process.env.PORT || 5000);

//Middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Rutas

app.use(router);

//Loop del servidor

app.listen(app.get("PORT"),()=>{
    console.log(`servidor ejectuandose en ${app.get("PORT")}`)
})