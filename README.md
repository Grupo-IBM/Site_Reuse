# Site reUse - Cyber Wave
Esse repositório contém o projeto da CyberWave, o site da reUse, site esse que foca num futuro limpo para todos

## Como Iniciar:
Para iniciar o projeto é importante que tenham as seguintes ferramentas instaladas

 - [Node.JS](https://nodejs.org/en/): Runtime Build para renderização do Javascript em ambiente;
 - [NPM](https://www.npmjs.com/): Gerenciador de pacotes para o Node, trazendo a maioria das funcionalidades do projeto;

Ao instalar as duas ferramentas, você já está apto a seguir com a instalação de qualquer projeto. Para os próximos passos você precisa de algum terminal com linha de comando:

1. Clone o repositório:  https://github.com/EnzoShiotuqui/Site_Reuse.git

2. Vá até a pasta que você acabou de clonar e utilize os comandos para instalar as dependências necessárias para o funcionamento de cada pasta:
```
    cd .\nome-da-pasta-em-que-clono\    
     cd .\Site-Reuse\
      npm install
```
(Lembrando que esses passos são para o funcionamento do site em React, o site em html é apenas roda-lo)


4. Com a pasta "node-modules" criada basta rodar o projeto com o seguinte comando
```
npm run dev
```
este comando roda apenas o site, porém agora é preciso rodar a API, que carrega os dados, para isso basta executar
```
npm run start:api
```    
Prontinho, caso esteja tudo certo o terminal ira mostrar uma mensagem com o link, basta acessar e desfrutar do site :)

## Estrutura do Projeto:

    pasta_base\
    	|-- public\ ➡️ pasta com todos os visuais\estilos
    	|-- src\ ➡️ pasta principal com todos os scripts necessarios
    	  |-- assets\ ➡️ pasta com fotos usadas
        |-- components\ ➡️ pasta com components que ajudam a deixar as paginas mais limpas
        |-- routes\ ➡️ pasta com as paginas finais do projeto
          
 
Integrantes:

Emanuele Soares RM97973 - ESPG
Enzo Shiotuqui RM555108 - ESPG
Murilo Roveri RM97893 - ESPG
Ricardo Neto RM550757 - ESPG
Victória Pizza RM550609 - ESPG
