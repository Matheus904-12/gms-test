# 🎬 Golden Movie Studio - Sistema de Busca e Recomendação de Filmes

![CI/CD Status](https://github.com/Matheus904-12/gms-test/actions/workflows/test.yml/badge.svg)

## 📋 Sobre o Projeto

**Golden Movie Studio** é uma aplicação web moderna para descoberta de filmes, oferecendo recomendações personalizadas e busca avançada de títulos cinematográficos. O projeto integra a API OMDB para fornecer informações completas sobre filmes e implementa um sistema de cadastro de usuários.

### ✨ Principais Funcionalidades

- **🎯 Recomendações do Dia**: Exibição automática de 5 filmes recomendados (The Matrix, Inception, Interstellar, The Godfather, Jurassic Park)
- **🔍 Busca de Filmes**: Sistema de busca integrado com a API OMDB
- **👤 Cadastro de Usuários**: Sistema de registro com validação de email
- **📱 Interface Responsiva**: Design moderno e intuitivo com tema escuro
- **🎨 Identidade Visual**: Paleta de cores dourada (Golden) com fundo escuro

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização com design responsivo
- **JavaScript (Vanilla)**: Lógica de negócio e integração com APIs

### APIs Externas
- **OMDB API** (`f7f22d30`): API de filmes para busca e recomendações

### Testes e Automação
- **Cypress 15.3.0**: Framework de testes E2E
- **http-server 14.1.1**: Servidor HTTP local para desenvolvimento
- **wait-on 7.2.0**: Utilitário para aguardar disponibilidade do servidor

### CI/CD
- **GitHub Actions**: Pipeline automatizado de testes
- **Ubuntu 24.04**: Ambiente de execução
- **Node.js 20**: Runtime JavaScript

## 📁 Estrutura do Projeto

```
gms-test/
├── .github/
│   └── workflows/
│       └── test.yml              # Pipeline CI/CD do GitHub Actions
├── cypress/
│   ├── e2e/
│   │   └── spec.cy.js            # Testes E2E automatizados
│   ├── fixtures/                  # Dados de teste
│   ├── screenshots/               # Screenshots dos testes
│   └── videos/                    # Gravações dos testes
├── public/
│   ├── img/
│   │   ├── logo.svg              # Logo do Golden Movie Studio
│   │   └── popcorn.gif           # Animação de pipoca
│   ├── index.html                # Página principal
│   ├── script.js                 # Lógica JavaScript
│   ├── styles.css                # Estilos CSS
│   └── polices.html              # Política de privacidade
├── cypress.config.js             # Configuração do Cypress
├── package.json                  # Dependências e scripts
└── README.md                     # Este arquivo
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- **Node.js** versão 20 ou superior
- **npm** (incluído com Node.js)

### Passos para Instalação

1. **Clone o repositório**:
```bash
git clone https://github.com/Matheus904-12/gms-test.git
cd gms-test
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Inicie o servidor local**:
```bash
npm start
```

4. **Acesse a aplicação**:
Abra o navegador em: `http://127.0.0.1:8080/`

## 🧪 Executando os Testes

### Testes E2E com Cypress

**Executar testes em modo headless** (sem interface gráfica):
```bash
npm test
```

**Executar testes com interface gráfica**:
```bash
npx cypress open
```

### Suítes de Teste Implementadas

#### 1. **US-012: Cadastro de Usuário**
- ✅ Validação de cadastro com campos obrigatórios
- ✅ Geração de email único com timestamp
- ✅ Verificação de email já cadastrado
- ✅ Captura de screenshots dos estados

#### 2. **US-015: Recomendações de Filmes**
- ✅ Carregamento dinâmico de 5 filmes recomendados
- ✅ Verificação de elementos na tela
- ✅ Interação com imagens de filmes

#### 3. **US-0001: Busca de Filmes**
- ✅ Busca por nome de filme (ex: "Matrix")
- ✅ Validação de campo vazio
- ✅ Tratamento de filme não encontrado
- ✅ Funcionalidade de limpar busca

## ⚙️ Pipeline CI/CD - GitHub Actions

### 📊 Workflow: End-to-end Tests

O projeto implementa um pipeline completo de CI/CD que é executado automaticamente a cada push no repositório.

#### Estrutura do Job `cypress-run`

```yaml
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-24.04
```

#### Etapas do Pipeline

1. **📥 Checkout do Código** (`actions/checkout@v4`)
   - Clona o repositório no runner do GitHub Actions
   
2. **🟢 Setup do Node.js** (`actions/setup-node@v4`)
   - Instala Node.js versão 20
   - Utiliza cache do npm para acelerar builds

3. **📦 Instalação de Dependências**
   ```bash
   npm ci
   ```
   - Instala todas as dependências do `package-lock.json`
   - Garante instalação determinística

4. **🚀 Inicialização do Servidor**
   ```bash
   npm start &
   ```
   - Inicia o `http-server` em background na porta 8080

5. **⏳ Aguarda Servidor Estar Pronto**
   ```bash
   npx wait-on http://127.0.0.1:8080 --timeout 60000
   ```
   - Aguarda até 60 segundos pelo servidor responder
   - Previne falhas nos testes por servidor não estar pronto

6. **🧪 Execução dos Testes Cypress**
   ```bash
   npx cypress run
   ```
   - Executa todos os testes E2E em modo headless
   - Gera screenshots e vídeos automaticamente

7. **📸 Upload de Screenshots** (em caso de falha)
   - Artifact: `cypress-screenshots`
   - Executado apenas se houver falhas (`if: failure()`)

8. **🎥 Upload de Vídeos** (sempre)
   - Artifact: `cypress-videos`
   - Executado independente do resultado (`if: always()`)

### 🔄 Fluxo de Execução

```
Push → GitHub Actions Trigger
  ↓
Clone Repositório
  ↓
Setup Node.js 20 + Cache NPM
  ↓
npm ci (Instala dependências)
  ↓
npm start (Inicia servidor em background)
  ↓
wait-on (Aguarda servidor estar pronto)
  ↓
cypress run (Executa testes E2E)
  ↓
Gera Reports, Screenshots e Vídeos
  ↓
Upload de Artefatos para GitHub
  ↓
✅ Build Completo / ❌ Build Falhou
```

### 📈 Monitoramento e Artefatos

Os seguintes artefatos são gerados e disponibilizados:

- **Screenshots**: Capturas de tela dos estados dos testes (sucesso e falha)
- **Vídeos**: Gravação completa da execução dos testes
- **Logs**: Console logs de cada etapa do pipeline

Para acessar os artefatos:
1. Vá para a aba **Actions** no GitHub
2. Selecione o workflow executado
3. Baixe os artefatos na seção **Artifacts**

## 🌐 API e Integrações

### OMDB API

**Endpoint Base**: `https://www.omdbapi.com/`
**API Key**: `f7f22d30`

#### Funcionalidades Implementadas:

1. **Busca por Título**:
```javascript
`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
```

2. **Recomendações**:
- Lista pré-definida: The Matrix, Inception, Interstellar, The Godfather, Jurassic Park
- Busca detalhes de cada filme via API

### Detecção de Ambiente

O sistema detecta automaticamente o ambiente de execução:

```javascript
const isProduction = window.location.hostname !== 'localhost' 
                  && window.location.hostname !== '127.0.0.1';
const API_BASE_URL = isProduction 
    ? 'https://wyni6895be.execute-api.us-east-1.amazonaws.com' 
    : 'http://127.0.0.1:8080';
```

## 📝 Scripts NPM Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `start` | `npx http-server public -p 8080 -c-1` | Inicia servidor local sem cache |
| `test` | `npx cypress run --browser chrome` | Executa testes E2E no Chrome |

## 🎨 Funcionalidades da Interface

### Seções Principais

1. **Header**: Logo do Golden Movie Studio
2. **Introdução**: Slogan e descrição do serviço
3. **Recomendações do Dia**: Grid com 5 filmes recomendados
4. **Busca de Filmes**: Campo de busca com botões de ação
5. **Cadastro de Usuário**: Formulário completo com validações
6. **Footer**: Informações de copyright e links

### Validações Implementadas

- ✅ Email: Validação de formato com regex `/\S+@\S+\.\S+/`
- ✅ Campos obrigatórios: Nome, Sobrenome, Email, Senha
- ✅ Email duplicado: Verifica se email já está cadastrado
- ✅ Busca vazia: Alert para campo de busca vazio

## 🔒 Segurança e Privacidade

- Política de privacidade disponível em `/polices.html`
- Validação de email no lado do cliente
- Simulação de verificação de email duplicado

## 🐛 Troubleshooting

### Servidor não inicia
```bash
# Verifica se a porta 8080 está em uso
lsof -i :8080
# Mata o processo se necessário
kill -9 <PID>
```

### Testes Cypress falham
```bash
# Limpa cache do Cypress
npx cypress cache clear
# Reinstala Cypress
npm install cypress --force
```

### Problemas com dependências
```bash
# Remove node_modules e reinstala
rm -rf node_modules package-lock.json
npm install
```

## 📄 Licença

ISC License

## 👥 Autor

Desenvolvido por Matheus Lucindo

## 🔗 Links Úteis

- [Cypress Documentation](https://docs.cypress.io/)
- [OMDB API](https://www.omdbapi.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [http-server](https://www.npmjs.com/package/http-server)

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!
