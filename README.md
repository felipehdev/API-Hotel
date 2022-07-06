![enter image description here](https://media.discordapp.net/attachments/985905687559274539/993894593269600306/hotel_2.png?width=1119&height=630)
**🏨 API HOTEL SAFEVITHA**
=
APRESENTAÇÃO DO PROJETO
-

Esse projeto foi desenvolvido com o objetivo de simular a API de um hotel.
Foi desenvolvido com propósitos educacionais, a fim de testar e mostrar conhecimentos sobre javascript, node, npm, express, middlewares, sqlite3, insomnia, mvc, validações de dados, metodologias ágeis entre outros.
Com algumas adaptações esses projeto pode ser implementado em um hotel real.

Com essa API o usuário consegue gerir dados relevantes para a rotina de um hotel, obtendo respostas rápidas quanto aos hóspedes, quartos, reservas e funcionários.

Durante o desenvolvimento do projeto o grupo pôde experimentar como é desenvolver em grupo uma API Rest do zero, utilizando javascript ES6, node e pacotes npm.

💾 COMO INSTALAR?
-

Você irá precisar dos programas, git, vscode e insominia instalados na sua máquina.

1. Utilize o git para fazer o clone do repositório para a sua máquina usando o comando: ``git clone https://github.com/felipehdev/API-Hotel.git`` ;
1. Abra a pasta clonada com o vscode;
1. Abra o terminal integrado powershell do vscode e utilize o comando ``npm install -y`` para instalar as dependências do npm.

 🔛 LIGANDO O SERVIDOR
-
Para ligar o servidor abra o terminal integrado powershell no vscode e utilize o comando ``npm start``para rodar o servidor utilizando a dependência nodemon que atualiza o servidor automaticamente a cada atualização no código ou ainda ``node .\src\index.js`` que exige reinicio a cada atualização.

Você receberá no terminal a mensagem "SERVIDOR INICIADO UTILIZANDO A PORTA 3003".


 🔄 FAZENDO SCRUM VIA INSOMINIA
-
Com o servidor ligado, abra o insomnia e utilize as rotas desejadas na parte superior do aplicativo, clicando no botão SEND para enviar as requisições.

**FUNCIONÁRIOS**

METODO | ROTA | FUNCIONALIDADE
:--------- | :------: | :-------:
POST| ``http://localhost:3003/funcionario``| Insere novo funcionário passando no body os atributos nome_funcionario, cargo, status_servico, horario_entrada, horario_saida, salario
GET | ``http://localhost:3003/funcionario`` | Retorna todos os funcionários
GET | ``http://localhost:3003/funcionario/:id``|Retorna o funcionário com o id selecionado
PUT |``http://localhost:3003/funcionario/:id``|Modifica o funcionário com o id passado, permite modificar de um a todos os parâmetros do funcionário selecionado
DELETE |``http://localhost:3003/funcionario/:id`` | Deleta o funcionário de acordo com o id passado


**HÓSPEDES**

METODO | ROTA | FUNCIONALIDADE
:--------- | :------: | :-------:
POST| ``http://localhost:3003/hospedes``| Insere novo hóspedes passando no body os atributos id_hospede, nome, sobrenome, cpf, data_de_nascimento, telefone, email, endereco
GET | ``http://localhost:3003/hospedes`` | Retorna todos os hóspedes
GET | ``http://localhost:3003/hospedes/:id``| Retorna o hóspede com o id selecionado
PUT |``http://localhost:3003``|Modifica um hóspedes de acordo com o id passado, permite modificar de um a todos os parâmetros do hóspede selecionado
DELETE |``http://localhost:3003/funcionario/:id`` | Deleta o hóspede de acordo com o id passado

**QUARTOS**

METODO | ROTA | FUNCIONALIDADE
:--------- | :------: | :-------:
POST| ``http://localhost:3003/quarto``| Insere novo quarto passando no body os atributos numero_quarto, qnt_hospedes, ocupacao, classe, diaria, manutencao
GET | ``http://localhost:3003/quarto`` | Retorna todos os quartos
GET | ``http://localhost:3003/quarto/:id``|Retorna o quarto com o id selecionado
PUT |``http://localhost:3003/quarto/:id``|Modifica o quarto com o id passado, permite modificar de um a todos os parâmetros do funcionário selecionado
DELETE |``http://localhost:3003/quarto/:id`` | Deleta o quarto de acordo com o id passado

**RESERVAS**


METODO | ROTA | FUNCIONALIDADE
:--------- | :------: | :-------:
POST| ``http://localhost:3003/reserva``| Insere nova reservas passando no body os atributos id_quarto, id_hospede, checkin, checkout, status_pagamento
GET | ``http://localhost:3003/reserva`` | Retorna todos as reservas
GET | ``http://localhost:3003/reserva/:id``|Retorna a reserva com o id selecionado
PUT |``http://localhost:3003/reserva/:id``|Modifica a reserva com o id passado, permite modificar de um a todos os parâmetros da reserva selecionada
DELETE |``http://localhost:3003/reserva/:id`` | Deleta a reserva de acordo com o id passado

📴 ENCERRANDO O SERVIDOR
-

Para encerrar o servidor pressione no terminal integrado do vscode o atalho Ctrl + C.
Você recebera no console a mensagem 'SERVIDOR ENCERRADO'.

👩‍💻👨‍💻DESENVOLVEDORES
-
Felipe, Sabrina, Thaysa e Vinicius

