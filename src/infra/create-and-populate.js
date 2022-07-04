/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/

import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/infra/database.db');

//==== HOSPEDES

//no campo cpf utilizar apenas numeros sem pontos e traço.
//no telefone nao utilizar caracteres especiais, apenas numeros no formato 00999999999 (dd+numero).
//padrao 


// const HOSPEDES_SCHEMA = `
// CREATE TABLE IF NOT EXISTS "HOSPEDES" (
//     "ID_HOSPEDE" INTEGER PRIMARY KEY AUTOINCREMENT,    
//     "NOME" varchar(64),
//     "SOBRENOME" varchar(64),
//     "CPF" varchar(64),
//     "DATA_DE_NASCIMENTO" varchar(64),
//     "TELEFONE" varchar(64), 
//     "EMAIL" varchar(64),
//     "ENDEREÇO" varchar(64)
//   );`;

// const ADD_HOSPEDES_DATA = `
// INSERT INTO HOSPEDES (ID_HOSPEDE, NOME, SOBRENOME, CPF, DATA_DE_NASCIMENTO, TELEFONE, EMAIL, ENDEREÇO)
// VALUES 
//     (1, 'Thomas', 'Cunha', '93223452944', '1984-01-11', '11943238790', 'thomfacilitator@resilia.com', 'Sao Paulo')
// `

// function criaTabelaHospedes() {
//     db.run(HOSPEDES_SCHEMA, (error)=> {
//        if (error) console.log("Erro ao criar tabela de hospedes", error);
//     });
// }


// function populaTabelaHospedes() {
//     db.run(ADD_HOSPEDES_DATA, (error)=> {
//        if (error) console.log("Erro ao popular tabela de hospedes", error);
//     });
// }


//==== QUARTOS
const QUARTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS QUARTOS (
    "ID_QUARTO" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "NUMERO_DO_QUARTO" INTEGER,
    "QNT_HOSPEDES" INTEGER,
    "OCUPAÇÃO" VARCHAR(32),
    "CLASSE" VARCHAR(32),
    "DIARIA" INTEGER,
    "MANUTENÇÃO" VARCHAR(32)
);`;



const ADD_QUARTOS_DATA = `INSERT INTO QUARTOS (ID_QUARTO, NUMERO_DO_QUARTO, QNT_HOSPEDES, OCUPAÇÃO, CLASSE, DIARIA, MANUTENÇÃO)
VALUES 
       (1, 101, 4, 'desocupado', 'standard', 679, 'nao'),
       (2, 102, 3, 'desocupado', 'standard', 439, 'nao'),
       (3, 103, 2, 'desocupado', 'standard', 329, 'nao'),
       (4, 104, 1, 'desocupado', 'standard', 169, 'nao'),
       (5, 105, 2, 'desocupado', 'standard', 329, 'nao'),
       (6, 106, 1, 'desocupado', 'standard', 169, 'nao'),

       (7, 201, 4, 'desocupado', 'standard', 679, 'nao'),
       (8, 202, 3, 'desocupado', 'standard', 439, 'nao'),
       (9, 203, 2, 'desocupado', 'standard', 329, 'nao'),
       (10, 204, 1, 'desocupado', 'standard', 169, 'nao'),
       (11, 205, 2, 'desocupado', 'standard', 329, 'nao'),
       (12, 206, 1, 'desocupado', 'standard', 169, 'nao'),

       (13, 301, 2, 'desocupado', 'standard', 329, 'nao'),
       (14, 302, 2, 'desocupado', 'standard', 329, 'nao'),
       (15, 303, 2, 'desocupado', 'standard', 329, 'nao'),
       (16, 304, 1, 'desocupado', 'standard', 169, 'nao'),
       (17, 305, 1, 'desocupado', 'standard', 169, 'nao'),
       (18, 306, 1, 'desocupado', 'standard', 169, 'nao'),
       (19, 307, 2, 'desocupado', 'standard', 329, 'nao'),
       (20, 308, 2, 'desocupado', 'standard', 329, 'nao'),

       (21, 401, 2, 'desocupado', 'standard', 329, 'nao'),
       (22, 402, 2, 'desocupado', 'standard', 329, 'nao'),
       (23, 403, 2, 'desocupado', 'standard', 329, 'nao'),
       (24, 404, 1, 'desocupado', 'standard', 169, 'nao'),
       (25, 405, 1, 'desocupado', 'standard', 169, 'nao'),
       (26, 406, 1, 'desocupado', 'standard', 169, 'nao'),
       (27, 407, 2, 'desocupado', 'standard', 329, 'nao'),
       (28, 408, 2, 'desocupado', 'standard', 329, 'nao'),

       (29, 501, 4, 'desocupado', 'standard', 679, 'nao'),
       (30, 502, 3, 'desocupado', 'standard', 439, 'nao'),
       (31, 503, 2, 'desocupado', 'standard', 329, 'nao'),
       (32, 504, 1, 'desocupado', 'standard', 169, 'nao'),
       (33, 505, 2, 'desocupado', 'standard', 329, 'nao'),
       (34, 506, 1, 'desocupado', 'standard', 169, 'nao'),

       (35, 601, 2, 'desocupado', 'standard', 329, 'nao'),
       (36, 602, 2, 'desocupado', 'standard', 329, 'nao'),
       (37, 603, 2, 'desocupado', 'standard', 329, 'nao'),
       (38, 604, 1, 'desocupado', 'standard', 169, 'nao'),
       (39, 605, 1, 'desocupado', 'standard', 169, 'nao'),
       (40, 606, 1, 'desocupado', 'standard', 169, 'nao'),
       (41, 607, 2, 'desocupado', 'standard', 329, 'nao'),
       (42, 608, 2, 'desocupado', 'standard', 329, 'nao'),

       (43, 701, 4, 'desocupado', 'master', 1199, 'nao'),
       (44, 702, 3, 'desocupado', 'master', 879, 'nao'),
       (45, 703, 2, 'desocupado', 'master', 449, 'nao'),
       (46, 704, 1, 'desocupado', 'master', 219, 'nao'),
       (47, 705, 2, 'desocupado', 'master', 449, 'nao'),
       (48, 706, 1, 'desocupado', 'master', 219, 'nao'),

       (49, 801, 4, 'desocupado', 'master', 1199, 'nao'),
       (50, 802, 3, 'desocupado', 'master', 879, 'nao'),
       (51, 803, 2, 'desocupado', 'master', 449, 'nao'),
       (52, 804, 1, 'desocupado', 'master', 219, 'nao'),
       (53, 805, 2, 'desocupado', 'master', 449, 'nao'),
       (54, 806, 1, 'desocupado', 'master', 219, 'nao'),

       (55, 901, 4, 'desocupado', 'deluxe', 2399, 'nao'), 
       (56, 902, 3, 'desocupado', 'deluxe', 1479, 'nao'), 
       (57, 903, 2, 'desocupado', 'deluxe', 519, 'nao'), 
       (58, 904, 1, 'desocupado', 'deluxe', 489, 'nao'),
       (59, 905, 2, 'desocupado', 'deluxe', 519, 'nao'),
       (60, 906, 1, 'desocupado', 'deluxe', 489, 'nao')    
