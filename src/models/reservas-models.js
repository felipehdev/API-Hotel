let id = 0;

class Reserva {
    constructor(idQuarto, idHospede, checkin, checkout, statusPagamento){
        this.idReserva = id++;
        this.idQuarto = idQuarto;
        this.idHospede = idHospede;
        this.checkin = checkin;
        this.checkout = checkout;
        this.statusPagamento = statusPagamento;
    }
}

export {Reserva}