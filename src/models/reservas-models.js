let id = 0;

class Reserva {
    constructor(id_quarto, id_hospede, checkin, checkout, status_pagamento){
        this.id_reserva = id++;
        this.id_quarto = id_quarto;
        this.id_hospede = id_hospede;
        this.checkin = checkin;
        this.checkout = checkout;
        this.status_pagamento = status_pagamento;
    }
}

export {Reserva}