import  express from "express"
import morgan from "morgan";
import cors from "cors"

//inicializamos express

const app = express();

//Configuramos servidor

app.set("PORT", process.env.PORT || 5000);

//Middlewares

app.use(morgan("dev"))
app.use(cors())

//Rutas



//Loop del servidor

app.listen(app.get("PORT"),()=>{
    console.log(`servidor ejectuandose en ${app.get("PORT")}`)
})