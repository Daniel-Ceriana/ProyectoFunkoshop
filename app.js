const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes")

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.json()) activar cuando llegue a formularios

app.use('/', mainRoutes);

app.use(express.static('./public'));

const middlewareNotFound = require('./src/middlewares/notFound');
app.use(middlewareNotFound);


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));