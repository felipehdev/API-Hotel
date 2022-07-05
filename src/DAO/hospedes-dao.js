class HospedesDAO {
    constructor(bd) {
        this.bd = bd;
    }

    inserirHospede(novoHospede){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO RESERVAS (ID_HOSPEDE, NOME, SOBRENOME, CPF, DATA_DE_NASCIMENTO, TELEFONE, EMAIL, ENDEREÇO) VALUES (?,?,?,?,?,?,?,?)`, 
            [novoHospede.id_hospede, novoHospede.nome, novoHospede.sobrenome, novoHospede.cpf, novoHospede.data_de_nascimento, novoHospede.telefone, novoHospede.email, novoHospede.endereco],
            (erro) => {
                if (erro) {
                    console.log('reject');
                    reject('Hospede não pôde ser cadastrado', erro)
                } else {
                    console.log('resolve');
                    resolve('Hospede cadastrado com sucesso')
                }
            })
        })
    }

    listarHospedes(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM HOSPEDES`, (erro, resultado) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Hospedes selecionados": resultado});
                }
            })
        })
    }

    listarHospede(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM HOSPEDES WHERE ID_HOSPEDES = ?`, [id], (erro, rows) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Hospede selecionado": rows})
                }
            })
        })
    }

    alterarHospede(novoHospede){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE HOSPEDES SET ID_HOSPEDE = ?, NOME = ?, SOBRENOME = ?, CPF = ?, DATA_DE_NASCIMENTO = ?, TELEFONE = ?, EMAIL = ?, ENDEREÇO = ? WHERE ID_HOSPEDE = ?`, novoHospede, (erro) => {
                if (erro) {
                    reject("Erro ao atualizar o cadastro", erro)
                } else {
                    resolve("Cadastro atualizado")
                }
            })
        })
    }
    deletarHospede(id){
        return new Promise ((resolve, reject) => {
            this.bd.run(`DELETE FROM HOSPEDES WHERE ID_HOSPEDE = ${id}`, (erro) => {
                if (erro) {
                    reject("Erro ao deletar o cadastro", erro)
                } else {
                    resolve("Cadastro deletado com sucesso")
                }
            })
        })
    }
}

export {HospedesDAO}