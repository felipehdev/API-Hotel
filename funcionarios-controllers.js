import {Funcionario} from '../models/funcionarios-models.js';
import {bd} from '../infra/sqlite-db.js';
import {FuncionarioDAO} from "../DAO/funcionarios-dao";

const funcionario = (app) => {
    //DAO
    const DadosDAO = new FuncionarioDAO(bd) 

    //Rota POST
    app.post('/funcionario', (req, res) => {
        const body = req.body;
        const novoFuncionario = new Funcionario(body.nome_funcionario, body.cargo, body.status_servico, body.horario_entrada, body.horario_saida, body.salario)
        DadosDAO.inserirFuncionarios(novoFuncionario)
        .then((result) => {
            res.send("Funcionário inserido com sucesso");
        }).catch((err) => { res.send(err)})
    })
    //Rota GET que puxa todas as reservas
    app.get('/funcionario', (req, res) => {
        DadosDAO.listarFuncionarios()
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota GET que puxa por id
    app.get('/funcionario/:id', (req, res) => {
        const id = req.params.id;
        DadosDAO.listarFuncionario(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {res.send(err)})
    })
    //Rota PUT
    app.put('/funcionario/:id', (req, res) => {
        const body = req.body
        const id = req.params.id;
        const funcionarioAlt = DadosDAO.listarFuncionario(id);
        const dadosNovos = new Funcionario(
            body.nome_funcionario || funcionarioAlt.nome_funcionario, 
            body.cargo || funcionarioAlt.cargo, 
            body.status_servico || reservaAlt.status_servico, 
            body.horario_entrada || reservaAlt.horario_entrada, 
            body.horario_saida || reservaAlt.horario_saida,
            body.salario || reservaAlt.salario
        )
        const param = [dadosNovos.nome_funcionario, dadosNovos.cargo, dadosNovos.status_servico, dadosNovos.horario_entrada, dadosNovos.horario_saida, dadosNovos.salario, parseInt(id)];
        DadosDAO.alterarFuncionario(param)
        .then((result) => {
            res.send(result)
        }).catch((err) => {res.send(err);})
    })
    //Rota DELETE
    app.delete('/funcionario/:id', (req, res) => {
        DadosDAO.deletarFuncionario(req.params.id)
        .then((result) => {
            res.send("Funcionário deletado com sucesso")
        }).catch((err) => {res.send(err)});
    })
}

export {funcionario}

// Modelo base para o INSOMNIA{
// 	"nome_funcionario": ,
// 	"cargo": ,
// 	"status_serviço": "",
// 	"horario_entrada": "",
// 	"horario_saida": "",
// 	"salario": ""
// }