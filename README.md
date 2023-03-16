## Simulador Solar

Challenge 77sol.

<img width="1624" alt="Captura de Tela 2023-03-16 às 15 27 07" src="https://user-images.githubusercontent.com/59876901/225718121-3a7c7be2-9138-48ea-b416-1fbb8b994921.png">

Primeiramente instalar as dependencias:

```bash
npm install
```

após instalar as dependencias você deve rodar o servidor json-server através do comando:

```bash
npm run server

```

Em seguida rode a aplicação com:

```bash
npm run dev

```


Para rodar o storybook

```bash
npm run storybook

```

Para rodar os testes

```bash
npm run test

```

## Ferramentas utilizadas

<ul>
  <li>NextJS 13</li>
  <li>Styled Components</li>
  <li>Axios</li>
  <li>Jest</li>
  <li>React-testing-library</li>
  <li>Storybook</li>
  <li>JSON Server</li>
</ul>


### Observações finais:
Como o endpoint fornecido no desafio está protegido com CORS e a origin segue restrita para o consumo da API pela aplicação do dominio 77Sol, foram utilizadas a API do <a href="https://viacep.com.br/">viaCep</a> para consultar o cep e o <a href="https://www.npmjs.com/package/json-server">json server</a> para simular o funcionamento da API.
