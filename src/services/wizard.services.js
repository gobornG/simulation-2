const axios = require('axios');
const baseURL = '/api/wizard';

function createProperty(property) {
    return axios
        .post(`${baseURL}/create_property`, property)
        .then(res => res)
        .catch(err => {
            console.error('Error connecting to server.');
            res.send(err);
        });
}

export {
    createProperty,
};
