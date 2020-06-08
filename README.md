# Instalação dos pacotes
##### Dentro da pasta raiz do repo, abra dois terminais, no primeiro terminal(vamos chamar ele de (1)), digite o seguinte código:
(1)
``` cd frontend ```
``` npm install ```
##### No segundo terminal(chamaremos de (2)
(2)
``` cd frontend ```
``` npm install ```

##### MANTENHA OS TERMINAIS ABERTOS

# Execução da Aplicação
## Requisitos
Duas partes são fundamentais para a aplicação funcionar e que são configuradas manualmente.

- APIKEY Watson: Você precisa ter um apikey do serviço do watson para gerar um acess_token válido para você.

- Banco de Dados: O banco de dados está configurado localmente para ser mysql, então você precisa inserir suas credenciais, ou utilizar da opção de Sqlite, os dois caminhos serão passados.

### API Key do Watson:
Após criar a sua conta free neste link https://www.ibm.com/cloud/watson-text-to-speech, a própria cloud te mostrará os caminhos para conseguir a sua APIKey e a sua url, com as informações em mão:

https://take.ms/JW2xV

Você substituirá essas informações no ```frontend\src\pages\home\components\Comment\index.js``` na linha 33 e 34, dentro da função listenToAudio, a url deve ser escrita sem o "https://" na frente, ex: ```api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f0fba33e-a3bb-49df-af80-91aa51d72376```

https://take.ms/QdIZr

### Banco de Dados:
#### Mysql

- Caso você tenha um servidor MySql no seu computador, então insira as informações do seu banco de dados no ```nodeserver\knexfile.js``` https://take.ms/lfVHx
- Depois precisará escrever o código dentro do terminal (1)(Caso tenha fechado, vá até a pasta ```nodeserver``` e abra um terminal lá, digite ```npx knex migrate:latest --env production``` para criar a tabela e propagar as migrações.

#### SQLite

- Abra o arquivo ```nodeserver\database\connection.js``` na linha https://take.ms/mBQ2V, e altere o ```configuration.production``` para ```configuration.development```

## Teste da Aplicação

Após a execução dos requisitos e funcionando tudo corretamente, sem nenhum processo interrompido no meio, podemos seguir para a execução da nossa aplicação.

- No terminal (1), digitará ```npm start```, irá aguardar o servidor iniciar, quando o terminal tiver mostrando a mensagem de que foi inciado, no terminal (2), digitará ```npm start``` também, e aguarde até abrir uma página no seu navegador padrão, após isso, poderá usar a aplicação e fazer os seus devidos testes.
