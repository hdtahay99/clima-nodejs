const axios = require('axios');



const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: {
            'x-rapidapi-key': '331c8f663cmsh37f8ff82c6d8598p14b603jsn117ce74a54ce'
        }
    });

    const resp = await instance.get();

    if (resp.data.message) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;

    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}