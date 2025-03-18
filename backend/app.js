//Importo todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import ClientsRoutes from "./src/routes/clients.js";
import BranchesRoutes from "./src/routes/branches.js";
import EmployeesRoutes from "./src/routes/employees.js"
import ReviewRoutes from "./src/routes/review.js";


//Cree una constante que es igual a la libreria
//que acabo de de importar, y la ejecuto
const app = express();

//middleware para que acepte datos json
app.use(express.json());

app.use("/api/products", productsRoutes);
//exporto esta constante para usar express en todos lados 

app.use("/api/clients", ClientsRoutes);

app.use("api/branches", BranchesRoutes);

app.use("/api/review", ReviewRoutes);

app.use("api/employees", EmployeesRoutes);
export default app;



