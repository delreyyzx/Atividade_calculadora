<div align="center">
  
  <h1 style="color: #D62828;">🟥 Desafio Calculadora Simples - React JS 🟥</h1>
  
  <p style="color: #E63946;"><b>Uma aplicação interativa de calculadora desenvolvida em React com Vite e CSS Modules.</b></p>

  <!-- Badges em tons de vermelho -->
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&color=800000" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E&color=C1121F" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS_Modules-239120?&style=for-the-badge&logo=css3&logoColor=white&color=E63946" alt="CSS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&color=990000" alt="JavaScript" />

</div>

<hr style="border: 1px solid #D62828;">

## 📖 Sobre o Projeto

Este projeto é uma **Calculadora Simples** desenvolvida em **React JS**, criada como solução para um desafio prático de desenvolvimento front-end (baseado na estrutura de uma Calculadora de IMC).

O objetivo principal da aplicação é permitir que o usuário realize operações matemáticas básicas entre dois números de forma simples, intuitiva, com tratamento de erros em tempo real e visual estilizado em tons de vermelho.

<br>

## 🎯 Funcionalidades e Requisitos Atendidos

- 🔹 **Entrada de Dados:** Campos numéricos para inserção do **Primeiro número** e **Segundo número**.
- 🔹 **Seleção de Operações:** Menu suspenso (`<select>`) para escolha da operação desejada:
  - Adição (`+`)
  - Subtração (`-`)
  - Multiplicação (`*`)
  - Divisão (`/`)
- 🔹 **Botão Calcular:** Executa o cálculo e exibe o resultado formatado em destaque na tela.
- 🔹 **Botão Limpar:** Reseta todos os campos do formulário, mensagens de erro e o resultado.
- 🔹 **Validação de Erros:**
  - Alerta quando um dos campos numéricos não for preenchido.
  - Bloqueio e alerta para tentativa de **divisão por zero**.
- 🔹 **Estilização Exclusiva:** Estilização modularizada em **CSS Modules** com uma paleta de cores focada em tons de vermelho e vinho.

<br>

## 📂 Estrutura do Projeto

Abaixo está a organização de arquivos e pastas da aplicação:

```text
desafio.calculadora/
└── calculadora/
    ├── node_modules/         # Dependências instaladas do projeto
    ├── public/               # Arquivos estáticos
    ├── src/                  # Código-fonte da aplicação
    │   ├── assets/           # Recursos visuais (imagens, ícones)
    │   ├── components/       # Componentes React da aplicação
    │   │   ├── FormCalculadora.jsx          # Lógica, formulário e controle de estado
    │   │   └── FormCalculadora.module.css   # Estilos escopados em tons de vermelho
    │   ├── App.css           # Estilização do container principal
    │   ├── App.jsx           # Componente raiz que renderiza a calculadora
    │   ├── index.css         # Estilos globais e reset CSS
    │   └── main.jsx          # Ponto de entrada do React no Vite
    ├── .gitignore            # Arquivos ignorados pelo Git
    ├── eslint.config.js      # Configurações de padronização do código (ESLint)
    ├── index.html            # HTML principal da aplicação
    ├── package-lock.json     # Mapeamento exato das dependências
    ├── package.json          # Dependências e scripts do projeto
    ├── README.md             # Documentação do projeto
    └── vite.config.js        # Configuração do bundler Vite
