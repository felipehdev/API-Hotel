let id = 0;

class Funcionario {
    constructor(nome_funcionario, cargo, status_servico, horarios, salario){
        this.id_funcionario = id++;
        this.nome_funcionario = nome_funcionario;
        this.cargo = cargo;
        this.status_servico = status_servico;
        this.horario_entrada = horario_entrada;
        this.horario_saida = horario_saida;
        this.salario = salario;
    }
}

export {Funcionario}