`

function criaTabelaQuartos() {
    db.run(QUARTOS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de QUARTOS", error);
    });
}


function populaTabelaQuartos() {
    db.run(ADD_QUARTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de QUARTOS", error);
    });
}

//==== RESERVAS
// const RESERVAS_SCHEMA = `
// CREATE TABLE IF NOT EXISTS "RESERVAS" (
//     "ID_RESERVA" INTEGER PRIMARY KEY AUTOINCREMENT, 
//     "ID_QUARTO" INTEGER,    
//     "ID_HOSPEDE" INTEGER,    
//     "CHECKIN" VARCHAR(32),
//     "CHECKOUT" VARCHAR(32),
//     "STATUS_PAGAMENTO" VARCHAR(32),
//     FOREIGN KEY(ID_QUARTO) REFERENCES QUARTOS(ID_QUARTO),
//     FOREIGN KEY(ID_HOSPEDE) REFERENCES HOSPEDES(ID_HOSPEDE)
// );`;

// // FOREIGN KEY(ID_HOSPEDE) REFERENCES HOSPEDE(ID)

// const ADD_RESERVAS_DATA = `INSERT INTO RESERVAS (ID_RESERVA, ID_QUARTO, ID_HOSPEDE, CHECKIN, CHECKOUT, STATUS_PAGAMENTO)
// VALUES 
//        (1, 1, 1, '2022-06-22', '2022-06-26', 'Concluido')       
// `

// function criaTabelaReservas() {
//     db.run(RESERVAS_SCHEMA, (error)=> {
//         if(error) console.log("Erro ao criar tabela de RESERVAS", error);
//     });
// }


// function populaTabelaReservas() {
//     db.run(ADD_RESERVAS_DATA, (error)=> {
//        if (error) console.log("Erro ao popular tabela de RESERVAS", error);
//     });
// }

