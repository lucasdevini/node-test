# node-test

ATENÇÃO: para seguir as instruções abaixo, leve em conta que é necessário ter o node instalado na sua máquina, bem como o postgreSQL (e que usuário e senha deste são 'postgres' e '1234', respectivamente).

link do node: https://nodejs.org/en

link do postgreSQL: https://www.postgresql.org/

<br/>

INSTRUÇÕES: 

1 - Abra o cmd na pasta raiz do arquivo e digite: npm install 

2 - Crie um arquivo .env na pasta raiz e copie e cole o conteúdo abaixo:
  
  ```
  PORT=4000

  PG_DB=auths
  PG_USER=postgres
  PG_PASSWORD=1234
  PG_PORT=5432
  
  PG_TEST_DB=auths_test
  PG_TEST_USER=postgres
  PG_TEST_PASSWORD=1234
  PG_TEST_PORT=5432
  ```
3 - Crie os dois bancos de dados em postgreSQL com nomes presentes em PG_DB e PG_TEST_DB. No primeiro banco, crie a tabela users com a estrutura presente no arquivo User.ts que está na pasta models. 

4 - Para executar, digite: npm run start-dev ; para testar, npm test
