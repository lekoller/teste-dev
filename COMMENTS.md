# Setup
## Backend
Para gerar o banco de dados e iniciar o back-end é necessário ter Docker com docker-compose instalado no seu sistema, navegar para o diretório `/fretapp` e digitar o comando `docker-compose up --build` e aguardar a seguinte mensagem do terminal:
```
fretapp     | System check identified no issues (0 silenced).
fretapp     | April 05, 2022 - 22:32:59
fretapp     | Django version 4.0.3, using settings 'core.settings'
fretapp     | Starting development server at http://0.0.0.0:8000/
fretapp     | Quit the server with CONTROL-C.
```

# Endpoints
- `/enterprises/providers/` (Registros de empresas)
- `/enterprises/customers/` (Registros de clientes)
- `/busyness/offers/` (Registros de ofertas)
- `/busyness/bids/` (Registros de lances)

# Sobre o desenvolvimento
## MongoDB para Postgres
Inicialmente achei que seria interessante praticar um pouco de MongoDB com Django, pois é uma combinação que só havia tentado uma vez. Gosto de usar o Atlas, a cloud do mongodb, só que a biblioteca do 'Djongo' apresenta certa dificuldade com o uso do banco de dados remoto, sendo necessário alterar a linha de código que define o `HOST` do banco como `'localhost'` para a string de conexão do Atlas, o que não seria muito adequado para a entrega de um rápido teste técnico, no qual não será feito o deploy; então a melhor opção, tendo em vista o tempo que havia me restado, seria utilizar a configuração mais comum de Postgres containerizado com Docker-Compose.

## Empresas para Enterprises
Havia criado um app no Django para lidar com as empresas e dei o nome em português até para a tabela do banco de dados. Não é uma prática que considero muito boa porém acabei fazendo assim por inércia, pois estou há muito tempo prestando serviço para uma empresa brasileira que faz uso constante da mistura de portuges e inglês em códigos

Aproveitando que reparei que o objeto de clientes contem os mesmos dados básicos de uma empresa, e poderia refazer aquele modelo como uma classe abstrata, decidi criar um novo app chamado `enterprises`, e dentro deste dois modelos em seu arquivo `models.py`, chamados `Provider` e `Customer`, ambos herdando da model abstrata `Enterprise`.

## Últimas instâncias
Fora testado o reinício do banco de dados com as migrações sendo aplicadas automaticamente no docker-compose, e foi constatado um erro nas primeiras migrações, que levam um tempo para poder serem feitas, pois o conteiner do banco de dados leva um tempo maior para finalizar a contrução ao executar o `docker-compose up --build`. Para solucionar foi aplicado um delay de 15 segundos para iniciar os scripts relacionados ao Django. Fora adotado o termo `offers` para as ofertas e `bids` para lances.