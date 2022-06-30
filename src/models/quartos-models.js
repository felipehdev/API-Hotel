let id = 0;

class Quarto {
    constructor(numero_quarto, qnt_hospedes, ocupacao, classe, diaria, manutencao){
        this.id_quarto = id++;
        this.numero_quarto = numero_quarto;
        this.qnt_hospedes = qnt_hospedes;
        this.ocupacao = ocupacao;
        this.classe = classe;
        this.diaria = diaria;
        this.manutencao = manutencao;
    }
}

export {Quarto}