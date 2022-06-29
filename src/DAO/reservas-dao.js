class ReservaDAO {
    constructor(bd) {
        this.bd = bd;
    }

    inserirReserva(novaReserva){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO USUARIOS (ID_QUARTO, ID_HOSPEDE, CHECKIN, CHECKOUT, STATUS_PAGAMENTO) VALUES (?,?,?,?,?)`, 
            [novaReserva.id_quarto, novaReserva.id_hospede, novaReserva.checkin, novaReserva.checkout, novaReserva.status_pagamento],
            (error) => {
                if (error) {
                    console.log('reject');
                    reject('Reserva não pode ser inserido')
                } else {
                    console.log('resolve');
                    resolve('Reserva inserida com sucesso')
                }
            })
        })
    }

    listarReservas(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM RESERVAS`, (error, resultado) => {
                if (error) {
                    reject("Erro ao selecionar o banco")
                } else {
                    resolve({"Reservas selecionadas": resultado});
                }
            })
        })
    }

    listarReserva(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM RESERVAS WHERE ID_RESERVA = ?`, [id], (error, rows) => {
                if (error) {
                    reject("Erro ao selecionar o banco")
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
                    reject("Erro ao atualizar a reserva")
                } else {
                    resolve("Reserva atualizada")
                }
            })
        })
    }
}

export {ReservaDAO}