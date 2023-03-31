# Bem-vindo ao SpotiPobre
Este é um projeto de API desenvolvido em Node.js com o framework Express para converter vídeos do YouTube em arquivos de áudio no formato MP3. 
Aqui você encontrará informações para rodar o projeto e usá-lo.

# Como rodar o projeto
Existem duas formas de rodar o projeto: apenas a API ou com o frontend integrado. Veja como executar cada uma delas:

# Somente a API
Para rodar somente a API, siga os passos abaixo:

- Clone o projeto para o seu computador

- Abra um terminal na pasta do projeto

- Execute os seguintes comandos:

```
docker build -t api .
```
```
docker run -d -it -p 3001:3001/tcp --name api api:latest
```
Com esses comandos, você irá construir e executar o container da API. Agora, ela estará disponível em http://localhost:3001.

Abra http://localhost:3001/doc para ter acesso a documentação da API.

# Backend + Frontend
Para rodar o projeto com o frontend integrado, siga os passos abaixo:

- Clone o projeto da branch "docker-compose"

- Abra um terminal na pasta do projeto

- Execute o seguinte comando:

```
docker-compose up --build
```

Com esse comando, você irá construir e executar os containers da API e do frontend. Agora, a aplicação completa estará disponível em http://localhost:80.


# Considerações finais
Espero que esse projeto possa ajudar em suas necessidades de conversão de vídeos do YouTube em arquivos de áudio. Sinta-se livre para contribuir com o projeto, reportando bugs ou sugerindo melhorias. Agradecemos pela sua visita!
