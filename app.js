const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');



const direccion = argv.direccion;


const getInfo = async(direccion) => {


    try {

        const coords = await getLugarLatLng(direccion);

        const temp = await getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}.`;

    } catch (error) {

        return `No se pudo determinar el clima de ${direccion}`;

    }


}


getInfo(direccion).then(console.log).catch(console.log);