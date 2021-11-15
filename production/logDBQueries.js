const axios = require('axios');


const getIndex = (request, response) => {
    axios.get('http://localhost:8180/')
    .then(res => {
        response.status(200).send(res.data);
    })
    .catch(err => {
        response.status(500).json({"error": err.message})
    });
}


const getLogs = (request, response) => {
    axios.get('http://localhost:8180/logs')
    .then(res => {
        response.status(200).send(res.data);
    })
    .catch(err => {
        response.status(500).json({"error": err.message})
    });
}

module.exports = {
    getIndex,
    getLogs
}