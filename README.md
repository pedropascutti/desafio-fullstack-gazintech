<div align="center">
  <h1>Desafio Full Stack - Gazin Tech</h1>
  <p>Desenvolvido por Pedro Pascutti</p>
</div>

<br />

## Sobre o projeto
<div>
  <p>
    Olá, esse é o meu projeto do desafio full stack da Gazin Tech. Esse desafio consiste basicamente em dois CRUDS, um de níveis, e um de desenvolvedores, 
    dentre diversos outros tópicos citados no <a href="https://github.com/gazin-tech/Desafio-FullStack">repositório original do desafio</a>,
    e essa aplicação precisa ser SPA (Single Page Action).
  </p>
</div>

### Tecnologias utilizadas

- PhP - Laravel
- React JS
- Docker

## Getting Started

### Pré-requisitos

Antes de começarmos, o projeto tem as seguintes depêndencias:
```bash
  PhP: 8.1^
  Composer: 2.6^
  Docker: 24.0^
  docker-compose: 1.29^
  Node: 20.9^ e npm: 10.1^
  Git: 2.3^
  Make: 4.3
```
## Instalação

### Clone o repositório em sua máquina:
- SSh
```bash
git clone git@github.com:PedroPascutti/desafio-fullstack-gazintech.git
```
- Https
```bash
git clone https://github.com/PedroPascutti/desafio-fullstack-gazintech.git
```
### Acesse a pasta _backend_ no diretório raiz do projeto

Copie o arquivo .env.example para um arquivo .env
<br />
Se preferir usar o terminal basta executar:
```bash
 cp .env.example .env
```
Com o arquivo **.env** criado, execute o seguinte comando:
```bash
php artisan key:generate
```
**Ainda dentro da pasta _backend_ rode o comando:**
```bash
composer install
```
### Acesse a pasta _frontend_ no diretório raiz do projeto
Dentro da pasta execute o comando:
```bash
npm install
```
### Acesse a pasta raiz do diretório
A partir da pasta raiz basta executar
```bash
make run
```
**Assim que acabar de rodar esse comando a aplicação estara rodando**

## Informações sobre a aplicação
**A url padrão para acesso dos serviços é: `http://localhost`** <br />
### Portas:
**3000 - Frontend - React** <br />
**8000 - Backend - Laravel Api** <br />
**8080 - phpMyAdmin** <br />
**3306 - MySQL** <br />

## API
**Url padrão da API: `http://localhost:8000`**

### Níveis
|      método     |     endpoint   |                    ação                     |
| --------------- | -------------- | -----------------------------------------   |
|      `GET`      |    /levels      |     Retorna todos os níveis                |  
|      `GET`      |    /levels/{id} |     Retorna um nível                       |  
|      `POST`     |    /levels      |     Cria um nível com os dados via `body`  | 
|    `PUT/PATCH`  |    /levels/{id} |     Edita um nível com os dados via `body` | 
|     `DELETE`    |    /levels/{id} |     Deleta um nível                        | 

### Desenvolvedores
|      método     |     endpoint   |                               ação                       |
| --------------- | -------------- | ------------------------------------------------------   |
|      `GET`      |    /developers      |     Retorna todos os desenvolvedores                |  
|      `GET`      |    /developers/{id} |     Retorna um desenvolvedor                        |  
|      `POST`     |    /developers      |     Cria um desenvolvedor com os dados via `body`   | 
|    `PUT/PATCH`  |    /developers/{id} |     Edita um desenvolvedor com os dados via `body`  | 
|     `DELETE`    |    /developers/{id} |     Deleta um desenvolvedor                         | 

## Acesso phpMyAdmin

|      servidor     | usuário | senha|
| ----------------- | ------- | ---- |
| `mysql_container` |  admin  | root | 

# Esse é o meu projeto, muito obrigado! Sucesso!


