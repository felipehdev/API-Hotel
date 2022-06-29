/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/

import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/infra/database.db');

//==== HOSPEDES

//no campo cpf utilizar apenas numeros sem pontos e traço.
//no telefone nao utilizar caracteres especiais, apenas numeros no formato 00999999999 (dd+numero).
//padrao 

const HOSPEDES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "HOSPEDES" (
    "ID_HOSPEDE" INTEGER PRIMARY KEY AUTOINCREMENT,    
    "NOME" varchar(64),
    "SOBRENOME" varchar(64),
    "CPF" varchar(64),
    "DATA_DE_NASCIMENTO" varchar(64),
    "TELEFONE" varchar(64), 
    "EMAIL" varchar(64),
    "ENDEREÇO" varchar(64)
  );`;

const ADD_HOSPEDES_DATA = `
INSERT INTO HOSPEDES (ID_HOSPEDE, NOME, SOBRENOME, CPF, DATA_DE_NASCIMENTO, TELEFONE, EMAIL, ENDEREÇO)
VALUES 
    (1, 'Thomas', 'Cunha', '93223452944', '1984-01-11', '11943238790', 'thomfacilitator@resilia.com', 'Sao Paulo'),
    (2, 'Kassiane', 'Façanha', '')
    `

function criaTabelaHospedes() {
    db.run(HOSPEDES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de hospedes");
    });
}


function populaTabelaHospedes() {
    db.run(ADD_HOSPEDES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de hospedes");
    });
}


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
       (1, '101', '4', 'desocupado', 'master', '199', 'nao'),       
`

function criaTabelaQuartos() {
    db.run(QUARTOS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de QUARTOS");
    });
}


function populaTabelaQuartos() {
    db.run(ADD_QUARTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de QUARTOS");
    });
}

//==== RESERVAS
const RESERVAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS RESERVAS (
    "ID_RESERVA" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "ID_QUARTO" INTEGER,
    FOREIGN KEY(ID_QUARTO) REFERENCES QUARTOS(ID_QUARTO),
    "ID_HOSPEDE" INTEGER,
    FOREIGN KEY(ID_HOSPEDE) REFERENCES HOSPEDES(ID_HOSPEDE),
    "CHECKIN" VARCHAR(32),
    "CHECKOUT" VARCHAR(32),
    "STATUS_PAGAMENTO" VARCHAR(32),
);`;

// FOREIGN KEY(ID_HOSPEDE) REFERENCES HOSPEDE(ID)

const ADD_RESERVAS_DATA = `INSERT INTO RESERVAS (ID_RESERVAS, ID_QUARTO, ID_HOSPEDE, CHECKIN, CHECKOUT, STATUS_PAGAMENTO)
VALUES 
       (1, 1, 1, '2022-06-22', '2022-06-26', 'Concluido'),       
`

function criaTabelaReservas() {
    db.run(RESERVAS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de RESERVAS");
    });
}


function populaTabelaReservas() {
    db.run(ADD_RESERVAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de RESERVAS");
    });
}

db.serialize( ()=> {
    criaTabelaHospedes();
    populaTabelaHospedes();
    criaTabelaQuartos();
    populaTabelaQuartos();
    criaTabelaReservas();
    populaTabelaReservas();
});