import {Reserva} from '../models/reservas-models.js';
import {bd} from '../infra/sqlite-db.js';
import {ReservaDAO} from "../DAO/reservas-dao.js";

const reserva = (app) => {
    //DAO
    const DadosDAO = new ReservaDAO(bd) 

    //Rota POST
    app.post('/reserva', (req, res) => {
        const body = req.body;
        const novaReserva = new Reserva(body.id_quarto, body.id_hospede, body.checkin, body.checkout, body.status_pagamento)
        DadosDAO.inserirReserva(novaReserva)
        .then((result) => {
            res.send("Inserido a reserva com sucesso");
        }).catch((err) => { res.send(err)})
    })
    //Rota GET que puxa todas as reservas
    app.get('/reserva', (req, res) => {
        DadosDAO.listarReservas()
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota GET que puxa por id
    app.get('/reserva/:id', (req, res) => {
        const id = req.params.id;
        DadosDAO.listarReserva(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota PUT
    app.put('/reserva/:id', (req, res) => {
        const body = req.body
        const id = req.params.id;
        const reservaAlt = DadosDAO.listarReserva(id);
        const dadosNovos = new Reserva(
            body.id_quarto || reservaAlt.id_quarto, 
            body.id_hospede || reservaAlt.id_hospede, 
            body.checkin || reservaAlt.checkin, 
            body.checkout || reservaAlt.checkout, 
            body.status_pagamento || reservaAlt.status_pagamento
        )
        const param = [dadosNovos.id_quarto, dadosNovos.id_hospede, dadosNovos.checkin, dadosNovos.checkout, dadosNovos.status_pagamento, id];
        const reservaAtual = DadosDAO.alterarReserva(param)
        .then((result) => {
            res.send(reservaAtual)
        }).catch((err) => {res.send(err);})
    })
    //Rota DELETE
    app.delete('/reserva/:id', (req, res) => {
        DadosDAO.deletarReserva(req.params.id)
        .then((result) => {
            res.send("Reserva deletada com sucesso")
        }).catch((err) => {res.send(err)});
    })
}

export {reserva}
