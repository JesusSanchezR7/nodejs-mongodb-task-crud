import app from "./App";
import "./database";
import { PORT } from "./config"


app.listen(PORT);
console.log("Server on port", PORT);
