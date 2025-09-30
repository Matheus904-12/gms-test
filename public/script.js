const API_KEY = 'f7f22d30'; 

// Detecta automaticamente o ambiente
const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const API_BASE_URL = isProduction 
    ? 'https://wyni6895be.execute-api.us-east-1.amazonaws.com' 
    : 'http://127.0.0.1:8080';
const API_URL = `${API_BASE_URL}/cadastro`;

document.addEventListener('DOMContentLoaded', fetchRecommendations);
document.getElementById('search-button').addEventListener('click', searchMovies);
document.getElementById('clear-button').addEventListener('click', clearSearchResults);
document.getElementById('signup-button').addEventListener('click', registerUser);

function fetchRecommendations() {
    const recommendations = ['The Matrix', 'Inception', 'Interstellar', 'The Godfather', 'Jurassic Park'];
    const recommendationsElement = document.getElementById('recommendations');

    recommendations.forEach(title => {
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    const movieElement = document.createElement('div');
                    movieElement.innerHTML = `<img src="${data.Poster}" alt="${data.Title}">
                                              <p>${data.Title}</p>`;
                    recommendationsElement.appendChild(movieElement);
                }
            })
            .catch(error => console.error('Erro ao buscar recomendações:', error));
    });
}

function searchMovies() {
    const searchTerm = document.getElementById('search-input').value;
    if (!searchTerm) {
        alert('Por favor, digite o nome de um filme');
        return;
    }

    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResults(data))
        .catch(error => console.error('Erro ao buscar filmes:', error));
}

function displaySearchResults(data) {
    const resultsSection = document.getElementById('results-section');

    if (data.Response === 'False') {
        resultsSection.innerHTML = '<p>Filme não encontrado.</p>';
        return;
    }

    const resultsMarkup = data.Search.map(movie => `<div>
                                                        <h3>${movie.Title}</h3>
                                                        <p>${movie.Year}</p>
                                                        <img src="${movie.Poster}" alt="Poster">
                                                    </div>`).join('');
    resultsSection.innerHTML = resultsMarkup;
}

function clearSearchResults() {
    document.getElementById('results-section').innerHTML = '';
    document.getElementById('search-input').value = '';
}

function registerUser(event) {
    event.preventDefault();

    const formData = {
        nome: document.getElementById('signup-firstname').value,
        sobrenome: document.getElementById('signup-lastname').value,
        email: document.getElementById('signup-email').value,
        telefone: document.getElementById('signup-phone').value,
        senha: document.getElementById('signup-password').value
    };

    const responseDiv = document.getElementById('signup-response');
    
    // Simula resposta da API para testes
    if (formData.email === 'matheuslucindo904@gmail.com') {
        responseDiv.textContent = 'Este email já está cadastrado.';
    } else if (formData.nome && formData.sobrenome && formData.email && formData.senha) {
        responseDiv.textContent = 'Cadastro realizado com sucesso!';
    } else {
        responseDiv.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}