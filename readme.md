<h1 align="center">
    <img alt="Carta assinatura" src="img/cartao-ass.png" width="500px" />
</h1>

# API FEITA EM NODE JS
Está api foi desenvolvida como forma de demostrar meus conhecimentos em api
ela é um projeto base de um done list
---
***Recursos da api***
1. Criar um projeto
0. Lista todos os projetos criado
0. Adiciona tarefas ao projeto
0. Deleta o projeto
0. Informa a quantidade de requisição feita
0. Alterar Projetos já feito
---
## Modo de usar api 

### COMANDOS PARA INICIAR
```
yarn add nodemon
yarn dev
```
***OBS: USANDO PORTA 3000, EXEMPLO:  http://localhost:3000/project***

### CRIA PROJETO
```
POST /project

{
	"id": "SEU_ID_EM_STRING",
	"title": "NOME_DO_PROJETO"
}
```
`EXEMPLO: http://localhost:3000/project/`

### ADICIONAR TAREFA
```
POST /project/[ID]/tasks

{
	"task": "NOME_DA_TAREFA"
}
```
`EXEMPLO: http://localhost:3000/project/1/tasks`

### VER PROJETOS
```
GET /project
```
`EXEMPLO: http://localhost:3000/project/`

### ATUALIZAR NOME DO PROJETO
```
PUT /project/[ID]
{
	"title": "NOVO_NOME"
}
```
`EXEMPLO: http://localhost:3000/project/1`

### DELETAR PROJETO
```
DELETE /project/[ID]
```
`EXEMPLO: http://localhost:3000/project/1`
