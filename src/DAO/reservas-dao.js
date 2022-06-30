class ReservaDAO {
    constructor(bd) {
        this.bd = bd;
    }

    inserirReserva(novaReserva){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO RESERVAS (ID_QUARTO, ID_HOSPEDE, CHECKIN, CHECKOUT, STATUS_PAGAMENTO) VALUES (?,?,?,?,?)`, 
            [novaReserva.id_quarto, novaReserva.id_hospede, novaReserva.checkin, novaReserva.checkout, novaReserva.status_pagamento],
            (erro) => {
                if (erro) {
                    console.log('reject');
                    reject('Reserva não pode ser inserido', erro)
                } else {
                    console.log('resolve');
                    resolve('Reserva inserida com sucesso')
                }
            })
        })
    }

    listarReservas(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM RESERVAS`, (erro, resultado) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Reservas selecionadas": resultado});
                }
            })
        })
    }

    listarReserva(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM RESERVAS WHERE ID_RESERVA = ?`, [id], (erro, rows) => {
                if (erro) {
                    reject("Erro ao selecionar o banco", erro)
                } else {
                    resolve({"Reserva selecionada": rows})
                }
            })
        })
    }

    alterarReserva(novaReserva){
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE RESERVAS SET ID_QUARTO = ?, ID_HOSPEDE = ?, CHECKIN = ?, CHECKOUT = ?, STATUS_PAGAMENTO = ? WHERE ID_RESERVA = ?`, novaReserva, (erro) => {
                if (erro) {
                    reject("Erro ao atualizar a reserva", erro)
                } else {
                    resolve("Reserva atualizada")
                }
            })
        })
    }
    deletarReserva(id){
        return new Promise ((resolve, reject) => {
            this.bd.run(`DELETE FROM RESERVAS WHERE ID_RESERVA = ${id}`, (erro) => {
                if (erro) {
                    reject("Erro ao deletar a reserva", erro)
                } else {
                    resolve("Reserva deletada com sucesso")
                }
            })
        })
    }
}

export {ReservaDAO}