const axios = require('axios')

const renderFilms = require('./renderFilms')

// * Promesas...
const getFilms = () => {
    axios.get('https://students-api.up.railway.app/movies')
    .then(({ data })=> data.forEach(renderFilms))
    .catch((error)=> console.log(error.message))

}




module.exports = getFilms;