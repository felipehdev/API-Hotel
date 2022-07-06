class FuncionarioDAO {
    constructor(bd) {
        this.bd = bd;
    }

    inserirFuncionario(novoFuncionario){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO FUNCIONARIOS (NOME_FUNCIONARIO, CARGO, STATUS_SERVICO, HORARIO_ENTRADA, HORARIO_SAIDA, SALARIO) VALUES (?,?,?,?,?)`, 
            [novoFuncionario.nome_funcionario, novoFuncionario.cargo, novoFuncionario.status_servico, novoFuncionario.horario_entrada, novoFuncionario.horario_saida,  novoFuncionario.salario],
            (erro) => {
                if (erro) {
                    console.log('reject');
                    reject('O novo funcionário não pode ser inserido', erro)
                } else {
                    console.log('resolve');
                    resolve('O novo funcionário foi inserido com sucesso')
                }
            })
        })
    }

    listarFuncionarios(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM FUNCIONARIOS`, (erro, resultado) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Funcionarios selecionados": resultado});
                }
            })
        })
    }

    listarFuncionario(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM FUNCIONARIOS WHERE ID_FUNCIONARIO = ?`, [id], (erro, rows) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Funcionário selecionado": rows})
                }
            })
        })
    }

    alterarFuncionário(novoFuncionario){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE FUNCIONARIOS SET  NOME_FUNCIONARIO = ?, CARGO = ?, STATUS_SERVICO = ?, HORARIO_ENTRADA = ?, HORARIO_SAIDA = ?, SALARIO = ? WHERE ID_FUNCIONARIO = ?`, novoFuncionario, (erro) => {
                if (erro) {
                    reject("Erro ao atualizar os dados do funcionário", erro)
                } else {
                    resolve("Dados do funcionário atualizados")
                }
            })
        })
    }
    deletarFuncionário(id){
        return new Promise ((resolve, reject) => {
            this.bd.run(`DELETE FROM FUNCIONARIOS WHERE ID_FUNCIONARIO = ${id}`, (erro) => {
                if (erro) {
                    reject("Erro ao deletar o funcionário", erro)
                } else {
                    resolve("Funcionário deletado com sucesso")
                }
            })
        })
    }
}

export {FuncionarioDAO}
