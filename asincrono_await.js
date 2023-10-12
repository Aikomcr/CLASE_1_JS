const axios = require('axios');
const url = 'https://randomuser.me/api/';

const personajes = async () => {
    const response = await axios.get(url);
    let arreglo = response.data.results;
    arreglo.forEach((results) => {
        console.log(results.name);
        console.log('========');
    });
};

personajes();
