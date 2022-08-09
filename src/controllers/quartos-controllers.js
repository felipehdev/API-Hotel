import { Quarto } from "../models/quartos-models.js";
import { bd } from "../infra/sqlite-db.js";
import { QuartoDAO } from "../DAO/quartos-dao.js";

const quarto = (app) => {
  //DAO
  const DadosDAO = new QuartoDAO(bd);

  //Rota POST
  app.post("/quarto", (req, res) => {
    const body = req.body;
    const novoQuarto = new Quarto(
      body.numero_quarto,
      body.qnt_hospedes,
      body.ocupacao,
      body.classe,
      body.diaria,
      body.manutencao
    );
    DadosDAO.inserirQuarto(novoQuarto)
      .then((result) => {
        res.send("Inserido quarto com sucesso");
      })
      .catch((err) => {
        res.send(err);
      });
  });
  //Rota GET que puxa todos os quartos
  app.get("/quarto", (req, res) => {
    DadosDAO.listarQuartos()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  //Rota GET que puxa por id
  app.get("/quarto/:id", (req, res) => {
    const id = req.params.id;
    DadosDAO.listarQuarto(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  //rota GET que puxa por quantidade de hospedes
  app.get("/hosp/:quantidade", (req, res) => {
    const quantidade = req.params.QNT_HOSPEDES;
    DadosDAO.listarHospedesPorQuarto(quantidade)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  //Rota GET que puxa apenas quartos desocupados
  app.get("/quarto/ocupacao/:sn", (req, res) => {
    const sn = req.params.ocupacao;
    DadosDAO.listarQuartoOcup(sn)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  //Rota GET que retorna ocupaçao

  //Rota GET que retorna os quartos totalmente disponiveis (desocupados e livre de manutençao)

  //Rota GET que retorna os quartos em manutençao

  //Rota GET que retorna os quartos que nao estao em manutenção

  //Rota PUT
  app.put("/quarto/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const quartoAlt = DadosDAO.listarQuarto(id);
    const dadosNovos = new Quarto(
      body.numero_quarto || quartoAlt.numero_quarto,
      body.qnt_hospedes || quartoAlt.qnt_hospedes,
      body.ocupacao || quartoAlt.ocupacao,
      body.classe || quartoAlt.classe,
      body.diaria || quartoAlt.diaria,
      body.manutencao || quartoAlt.manutencao
    );
    const param = [
      dadosNovos.numero_quarto,
      dadosNovos.qnt_hospedes,
      dadosNovos.ocupacao,
      dadosNovos.classe,
      dadosNovos.diaria,
      dadosNovos.manutencao,
      parseInt(id),
    ];
    DadosDAO.alterarQuarto(param)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  //Rota DELETE
  app.delete("/quarto/:id", (req, res) => {
    DadosDAO.deletarQuarto(req.params.id)
      .then((result) => {
        res.send("Quarto deletado com sucesso");
      })
      .catch((err) => {
        res.send(err);
      });
  });
};

export { quarto };

// Modelo base para o INSOMNIA{
// 	"id_quarto": ,
// 	"id_hospede": ,
// 	"checkin": "",
// 	"checkout": "",
// 	"status_pagamento": ""
// }
