const filmsSection = document.getElementById('films')

function renderFilms(movie){
    const movieElement = document.createElement('article')
    const containerMovie = document.createElement('div')
    movieElement.classList.add('movie')
    containerMovie.classList.add('divMovie')

    movieElement.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`

    containerMovie.innerHTML = `<h3>${movie.title} (${movie.year})</h3>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Duración:</strong> ${movie.duración}</p>
    <p><strong>Género:</strong> ${movie.genre.join(', ')}</p>
    <p><strong>Rate:</strong> ${movie.rate}</p>
    `

    filmsSection.appendChild(movieElement)
    movieElement.appendChild(containerMovie)

}

module.exports = renderFilms;