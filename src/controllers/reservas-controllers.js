import Reserva from "../models/reservas-models.js";
import bdSQLite from './infra/sqlite-db.js';
import ReservaDAO from "../DAO/reservas-dao.js";

const reserva = (app) => {
    //DAO
    const DadosDAO = new ReservaDAO(bdSQLite) 

    //Rota POST
    app.post('/reserva', (req, res) => {
        const body = req.body;
        const novaReserva = new Reserva(body.idQuarto, body.idHospede, body.checkin, body.checkout, body.statusPagamento)
        DadosDAO.inserirReserva(novaReserva)
        .then((result) => {
            res.send("Inserido a reserva com sucesso");
        }).catch((err) => {
            res.send(err);
        })
    })
    //Rota GET que puxa todas as reservas
    app.get('/reserva', (req, res) => {
        DadosDAO.listarReservas()
        .then((result) => {
            res.json(result)
        }).catch((err) =>{res.send(err)})
    })
    //Rota GET que puxa por id
    app.get('/reserva/:id', (req, res) => {
        const id = req.params.id;
        DadosDAO.listarReserva(id)
        .then((result) => {
            res.json(result)
        }).catch((err) =>{res.send(err)})
    })
}

export {reserva}
