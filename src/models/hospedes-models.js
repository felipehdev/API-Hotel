let id = 0;

class Hospedes {
    constructor(nome, sobrenome, cpf, data_de_nascimento, telefone, email, endereco){
        this.id_hospede = id++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.data_de_nascimento = data_de_nascimento;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
}

export {Hospedes}