import express from "express";
const app = express();

app.use(express.json());

import {reserva} from './controllers/reservas-controllers.js'
reserva(app);

import quarto from './controllers/quartos-controllers'
quarto(app, bdSQLite);

app.listen(3003, () => {
  console.log("codando na porta 3003");
});
