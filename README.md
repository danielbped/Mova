# Projeto Bandeiras

## Projeto realizado como fase de um processo seletivo
  - O projeto teve como objetivo desenvolver uma aplicação utilizando uma API de bandeiras de todos os países, incluindo detalhes e informações sobre cada um.
  - Ferramentas utilizadas:
    - ReactJS;
    - React Hooks;
    - Tailwind CSS;
  - [API utilizada.](https://restcountries.eu/#api-endpoints-code)

## Como instalar
  1 - Abra o terminal e crie um diretório de sua preferência com o comando **mkdir**:
  
    mkdir projeto-bandeiras
    
  2 - Entre no diretório que acabou de criar e depois clone o projeto com o comando **git clone**:
  
    cd projeto-bandeiras
    git clone git@github.com:danielbped/Mova.git
    cd Mova
    
  3 - Para o projeto funcionar na sua máquia, será necessário instalar suas dependências, para isso, utilize **npm install**:
  
    npm install
    
  4 - Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start**:
  
    npm start
  
 ## Resultado:
 
 ## Requisitos do projeto:
 - [x] Selecionar um tipo de filtro: Região, Capital, Língua, Código de Ligação. O Default será País. Esse Select define as propriedades do segundo select e a URL a ser selecionada.
 - [x] Para cada requisição, uma URL diferente será utilizada.
  - Pesquisar por [Região](https://restcountries.eu/rest/v2/region/asia)
      - Ex.: Asia
  - Pesquisar por [Capital](https://restcountries.eu/rest/v2/capital/brasilia)
      - Ex.: Brasilia
  - Pesquisar por [Língua](https://restcountries.eu/rest/v2/lang/en)
      - Ex.: Inglês
  - Pesquisar por [País](https://restcountries.eu/rest/v2/alpha/prt)
      - Ex.: Portugal
  - Pesqusiar por [Código de Ligação](https://restcountries.eu/rest/v2/callingcode/372)
      - ex.: 372
 - [x] Ao clicar na bandeira, abre a tela de detalhes do país, mostrando:
    - Bandeira
    - Nome
    - Capital
    - Línguas
    - População
    - Subregião
    - Região (Ao clicar na região, deve retornar à página inicial mostrando os países filtrados pela região selecionada)
    - Lista de bandeiras de países vizinhos (Ao clicar na bandeira, deve redirecionar à página de detalhes da página selecionada)
- [x] No header deve ter um botão para voltar à página inicial
