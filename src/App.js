import express from "express";
import { create } from "express-handlebars";

import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const App = express();

App.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(App.get("views"), "layouts"),
  partialsDir: path.join(App.get("views"), "partials"),

  defaultLayout: "main",
});

App.engine(".hbs", exphbs.engine);
App.set("view engine", ".hbs");

// middlewares
App.use(morgan("dev"));
App.use(express.urlencoded({ extended: false}));

//routers
App.use(indexRoutes);

//estatcs
App.use(express.static(path.join(__dirname,"public")));

export default App;
