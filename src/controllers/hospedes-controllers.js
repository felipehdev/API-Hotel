import {Hospedes} from '../models/hospedes-models';
import {bd} from '../infra/sqlite-db.js';
import {HospedesDAO} from "../DAO/hospedes-dao";

const hospedes = (app) => {
    //DAO
    const DadosDAO = new HospedesDAO(bd) 

    //Rota POST
    app.post('/hospedes', (req, res) => {
        const body = req.body;
        const novoHospede = new Hospede(body.id_hospede, body.nome, body.sobrenome, body.cpf, body.data_de_nascimento, body.telefone, body.email, body.endereco)
        DadosDAO.inserirHospede(novoHospede)
        .then((result) => {
            res.send("Hospede cadastrado com sucesso");
        }).catch((err) => { res.send(err)})
    })
    //Rota GET que puxa todas as reservas
    app.get('/hospedes', (req, res) => {
        DadosDAO.listarHospedes()
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota GET que puxa por id
    app.get('/hospedes/:id', (req, res) => {
        const id = req.params.id;
        DadosDAO.listarHospedes(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota PUT
    app.put('/hospedes/:id', (req, res) => {
        const body = req.body
        const id = req.params.id;
        const reservaAlt = DadosDAO.listarHospede(id);
        const dadosNovos = new Reserva(
            body.id_hospede || reservaAlt.id_hospede, 
            body.nome || reservaAlt.nome, 
            body.sobrenome || reservaAlt.sobrenome, 
            body.cpf || reservaAlt.cpf, 
            body.data_de_nascimento || reservaAlt.data_de_nascimento,
            body.telefone || reservaAlt.telefone,
            body.email || reservaAlt.email,
            body.endereco || reservaAlt.endereco
        )
        const param = [dadosNovos.id_hospede, dadosNovos.nome, dadosNovos.sobrenome, dadosNovos.cpf, dadosNovos.data_de_nascimento, dadosNovos.telefone, dadosNovos.email, dadosNovos.endereco, parseInt(id)];
        DadosDAO.alterarHospede(param)
        .then((result) => {
            res.send(result)
        }).catch((err) => {res.send(err);})
    })
    //Rota DELETE
    app.delete('/hospedes/:id', (req, res) => {
        DadosDAO.deletarHospede(req.params.id)
        .then((result) => {
            res.send("Hospede deletado com sucesso")
        }).catch((err) => {res.send(err)});
    })
}

export {hospedes}

// Modelo base para o INSOMNIA{
// 	"ID_HOSPEDE": ,
// 	"NOME": ,
// 	"SOBRENOME",
// 	"CPF",
// 	"DATA_DE_NASCIMENTO"
//  "TELEFONE"
//  "EMAIL"
//  "ENDEREÇO"
// }