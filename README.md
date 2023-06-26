<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="front-develcode" />

  &#xa0;

</div>

<h1 align="center">front-develcode</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/moisespompilio/front-develcode?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/moisespompilio/front-develcode?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/moisespompilio/front-develcode?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/moisespompilio/front-develcode?color=56BEB8">

</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  front-develcode 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/moisespompilio" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

O projeto Front-end desenvolvido em React, TypeScript e Vite, é a solução proposta para o desafio técnico proposto pela Develcode. O objetivo principal do desafio era criar um Front-end responsivo capaz de consumir uma API de cadastro de usuários.

A estrutura do projeto segue uma organização em pastas dentro do diretório "src". Vamos detalhar cada uma dessas pastas:

Components: Nesta pasta, estão armazenados os componentes da aplicação. Cada componente possui sua própria lógica de negócio e estilização, permitindo uma separação clara e uma abordagem modular do código.

Pages: Aqui são encontradas as páginas da aplicação. Cada página possui sua própria lógica de negócio e estilização, tornando mais fácil a compreensão e manutenção do código. Cada página é tratada como uma unidade independente, facilitando a navegação e a interação do usuário.

Hooks: A pasta "hooks" tem como objetivo armazenar trechos de código reutilizáveis. Essa abstração permite que a aplicação fique mais limpa e fácil de entender, evitando a repetição desnecessária de código. Os hooks podem ser compartilhados entre diferentes componentes, aumentando a eficiência do desenvolvimento.

API: Aqui estão localizadas as requisições feitas à API utilizando a biblioteca Axios. Nessa pasta, são definidas as funções responsáveis por realizar as requisições HTTP e interagir com os endpoints da API. Essa abstração ajuda a manter o código organizado e facilita a manutenção das chamadas à API.

Service: A pasta "service" é um dos pilares do projeto, contendo a maior parte da lógica de negócio. Ela atua como um conector entre as diferentes camadas da aplicação, garantindo a organização e a coesão do código. Aqui são implementados os serviços responsáveis por manipular os dados e executar as operações necessárias.

Store: A pasta "store" é responsável por gerenciar as variáveis globais da aplicação utilizando o Redux. Nela, são definidos os estados compartilhados e as ações que podem ser executadas pelos componentes. Essa abordagem centralizada ajuda na gerência do estado da aplicação e facilita a comunicação entre os componentes.

Util: A pasta "util" armazena funções utilitárias do projeto. Essas funções têm como objetivo facilitar tarefas comuns e promover a reutilização de código em diferentes partes da aplicação. Elas podem incluir formatação de dados, cálculos ou operações auxiliares.

Model: A pasta "model" é responsável por armazenar os modelos das entidades da aplicação. Aqui são definidas as estruturas de dados utilizadas pela aplicação, como por exemplo, o modelo de usuário. Essa abstração ajuda a garantir a consistência dos dados e auxilia na tipagem do código.

Assets: Por fim, a pasta "assets" contém os arquivos estáticos da aplicação, como imagens, ícones e estilos CSS. Esses recursos são utilizados para aprimorar a experiência visual e estética da aplicação.

Além das pastas mencionadas, na raiz do projeto também estão presentes o arquivo ".env" responsável pelas variáveis de ambiente, e os arquivos relacionados ao Docker, como o "docker-compose.yml" e o "Dockerfile", que auxiliam na configuração e implantação do projeto.

Com essa organização e estrutura, o projeto busca proporcionar uma leitura facilitada e um estilo claro, promovendo a manutenibilidade e a escalabilidade do código. A separação das responsabilidades em cada pasta e a utilização de boas práticas de desenvolvimento visam facilitar a compreensão, manutenção e evolução do projeto ao longo do tempo.

## :sparkles: Features ##

:heavy_check_mark: [Configuração inicial] Configuração inicial do projeto: Configurar e preparar o ambiente de desenvolvimento para a execução do projeto;\

:heavy_check_mark: [Variáveis globais] Variáveis globais User e Alert: Implementar as variáveis globais User e Alert, permitindo o compartilhamento de dados importantes entre os componentes da aplicação;\

:heavy_check_mark: [Conexões API] Conexões com API: Estabelecer as conexões com a API de cadastro de usuários, utilizando a biblioteca Axios para realizar as requisições HTTP necessárias;\

:heavy_check_mark: [Componentes exibição] Componentes de exibição de usuários: Desenvolver os componentes responsáveis por exibir a lista de usuários, possibilitando a visualização dos dados cadastrados;\

:heavy_check_mark: [Funcionalidades CRUD] Funcionalidades de inclusão, edição e exclusão: Implementar as funcionalidades para adicionar novos usuários, editar informações existentes e excluir registros da lista;\

:heavy_check_mark: [Componente de alerta] Componente de alerta: Criar o componente de alerta para exibir mensagens informativas ou de erro aos usuários, e integrá-lo às diferentes funcionalidades do sistema;


## :rocket: Technologies ##

Às seguintes tecnologias foram utilizadas neste projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## :white_check_mark: Requirements ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Docker](https://www.docker.com/) instalados.

## :checkered_flag: Starting ##

```bash
# Clone do projeto
$ git clone https://github.com/moisespompilio/front-develcode.git

# Acesso
$ cd front-develcode

# Start Docker
$ docker-compose up --build

# O server vai iniciar em <http://localhost:8081>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/moisespompilio" target="_blank">Moises Pompilio</a>

&#xa0;

<a href="#top">Back to top</a>
