import express from "express";

import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors())

app.use(express.json());

import {reserva} from './controllers/reservas-controllers.js'
reserva(app);

import {quarto} from './controllers/quartos-controllers.js'
quarto(app);

import {hospedes} from './controllers/hospedes-controllers.js'
hospedes(app);

import {funcionario} from './controllers/funcionarios-controllers.js'
funcionario(app);


app.listen(port, () => {
  console.log(`SERVIDOR INICIADO UTILIZANDO A PORTA ${port}`);
});
