// Función para crear una tarjeta de película
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const titleElement = document.createElement('h2');
    titleElement.textContent = movie.title;

    const imageElement = document.createElement('img');
    imageElement.src = movie.poster;
    imageElement.alt = movie.title + ' Poster';

    const rateElement = document.createElement('p');
    rateElement.textContent = `Rate: ${movie.rate}`;

    movieCard.appendChild(imageElement);
    movieCard.appendChild(titleElement);
    movieCard.appendChild(rateElement);

    return movieCard;
}

// Función para renderizar las tarjetas de películas
function renderMovieCards() {
    const movieCardsContainer = document.getElementById('movieCards');

    tempData.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieCardsContainer.appendChild(movieCard);
    });
}

// Llamar a la función para renderizar las tarjetas de películas
renderMovieCards();