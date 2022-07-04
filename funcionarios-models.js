let id = 0;

class Funcionario {
    constructor(nome_funcionario, cargo, status_servico, horarios, salario){
        this.id_funcionario = id++;
        this.nome_funcionario = nome_funcionario;
        this.cargo = cargo;
        this.status_servico = status_servico;
        this.horarios = horarios;
        this.salario = salario;
    }
}

export {Funcionario}