//==== FUNCIONARIOS

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS FUNCIONARIOS (
    "ID_FUNCIONARIO" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "NOME_FUNCIONARIO" VARCHAR(70),
    "CARGO" VARCHAR(32),
    "STATUS_SERVIÇO" VARCHAR(32),
    "HORARIO_ENTRADA" TIME,
    "HORARIO_SAIDA" TIME,
    "SALARIO" INTEGER,
);`;

const ADD_FUNCIONARIOS_DATA = `INSERT INTO FUNCIONARIOS (ID_FUNCIONARIO, NOME_FUNCIONARIO, CARGO, STATUS_SERVICO, HORARIO_ENTRADA, HORARIO_SAIDA, SALARIO)
VALUES 

    (1, "Marcelo Ramos", "Recepcionista", "Ativo", 07:00:00, 15:00:00, 2500,00),
    (2, "Alice do Carmo", "Recepcionista", "Ativo", 09:00:00, 17:00:00, 2500,00),
    (3, "Brícia da Silva Santos", "Recepcionista", "Ativo", 15:00:00, 23:00:00, 2800,00),
    (4, "José Carlos Schneider", "Recepcionista", "Ativo", 07:00:00, 01:00:00, 2800,00),
    (5, "Ruan Alberto Vidanova", "Recepcionista", "Férias", 01:00:00, 08:00:00, 2800,00),
    (6, "Julia Tereza Pereira", "Recepcionista", "Temporário", 01:00:00, 08:00:00, 2300,00),

    (7, "Tony Moreira", "Mecânico", "Ativo", 07:00:00, 16:00:00, 2700,00),
    (8, "Carlos Santos Menezes", "Mecânico", "Ativo", 16:00:00, 22:00:00, 2400,00),

    (9, "Alessandra Santini", "Camareira", "Ativo", 07:00:00, 15:00:00, 2900,00),
    (10, "Joana Marinete de Souza", "Camareira", "Licença Maternidade", 07:00:00, 15:00:00, 2900,00),
    (11, "Saulo Prestes Junior", "Camareiro", "Ativo", 07:00:00, 15:00:00, 2900,00),
    (12, "Julyanna Freitas de Vasoncelos", "Camareira", "Ativo", 07:00:00, 15:00:00, 2900,00),
    (13, "Ulisses Pietro Nunes", "Camareiro", "Ativo", 07:00:00, 15:00:00, 2900,00),
    (14, "Marcela Moreira", "Camareira", "Temporário", 07:00:00, 15:00:00, 2700,00),
    (15, "Marlene Pinha", "Camareira", "Ativo", 15:00:00, 23:00:00, 2900,00),
    (16, "Geane Gertrudes", "Camareira", "Ativo", 15:00:00, 23:00:00, 2900,00),
    (17, "Paulo de Tarso Silve", "Camareiro", "Ativo", 15:00:00, 23:00:00, 2900,00),
    (18, "Lucas Yuri Fleh", "Camareiro", "Ativo", 15:00:00, 23:00:00, 2900,00),

    (19, "Felipe Margueto", "Segurança", "Ativo", 06:00:00, 17:00:00, 4000,00),
    (20, "Juan Carlos Danesi", "Segurança", "Licença Paternidade", 06:00:00, 17:00:00, 4000,00),
    (21, "Layla Maria Fraccaro", "Segurança", "Ativo", 17:00:00, 02:00:00, 5000,00),
    (22, "Salvatino Huihgh", "Segurança", "Temporário", 06:00:00, 17:00:00, 4000,00),
    (23, "Lucas Marochevic de Toledo", "Segurança", "Ativo", 17:00:00, 02:00:00, 5000,00),
    (24, "Ricardo Marola", "Segurança", "Ativo", 02:00:00, 07:00:00, 4000,00),
    (25, "Tânia Mara da Silveira", "Segurança", "Ativo", 02:00:00, 07:00:00, 4000,00),

    (26, "Sônia Staron", "Cozinheira", "Ativo", 06:00:00, 14:00:00, 4000,00),
    (27, "Maria Rita Lucheve", "Cozinheira", "Ativo", 06:00:00, 14:00:00, 4000,00),
    (28, "Gary Onus Burs", "Cozinheiro", "Ativo", 14:00:00, 22:00:00, 4000,00),
    (29, "Alisson Gerber", "Cozinheiro", "Ativo", 14:00:00, 22:00:00, 4000,00),
    (30, "Salete Meira", "Cozinheira", "Ativo", 22:00:00, 06:00:00, 4000,00),

    (31, "Bruno Baldo", "Auxiliar de Cozinha", "Ativo", 06:00:00, 14:00:00, 2500,00),
    (32, "Aristides Falave", "Auxiliar de Cozinha", "Férias", 06:00:00, 14:00:00, 2500,00),
    (33, "Sonia Abraão Defuntosa", "Auxiliar de Cozinha", "Temporário", 06:00:00, 14:00:00, 2500,00),
    (34, "Luiza Sonza", "Auxiliar de Cozinha", "Ativo", 14:00:00, 22:00:00, 2500,00),
    (35, "Priscilla Alburdia", "Auxiliar de Cozinha", "Ativo", 14:00:00, 22:00:00, 2500,00),
    (36, "Antony Salazar Matheus Juanil", "Auxiliar de Cozinha", "Ativo", 22:00:00, 06:00:00, 2500,00),
    (37, "Carolina Anjos", "Auxiliar de Cozinha", "Ativo", 22:00:00, 06:00:00, 2500,00),
    

`
function criaTabelaFuncionarios() {
    db.run(FUNCIONARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de FUNCIONARIOS", error);
    });
}


function populaTabelafuncionarios() {
    db.run(ADD_FUNCIONARIOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de FUNCIONARIOS", error);
    });
}

db.serialize(() => {
    // criaTabelaHospedes();
    // populaTabelaHospedes();
    criaTabelaQuartos();
    populaTabelaQuartos();
    // criaTabelaReservas();
    // populaTabelaReservas();
    criaTabelaFuncionarios ();
    populaTabelafuncionarios ();

});
