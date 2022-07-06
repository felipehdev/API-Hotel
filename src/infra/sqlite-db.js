import sqlite3 from 'sqlite3';
const bd = new sqlite3.Database('./src/infra/database.db');

//comentario
//Processamento de sinal
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('SERVIDOR ENCERRADO');
        process.exit(0);
    })
);

export {bd}