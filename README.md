# teste-dev
# Teste para vaga de Desenvolvedor 

Olá aspirante a W Technology, seja bem-vindo ao seu teste.

Esperamos que tenha dado tudo certo até aqui e desejamos a você um ótimo teste.


Disclaimer: Os CNPJs e CPFs utilizados nos testes foram gerados em https://www.4devs.com.br/gerador_de_cnpj

## Stack
*Backend*: PHP, Node ou python

*Froentend*: Angular, React ou vue

*Database*: Postgresql, Mongodb ou MySQL


*Obs*: Você pode utilizar frameworks e bibliotecas.

## O Problema e O que Esperamos
Nosso core business é contratação de frete, então nada mais justo do que praticarmos o seu futuro dia-a-dia.

Você deve criar uma API REST capaz de cadastrar e obter informações de Empresas, Clientes, Ofertas e Lances.

Os dados recebidos devem ser armazenados num banco de dados criado pelo candidato.

Também deve ser criado uma(s) página(s) para que seja possível visualizar os dados cadastrados.

Registre tudo: testes que foram executados, ideias que gostaria de implementar se tivesse tempo (explique como você as resolveria, se houvesse tempo), decisões que foram tomadas e seus porquês, arquiteturas que foram testadas e os motivos de terem sido modificadas ou abandonadas. Crie um arquivo COMMENTS.md ou HISTORY.md no repositório para registrar essas reflexões e decisões.

## Prazo
O prazo de entrega é de 4 dias corridos, contados a partir do recebimento deste teste.


## Exemplos de Requisições

### Exemplo de JSON de Cadastro de Empresas
```
{
  "id": 1,
  "name": "W Technology",
  "doc": "60.429.484/0001-10",
  "about": "W Technology, uma empresa especializada em inovar",
  "active": true,
  "site": "https://wtechnology.com.br/"
}
```
### Exemplo de JSON de Cadastro de Clientes
```
{
  "id": 12,
  "name": "Transportadora Rodoclub",
  "doc": "99.974.145/0001-50",
  "about": "FullTime, Acessoria de Atendimento ao Cliente",
  "active": true,
  "site": "https://wtechnology.com.br/"
}
```
### Exemplo de JSON de Cadastro de Oferta
```
{
  "id": 1,
  "id_customer": 1,
  "from": "Porto Alegre - RS",
  "to": "São Paulo - SP",
  "initial_value": 130.00,
  "amount": 300.00,
  "amount_type": "TON"
}
```
### Exemplo de JSON de Lance
```
{
  "id_provider": 12,
  "id_offer": 1,
  "value": 105.00,
  "amount": 230.00
}
```


## Entrega
Coloque seu código em um repositório privado no Github e adicione o @JefteW como um de seus colaboradores. Essa conta no Github (JefteW) é utilizada exclusivamente para aplicação e revisão de testes.

# Dicas

Use ferramentas e bibliotecas open source, mas documente as decisões e porquês;

Automatize o máximo possível;

Em caso de dúvidas, pergunte.

## Considerações Finais
Sinta-se livre para impressionar na sua solução e apresentação.

Bom teste!!

#NaVelocidadeDoSeuTalento #EnjoyTheRide
