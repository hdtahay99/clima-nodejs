const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lng}`, {
        headers: {
            'x-rapidapi-key': '331c8f663cmsh37f8ff82c6d8598p14b603jsn117ce74a54ce'
        }
    });

    return resp.data.main.temp;

}


module.exports = {
    getClima
}