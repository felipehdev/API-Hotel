import Reserva from "../models/reservas-models.js";
//importar o banco de sqlite-db.js
import ReservaDAO from "../DAO/reservas-dao.js";

const reserva = (app) => {
    //DAO
    const DadosDAO = new ReservaDAO(BANCO) 
    //Rota post
    app.post('/reserva', (req, res) => {
        const body = req.body;
        const novaReserva = new Reserva(body.idQuarto, body.idHospede, body.checkin, body.checkout, body.statusPagamento)
        ReservaDAO.inserirReserva(novaReserva)
        .then((result) => {
            res.send("Inserido a reserva com sucesso");
        }).catch((err) => {
            res.send(err);
        })
    })
}

export {reserva}
