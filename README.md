# PetShop App
## Descrição do Projeto

O PetShop App é uma aplicação front-end tendo como inspiração a tela inicial do ChatGPT. Foi desenvolvida para fornecer uma tela inicial animada para uma loja de pet shop. A aplicação é focada em proporcionar uma interface visualmente agradável e interativa, que pode ser integrada a uma aplicação back-end para funcionalidades completas. 

## Funcionalidades
### Animação de Texto

Exibe textos animados de forma dinâmica para melhorar a experiência do usuário.

### Componentes de Interface:

* Botões de Login e Registro: Botões estilizados para futuras funcionalidades de autenticação.
* Links Informativos: Lista de links para termos de uso e política de privacidade, prontos para serem integrados a conteúdos reais.

### Componentes Reutilizáveis: 

Uso de componentes reutilizáveis como botões, títulos e listas de links para fácil manutenção e extensão. 

## Estrutura do Projeto

### src/components:
  - **Button**: Componente para botões estilizados.
  - **Title**: Componente para exibição de títulos.
  - **AnimatedText**: Componente para exibição de texto animado.
  - **ListLinks**: Componente para exibição de uma lista de links com separadores.

### src/pages:
  - **Home**: Página inicial que integra todos os componentes mencionados, formando a tela principal da aplicação.

# Testes

Os testes para os componentes e a página inicial foram desenvolvidos utilizando Jest e React Testing Library para garantir a funcionalidade correta e a confiabilidade da interface.

## Como executar
### Clone o repositório:

`git clone https://github.com/fl0101/animated-home.git`

### Entre no diretório do projeto: 
`cd animated-home/`

## Dependências necessárias
### Dependências de Produção
Estas são as dependências necessárias para a aplicação rodar:

node: ^18.19.0
react: ^18.3.1
react-dom: ^18.3.1
react-scripts: ^3.0.1
styled-components: ^6.1.11
web-vitals: ^2.1.4

### Dependências de Desenvolvimento e Teste
Estas são as dependências necessárias para desenvolvimento e teste:

Visual Studio Code
@testing-library/jest-dom: ^5.17.0
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
mutationobserver-shim: ^0.3.7

## Instale as dependências:

`npm install`
`npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event mutationobserver-shim`

### Passos para Instalar Node.js
* Baixar e Instalar Node.js:

Vá para o [site oficial do Node.js](https://nodejs.org/en) e baixe a versão LTS recomendada para a maioria dos usuários.
Siga as instruções de instalação específicas para o seu sistema operacional (Windows, macOS, ou Linux).

* Verificar a Instalação:

Após instalar o Node.js, abra o terminal (ou Prompt de Comando no Windows) e verifique a versão do Node.js e do npm instalados com os seguintes comandos:

`node -v`
`npm -v`

Você deve ver os números das versões instaladas, confirmando que a instalação foi bem-sucedida.

## Execute a aplicação:

`npm start`

### Executando os Testes

Para rodar os testes no projeto, siga estes passos:
1- Instalação das Dependências de Teste: Se ainda não tiver as dependências necessárias, instale-as com:

`npm install --save-dev @testing-library/react @testing-library/jest-dom`
`npm install mutationobserver-shim`

2- Rodando os Testes: 
Execute o comando no terminal:

`npm test`

Este comando executará todos os arquivos de teste que seguem a convenção de nomenclatura, como *.test.js ou *.spec.js.

# Autor

 [Flaviane Nascimento](https://github.com/fl0101/) :rocket:

 "Conhece a ti mesmo"
 
# Contato
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkdin.com/in/flaviane-nascimento-69375816a)](https://www.linkdin.com/in/flaviane-nascimento-69375816a)
 [![X Badge](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/flaviane80639)
 [![Email Badge](https://img.shields.io/badge/proton%20mail-6D4AFF?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:fl0101@protonmail.com)

# Contribuições

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença
Este projeto está licenciado sob a Licença MIT.