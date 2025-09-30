# 🎬 Golden Movie Studio - Sistema de Teste E2E

[![End-to-end tests](https://github.com/Matheus904-12/gms-test/actions/workflows/test.yml/badge.svg)](https://github.com/Matheus904-12/gms-test/actions/workflows/test.yml)

Um projeto completo de automação de testes E2E usando **Cypress** para uma aplicação web de cinema com integração CI/CD via **GitHub Actions**.

## 📋 Sobre o Projeto

O **Golden Movie Studio** é uma plataforma web que permite aos usuários:
- 🔍 **Buscar filmes** através da API OMDB
- 📝 **Cadastrar usuários** com validação completa
- 🎭 **Ver recomendações** de filmes populares
- 📱 **Interface responsiva** com design moderno

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com tema escuro/dourado
- **JavaScript ES6+** - Funcionalidades dinâmicas
- **API OMDB** - Dados de filmes em tempo real

### Testes & Automação
- **Cypress 15.3.0** - Framework de testes E2E
- **GitHub Actions** - CI/CD Pipeline
- **http-server** - Servidor estático para desenvolvimento
- **wait-on** - Sincronização de processos

## 📁 Estrutura do Projeto

```
gms-test/
├── 📁 .github/workflows/
│   └── test.yml                 # GitHub Actions CI/CD
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── spec.cy.js          # Testes E2E principais
│   ├── 📁 screenshots/         # Screenshots automáticos
│   ├── 📁 videos/              # Vídeos dos testes
│   └── 📁 support/             # Arquivos de suporte
├── 📁 public/                  # Aplicação web
│   ├── index.html              # Página principal
│   ├── script.js               # JavaScript principal
│   ├── styles.css              # Estilos CSS
│   └── 📁 img/
│       └── logo.svg            # Logo da aplicação
├── cypress.config.js           # Configuração do Cypress
├── package.json               # Dependências e scripts
└── README.md                  # Este arquivo
```

## 🧪 Cenários de Teste Automatizados

### 1. 📝 US-012: Cadastro de Usuário
- ✅ **Cadastro com sucesso** - Email único com timestamp
- ✅ **Validação de email duplicado** - Tratamento de erros
- 📸 Screenshots: `cadastro-formulario-preenchido.png`, `cadastro-sucesso.png`, `cadastro-email-duplicado.png`

### 2. 🎭 US-015: Recomendações de Filmes
- ✅ **Carregamento dinâmico** - 5 filmes via API OMDB
- ✅ **Interação com elementos** - Cliques nas imagens
- 📸 Screenshot: `recomendacoes-carregadas.png`

### 3. 🔍 US-0001: Busca de Filme
- ✅ **Busca com sucesso** - Resultados da API OMDB
- ✅ **Filme não encontrado** - Tratamento de erro
- ✅ **Validação de campo vazio** - Alerta obrigatório
- 📸 Screenshots: `busca-filme-matrix-resultados.png`, `busca-filme-nao-encontrado.png`

## 🏃‍♂️ Como Executar

### Pré-requisitos
- **Node.js 20+**
- **npm**

### Instalação
```bash
# Clonar o repositório
git clone https://github.com/Matheus904-12/gms-test.git
cd gms-test

# Instalar dependências
npm install
```

### Executar Aplicação
```bash
# Iniciar servidor web na porta 8080
npm start
```

### Executar Testes
```bash
# Testes em modo headless
npm test

# Ou diretamente com Cypress
npx cypress run

# Modo interativo (desenvolvimento)
npx cypress open
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
O pipeline automatizado executa:

1. **🔧 Setup** - Node.js 20 com cache npm
2. **📦 Instalação** - `npm ci` para dependências
3. **🚀 Servidor** - Inicia `http-server` em background
4. **⏳ Aguardar** - `wait-on` até servidor responder
5. **🧪 Testes** - Executa todos os testes Cypress
6. **📸 Artifacts** - Upload de screenshots e vídeos

### Triggers
- ✅ **Push** para qualquer branch
- ✅ **Pull Request** para main
- ✅ **Manual** via GitHub UI

## 📊 Relatórios de Teste

### Evidências Automáticas
- **📸 Screenshots** - Capturados em pontos chave
- **🎥 Vídeos** - Gravação completa da execução
- **📋 Logs** - Detalhados para debugging
- **🏆 Badges** - Status dos testes no README

### Localização dos Artifacts
- `cypress/screenshots/` - Screenshots por teste
- `cypress/videos/` - Vídeos de execução
- GitHub Actions Artifacts - Download automático

## 🌟 Funcionalidades Destacadas

### ⚡ Performance
- **Carregamento assíncrono** de recomendações
- **Timeouts inteligentes** (10s para APIs)
- **Esperas dinâmicas** para elementos

### 🛡️ Robustez
- **Seletores específicos** resistentes a mudanças
- **Tratamento de erros** em todas as APIs
- **Validações completas** de formulários

### 📱 Responsividade
- **Interface adaptável** para diferentes telas
- **Design moderno** com tema Golden Movie
- **UX otimizada** para testes automatizados

## 🐛 Troubleshooting

### Problemas Comuns

**❌ Erro: `cy.visit() failed trying to load http://127.0.0.1:8080`**
```bash
# Solução: Verificar se o servidor está rodando
npm start
# Em outro terminal:
npx cypress run
```

**❌ Timeout nos testes de recomendações**
```bash
# Verificar conectividade com API OMDB
curl "https://www.omdbapi.com/?t=Matrix&apikey=f7f22d30"
```

**❌ Screenshots não gerados**
```bash
# Verificar configuração no cypress.config.js
screenshotOnRunFailure: true
screenshotsFolder: 'cypress/screenshots'
```

## 📈 Métricas de Qualidade

- ✅ **100% dos testes** passando
- ✅ **6 cenários** cobertos
- ✅ **23s** tempo médio de execução
- ✅ **0 flaky tests** - Estabilidade garantida

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adicionar nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autor

**Matheus Lucindo**
- GitHub: [@Matheus904-12](https://github.com/Matheus904-12)
- Email: matheuslucindo904@gmail.com

---

⭐ **Se este projeto foi útil, considere dar uma estrela!** ⭐