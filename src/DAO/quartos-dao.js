class QuartoDAO {
    constructor(bd) {
        this.bd = bd;
    }

    // funçao PUT
    inserirQuarto(novoQuarto){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO QUARTOS (NUMERO_DO_QUARTO, QNT_HOSPEDES, OCUPAÇÃO, CLASSE, DIARIA, MANUTENÇÃO) VALUES (?,?,?,?,?,?)`, 
            [novoQuarto.numero_quarto, novoQuarto.qnt_hospedes, novoQuarto.ocupacao, novoQuarto.classe, novoQuarto.diaria, novoQuarto.manutencao],
            (erro) => {
                if (erro) {
                    console.log('reject');
                    reject('Quarto não pode ser inserido', erro)
                } else {
                    console.log('resolve');
                    resolve('Quarto inserido com sucesso')
                }
            })
        })
    }
    
    // funçao GET
    listarQuartos(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM QUARTOS`, (erro, resultado) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Quartos selecionadas": resultado});
                }
            })
        })
    }

    // funçao GET por id
    listarQuartos(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM QUARTOS WHERE ID_QUARTO = ?`, [id], (erro, rows) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Quarto selecionado": rows})
                }
            })
        })
    }

    // funçao GET que puxa quartos ocupados ou desocupados / TESTAR
    listarOcupacao(sn){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM QUARTOS WHERE OCUPACAO = ?`, [sn], (erro, rows) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                }else if ( sn == 'nao') {
                    resolve({"Quartos desocupados": rows})
                }
                else if (sn = 'sim') {
                    resolve({"Quartos ocupados": rows})
                }
            })
        })
    }



    
    //Rota GET que puxa apenas quartos ocupados

    //Rota GET que retorna os quartos totalmente disponiveis (desocupados e livre de manutençao)

    //Rota GET que retorna os quartos em manutençao

    //Rota GET que retorna os quartos que nao estao em manutenção

    // funçao UPDATE
    alterarQuarto(novoQuarto){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE QUARTO SET NUMERO_DO_QUARTO = ?, QNT_HOSPEDES = ?, OCUPAÇÃO = ?, CLASSE = ?, DIARIA = ?, MANUTENÇÃO = ?, WHERE ID_QUARTO = ?`, novoQuarto, (erro) => {
                if (erro) {
                    reject("Erro ao atualizar o quarto", erro)
                } else {
                    resolve("Quarto atualizado")
                }
            })
        })
    }

    // funçao DELETE
    deletarQuarto(id){
        return new Promise ((resolve, reject) => {
            this.bd.run(`DELETE FROM QUARTO WHERE ID_QUARTO = ${id}`, (erro) => {
                if (erro) {
                    reject("Erro ao deletar o quarto", erro)
                } else {
                    resolve("Quarto deletado com sucesso")
                }
            })
        })
    }
}

//bugou o commit kkkk

export {QuartoDAO}