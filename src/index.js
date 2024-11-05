import express from "express";
import usuariosRoutes from "./routes/usuarios.route.js";
import indexRoutes from "./routes/index.router.js";
import htmlRouter from "./routes/html.router.js";
import polizasRouter from "./routes/polizas.router.js";

import { PORT } from "./config.js";
import path from "path";

const app = express();

app.use(express.json());

app.use("/api",usuariosRoutes)
app.use(indexRoutes)
app.use(polizasRouter)



// Serve static files from the 'public' directory
app.use(express.static(path.join(process.cwd(),'src','public')));

// Usa el enrutador HTML
app.use('/', htmlRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint Not found"
    })
})

app.listen(PORT);    
console.log("Server is running on port", PORT);