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

    (1, 'Thomas', 'Cunha', '93223452944', '1987-01-11', '11943238790', 'thomfacilitator@resilia.com', 'Sao Paulo'),
    (2, 'Kassiane', 'Façanha', '67941379654', '1987-01-11, '88935492649', 'kassifacilitadora@resilia.com', 'Ceara'),
    (3, 'Alexandre', 'Cezar Fh', '12486910988', '1996-07-29', '41986574190', 'alexandre.cezarfh@gmail.com', 'Parana'),
    (4, 'Alexandre', 'Neckel', '82556582590', '1997-01-11', '41996593610', 'aleneckel@gmail.com', 'Parana'),
    (5, 'André', 'Moura', 88759262370, 1990-01-11, '41926410936', 'andre.moura@gmail.com', 'Parana'),
    (6, 'Carolina', 'Saint', '92334681129', '1997-01-11', '41956285391', 'saint.carol@gmail.com', 'Parana'),
    (7, 'Carolina', 'Villarino', '82773600189', '1997-01-11', '41947635012', 'carol.molly@gmail.com', 'Parana'),
    (8, 'Diuly', 'Souza', 01892746511, '1997-01-11', '41985672410','diulysouza@gmail.com', 'Parana'),
    (9, 'Eduarda', 'Tybusch', '01836501844', '1997-01-11', '41983567812', 'eduarda.t@gmail.com', 'Parana'),
    (10, 'Eduardo', 'Victor', '12845010983', '1997-01-11', '41967534196', 'eduvictor@gmail.com', 'Parana'),
    (11, 'Gustavo', 'Arcoverde', '01265846399', '2003-01-11, '41986540027', 'gu.verdin@gmail.com', 'Parana'),
    (12, 'Isadora', 'Silva', '02375619833', '2005-01-11', '41986645724', 'silva.isa@gmail.com', 'Parana'),
    (13, 'Jessica', 'Cintra', '46957735448', '1990-01-11', '41988451602', 'jess.cintra@gmail.com', 'Parana'),
    (14, 'Jessica', 'Paiva', '54830211363', '1990-01-11', '41999234025', 'jess.paiva@gmail.com', 'Parana'),
    (15, 'Lorrane', 'Rocha', '93756400236', '1996-01-11', '419837524413', 'lo.rocha@gmail.com', 'Parana'),
    (16, 'Matheus', 'Lopes', '36448258098', '2000-01-11', '41997523610', 'mathlopes@gmail.com', 'Parana'),
    (17, 'Vinicius', 'Mocelin', '91655497409', '1999-01-11', '41988701262', 'vini.mocelin@gmail.com', 'Parana'),
    (18, 'Nahla', 'Valentina', '01735228749', '1998-01-11', '41985432795', 'nahlavsantos@gmail.com', 'Parana'),
    (19, 'Sabrina', 'Alves', '01927357392', '2000-01-11', '41983659104', 'alves.sabrina@gmail.com', 'Parana'),
    (20, 'Sabrina', 'Szemberg', '48372991302', '2000-01-11', '41986250183', 'sabrinasz@gmail.com', 'Parana'),
    (21, 'Felipe', 'Honorio', '93348185212', '1992-01-11', '41938250122', 'feliprh@gmail.com', 'Parana'),
    (22, 'Ana Luiza', 'Ferreira', '01472899434', '2003-01-11', '41984724558', 'analuferns@gmail.com', 'Parana'),
    (23, 'Ana Paula', 'Fedechem', '93472016544', '1996-01-11', '41988542518', 'anapfedechem@gmail.com'),
    (24, 'Alessandra', 'Bulka', '32476018327', '2003-01-11', '41993427512', 'alebulka@gmail.com', 'Parana'),
    (25, 'Beatriz', 'Araujo', '02374317333', '2003-01-11', '41982571245', 'bea_araujo@gmail.com', 'Parana'),
    (26, 'Bruna', 'Ravelli', '19475200434', '2000-01-11', '41994128422', 'brunaravelli@gmail.com', 'Parana'),
    (27, 'Calina', 'Fisher', '27510974523', '1994-01-11', '41982347754', 'cafisher@gmail.com', 'Parana'),
    (28, 'Danielys', 'Davila', '23358193457', '2000-01-11', '41998415723', 'davila.dani@gmail.com', 'Parana'),
    (29, 'Gadiel', 'Machado', '74562374192', '2000-01-11', '41992751123', 'gadimachado@gmail.com', 'Parana'),
    (30, 'Giovana', 'Santos', '18137442533', '2003-01-11', '41988251124', 'gihsantos@gmail.com', 'Parana'),
    (31, 'Hellen', 'Costa', '33841049188', '2000-01-11', '41994286557', 'hellen.costa@gmail.com', 'Parana'),
    (32, 'Isaque', 'Rodrigues', '02318462343', '1992-01-11', '41984157763', 'isaquerod@gmail.com', Parana),
    (33, 'Joao Vitor', 'Araujo', '84572380811', '2003-01-11', '41993586122', 'joaov.araujo@gmail.com', Parana),
    (34, 'Thaysa', 'Weber', '11380871905', '1998-01-11', '41988226721', 'thaysaweber@gmail.com', Parana),
    (35, 'Joao Pedro', 'de Paula', '28334157500', '2000-01-11', '41993461833', 'joaopedrop@gmail.com', Parana),
    (36, 'Keu', 'Santos', '24281836568', '2000-01-11', '41983125799', 'keusantos@gmail.com', Parana),
    (37, 'Magali Lima', '73219153044', '1996-01-11', '41988412236', 'maglima@gmail.com', Parana),
    (38, 'Mayckel', 'Santos', '33751904093', '2000-01-11', '41998461742', 'santosmayckel@gmail.com', 'Parana'),
    (39, 'Orlando', 'Bernardi', '36510857233', '2003-01-11', '41985173591', 'landinhob@gmail.com', 'Parana'),
    (40, 'Patrick', 'Patchelli', '99357149602', '1992-01-11', '41994221752', 'ppatchelli@hmail.com', 'Parana'),
    (41, 'Priscila', 'Souza', 75611485392, '1992-01-11', '41994857145', 'prisouza@gmail.com', Parana),
    (42, 'Raquel', 'Rodrigues', '42475195823', '1998-01-11', '41995764248', 'raquel_rodrigues@gmail.com', Parana),
    (43, 'Thais', 'Cristina', '46918476341', '1992-01-11', '41952759244', 'cristina.thais@gmail.com', Parana),
    (44, 'Thaynara', 'Cabral', '12175334511', '2000-01-11', '41984751211', 'thaycabral@gmail.com', Parana),
    (45, 'Veronica', 'Ribas', '75205712344', '2000-01-11', '41997519472', 'veribas@gmail.com', Parana),
    (46, 'Victor Gabriel', 'Camargo', '72561085311', '2000-01-11', '41998451084', 'victorg.camargo@gmail.com'),
    (47, 'Rodrigo', 'Junqueria', '58137522354', '1987-01-11', '82997459201', 'rodri_junqueira@gmail.com', 'Alagoas'),
    (48, 'Maria Celestina', 'de Jesus', '27247184977', '1955-01-11', '27984619400',  'mariac.jesus@gmail.com', 'Espirito Santo'),
    (49, 'Orivaldo', 'Almeida', '28411749533', '1982-01-11', '62984717534', 'almeida.o@gmail.com', 'Goias'),
    (50, 'Marlene', 'Oliveira', '29275311745', '1967-01-11', '98921475334', 'olimarlene@gmail.com', 'Maranhao')
    `
    
function criaTabelaHospedes() {
    db.run(HOSPEDES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de hospedes", error);
    });
}



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

db.serialize( ()=> {
    // criaTabelaHospedes();
    // populaTabelaHospedes();
    criaTabelaQuartos();
    populaTabelaQuartos();
    // criaTabelaReservas();
    // populaTabelaReservas();
    
});